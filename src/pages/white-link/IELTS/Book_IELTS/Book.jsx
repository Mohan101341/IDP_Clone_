
import "./Book.css";
export default function Book() {    
	return(
		<div className="ielts-book-page">
			<div className="topbar">
				<div className="badge">Blog Updates</div>
				<div className="topbar-right">
					<span className="mail">ielts.india@idp.com</span>
					<span className="phone">1800-102-4544</span>
					<span className="login">Login ▾</span>
				</div>
			</div>
			<div className="navbar">
				<div className="brand">
					<span className="logo-dot" />
					<span className="logo-text">idp</span>
					<span className="logo-split">IELTS</span>
				</div>
				<ul className="menu">
					<li>Home</li>
					<li>About IELTS ▾</li>
					<li>Register for IELTS ▾</li>
					<li>Prepare for IELTS ▾</li>
					<li>Information ▾</li>
					<li>Contact Us ▾</li>
				</ul>
				<button className="btn-primary">BOOK NOW</button>
			</div>
			<div className="register-wrap">
				<div className="register-card">
					<div className="register-title">Register for IELTS</div>
					<div className="register-fields">
						<div className="field">
							<label>Select Test</label>
							<div className="select">
								<span>Choose...</span>
								<span className="chev">▾</span>
							</div>
						</div>
						<div className="field">
							<label>Test Module</label>
							<div className="select">
								<span>Choose...</span>
								<span className="chev">▾</span>
							</div>
						</div>
						<div className="field">
							<label>Test City</label>
							<div className="select">
								<span>Choose...</span>
								<span className="chev">▾</span>
							</div>
						</div>
						<button className="btn-book">Book Now</button>
					</div>
				</div>
			</div>
            <div className="info-section">
            <h1 className="info-heading">Register online for <span className="cl">IELTS</span> - Pay easily using Netbanking, Debit/Credit card and Paytm</h1>
            <p className="line">You may either book your IELTS test online or visit your nearest IDP branch to book it offline. Here’s how:</p>
            <ul className="points">
                <li>Log on to our <span className="cl">IELTS India website.</span>
                </li>
                <li> Select the option<span className="cl"> ‘Register for IELTS.’</span></li>
               <li>Select your preferred test – IELTS on Computer / IELTS on Paper (IELTS, IELTS for UKVI or Life Skills).</li>
              <li>Select your test type/module –  IELTS Academic, IELTS General Training, IELTS for UKVI, and IELTS for Life Skills (be extremely careful while choosing the module you wish to take).</li>
                <li>Pick your desired test location/city (from the<span className="cl">  available IELTS test centres in India</span>).</li>
                <li>Once done, you will find a<span className='cl'>  list of IELTS test dates </span>available for your preferences. Select your desired date and time slot.</li>
                  <li>Fill up the required details and complete your online application. Remember, you will also have to upload a clear, scanned colour copy of your passport to complete the process.</li>
                  <li> Proceed to pay the<span className="cl">  IELTS test fee.</span></li>
                </ul>
                <p className="line">Once your test date is booked, you will receive an acknowledgment on your registered email/phone number. For the Speaking test, you can book an IELTS slot online on your preferred date and time (Only applicable for IELTS on Paper). If you fail to choose a slot within the stated time period, a time slot will be automatically allocated to you.</p>
                <p className="line">In case you do not prefer to register using the online registration mode, alternatively you may register in person at the nearest IDP IELTS branch or Referral Partner. Documents required at the time of registration include photocopy of your passport ID (front and back page) and signed and dated declaration document.</p>
        </div>
        </div>
	);
}