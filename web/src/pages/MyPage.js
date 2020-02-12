import React, {useState} from 'react';
import HeaderContainer from '../containers/common/HeaderContainer';
import DatePicker from 'react-datepicker';
const MyPage = () =>{
    const [startDate, setStartDate] = useState(new Date());
    return (
      <>
      <HeaderContainer />
      <DatePicker selected={startDate} onChange={date => setStartDate(date)} />

      </>
    );
};
export default MyPage;