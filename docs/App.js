import { useState,React } from 'react';
import './App.css';
import Logsloading from './logs-loading';
import { initLoading } from './hoc/initialize';

function App({loadData}) {
  const [name, setName] = useState('名無し');
  const [text, setText] = useState('');
  const [log, setLog] = useState(loadData);

  const submitForm = (props) => {
    props.preventDefault();
    log.push({name:name,text:text});
    setLog(log);
    saveStorage();
 }

 const saveStorage = () => {
   var jsonLog = JSON.stringify(log);
   localStorage.setItem('log',jsonLog);
 }
  
  return (
    <section>
      <h4 id ="title">React-BBS</h4>
      <form onSubmit={submitForm}>
        <div>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} /><br/>
          <input type="text" value={text} onChange={(e) => setText(e.target.value)} /><br/>
          <button>投稿</button>
        </div>
      </form>
      <h4 id ="title">ログ</h4>
      <Logsloading log={log}/>
    </section>
  );
}

export default initLoading(App);