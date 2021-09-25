import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import "./featuredinfo.css";

export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Revenue</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,332</span>
          <span className="featuredMoneyRate">-1% <ArrowDownward className="featuredIcon negative" /></span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">New Subscriptions</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">23,232</span>
          <span className="featuredMoneyRate">+32% <ArrowUpward className="featuredIcon"  /></span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Sales</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$42,802</span>
          <span className="featuredMoneyRate">+56% <ArrowUpward className="featuredIcon" /></span>
        </div>
        <span className="featuredSub">Compared to last month</span>
      </div>
    </div>
  )
}
