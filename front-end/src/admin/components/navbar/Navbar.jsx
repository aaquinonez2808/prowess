import React from 'react'
import '../import.js'

const Navbar = () => {
  return (
    <div>
        <section className="full-box cover dashboard-sideBar">
		<div className="full-box dashboard-sideBar-bg btn-menu-dashboard"></div>
		<div className="full-box dashboard-sideBar-ct">
			{/* <!--SideBar Title --> */}
			<div className="full-box text-uppercase text-center text-titles dashboard-sideBar-title">
				company <i className="zmdi zmdi-close btn-menu-dashboard visible-xs"></i>
			</div>
			{/* <!-- SideBar User info --> */}
			<div className="full-box dashboard-sideBar-UserInfo">
				<figure className="full-box">
					<img src="./assets/img/avatar.jpg" alt="UserIcon"></img>
					<figcaption className="text-center text-titles">User Name</figcaption>
				</figure>
				<ul className="full-box list-unstyled text-center">
					<li>
						<a href="#!">
							<i className="zmdi zmdi-settings"></i>
						</a>
					</li>
					<li>
						<a href="#!" className="btn-exit-system">
							<i className="zmdi zmdi-power"></i>
						</a>
					</li>
				</ul>
			</div>
			{/* <!-- SideBar Menu --> */}
			<ul className="list-unstyled full-box dashboard-sideBar-Menu">
				<li>
					<a href="home.html">
						<i className="zmdi zmdi-view-dashboard zmdi-hc-fw"></i> Dashboard
					</a>
				</li>
				<li>
					<a href="#!" className="btn-sideBar-SubMenu">
						<i className="zmdi zmdi-case zmdi-hc-fw"></i> Administration <i className="zmdi zmdi-caret-down pull-right"></i>
					</a>
					<ul className="list-unstyled full-box">
						<li>
							<a href="period.html"><i className="zmdi zmdi-timer zmdi-hc-fw"></i> Period</a>
						</li>
						<li>
							<a href="subject.html"><i className="zmdi zmdi-book zmdi-hc-fw"></i> Subject</a>
						</li>
						<li>
							<a href="section.html"><i className="zmdi zmdi-graduation-cap zmdi-hc-fw"></i> Section</a>
						</li>
						<li>
							<a href="salon.html"><i className="zmdi zmdi-font zmdi-hc-fw"></i> Salon</a>
						</li>
					</ul>
				</li>
				<li>
					<a href="#!" className="btn-sideBar-SubMenu">
						<i className="zmdi zmdi-account-add zmdi-hc-fw"></i> Users <i className="zmdi zmdi-caret-down pull-right"></i>
					</a>
					<ul className="list-unstyled full-box">
						<li>
							<a href="admin.html"><i className="zmdi zmdi-account zmdi-hc-fw"></i> Admin</a>
						</li>
						<li>
							<a href="teacher.html"><i className="zmdi zmdi-male-alt zmdi-hc-fw"></i> Teacher</a>
						</li>
						<li>
							<a href="student.html"><i className="zmdi zmdi-face zmdi-hc-fw"></i> Student</a>
						</li>
						<li>
							<a href="representative.html"><i className="zmdi zmdi-male-female zmdi-hc-fw"></i> Representative</a>
						</li>
					</ul>
				</li>
				<li>
					<a href="#!" className="btn-sideBar-SubMenu">
						<i className="zmdi zmdi-card zmdi-hc-fw"></i> Payments <i className="zmdi zmdi-caret-down pull-right"></i>
					</a>
					<ul className="list-unstyled full-box">
						<li>
							<a href="registration.html"><i className="zmdi zmdi-money-box zmdi-hc-fw"></i> Registration</a>
						</li>
						<li>
							<a href="payments.html"><i className="zmdi zmdi-money zmdi-hc-fw"></i> Payments</a>
						</li>
					</ul>
				</li>
				<li>
					<a href="#!" className="btn-sideBar-SubMenu">
						<i className="zmdi zmdi-shield-security zmdi-hc-fw"></i> Settings School <i className="zmdi zmdi-caret-down pull-right"></i>
					</a>
					<ul className="list-unstyled full-box">
						<li>
							<a href="school.html"><i className="zmdi zmdi-balance zmdi-hc-fw"></i> School Data</a>
						</li>
					</ul>
				</li>
			</ul>
		</div>
	</section>
    </div>
  )
}

export default Navbar