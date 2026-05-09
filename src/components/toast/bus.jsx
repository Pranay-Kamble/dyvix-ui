const listeners = [];

const dyvixToast = {
  success: (message) => emit({ message: message, type: 'Success' }),
  error: (message) => emit({ message: message, type: 'Error' }),
  warning: (message) => emit({ message: message, type: 'Warning' }),
  info: (message) => emit({ message: message, type: 'Info' })
};

function emit(toast) {
  listeners.forEach((cb) => cb(toast));
}

export function subscribe(cb) {
  listeners.push(cb);
  return () => listeners.splice(listeners.indexOf(cb), 1);
}

export default dyvixToast;
