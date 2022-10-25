import {Pagination} from "react-bootstrap";
import {useState} from "react";

   function pagination() {
    let [active,setActive] = useState(1)
    let items = [];
    for (let number = 1; number <= 10; number++) {//重写分页功能
        items.push(
            <Pagination.Item key={number}  onClick={() => {setActive(active = number)}} active={active === number}>
                {number}
            </Pagination.Item>,
        );
    }
    let prevDisabled = false
    function prev() {//封装向前方法
        if (active > 1){
            setActive(active = active - 1)
            console.log(1,active)
        }
    }
    function next() {
        if (active < 10){
            setActive(active = active + 1)
        }
    }
    const paginationBasic = (
        <div style={{margin:"0 auto"}}>
            <Pagination>
                <Pagination.Prev onClick={prev}/>
                {items}
                <Pagination.Next onClick={next} />
            </Pagination >
            <br />
        </div>
    );
}
export default {pagination}