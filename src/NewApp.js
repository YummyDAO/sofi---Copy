import { Routes, Route } from "react-router-dom"
import Bond from "./Bond"
import Referral from "./referral"
import Stake from "./stake"

function Appnew() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={ <Bond/> } />
        <Route path="/stake" element={ <Stake/> } />
        <Route path="/referral" element={ <Referral/> } />
      </Routes>
    </div>
  )
}

export default Appnew