import { useState } from 'react';
import Pagination from 'react-bootstrap/Pagination';

function PaginationTask() {
    const [active, setActive] = useState(1)
    let prevBtn = true
    let nextBtn = true
    let items = [];
for (let number = 1; number <= 5; number++) {
  items.push(
    <Pagination.Item onClick={(e)=>setActive(number)} key={number} active={active===number}>
      {number}
    </Pagination.Item>,
  );
}

if(active === 1){
    prevBtn = false
}
else{
    prevBtn = true
}
if(active === items.length){
    nextBtn = false
}
else{
    nextBtn = true
}
  return (
    <div style={{margin: "auto", width: "500px" }}> 
    <Pagination>
    {
    prevBtn ? <Pagination.Prev/> : null
    }
      {items}
    {
    nextBtn ? <Pagination.Next/> : null
    } 
    </Pagination>
    </div>
    
  );
}

export default PaginationTask;