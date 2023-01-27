import React from 'react'
import { useState } from 'react'

function Todo() {
 const [activity, setActivity] = useState("");
 const [listData,setlistData] = useState([]);
 function addActivity(){
      setlistData((listData)=>{
        const updatedList=[...listData,activity]
        console.log(updatedList)
        setActivity('');
        return updatedList
      })
    }
    function removeActivity(idx){
const updatedList =listData.filter((elem,id)=>{
  return idx!=id;

})
setlistData(updatedList);
    }
    function removeall(){
      setlistData([])
    }
  return (
   <>
   <div className='container'>
<div className='header'>TODO LIST</div>
<input type='text'  placeholder='add activity' value={activity} onChange={(e)=>
setActivity(e.target.value)}/>
<button onClick={addActivity}>Add</button>
<p className='List-heading'>Here is your List:{")"}</p>
{listData!=[] &&listData.map((data,idx)=>{
  return(
    <>
    <p key={idx}>
      <div className='listData'>
        {data}
      </div>
<div className='btn-position'>

  <button onClick={()=>removeActivity(idx)}>Remove(-)</button>
</div>
    </p>
    </>
  )
})}
{listData.length>=1 &&
<button onClick={removeall}>Remove All</button>}
   </div>
   </>
  );
};

export default Todo;