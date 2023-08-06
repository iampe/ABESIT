const rulesData = [
    {
      number: "1",
      header: "Smoking, Alcohol & Narcotic consumption is strictly prohibited in and around the Hostel premises. Strict action will be taken against offenders.",
      body: "Violation of this rule will lead to immediate disciplinary action and possible eviction from the hostel premises."
    },
    {
      number: "2",
      header: "Strict adherence to the prescribed dress code is required. Decency in dressing & demeanor is a must.",
      body: "All students are expected to follow the dress code guidelines provided by the hostel management."
    },
    {
      number: "3",
      header: "Loitering in the Hostel campus during the class hours will not be appreciated.",
      body: "Students are advised to attend their classes on time and avoid loitering in the hostel premises during class hours."
    },
    {
      number: "4",
      header: "The Management & Staff will not be responsible for personal belongings.",
      body: "Students are responsible for their personal belongings. The hostel management will not be liable for any loss or theft."
    },
    {
      number: "5",
      header: "Late comers will be penalized.",
      body: "Students arriving late to the hostel after the specified curfew time will face penalties as per the hostel rules."
    },
    {
      number: "6",
      header: "Students must keep the Campus & Rooms clean. Defacing walls, equipment, furniture, etc., is strictly prohibited.",
      body: "Maintaining cleanliness in the campus and individual rooms is mandatory for all students. Any form of defacement is not allowed."
    },
    {
      number: "7",
      header: "Birthday/Other Celebrations are strictly prohibited in Hostel.",
      body: "Celebrations, parties, and gatherings are not allowed inside the hostel premises without prior permission from the hostel authorities."
    },
    {
      number: "8",
      header: "Students must turn off all the electrical equipment & lights before leaving their rooms.",
      body: "It is essential for students to switch off all electrical appliances and lights when leaving their rooms to conserve energy."
    },
    {
      number: "9",
      header: "Students are not allowed to use electric stoves, heaters, etc. in rooms except in designated places.",
      body: "For safety reasons, the use of electric stoves, heaters, and similar appliances is restricted to designated areas only."
    },
    {
      number: "10",
      header: "Students are not allowed to organize any group activities in their room.",
      body: "Group activities, parties, or gatherings are not permitted inside individual rooms. Common areas can be used with permission."
    },
    {
      number: "11",
      header: "Food will be served only in the designated Dining Hall(s) and only during the specified timings. Wasting food & water will not be encouraged.",
      body: "Meals will be provided in the designated dining halls during specific hours. Students are advised not to waste food and water."
    },
    {
      number: "12",
      header: "All lights must be switched off before 11 pm in the rooms. Only study lamps are permitted.",
      body: "To ensure a peaceful environment, all room lights should be turned off by 11 pm. Study lamps can be used for individual study purposes."
    },
    {
      number: "13",
      header: "Students are not allowed to use Mobile phones after 10 pm. Cell phones of those at fault will be confiscated.",
      body: "Usage of mobile phones is restricted after 10 pm to promote a focused study and sleep schedule. Phones may be confiscated if rules are violated."
    },
    {
      number: "14",
      header: "Tipping of Wardens, Security Guards, Cleaning staff, etc., is not permitted.",
      body: "Tipping or offering gratuities to hostel staff is not allowed. They are here to provide service, and tipping is not part of their duty."
    },
    {
      number: "15",
      header: "Visitors are allowed only in AV Room between: 4:30 p.m. and 6:30 p.m. Visitors are not allowed beyond the visiting area. No outside Guest\Students will be allowed inside the hostel.",
      body: "Visitors are permitted to meet residents only in the designated area between 4:30 pm and 6:30 pm. Non-resident guests are not allowed inside the hostel."
    },
    {
      number: "16",
      header: "Any complaints regarding electric equipment, plumbing etc., is required to be entered in the ‘Complaints Book’.",
      body: "In case of any issues with hostel facilities, students must register complaints in the official 'Complaints Book' for prompt resolution."
    },
    {
      number: "17",
      header: "Students should not enter rooms of other students without permission.",
      body: "Respecting the privacy of fellow students is essential. Students should seek permission before entering each other's rooms."
    },
    {
      number: "18",
      header: "Silence: Strict silence shall be observed in the hostel from 11.00 pm to 5.30 am. Care should be taken at all times to ensure that music\loud talking is NOT audible outside the room.",
      body: "During the designated quiet hours, students are expected to maintain silence to ensure a conducive environment for studying and sleeping."
    },
    {
      number: "19",
      header: "Any manner of festivities and noise making\celebrations will not be entertained, which may cause disturbance to other inmates in the hostel premises.",
      body: "Activities that create excessive noise or disturbances in the hostel are not allowed and may lead to disciplinary action."
    },
    {
      number: "20",
      header: "Students during their stay in the hostel will be governed by the management rules.",
      body: "All students are required to comply with the hostel management's rules and regulations during their stay in the hostel."
    }
  ];
    // Add more rules data as required
  
  
  // Function to create a single rule card
  function createRuleCard(rule) {
    const card = document.createElement("div");
    card.classList.add("card");
  
    const header = document.createElement("div");
    header.classList.add("card-header");
    header.textContent = `${rule.number}. ${rule.header}`;
  
    const body = document.createElement("div");
    body.classList.add("card-body");
    body.textContent = rule.body;
  
    card.appendChild(header);
    card.appendChild(body);
  
    return card;
  }
  
  // Function to generate all rule cards and append them to the container
  function generateRuleCards() {
    const rulesContainer = document.getElementById("rulesContainer");
  
    for (const rule of rulesData) {
      const ruleCard = createRuleCard(rule);
      rulesContainer.appendChild(ruleCard);
    }
  }
  
  // Call the function to generate rule cards on page load
  generateRuleCards();
  