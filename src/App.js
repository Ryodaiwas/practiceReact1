import Article from "./components/Article";
import TextInput from "./components/TextInput";
import Counter from "./components/Counter";
import ToggleButton from "./components/ToggleButton";
import { useEffect, useState } from "react";

function App() {
  const [name, setName] = useState('')
  const [id, setId] = useState('Ryodaiwas')
  const ids = ['Ryodaiwas', 'gaearon', 'aws', 'google', 'facebook']
  const getRandomId = () => {
    const _id = ids[Math.floor(Math.random() * ids.length)]
    setId(_id)
  }
  useEffect(() => {
    fetch(`https://api.github.com/users/${id}`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setName(data.name)
      })
      .catch(error => {
        console.error(error)
      })
  }, [id])
  return (
    <div>
      <Article
        title={'タイトル:React練習'}
        content={'コンテンツ:コンポーネント学習'}
      />
      <h3>useState練習</h3>
      <TextInput />
      <Counter />
      <ToggleButton />
      <h3>API練習</h3>
      <p>{id}の、Github上の名前は{name}です。</p>
      <button onClick={getRandomId}>IDを変更</button>
    </div>
  );
}

export default App;
