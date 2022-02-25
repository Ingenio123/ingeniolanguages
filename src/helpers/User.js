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
  // console.log(resp);
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
