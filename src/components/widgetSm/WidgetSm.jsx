import { Visibility } from "@material-ui/icons"
import "./widgetsm.css"

export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <h3 className="widgetSmTitle">New Subscribers</h3>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img src="https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" className="widgetSmImg" />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">Jose Perreira</span>
              <span className="widgetSmUserTitle">Joined 13th December</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
        </li>
        <li className="widgetSmListItem">
          <img src="https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" className="widgetSmImg" />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">Jose Perreira</span>
              <span className="widgetSmUserTitle">Joined 13th December</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
        </li>
        <li className="widgetSmListItem">
          <img src="https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" className="widgetSmImg" />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">Jose Perreira</span>
              <span className="widgetSmUserTitle">Joined 13th December</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
        </li>
        <li className="widgetSmListItem">
          <img src="https://images.pexels.com/photos/1933873/pexels-photo-1933873.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="" className="widgetSmImg" />
            <div className="widgetSmUser">
              <span className="widgetSmUsername">Jose Perreira</span>
              <span className="widgetSmUserTitle">Joined 13th December</span>
            </div>
            <button className="widgetSmButton">
              <Visibility className="widgetSmIcon" />
              Display
            </button>
        </li>
      </ul>
    </div>
  )
}
