export default function Pruebas() {
  const EndPoint = "http://localhost:3000/api";
  const handleClick = async () => {
    const value = {
      languages: "French",
      numClass: 4,
      studentId: "6125df98dd132402108abc1d",
      expires: new Date(),
      email: "jlzyjose@gmail.com",
      // studentId: 1,
    };
    const res = await fetch(`${EndPoint}/student/add`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(value),
    });
    const data = await res.json();
    console.log(data);
  };
  return (
    <div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <input type="text" />
      <button onClick={handleClick}>Send prueba</button>
    </div>
  );
}
