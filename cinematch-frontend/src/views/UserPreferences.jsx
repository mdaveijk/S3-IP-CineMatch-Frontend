export default function UserPreferences() {
  return (
    <>
      <div className="container user-preferences">
        <div className="row">
          <div className="col s12"><h3> Let us know what you like </h3></div>
          <div className="col s6">
            <div className="row">
              <form className="col s12" action="POST">
                <div className="row">
                  <div className="input-field col s6">
                    <input id="first_name" type="text" className="validate" />
                    <label className="active" for="first_name">Movie choice</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s6">
                    <input id="last_name" type="text" className="validate" />
                    <label for="last_name">Genre choice</label>
                  </div>
                </div>
                <div className="row">
                  <div className="input-field col s6">
                    <input id="last_name" type="text" className="validate" />
                    <label for="last_name">Location</label>
                  </div>
                </div>
                <div>
                  <button class="btn waves-effect waves-light" type="submit" name="action">Submit
                    <i class="material-icons right">send</i>
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col s6">movie column</div>
        </div>
      </div>
    </>
  );
}
