export default obj => Object.keys(obj).filter(key => obj[key] && key !== 'undefined').join(' ')
