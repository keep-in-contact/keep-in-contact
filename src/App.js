import dayjs from "dayjs";
import { useEffect, useMemo, useState } from "react";
import People from "./components/People";

function App() {
  const [peopleList, setPeopleList] = useState([]);

  useEffect(() => {
    const data = require("./mock/people.json");
    setPeopleList(data);
  }, []);

  const upcommingBirthdays = useMemo(() => {
    const birthDays = peopleList.map((people) => {
      const { year, month, day } = people.birth;
      const birthDay = dayjs(new Date(year, month - 1, day));
      return [Number(birthDay.format("MMDD")), birthDay.format(), people.name];
    });
    birthDays.sort((a, b) => a[0] - b[0]);

    const today = Number(dayjs().format("MMDD"));
    return birthDays.filter((birthDay) => birthDay[0] > today);
  }, [peopleList]);

  return (
    <div className="App">
      <h1>사람들</h1>
      {peopleList.map((people) => (
        <People {...people}></People>
      ))}
      <h1>다가오는 생일</h1>
      <ul>
        {upcommingBirthdays.map((data) => {
          const [_, birthDay, name] = data;
          return (
            <li>
              {name} - {dayjs(birthDay).format("M")}월{" "}
              {dayjs(birthDay).format("D")}일
            </li>
          );
        })}
      </ul>
      <pre>{JSON.stringify(upcommingBirthdays, null, 2)}</pre>
    </div>
  );
}

export default App;
