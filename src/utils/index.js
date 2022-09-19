export function timeAgo(time) {
  const between = Date.now() / 1000 - Number(time);
  if (between < 3600) {
    return pluralize(~~(between / 60), ' minute');
  } else if (between < 60 * 60 * 24) {
    return pluralize(~~(between / 3600), ' hour');
  } else {
    return pluralize(~~(between / 86400), ' day');
  }
}

function pluralize(time, label) {
  if (time === 0) return 'Right now';

  let response;
  if (time === 1) {
    response = time + label;
  }
  response = time + label + 's';

  return `${response} ago`;
}
