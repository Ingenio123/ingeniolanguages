import Url from "../components/Urls";

export const GetAllStudents = async () => {
  const token = JSON.parse(window.localStorage.getItem("user")).token;
  const res = await fetch(`${Url.url}/data/getAllStudents`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  const data = await res.json();
  return data;
};

export const UpdateInformation = async ({ valores }) => {
  console.log(JSON.stringify(valores));

  const user = JSON.parse(window.localStorage.getItem("user"));
  try {
    const res = await fetch(`${Url.url}/data/updateinformation`, {
      method: "POST",
      body: JSON.stringify(valores),
      headers: {
        Authorization: `Bearer ${user.token}`,
        "Content-type": "application/json",
      },
    });
    if (res.status === 200) {
      return {
        message: "Information updated successfully",
        error: false,
      };
    }
    return {
      error: true,
      message: "Error text",
    };
  } catch (error) {
    throw error;
  }
};

export const AddScoreExam = async (body) => {
  try {
    console.log(body);
    const user = JSON.parse(window.localStorage.getItem("user"));

    let datos = {
      idStudent: body.idStudent,
      level: [
        {
          idiom: body.idiom,
          kids: body.kids,
          level: [
            {
              name_level: body.name_level,
              subLevel: [
                {
                  name_sublevel: body.name_sublevel,
                  score: parseInt(body.score),
                },
              ],
            },
          ],
        },
      ],
    };

    const res = await fetch(`${Url.url}/v1/addScoreExam`, {
      method: "POST",
      body: JSON.stringify(datos),
      headers: {
        Authorization: `Bearer ${user.token}`,
        "Content-type": "application/json",
      },
    });
    // console.log(res);
    if (!res.ok) return false;
    const data = await res.json();
    console.log(data);
    return {
      success: data.success,
      data: data.data,
    };
  } catch (error) {
    throw error;
  }
};

export const GetScoreExamForIdStudent = async (idStudent) => {
  const user = JSON.parse(window.localStorage.getItem("user"));
  const resp = await fetch(`${Url.url}/v1/getScore/${idStudent}`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${user.token}`,
      "Content-type": "application/json",
    },
  });
  console.log(resp);
  if (!resp.ok) return { data: null };
  const data = await resp.json();
  return data;
};

export const UpdateScoreExamForIdStudent = async (body) => {
  const user = JSON.parse(window.localStorage.getItem("user"));
  let data = {
    idStudent: body.idStudent,
    level: [
      {
        idiom: body.idiom,
        kids: body.kids,
        level: [
          {
            name_level: body.name_level,
            subLevel: [
              {
                name_sublevel: body.name_sublevel,
                score: parseInt(body.score),
                Date: body.dateCalendar,
              },
            ],
          },
        ],
      },
    ],
  };
  const res = await fetch(`${Url.url}/v1/updateScoreExam`, {
    method: "PUT",
    body: JSON.stringify(data),
    headers: {
      Authorization: `Bearer ${user.token}`,
      "Content-type": "application/json",
    },
  });
  console.log(res);
  if (!res.ok) return false;
  const dat = await res.json();

  return {
    success: dat.success,
  };
};

export const UpdatePasswordSend = async (body) => {
  const user = JSON.parse(window.localStorage.getItem("user"));
  const res = await fetch(`${Url.url}/data/updateNewPassword`, {
    body: JSON.stringify(body),
    method: "PUT",
    headers: {
      Authorization: `Bearer ${user.token}`,
      "Content-type": "application/json",
    },
  });
  if (res.status === 498) {
    window.location.href = `${Url.urlClient}/expiredToken`;
    return;
  }
  const data = await res.json();
  return {
    success: data.success,
  };
};

export const SendForgotPassword = async (body) => {
  const res = await fetch(`${Url.url}/data/updatePassword`, {
    method: "PUT",
    body: JSON.stringify(body),
    headers: {
      "Content-type": "application/json",
    },
  });
  const data = await res.json();
  return {
    success: data.success,
  };
};

export const SendDataforEmail = async (
  data,
  contryNationality,
  phoneNumber,
  contryLive
) => {
  const { url } = Url;
  // const valores = { data, contryLive, phoneNumber, contryNationality };
  data.contryLive = contryLive;
  data.phoneNumber = phoneNumber;
  data.contryNationality = contryNationality;
  const res = await fetch(`${url}/addDataDemo`, {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(data),
  });
  console.log(res);

  if (res.status > 200) {
    return false;
  }

  return true;
};
