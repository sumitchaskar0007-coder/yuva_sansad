import { Helmet } from 'react-helmet-async';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Placement() {
  const [expandedSection, setExpandedSection] = useState(null);

  const placementData = [
    { id: 1, name: 'Shweta Krishna Shukla', spec: 'HR', company: 'ABFRL', role: 'Management Trainee', ctc: '10', location: 'Delhi NCR' },
    { id: 2, name: 'Ashlekha jamwal', spec: 'Marketing', company: 'Intelipaat', role: 'Business Development Executive', ctc: '9', location: 'Bengalore' },
    { id: 3, name: 'Omkar Vijay Patole', spec: 'Marketing', company: 'Autobahn Terrago / Magicpin', role: 'Business Development Associate', ctc: '9', location: 'Mumbai' },
    { id: 4, name: 'Tushar Dattatray Ingle', spec: 'Marketing', company: 'Intelipaat', role: 'Business Development Executive', ctc: '9', location: 'Bengalore' },
    { id: 5, name: 'Hemant Pravin Bind', spec: 'Marketing', company: 'IT Nova', role: 'Business Development Intern', ctc: '8.2', location: 'Remote' },
    { id: 6, name: 'Kanchan Vijay Dhangar', spec: 'Marketing', company: 'Xanadu', role: 'Management Trainee', ctc: '7.5', location: 'PAN India' },
    { id: 7, name: 'Abhishek Anand', spec: 'Marketing', company: 'Agumentik', role: 'MT- Sales', ctc: '7', location: 'NA' },
    { id: 8, name: 'Ananya Rahul Mishra', spec: 'HR', company: 'Mantra Prop', role: 'Management Trainee - Sales', ctc: '7', location: 'Pune' },
    { id: 9, name: 'Purva Mahendra Shriramwar', spec: 'Finance', company: 'ANZ Bank', role: 'Triage Officer', ctc: '6.5', location: 'Bengaluru' },
    { id: 10, name: 'Vijaykumar B Karimungi', spec: 'Marketing', company: 'ACC Cement', role: 'Inside Sales Representative', ctc: '6.5', location: 'Bengaluru' },
    { id: 11, name: 'Abhishek Bhattacharya', spec: 'Marketing', company: 'Policy Bazaar', role: 'Relationship Manager', ctc: '6.4', location: 'Pune' },
    { id: 12, name: 'Akash Bhagwan wanve', spec: 'Marketing', company: 'Policy Bazaar', role: 'Relationship Manager', ctc: '6.4', location: 'Pune' },
    { id: 13, name: 'Michelle Anil George', spec: 'Finance', company: 'ZS Associate', role: 'Finance Associate', ctc: '6', location: 'Pune' },
    { id: 14, name: 'Tejal Gajanan Patil', spec: 'Marketing', company: 'Phonepe-Pincode', role: 'Growth Executive', ctc: '6', location: 'Pune' },
    { id: 15, name: 'Ajay Pravin Gujar', spec: 'Marketing', company: 'Suntek Energy Systems', role: 'Territory Sales Executive', ctc: '5.85', location: 'Pune' },
    { id: 16, name: 'Akhilesh Pratyush Tailor', spec: 'Finance', company: 'Envision', role: 'Mortgage Analyst', ctc: '5.5', location: 'NA' },
    { id: 17, name: 'Amisha Vishwakarma', spec: 'Marketing', company: 'Lenskart/Intelipaat', role: 'Asst Store Manager', ctc: '5.5', location: 'NA' },
    { id: 18, name: 'Saloni Kishor Kothari', spec: 'Finance', company: 'Envision', role: 'Mortgage Analyst', ctc: '5.5', location: 'Ahmedabad' },
    { id: 19, name: 'Taha Hatim Chayyar', spec: 'Finance', company: 'Anand Rathi', role: 'Financial Analyst', ctc: '5.5', location: 'Pune' },
    { id: 20, name: 'Vansh Ketankumar Lakdawala', spec: 'Finance', company: 'Envision', role: 'Mortgage Analyst', ctc: '5.5', location: 'Ahmedabad' },
    { id: 21, name: 'Harsh Rajnarayan Yadav', spec: 'Finance', company: 'Joyalukkas', role: 'Management Trainee - Finance', ctc: '5', location: 'Bengalore' },
    { id: 22, name: 'Harshit Shrimali', spec: 'Finance', company: 'Joyalukkas', role: 'Management Trainee - Finance', ctc: '5', location: 'Noida' },
    { id: 23, name: 'Nayan Bhaskar Chaudhari', spec: 'Marketing', company: 'Mehta Hi Tech', role: 'Sales & Marketing Executive', ctc: '5', location: 'Mumbai' },
    { id: 24, name: 'Pradumanya Hariram Kapse', spec: 'Marketing', company: 'Stanzaliving', role: 'Junior Sales Associate', ctc: '5', location: 'Pune' },
    { id: 25, name: 'Rohan Ravindra Jaiswal', spec: 'Marketing', company: 'Sonkan/Magicpin', role: 'Sales Officer', ctc: '5', location: 'Mumbai' },
  ];

  const recruiters = ['TCS', 'Infosys', 'Deloitte', 'HCL', 'ICICI', 'Accenture', 'ABFRL', 'Intelipaat', 'Policy Bazaar', 'ZS Associate'];

  const topRecruit = placementData.reduce((acc, curr) => {
    acc[curr.company] = (acc[curr.company] || 0) + 1;
    return acc;
  }, {});

  const stats = [
    { label: 'Students Placed', value: placementData.length, desc: 'Successful Placements' },
    { label: 'Highest CTC', value: '10 LPA', desc: 'ABFRL' },
    { label: 'Average CTC', value: '6.5 LPA', desc: 'Industry Standard' },
    { label: 'Top Recruiters', value: '10+', desc: 'Leading Companies' },
  ];

  return (
    <>
      <Helmet>
        <title>Placement Cell | AIMS MBA | 25+ Placements</title>
        <meta name="description" content="AIMS placement cell - 25 students placed with highest CTC 10 LPA, average 6.5 LPA. Top recruiters include ABFRL, Intelipaat, Policy Bazaar." />
        <meta name="keywords" content="placement, recruiters, placement cell, job placement, MBA placement, career, CTC" />
        <meta name="author" content="AIMS Bhubaneswar" />
        <meta property="og:title" content="Placement Cell | AIMS MBA" />
        <meta property="og:description" content="25+ students successfully placed with leading companies" />
        <link rel="canonical" href="https://adityainstitutemanagement.com" />
      </Helmet>

      <div className="bg-white">
        {/* ⭐ HERO */}
        <section className="bg-gradient-to-r from-[#0a2a66] to-blue-700 text-white py-16 md:py-20 px-4">
          <div className="container-wide">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Placement Cell</h1>
            <p className="text-lg text-blue-100">Dedicated career development and placement support for students</p>
          </div>
        </section>

        {/* ⭐ STATS */}
        <section className="bg-gray-50 py-12 px-4">
          <div className="container-wide">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, i) => (
                <div key={i} className="bg-white rounded-lg p-6 text-center border border-gray-200 hover:border-primary hover:shadow-lg transition">
                  <p className="text-3xl font-bold text-primary mb-1">{stat.value}</p>
                  <p className="font-semibold text-gray-900 text-sm">{stat.label}</p>
                  <p className="text-xs text-gray-600">{stat.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ⭐ ABOUT */}
        <section className="container-wide py-16 px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">About Placement Cell</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-8 border border-blue-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Our Services</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Career guidance seminars and workshops</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Mock interviews and aptitude training</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Soft skills development programs</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-primary font-bold">✓</span>
                  <span>Alumni mentorship and networking</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-8 border border-green-200">
              <h3 className="text-xl font-bold text-gray-900 mb-4">Placement Activities</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">→</span>
                  <span>Industry certifications and trainings</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">→</span>
                  <span>Corporate immersion and internships</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">→</span>
                  <span>Recruiter interaction and job fairs</span>
                </li>
                <li className="flex gap-3">
                  <span className="text-green-600 font-bold">→</span>
                  <span>Resume building and interview prep</span>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* ⭐ RECRUITERS */}
        <section className="bg-gray-50 py-12 px-4">
          <div className="container-wide">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Top Recruiters</h2>
            <div className="flex flex-wrap gap-4">
              {recruiters.map(r => (
                <div key={r} className="bg-white rounded-lg px-6 py-3 border-2 border-primary text-primary font-semibold hover:bg-primary hover:text-white transition">
                  {r}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ⭐ PLACEMENT TABLE */}
        <section className="container-wide py-16 px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Placed Students</h2>

          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm md:text-base">
              <thead className="bg-primary text-white">
                <tr>
                  <th className="px-4 py-3 text-left font-bold">#</th>
                  <th className="px-4 py-3 text-left font-bold">Name</th>
                  <th className="px-4 py-3 text-left font-bold">Spec.</th>
                  <th className="px-4 py-3 text-left font-bold">Company</th>
                  <th className="px-4 py-3 text-left font-bold hidden md:table-cell">Designation</th>
                  <th className="px-4 py-3 text-center font-bold">CTC</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {placementData.map((p, i) => (
                  <tr key={p.id} className="hover:bg-gray-50 transition">
                    <td className="px-4 py-3 font-bold text-primary">{i + 1}</td>
                    <td className="px-4 py-3 font-semibold text-gray-900">{p.name}</td>
                    <td className="px-4 py-3">
                      <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
                        {p.spec}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-gray-700">{p.company}</td>
                    <td className="px-4 py-3 text-gray-700 hidden md:table-cell text-xs">{p.role}</td>
                    <td className="px-4 py-3 text-center font-bold text-green-600">{p.ctc} LPA</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ⭐ CTC DISTRIBUTION */}
        <section className="bg-gray-50 py-16 px-4">
          <div className="container-wide">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">CTC Distribution</h2>
            <div className="grid md:grid-cols-3 gap-6">
              {[
                { range: '9-10 LPA', count: 4, color: 'from-green-500 to-green-600' },
                { range: '6.5-8.5 LPA', count: 10, color: 'from-blue-500 to-blue-600' },
                { range: '5-6.5 LPA', count: 11, color: 'from-purple-500 to-purple-600' },
              ].map((item, i) => (
                <div key={i} className={`bg-gradient-to-r ${item.color} rounded-xl p-8 text-white text-center`}>
                  <p className="text-4xl font-bold mb-2">{item.count}</p>
                  <p className="text-lg font-semibold">{item.range}</p>
                  <p className="text-sm text-white/80 mt-2">{Math.round(item.count / 25 * 100)}% of students</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ⭐ CTA */}
        <section className="bg-gradient-to-r from-[#0a2a66] to-blue-700 text-white py-16 px-4">
          <div className="container-wide text-center">
            <h2 className="text-3xl font-bold mb-4">Ready for Your Career?</h2>
            <p className="text-blue-100 mb-8 max-w-2xl mx-auto">
              Join AIMS and be part of our success story with 25+ placements and highest CTC of 10 LPA
            </p>
            <Link
              to="/admissions"
              className="inline-block bg-yellow-400 text-gray-900 px-8 py-4 rounded-lg font-bold hover:bg-yellow-300 transition"
            >
              Apply Now
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}