import { View } from '../components/View';
import { useState } from 'react';
import { useEffect } from 'react';
import { dataService } from "../services/dataService";
import { motion, AnimatePresence } from "framer-motion"
import '../App.css'

function App() {

  const [data, setData] = useState([]);

  useEffect(() => {
    setData(dataService);
  }, [])

  return (
    <div className="App">
      {data.map(element => {
        if (element.subtext) return <View key={element.id} name={element.title} subtext={true} cssPointer={element.cssPointer} />
        return <div className="border">
          <a className='aa' href="/references">
            <motion.div
              className='motion'
              initial={{ opacity: 0, }}
              whileHover={{ opacity: 100, transition: { ease: "easeInOut", duration: 8 }, }}> <View key={element.id} name={element.title} subtext={false} cssPointer={element.cssPointer} />
            </motion.div>
          </a>
        </div>
      })}
    </div>
  );
}

export default App;
