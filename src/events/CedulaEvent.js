const eventId = 'cedulafield:changed';

function createEvent(data) {
  return new CustomEvent(eventId, { detail: data });
}

function triggerFieldChanged(data) {
  const event = createEvent(data);
  document.dispatchEvent(event);
}

export default {
  createEvent,
  triggerFieldChanged,
};
