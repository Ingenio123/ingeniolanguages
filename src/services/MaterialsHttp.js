import url from "../components/Urls";

export const AddMAterialsTeacher = async (DATA) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const resp = await fetch(`${url.url}/v1/data/add/materials`, {
    method: "POST",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${user.token}`,
    },
    body: JSON.stringify(DATA),
  });
  if (!resp.ok) {
    return {
      error: true,
    };
  }
  const data = await resp.json();

  return {
    error: false,
    data: data,
  };
};

export const GetMareialsName = async () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const resp = await fetch(`${url.url}/teacher/getmaterials`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${user.token}`,
    },
  });
  if (!resp.ok) {
    return {
      error: true,
    };
  }
  const data = await resp.json();
  return {
    error: false,
    data: data.materials,
  };
};

export const GetMaterialByIdStudent = async (idStudentParam) => {
  const user = JSON.parse(localStorage.getItem("user"));
  const resp = await fetch(
    `${url.url}/v1/data/get/materials/${idStudentParam}`,
    {
      method: "GET",
      headers: {
        "Content-type": "application/json",
        Authorization: `Bearer ${user.token}`,
      },
    }
  );
  if (!resp.ok) {
    return {
      error: true,
      data: [],
    };
  }
  const data = await resp.json();
  return {
    error: false,
    data: data,
  };
};

export const GetMaterialForStudent = async () => {
  const user = JSON.parse(localStorage.getItem("user"));
  let resp = await fetch(`${url.url}/v1/data/get/materials`, {
    method: "GET",
    headers: {
      "Content-type": "application/json",
      Authorization: `Bearer ${user.token}`,
    },
  });

  if (!resp.ok) {
    return {
      error: true,
    };
  }

  let data = await resp.json();
  return {
    error: false,
    data: data,
  };
};