import { useState, useEffect } from 'react';
import * as C from './styles';
import { categories } from '../../data/categories';
import { items } from '../../data/items';
import { getCurrentMonth, filterListByMonth } from '../../helpers/dateFilter';
import { TableArea } from '../../components/TableArea';
import { InfoArea } from '../../components/InfoArea';
import { InputArea } from '../../components/InputArea';
import logoIMG from "../../assets/logo.jpg";

const Home = () => {
  const [list, setList] = useState(items);
  const [filteredList, setFilteredList] = useState([]);
  const [currentMonth, setCurrentMonth] = useState(getCurrentMonth());
  const [income, setIncome] = useState(0);
  const [expense, setExpense] = useState(0);

  useEffect(() => {
    setFilteredList(filterListByMonth(list, currentMonth));
  }, [list, currentMonth]);

  useEffect(() => {
    let incomeCount = 0;
    let expenseCount = 0;

    for (let i in filteredList) {
      if (categories[filteredList[i].category].expense) {
        expenseCount += filteredList[i].value;
      } else {
        incomeCount += filteredList[i].value;
      }
    }

    setIncome(incomeCount);
    setExpense(expenseCount);
  }, [filteredList]);

  const handleMonthChange = (newMonth) => {
    setCurrentMonth(newMonth);
  }

  const handleAddItem = (item) => {
    let newList = [...list];
    newList.push(item);
    setList(newList);
  }

  return (
    <C.Container>
      <C.Header>
        <C.Logo src={logoIMG} alt="Out of the red" />
        <div className="container-login-form-btn">
          <button type="submit" className="login-form-btn">
          </button>
        </div>
        <div className="container-login-form-btn">
          <button type="submit" className="login-form-btn">
          </button>
        </div>
        <div className="container-login-form-btn">
          <button type="submit" className="login-form-btn">
          </button>
        </div>
        <div className="container-login-form-btn">
          <button type="submit" className="login-form-btn">
          </button>
        </div>
        <div className="container-login-form-btn">
          <button type="submit" className="login-form-btn">
          </button>
        </div>
      </C.Header>
      <C.Body>



        <InfoArea
          currentMonth={currentMonth}
          onMonthChange={handleMonthChange}
          income={income}
          expense={expense}
        />

        <InputArea onAdd={handleAddItem} />

        <TableArea list={filteredList} />

      </C.Body>
    </C.Container>
  );
}

export default Home;
