const uri = process.env.REACT_APP_URI;

export const get = async () => {
  const response = await fetch(`${uri}/users`);
  const data = await response.json();
  return data;
};

export const post = async (data) => {
  return await fetch(`${uri}/users`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

export const put = async (id, data) => {
  return await fetch(`${uri}/users/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

export const deleteHttp = async (id) => {
  return await fetch(`${uri}/users/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  });
};
