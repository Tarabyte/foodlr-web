/**
 * Calculate node client rectangle
 */
export default node => node.getBoundingClientRect()

export const getNodeDimension = dimension => node => node.getBoundingClientRect()[dimension]
