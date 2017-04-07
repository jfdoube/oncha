
// fork :: ƒ -> ƒ -> ƒ -> ƒ
const fork = left => right => forkable => forkable.fork(left, right);

export default fork;