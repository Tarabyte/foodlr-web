/* eslint no-console:0*/
import React, { PropTypes } from 'react'
import { resolver } from 'react-redux-universal-resolver'
import { connect } from 'react-redux'
import fetch from 'isomorphic-fetch'

const Post = props => (<div>
  {props.post.title} - <pre>{props.post.body}</pre>
  <div>
    <button type="button" onClick={props.prev}>Prev</button>
    <button type="button" onClick={props.next}>Next</button>
  </div>
  <ul>
    {props.comments.map(({ body, id }) => (
      <li key={id}>{body}</li>
    ))}
  </ul>
</div>)

Post.propTypes = {
  prev: PropTypes.func,
  next: PropTypes.func,
  post: PropTypes.shape({
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
  }).isRequired,
  comments: PropTypes.arrayOf(PropTypes.shape({
    body: PropTypes.string.isRequired,
    id: PropTypes.number.isRequired
  })).isRequired

}

const getId = (_, props) => props.params.id

export default resolver({
  post: id => fetch(`http://jsonplaceholder.typicode.com/posts/${id}`)
    .then(res => res.json()),
  comments: id => fetch(`http://jsonplaceholder.typicode.com/posts/${id}/comments`)
    .then(res => res.json())
}, getId, getId)(connect(null, (dispatch, props) => ({
  next: () => console.log('next', props, dispatch),
  prev: () => console.log('prev')
}))(Post))
