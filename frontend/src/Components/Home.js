// import React, { useState } from "react";

// const SideNavbar = () => {
//   const [showForm, setShowForm] = useState(false);

//   const handleTechInfoClick = () => {
//     setShowForm(true);
//   };

//   return (
//     <div className="flex h-screen">
//       {/* Side Navbar */}
//       <div className="bg-gray-800 text-white w-1/6 py-8">
//         <div className="px-8">
//           <h1 className="text-2xl font-bold mb-4">Tech-Info List</h1>
//           <ul>
//             <li className="py-2" onClick={handleTechInfoClick}>
//               Tech-Info New
//             </li>
//             <li className="py-2" onClick={handleTechInfoClick}>
//               Change Password
//             </li>
//             <li className="py-2" onClick={handleTechInfoClick}>
//               Logout
//             </li>
//           </ul>
//         </div>
//       </div>
//       {/* Form */}
//       {showForm && (
//         <div className="flex flex-col flex-1 p-8">
//           <h2 className="text-xl font-bold mb-4">Form</h2>
//           <form className="space-y-4">
//             <div className="flex flex-col">
//               <label
//                 htmlFor="name"
//                 className="text-sm font-medium text-gray-700"
//               >
//                 Name
//               </label>
//               <input
//                 type="text"
//                 id="name"
//                 className="mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//               />
//             </div>
//             <div className="flex flex-col">
//               <label
//                 htmlFor="email"
//                 className="text-sm font-medium text-gray-700"
//               >
//                 Email
//               </label>
//               <input
//                 type="email"
//                 id="email"
//                 className="mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//               />
//             </div>
//             <div className="flex flex-col">
//               <label
//                 htmlFor="message"
//                 className="text-sm font-medium text-gray-700"
//               >
//                 Message
//               </label>
//               <textarea
//                 id="message"
//                 className="mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//               ></textarea>
//             </div>
//             <div>
//               {/* <button
//                 type="submit"
//                 className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//               >
//                 Submit
//               </button> */}
//             </div>
//           </form>
//         </div>
//       )}
//     </div>
//   );
// };

// export default SideNavbar;

// import React, { useState } from "react";

// const SideNavbar = () => {
//   const [selectedTech, setSelectedTech] = useState(null);

//   // Dummy data for technology details
//   const techDetails = [
//     { id: 1, name: "Technology 1", description: "Description 1" },
//     { id: 2, name: "Technology 2", description: "Description 2" },
//     { id: 3, name: "Technology 3", description: "Description 3" },
//   ];

//   const handleTechClick = (tech) => {
//     setSelectedTech(tech);
//   };

//   return (
//     <div className="flex h-screen">
//       {/* Side Navbar */}
//       <div className="bg-gray-800 text-white w-1/3 py-8">
//         <div className="px-8">
//           <h1 className="text-2xl font-bold mb-4">Tech-Info List</h1>
//           <ul>
//             {techDetails.map((tech) => (
//               <li
//                 key={tech.id}
//                 className={`py-2 cursor-pointer ${
//                   selectedTech && selectedTech.id === tech.id ? "font-bold" : ""
//                 }`}
//                 onClick={() => handleTechClick(tech)}
//               >
//                 {tech.name}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>

//       {/* Form */}
//       <div className="flex-1 p-8">
//         <h2 className="text-xl font-bold mb-4">Form</h2>
//         {selectedTech && (
//           <div>
//             <h3 className="text-lg font-semibold mb-2">{selectedTech.name}</h3>
//             <p className="text-gray-700 mb-4">{selectedTech.description}</p>
//             <form className="space-y-4">
//               <div>
//                 <label
//                   htmlFor="name"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Name
//                 </label>
//                 <input
//                   type="text"
//                   id="name"
//                   className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="email"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Email
//                 </label>
//                 <input
//                   type="email"
//                   id="email"
//                   className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//                 />
//               </div>
//               <div>
//                 <label
//                   htmlFor="message"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Message
//                 </label>
//                 <textarea
//                   id="message"
//                   className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//                 ></textarea>
//               </div>
//               <div>
//                 <button
//                   type="submit"
//                   className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//                 >
//                   Submit
//                 </button>
//               </div>
//             </form>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SideNavbar;

// import React, { useState } from "react";

// const SideNavbar = () => {
//   const [selectedTech, setSelectedTech] = useState(null);

//   // Dummy data for technology details
//   const techDetails = [
//     { id: 1, name: "Technology 1", description: "Description 1" },
//     { id: 2, name: "Technology 2", description: "Description 2" },
//     { id: 3, name: "Technology 3", description: "Description 3" },
//   ];

//   const handleTechClick = (tech) => {
//     setSelectedTech(tech);
//   };

//   return (
//     <div className="flex h-screen">
//       {/* Side Navbar */}
//       <div className="bg-gray-800 text-white w-1/6 py-8">
//         <div className="px-8">
//           <h1 className="text-2xl font-bold mb-4">
//             CSIR Technology Database India
//           </h1>
//           <h2 className="text-xl font-bold mb-4">Tech-Info List</h2>
//           <ul>
//             {techDetails.map((tech) => (
//               <li
//                 key={tech.id}
//                 className={`py-2 cursor-pointer ${
//                   selectedTech && selectedTech.id === tech.id ? "font-bold" : ""
//                 }`}
//                 onClick={() => handleTechClick(tech)}
//               >
//                 {tech.name}
//               </li>
//             ))}
//           </ul>
//         </div>
//       </div>

//       {/* Form */}
//       <div className="flex-1 p-8">
//         <h2 className="text-xl font-bold mb-4">Form</h2>
//         {selectedTech && (
//           <div>
//             <h3 className="text-lg font-semibold mb-2">{selectedTech.name}</h3>
//             <p className="text-gray-700 mb-4">{selectedTech.description}</p>
//             <form className="space-y-4">
//               <div className="grid grid-cols-2 gap-4">
//                 <div>
//                   <label
//                     htmlFor="name"
//                     className="block text-sm font-medium text-gray-700"
//                   >
//                     Name
//                   </label>
//                   <input
//                     type="text"
//                     id="name"
//                     className="mt-1 block w-full border-black-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//                   />
//                 </div>
//                 <div>
//                   <label
//                     htmlFor="email"
//                     className="block text-sm font-medium text-gray-700"
//                   >
//                     Email
//                   </label>
//                   <input
//                     type="email"
//                     id="email"
//                     className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//                   />
//                 </div>
//               </div>
//               <div>
//                 <label
//                   htmlFor="message"
//                   className="block text-sm font-medium text-gray-700"
//                 >
//                   Message (At least 10 rows)
//                 </label>
//                 <textarea
//                   id="message"
//                   rows="10"
//                   className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
//                 ></textarea>
//               </div>
//               <div>
//                 <button
//                   type="submit"
//                   className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//                 >
//                   Submit
//                 </button>
//               </div>
//             </form>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default SideNavbar;
import React, { useState } from "react";

const SideNavbar = () => {
  const [selectedTech, setSelectedTech] = useState(null);

  // Dummy data for technology details
  const techDetails = [
    { id: 1, name: "Tech Info New", description: "Description 1" },
    { id: 2, name: "Change Password", description: "Description 2" },
    { id: 3, name: "Logout", description: "Description 3" },
  ];

  const handleTechClick = (tech) => {
    setSelectedTech(tech);
  };

  return (
    <>
      <h1 className="text-4xl text-center font-bold mb-1 bg-slate-400">
        CSIR Technology Database India
      </h1>
      <div className="flex h-screen">
        {/* Side Navbar */}
        <div className="bg-gray-800 text-white w-1/7 py-8">
          <div className="px-8">
            <h2 className="text-xl font-bold mb-4">Tech-Info List</h2>
            <ul>
              {techDetails.map((tech) => (
                <li
                  key={tech.id}
                  className={`py-2 cursor-pointer ${
                    selectedTech && selectedTech.id === tech.id
                      ? "font-bold"
                      : ""
                  }`}
                  onClick={() => handleTechClick(tech)}
                >
                  {tech.name}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Form */}
        <div className="flex-1 p-8 bg-blue-200">
          <h2 className="text-3xl font-bold mb-4 text-center">
            Technology Details
          </h2>
          {/* {selectedTech && (
            <div>
              <h3 className="text-lg font-semibold mb-2">
                {selectedTech.name}
              </h3>
              <p className="text-gray-700 mb-4">{selectedTech.description}</p>
              <form className="space-y-4">
               
                <div>
                  <h4 className="text-lg font-semibold mb-2">
                    Technology Details
                  </h4>
                  <p>{selectedTech.description}</p>
                </div>
            
                <div>
                  <h4 className="text-lg font-semibold mb-2">Input Form</h4>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      />
                    </div>
                    <div>
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                      />
                    </div>
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-sm font-medium text-gray-700"
                    >
                      Message (At least 10 rows)
                    </label>
                          <textarea
                            id="message"
                            rows="10"
                            className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                          ></textarea>
                  </div>
                </div>
                <div>
                  <button
                    type="submit"
                    className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                  >
                    Submit
                  </button>
                </div>
              </form>
            </div>
          )} */}
          <table className="w-full">
            <tbody>
              <tr>
                <td className="font-bold ">Technology /Knowhow Ref No:</td>
                <td>
                  <input className="w-full p-2 text-lg outline-0.1 rounded-md" />
                </td>
              </tr>
            </tbody>
          </table>
          <table className="w-full">
            <tbody>
              <tr>
                <td className="font-bold">File No.</td>
                <td>
                  <input className="w-full p-1 text-lg outline-0.1 rounded-md" />
                </td>
              </tr>
            </tbody>
          </table>
          <table className="w-full">
            <tbody>
              <tr>
                <td className="font-bold">Keyword for Technology</td>
                <td>
                  <input className="w-full p-2 text-lg outline-0.1 rounded-md" />
                </td>
              </tr>
            </tbody>
          </table>
          <table className="w-full">
            <tbody>
              <tr>
                <td className="font-bold">Name of Technology/Knowhow:</td>
                <textarea
                  id="message"
                  rows="3"
                  className="mt-10 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                ></textarea>
              </tr>
            </tbody>
          </table>
          <table className="w-full">
            <tbody>
              <tr>
                <td className="font-bold">Industrial Sector</td>

                <td>
                  <select
                    id="countries"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  >
                    <option selected>Chemicals (CHE)</option>
                    <option value="US">
                      Agriculture and Allied Industries(AG&A)
                    </option>
                    <option value="CA">Auto Components(AUTOC)</option>
                    <option value="FR">Automobiles(AUTO)</option>
                    <option value="DE">Aviation(AVT)</option>
                    <option value="DE">Banking(BNK)</option>
                    <option value="DE">Biotechnology(BIOT)</option>
                    <option value="DE">Cement(CEM)</option>
                    <option value="DE">Chemicals(CHE)</option>
                    <option value="DE">Consumer Durables(CONSD)</option>
                    <option value="DE">Defence Manufacturing(DEFM)</option>
                    <option value="DE">Education and Training (EDU&T)</option>
                    <option value="DE">
                      {" "}
                      Electronics System Design & Manufacturing (ESDM)
                    </option>
                    <option value="DE">
                      {" "}
                      Engineering and Capital Goods (EN&CG)
                    </option>
                    <option value="DE">Financial Services (FINS)</option>
                    <option value="DE">
                      Fast Moving Consumer Goods (FMCG){" "}
                    </option>
                    <option value="DE">Gems and Jewellery (GEMJ)</option>
                    <option value="DE">Healthcare (HTC)</option>
                    <option value="DE">Infrastructure (INF)</option>
                    <option value="DE">Insurance (INS)</option>
                    <option value="DE">
                      {" "}
                      IT & Business Process Management (IT&BPM)
                    </option>
                    <option value="DE">Leather & Non-Leather (LEA)</option>
                    <option value="DE">Manufacturing (MNF)</option>
                    <option value="DE">Media and Entertainment (ENTM)</option>
                    <option value="DE">Medical Devices (MEDD)</option>
                    <option value="DE">Metals and Mining (M&M)</option>
                    <option value="DE">
                      {" "}
                      Micro, Small and Medium Enterprises (MSME){" "}
                    </option>
                    <option value="DE">Oil and Gas (O&G)</option>
                    <option value="DE">Pharmaceuticals (PHARMA)</option>
                    <option value="DE">Ports (PORT)</option>
                    <option value="DE">Power (POWER)</option>
                    <option value="DE">Railways (RLY)</option>
                    <option value="DE">Real Estate (REST)</option>
                    <option value="DE">Renewable Energy (RE)</option>
                    <option value="DE">Retail (RET)</option>
                    <option value="DE">Roads (ROAD)</option>
                    <option value="DE">Rural Development (RD)</option>
                    <option value="DE">Science and Technology (S&T)</option>
                    <option value="DE">Strategic Sector (SS)</option>
                    <option value="DE">Services (SRV)</option>
                    <option value="DE">Steel (STEEL)</option>
                    <option value="DE">Telecommunications (TCOM)</option>
                    <option value="DE">Textiles (TXT)</option>
                    <option value="DE">Tourism and Hospitality (THOSP)</option>
                    <option value="DE">Others (OTH)</option>
                  </select>
                </td>
              </tr>
            </tbody>
          </table>
          <table className="w-full">
            <tbody>
              <tr>
                <td className="font-bold">Lead Laboratory/Insitute</td>
                <td>
                  <input className="w-full p-2 text-lg outline-0.1 rounded-md" />
                </td>
              </tr>
            </tbody>
          </table>
          <table className="w-full">
            <tbody>
              <tr>
                <td className="font-bold">Lead Laboratory/Insitute</td>
                <td>
                  <input className="w-full p-2 text-lg outline-0.1 rounded-md" />
                </td>
              </tr>
            </tbody>
          </table>
          <table className="w-full">
            <tbody>
              <tr>
                <td className="font-bold">Technology Readiness Level(TRL)</td>
                <td>
                  <input className="w-full p-2 text-lg outline-0.1 rounded-md" />
                </td>
              </tr>
            </tbody>
          </table>
          <table className="w-full">
            <tbody>
              <tr>
                <td className="font-bold">Scale of the Development</td>
                <td>
                  <input className="w-full p-2 text-lg outline-0.1 rounded-md" />
                </td>
              </tr>
            </tbody>
          </table>
          <table className="w-full">
            <tbody>
              <tr>
                <td className="font-bold">Year of Development</td>
                <td>
                  <input className="w-full p-2 text-lg outline-0.1 rounded-md" />
                </td>
              </tr>
            </tbody>
          </table>
          <table className="w-full">
            <tbody>
              <tr>
                <td className="font-bold">
                  Brief details of Technology/Knowhow
                </td>
                <textarea
                  id="message"
                  rows="3"
                  className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                ></textarea>
              </tr>
            </tbody>
          </table>
          <table className="w-full">
            <tbody>
              <tr>
                <td className="font-bold">Technology Benchmarking</td>    
                <td>
                  <input className="w-full p-2 text-lg outline-0.1 rounded-md" />
                </td>
              </tr>
            </tbody>
          </table>
          <table className="w-full">
            <tbody>
              <tr>
                <td className="font-bold">Potential Stakeholders</td>
                <td>
                  <input className="w-full p-2 text-lg outline-0.1 rounded-md" />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default SideNavbar;
