import backgroundimg from "../assets/cinema_homepage_1.jpg";

export default function Home() {
    return (
    <>
    <div className="container">
      <div className="row">
      <div class="col s4">Menu</div>
      <div class="col s4">Content</div>
      <div class="col s4">
        <img src={backgroundimg} />
        </div>
      </div>
    </div> 
    </>
    )
  }