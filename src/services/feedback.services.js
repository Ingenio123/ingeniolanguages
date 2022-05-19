import URI from "../components/Urls";
const Feedback = {
  deleteFeedback: async (idFeedback) => {
    let { token } = JSON.parse(window.localStorage.getItem("user"));
    let response = await fetch(
      `${URI.url}/feedback/teacher/summary/delete/${idFeedback}`,
      {
        method: "DELETE",
        headers: {
          "content-type": "Application/json",
          Authorization: `Berarer ${token}`,
        },
      }
    );
    let data = await response.json();
    return data;
  },
};

export default Feedback;
