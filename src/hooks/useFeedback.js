const hookFeedback = () => {
  /**
   *
   * @param {*} idTeacher
   */
  const verify = (idTeacher) => {
    const user = window.localStorage.getItem("user");
    let { _id } = JSON.parse(user);
    let condicional = _id == idTeacher ? true : false;
    return condicional;
  };
  return {
    verify,
  };
};
export default hookFeedback;
