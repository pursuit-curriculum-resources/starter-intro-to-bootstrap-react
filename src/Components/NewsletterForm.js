// <!-- ************************** -->
// <!-- Newsletter Form -->
// <!-- Set class container on div -->
// <!-- ************************** -->
export default function NewsletterForm() {
  return (
    <div className="">
      <h4>Sign up for our newsletter</h4>
      <form>
        {/* <!-- ************************** -->
            <!-- divs for text inputs -->
            <!-- Set class mb-3 for outer div -->
            <!-- Set class mb-3 for inner div div -->
            <!-- ************************** --> */}

        <div className="">
          <div className="">
            {/* <!-- ************************** -->
                <!-- Labels & for Text inputs -->
                <!-- Set class form-label for label -->
                <!-- Set class form-control for input -->
                <!-- ************************** --> */}
            <label htmlFor="name" className="">
              Name
            </label>
            <input type="text" className="" id="name" />
          </div>
          {/* <!-- ************************** -->
              <!-- Labels & for Text inputs -->
              <!-- Set class form-label for label -->
              <!-- Set class form-control for div -->
              <!-- ************************** --> */}
          <label htmlFor="exampleInputEmail1" className="">
            Email address
          </label>
          <input
            type="email"
            className=""
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="">
            No trees will be harmed in delivering our newsletters
          </div>
        </div>

        {/* <!-- ************************** -->
            <!-- Checkbox 1 -->
            <!-- Set classes mb-3 form-check on div -->
            <!-- Set class form-check-input on input -->
            <!-- Set class form-check-label on label -->
            <!-- ************************** --> */}

        <div className="">
          <input type="checkbox" className="" id="exampleCheck1" />
          <label className="" htmlFor="exampleCheck1">
            Send me promo codes daily!
          </label>
        </div>
        {/*     
            <!-- ************************** -->
            <!-- Select/Options/dropdown menu -->
            <!-- Set class form-select on select tag-->
            <!-- ************************** --> */}

        <p>Select frequency of newsletters</p>
        <select className="" aria-label="Default weekly">
          <option defaultValue>Weekly</option>
          <option value="1">Daily</option>
          <option value="2">Hourly</option>
          <option value="3">Monthly</option>
          <option value="3">Annually</option>
        </select>
        {/* <!-- ************************** -->
            <!-- Checkbox 2 (make into a switch w. Bootstrap) -->
            <!-- Set class form-check-input  on input -->
            <!-- Set class form-check-label on label -->
            <!-- ************************** --> */}

        <div className="">
          <input
            className=""
            type="checkbox"
            id="flexSwitchCheckDefault"
            readOnly
          />
          <label className="" htmlFor="flexSwitchCheckDefault">
            Send my info to affiliates
          </label>
        </div>
        {/* <!-- Set classes btn btn-primary --> */}
        <button type="submit" className="">
          Submit
        </button>
      </form>
    </div>
  );
}
