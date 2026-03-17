// Helper to encode paths for URLs
const encodePath = (path) => path.split('/').map(segment => encodeURIComponent(segment)).join('/');

console.log("Thane Lakes Script Loading...");

const allLakes = [
  {
    name: "Masunda Lake",
    description: "Masunda Lake, popularly known as Talavpali, is one of the most famous and beautiful lakes in Thane city. Located in the heart of the city, it is a major attraction for people of all age groups. Despite being surrounded by busy roads and heavy traffic, the lake maintains a calm and pleasant atmosphere. From early morning, people visit the lake for activities like walking, jogging, yoga, and pranayama, making it an important place for health and recreation. During the day, students, office workers, and visitors pass by the lake, while in the evening it becomes lively with families and children enjoying boating, toy train rides, horse-drawn carriages, and food stalls. The lake area is also known for social and cultural activities, festivals, and public gatherings. Historically, Masunda Lake is believed to have been built during the reign of Bimb Raja between the 9th and 10th centuries, which shows its long historical importance. Over time, developments such as Gandhi Park, Shivaji Maidan, Gadkari Rangayatan, and Kaupineshwar Temple have been built around the lake, increasing its cultural significance. In recent years, beautification work, glass railings, and improved pathways have made the lake even more attractive. Migratory birds such as seagulls can also be seen near the lake during winter. Overall, Masunda Lake is not only a natural water body but also an important social, cultural, and historical landmark that represents the identity and pride of Thane city.",
    image: "assets/images/lake-images/MASUNDA1.JPG",
    moreImages: [
      "assets/images/lake-images/MASUNDA 2.JPG",
      "assets/images/lake-images/MASUNDA3.JPG",
      "assets/images/lake-images/MASUNDA4.JPG",
      "assets/images/lake-images/MASUNDA5.JPG"
    ]
  },
  {
    name: "Upvan Lake",
    description: "Upvan Lake, located at the foothills of Yeoor Hills about 5.5 km from Thane station, is one of the most beautiful and culturally vibrant lakes in Thane. Surrounded by greenery on one side and modern cityscape on the other, it offers scenic beauty throughout the year. The lake spans approximately 518,000 sq. meters and has a large storage capacity. A majestic Mahadev statue stands in the middle of the lake, and boating facilities are available. The lake was renovated between 1975\u20131980 by J.K. Singhania of Raymond Mill to supply water to the company and city. During excavation, a Ganesh idol was discovered, and the Bhakta Kalyan Ganpati temple was established on its banks. Festivals like Ganesh Utsav, Sankashti Chaturthi, Navratri, and the famous Upvan Cultural Art Festival are celebrated here. The lake has walking tracks, gardens, seating decks, restaurants, and sports facilities. During monsoon, the misty Yeoor Hills create a breathtaking view. Upvan Lake serves as a center for recreation, culture, art, and social gatherings, making it one of Thane\u2019s pride landmarks. The Upvan area also includes the Palai Devi Temple situated along the lakeside, adding spiritual significance to the natural landscape. The temple celebrates Navratri and annual Yatra festivals with great enthusiasm. The Maharashtra Government Forest Office residences lie near the base of Yeoor Hills, emphasizing the eco-sensitive zone. The Mayor\u2019s official residence and a small open auditorium are located nearby, showing administrative importance of the area. A well-developed walking track surrounds the lake, with landscaped slopes and gardens enhancing the environment. A football turf and recreational spaces add to the multi-purpose use of the area. The Upvan Cultural Festival, started in 2015, promotes music, dance, art, sculpture, and photography, giving Thane a unique cultural identity. Thousands gather during Ganesh immersion, making it a major religious center. The combination of spirituality, biodiversity, recreation, and civic planning makes this area balanced and vibrant. It stands as a model of how a lake can integrate ecology, culture, and urban life harmoniously.",
    image: "assets/images/lake-images/UPVAN1.JPG",
    moreImages: [
      "assets/images/lake-images/UPVAN2.JPG",
      "assets/images/lake-images/UPVAN3 (1).JPG",
      "assets/images/lake-images/UPVAN3 (2).JPG"
    ]
  },
  {
    name: "Kachrali Lake",
    description: "Kachrali Lake is located in the Panch Pakhadi area of Thane, near the Thane Municipal Corporation building. It is an important lake in the central part of the city and adds to the beauty of the surrounding urban landscape. Historically, the lake is believed to date back to the Shilahar period, indicating its historical value. Around thirty years ago the lake area was filled with swampy land and algae, but through continuous efforts of local authorities and the municipal corporation, it was successfully restored and developed into a beautiful recreational place. Today, Kachrali Lake is known for its clean water, rich biodiversity, and peaceful environment. The lake has facilities such as a jogging track, children’s play area with slides and swings, an amphitheatre for cultural events, and a meeting place for senior citizens. The Siddhivinayak temple located near the lake provides a spiritual atmosphere to visitors. The lake is also surrounded by many trees, which provide shade and attract birds like kingfishers, bee-eaters, parakeets, and migratory birds. In the mornings, people visit for walking and jogging, while in the evenings families and children come to relax and enjoy the natural surroundings. Continuous efforts by the municipal corporation for cleaning and maintaining the lake have helped preserve biodiversity and environmental balance. As a result, Kachrali Lake has become an important natural and recreational space in the busy city of Thane.",
    image: "assets/images/lake-images/KACHRALI1.JPG",
    moreImages: [
      "assets/images/lake-images/KACHRALI2.JPG",
      "assets/images/lake-images/KACHRALI3.JPG",
      "assets/images/lake-images/KACHRALI4.JPG",
      "assets/images/lake-images/KACHRALI5.JPG"
    ]
  },
  {
    name: "Ghosale Lake",
    description: "A wide expanse of water offering a feeling of openness. The lake is a hub for biodiversity and provides a serene backdrop for the surrounding residential areas.",
    image: "assets/images/lake-images/GHOSALE1.JPG",
    moreImages: [
      "assets/images/lake-images/GHOSALE2.JPG",
      "assets/images/lake-images/GHOSALE3.JPG",
      "assets/images/lake-images/GHOSALE4.JPG",
      "assets/images/lake-images/GHOSALE5.JPG",
      "assets/images/lake-images/GHOSALE6.JPG"
    ]
  },
  {
    name: "Brahmala Lake",
    description: "Surrounded by tall palms and vibrant greenery, Brahmala offers a natural retreat in the city center. Its quiet ambiance is perfect for meditation and relaxation.",
    image: "assets/images/lake-images/BRAMHALA1.JPG",
    moreImages: [
      "assets/images/lake-images/BRAMHALA2.JPG",
      "assets/images/lake-images/BRAMHALA3.JPG",
      "assets/images/lake-images/BRAMHALA4.JPG",
      "assets/images/lake-images/BRAMHALA5.JPG"
    ]
  },
  {
    name: "Siddheshwar Lake",
    description: "A spiritual sanctuary near the Siddheshwar Temple. The lake's calm waters reflect the religious aura of the place, offering peace and tranquility to visitors.",
    image: "assets/images/lake-images/SIDDHESHWAR5.JPG",
    moreImages: [
      "assets/images/lake-images/SIDDHESHWAR1 (1).JPG",
      "assets/images/lake-images/SIDDHESHWAR1 (2).JPG",
      "assets/images/lake-images/SIDDHESHWAR1 (3).JPG",
      "assets/images/lake-images/SIDDHIESHWAR4.JPG",
      "assets/images/lake-images/SIDHESHWAR6.JPG"
    ]
  },
  {
    name: "Jail Lake",
    description: "Located near the historic Central Jail, this lake is surprisingly quiet and peaceful. Its banks are lined with dense trees that block out the city noise.",
    image: "assets/images/lake-images/JAIL1.JPG",
    moreImages: [
      "assets/images/lake-images/JAIL2.JPG",
      "assets/images/lake-images/JAIL3.JPG",
      "assets/images/lake-images/JAIL4.JPG",
      "assets/images/lake-images/JAIL5.JPG",
      "assets/images/lake-images/JAIL6.JPG",
      "assets/images/lake-images/JAIL7.JPG"
    ]
  },
  {
    name: "Makhmali Lake",
    description: "Makhmali Lake is situated near Charai and Lal Bahadur Shastri Marg in the older part of Thane city. This lake has historical importance and has witnessed the gradual development and urbanization of Thane over many decades. In earlier times, the lake was much larger in size, but due to the construction of roads and surrounding buildings, its area has reduced. The lake is located close to important religious places such as Hazrat Shamiullah Shah Baba Dargah and Noori Baba Dargah, which reflect the harmonious coexistence of different communities in the area. The surroundings of the lake include residential buildings, roads, and small recreational spaces created for local residents. A viewing gallery and open auditorium have been developed near the lake so that people can enjoy the scenic beauty and organize small cultural activities. The lake area also has trees and flowering plants that add to its natural charm. However, some parts of the lake face issues like garbage dumping and lack of proper beautification, which require attention from authorities and citizens. Despite these challenges, Makhmali Lake continues to serve as a small but peaceful recreational spot where local people visit for fresh air and relaxation.",
    image: "assets/images/lake-images/MAKHMALI2.JPG",
    moreImages: [
      "assets/images/lake-images/MAKHMALI1.JPG",
      "assets/images/lake-images/MAKHMALI3.JPG",
      "assets/images/lake-images/MAKHMALI4.JPG",
      "assets/images/lake-images/MAKHMALI5.JPG"
    ]
  },
  {
    name: "Kolshet Lake",
    description: "Kolshet Lake is situated in Kolshet village, which still retains some rural character despite urban expansion. The lake was beautified in 2011 and is also known as Maruti Sakharam Desale Lake. It covers approximately one hectare and contains perennial water. The lake has a constructed boundary and iron grills for safety. A fountain is installed in the central well-like structure inside the lake. Nearby, there is a Mariai Mata temple and a municipal park for children. However, most of the play equipment in the park is damaged. The water appears green, indicating possible pollution or poor water quality. The aeration system meant to maintain oxygen levels is often not functional. Although a walking track exists, greenery is insufficient in some areas. Proper monitoring, water purification and regular maintenance are necessary to improve its ecological condition and attract more visitors.",
    image: "assets/images/lake-images/KOLSHET1.JPG",
    moreImages: [
      "assets/images/lake-images/KOLSHET2.JPG",
      "assets/images/lake-images/KOLSHET3.JPG",
      "assets/images/lake-images/KOLSHET4.JPG",
      "assets/images/lake-images/KOLSHET5.JPG"
    ]
  },
  {
    name: "Kavesar Lake",
    description: "The stretch of Ghodbunder Road connecting old Thane city is popularly known as the Golden Belt because of its tall buildings, modern infrastructure, and well-developed residential complexes. This area attracts many middle-class and upper-class residents because of its greenery, amenities, and planned housing societies. Kavesar, located between Patlipada and Waghbil, has become well known due to the development of Hiranandani Estate. Hiranandani Estate is a large residential township spread across about 99 acres of land. In this area there is a natural lake called Kavesar Lake, which is now popularly known as Hiranandani Lake. The lake is located near Central Park and is surrounded by buildings developed by Hiranandani. A beautiful garden and walking area have been developed along the banks of the lake. Although the lake and park belong to the Thane Municipal Corporation, their development was carried out by Hiranandani developers. The lake has existed for many centuries and has been an important center of biodiversity. It is famous for the lotus flowers of different colours such as white, pink, red, and blue blooming across the lake. Over time algae growth reduced oxygen levels in the water, so the Municipal Corporation carried out cleaning work. Near the lake there is a peaceful Mahadev temple with a large statue of Lord Ganesha at the entrance. However, the temple appears neglected and requires renovation and proper maintenance. People visit this place for walking, yoga, fishing, and to enjoy the calm natural surroundings. Overall, the lake and park represent natural beauty, cultural heritage, and an important green space for the people of Thane.",
    image: "assets/images/lake-images/KAVESAR1.JPG",
    moreImages: [
      "assets/images/lake-images/KAVESAR2.JPG",
      "assets/images/lake-images/KAVESAR3.JPG",
      "assets/images/lake-images/KAVESAR4.JPG",
      "assets/images/lake-images/KAVESAR5.JPG",
      "assets/images/lake-images/KAVESAR6.JPG"
    ]
  },
  {
    name: "Rewale Lake",
    description: "Rewale Lake is located in the Majiwada\u2013Manpada ward area near Balkum Fire Station along the busy Thane\u2013Bhiwandi highway. Historically, it was situated between Balkum and Majiwade villages, which are now part of the rapidly developing Yashasvi Nagar area. Earlier, this lake was an important natural water reservoir supporting the surrounding rural settlements. Even today, natural springs provide water to the lake throughout the year. The lake supports aquatic life such as fish and turtles, showing its ecological importance. A peaceful Shiva temple on the northern side adds religious value to the lake. However, rapid urbanization, highways, malls and residential complexes have surrounded it. The protective fencing is damaged and often misused, making the lake unsafe. Garbage dumping and foul smell near the roadside area have reduced its beauty. Though it has great potential to serve as a green lung for the locality, urgent conservation, cleaning and beautification efforts are required to restore its dignity.",
    image: "assets/images/lake-images/REWALE1.JPG",
    moreImages: [
      "assets/images/lake-images/REWALE2.JPG",
      "assets/images/lake-images/REWALE3.JPG",
      "assets/images/lake-images/REWALE4.JPG",
      "assets/images/lake-images/REWALE5.JPG"
    ]
  },
  {
    name: "Shreeram Lake",
    description: "Shree Ram Lake is situated near the historic Shree Ram Temple in Kasarvadavali. The temple dates back to the 18th century and adds religious significance to the lake. This is a naturally formed lake with perennial water springs. In the past, the lake was heavily polluted with garbage and algae. Local leadership initiated cleaning drives and removed large amounts of waste. A water purification system was installed to improve quality. However, the water still appears green, suggesting further treatment is needed. There is no protective wall, making it unsafe for children and visitors. Fishing activities are carried out on a contract basis. The lake surroundings lack sufficient greenery and beautification. Given its historical and cultural importance, the lake requires improved safety, plantation drives and continuous maintenance.",
    image: "assets/images/lake-images/SHREERAM1.JPG",
    moreImages: [
      "assets/images/lake-images/SHREERAM2.JPG",
      "assets/images/lake-images/SHREERAM3.JPG",
      "assets/images/lake-images/SHREERAM4.JPG",
      "assets/images/lake-images/SHREERAM5.JPG",
      "assets/images/lake-images/SHREERAM6.JPG"
    ]
  },
  {
    name: "Aagasan Lake",
    description: "Agasan Lake is located in Agasan village near Diva and Dativali, away from the busy urban areas of Thane. The lake is surrounded by natural greenery, trees, and rural landscapes, giving it a peaceful and eco-friendly environment. Unlike many lakes in the city that are heavily developed, Agasan Lake still retains its natural beauty and village atmosphere. The lake is historically important and is known for its clean water and surrounding forests that support various forms of aquatic life and biodiversity. Recently, a Ganesh immersion ghat was constructed near the lake to provide a proper place for religious immersion activities during festivals like Ganesh Chaturthi. Because the lake area has not been heavily commercialized, it offers a quiet and pollution-free environment where visitors can experience nature closely. However, with increasing urbanization in nearby areas, there is concern that the natural condition of the lake may change in the future. Therefore, it is important for local residents, NGOs, and authorities to work together to preserve the lake and maintain its natural ecosystem.",
    image: "assets/images/lake-images/AAGASAN1.JPG",
    moreImages: [
      "assets/images/lake-images/AAGASAN2.JPG",
      "assets/images/lake-images/AAGASAN3.JPG",
      "assets/images/lake-images/AAGASAN5.JPG",
      "assets/images/lake-images/AAGASAN.JPG"
    ]
  },
  {
    name: "Balkum Lake",
    description: "Shivaji Nagar Lake, located in Balkum village, is a natural lake hidden between old chaul houses and newly constructed high-rise buildings. Despite being historically important, it lacks proper visibility and public awareness. There are no signboards or proper access roads leading to the lake. During the monsoon season, the lake fills completely, but in summer it dries up partially. The surroundings still have trees that create a peaceful and eco-friendly atmosphere. Earlier, local residents used the lake for Ganesh immersion during festivals. However, due to neglect, garbage is visible around its edges. There is no protective wall or proper safety system, which makes it unsafe. Urban development has reduced its prominence over time. Though it still maintains its natural beauty, it requires redevelopment, cleanliness drives and better infrastructure. With proper care, this lake can become a valuable recreational and environmental asset for the Balkum area.",
    image: "assets/images/lake-images/BALKUM1.JPG",
    moreImages: [
      "assets/images/lake-images/BALKUM2 (1).JPG",
      "assets/images/lake-images/BALKUM2 (2).JPG",
      "assets/images/lake-images/BALKUM2 (3).JPG"
    ]
  },
  {
    name: "Daighar Lake",
    description: "Daighar Lake is located near Kalyan Phata and lies in a peaceful village environment away from city congestion. The village surroundings are clean, green, and culturally rooted in Agri-Koli traditions. The lake is simple and natural, with minimal human interference. Only one side has a walking track, while other sides are covered with thick vegetation. There is a Ganesh immersion ghat but no beautification features like gardens or fountains. The ecological balance of the lake is still intact, with fish and aquatic life present. Some areas around the lake are marshy, and there are concerns about lack of large trees. Increasing construction of multi-story buildings nearby poses future threats. With proper planning, the area could be developed into a nature park or biodiversity study center. Its isolation has helped it survive so far. It serves as an \u201coxygen hub\u201d and natural retreat for nearby urban populations. Immediate conservation measures are necessary to prevent future degradation.",
    image: "assets/images/lake-images/DAIGHAR1.JPG",
    moreImages: [
      "assets/images/lake-images/DAIGHAR2.JPG",
      "assets/images/lake-images/DAIGHAR3.JPG"
    ]
  },
  {
    name: "Datiwali Lake",
    description: "Dativali Lake is located along the Diva\u2013Agasan road near Diva station, forming part of the continuous stretch of Diva, Dativali, and Agasan villages. The large pond is surrounded by human settlements on three sides and the main road on one side. It has protective compound walls and two entrance gates, allowing visitors to walk around the lake and exit from the other gate. A jogging track lined with trees runs along the inner boundary. Although beautification efforts have begun, garbage dumping near the entrance gate raises concerns about public responsibility. A separate section has been created for Ganesh idol immersion, along with designated tanks to reduce pollution. Water purification machinery has been installed to maintain water quality. However, activities like washing clothes on the banks threaten biodiversity and cleanliness. The lake once covered about 0.77 hectares and was historically a pride of Dativali village. Urbanization reduced its ecological richness over time, but rejuvenation efforts are ongoing. True conservation, however, requires focus on biodiversity, water purity, tree plantation, and public awareness rather than only cosmetic beautification.",
    image: "assets/images/lake-images/DATIWALI1.JPG",
    moreImages: [
      "assets/images/lake-images/DATIWALI2.JPG",
      "assets/images/lake-images/DATIWALI3.JPG",
      "assets/images/lake-images/DATIWALI4.JPG"
    ]
  },
  {
    name: "Desai Lake",
    description: "Desai Lake, located near Desai village close to Kalyan Phata, is a large natural reservoir spread across approximately 1.75 hectares with a depth of 10\u201312 feet. It is surrounded by natural beauty and situated near the Desai creek. The village remains predominantly Agri-Koli, preserving traditional culture and biodiversity. The lake has natural underground springs that ensure water availability throughout the year. During monsoon, excess water is automatically drained into the nearby river. Except for a small Ganesh immersion ghat, the lake remains untouched and natural. Trees like Karanj, Jambhul, Umbar, Vad, and Pimpal surround the embankment, supporting groundwater presence. The lake supports aquatic life and diverse bird species. However, there is a need for proper waste management, especially for floral waste after rituals. Despite being close to developing urban areas, it remains pollution-free. With planned eco-tourism, nature parks, and community involvement, Desai Lake can become an important biodiversity and tourism destination while preserving its natural identity.",
    image: "assets/images/lake-images/DESAI1.JPG",
    moreImages: [
      "assets/images/lake-images/DESAI2 (1).JPG",
      "assets/images/lake-images/DESAI2 (2).JPG",
      "assets/images/lake-images/DESAI3 (1).JPG",
      "assets/images/lake-images/DESAI3 (2).JPG"
    ]
  },
  {
    name: "Diva Lake",
    description: "Diva Lake is located just outside the eastern exit of Diva Railway Station under Thane Municipal Corporation. Despite being very close to the station, it remains neglected and overshadowed by rapid urbanization. The lake has shrunk considerably due to encroachments on three sides. One side faces the main road parallel to the railway track, while Sai Baba Temple stands nearby. Bike parking lines the lake\u2019s edges, and nearby gutters drain wastewater into it. The presence of drunkards and lack of security discourage visitors. Although the recorded area is about 0.40530 hectares, the actual visible water body has reduced drastically. There are no proper beautification measures, jogging tracks, tree plantations, or visible water purification systems. A proposed bus terminus nearby threatens to reduce the lake\u2019s size even further. The lake represents how environmental resources are sacrificed for urban expansion. Without immediate intervention from authorities and public awareness, Diva Lake risks disappearing completely. Revival and protection are urgently needed to preserve it for future generations.",
    image: "assets/images/lake-images/DIVA1.JPG",
    moreImages: [
      "assets/images/lake-images/DIVA2.JPG",
      "assets/images/lake-images/DIVA3.JPG"
    ]
  },
  {
    name: "Hariyali Lake",
    description: "Hariyali Lake, located near Thane Railway Station on the eastern side, is an important historical lake associated with the traditional fishing community of Chendani Koliwada. The lake has existed for nearly four centuries and has witnessed the social and cultural development of the Koli community in Thane. The name “Hariyali” is believed to have originated from the dense growth of panphuti (a floating green plant) that once covered the lake during summer when the water level decreased. This plant cover helped create a natural habitat that increased fish populations and supported the ecological balance of the lake. In earlier times, the lake even had five to six wells around it, some of which still exist today. Women used these wells for washing utensils, while children played around the lake area. With the arrival of India’s first railway line between Mumbai and Thane in 1853, the surrounding area began developing rapidly, and the lake gradually became smaller due to railway expansion and urban growth. Today the lake has an L-shaped structure and remains filled with water throughout the year due to protective walls and maintenance efforts by the Thane Municipal Corporation. Historically, activities such as boating, swimming competitions on Independence Day, and community celebrations like “One Village One Holi” were organized here. Although many of these activities have stopped, the lake area remains culturally vibrant. It is surrounded by important local institutions such as Shri Vitthal Temple, Anand Bharti Samaj, and United Sports Club, which have contributed greatly to sports, education and cultural traditions in Thane. Walking tracks, greenery and beautification work around the lake make it a pleasant public space. Despite losing more than half of its original size, local residents continue to work towards preserving the lake, recognizing its importance as a symbol of environmental heritage and community identity.",
    image: "assets/images/lake-images/HARIYALI1.JPG",
    moreImages: [
      "assets/images/lake-images/HARIYALI2 (1).JPG",
      "assets/images/lake-images/HARIYALI2 (2).JPG"
    ]
  },
  {
    name: "Jarimari Lake",
    description: "A serene lake that gets its name from the nearby tradition. It's a peaceful site that reflects the cultural and natural heritage of Thane.",
    image: "assets/images/lake-images/JARIMARI2.JPG",
    moreImages: [
      "assets/images/lake-images/JARIMARI1.JPG",
      "assets/images/lake-images/JARIMARI3.JPG",
      "assets/images/lake-images/JARIMARI4.JPG"
    ]
  },
  {
    name: "Jogila Lake",
    description: "Offering a picturesque view with dancing reflections of trees. Jogila is a local favorite for its calm atmosphere and scenic paths.",
    image: "assets/images/lake-images/JOGALA1.JPG",
    moreImages: [
      "assets/images/lake-images/JOGALA2.JPG",
      "assets/images/lake-images/JOGALA3.JPG",
      "assets/images/lake-images/JOGALA4.JPG"
    ]
  },
  {
    name: "Kalwa Shivaji Lake",
    description: "Shivaji Lake in Kalwa, formerly known as Mafatlal Lake, is the largest lake in the Kalwa ward area. It is visible from the railway tracks near Kalwa station. Over time, dense settlements and slums have surrounded the lake. A Ganesh immersion ghat has been constructed near the entrance. Maintenance is partly managed by the Ganesh Fisherman\u2019s Association. The lake has natural springs that maintain good water levels even during summer. Some statues and minor beautification elements have been added. However, tree cover around the lake is limited. Urban congestion has reduced its original size and ecological quality. Though it remains an important water reservoir, systematic purification, tree plantation and environmental restoration are necessary. With joint efforts from authorities and citizens, it can regain its former glory.",
    image: "assets/images/lake-images/KALWA SHIVAJI1.JPG",
    moreImages: [
      "assets/images/lake-images/KALWA SHIVAJI2.JPG",
      "assets/images/lake-images/KALWA SHIVAJI2 (2).JPG"
    ]
  },
  {
    name: "Kamal Lake",
    description: "Kamal Lake, also known as Lotus Lake, is located in Gandhinagar near Kopri in Thane city, close to the boundary between Thane and Mumbai. Historically, Thane and Mumbai were closely connected regions, and many lakes that were once part of Thane later became part of Mumbai, such as Tulsi Lake in Sanjay Gandhi National Park. Kamal Lake, however, still remains within the municipal limits of Thane and continues to preserve its historical significance. The lake lies in a residential neighborhood surrounded by areas such as Anand Nagar, Gandhinagar and Mulund, and has witnessed major social and geographical transformations over time. Today the lake is enclosed by protective walls and includes a walking track, park area and children’s play equipment, making it a small but pleasant recreational space for local residents. Elderly people often take walks around the lake, while children use the park area for playing. Nearby landmarks such as Shri Vitthal Rakhumai Temple and the Vitthal Rakhumai Cultural Theatre contribute to the cultural importance of the area, where festivals like Ashadhi and Kartiki are celebrated enthusiastically. Although the surroundings of the lake are relatively clean and peaceful, the water quality has become a concern. The lake, which once may have been filled with blooming lotus flowers, now shows signs of pollution with oily layers and chemical residues on the surface. Experts believe that desilting the lake, installing a proper water purification system and identifying pollution sources are necessary steps to restore the lake’s ecological health. With active community participation and proper maintenance, Kamal Lake can continue to serve as an important environmental and cultural asset for Thane city.",
    image: "assets/images/lake-images/KAMAL1.JPG",
    moreImages: [
      "assets/images/lake-images/KAMAL2.JPG"
    ]
  },
  {
    name: "Kausa Lake",
    description: "Kausa Lake is located near Kausa area on the Mumbra–Panvel Road in Thane. Historically, it was a very large lake and played an important role in maintaining the ecological balance of the region. Over time, however, urban development, road construction, gardens, and buildings have reduced the size of the lake considerably. Today, the lake is surrounded by roads on two sides and residential buildings on the other sides. Protective walls and nets have been installed around the lake, and there is also a garden and children’s play area nearby. Earlier, sewage water from a nearby drain used to enter the lake and pollute it, but local residents took the initiative to separate the drain from the lake by constructing a wall and road. Efforts were also made by local leaders to beautify the lake with fountains, lighting, and landscaping, which made it attractive, especially at night. However, lack of continuous maintenance and security has affected the condition of the lake. Garbage dumping and lack of awareness among local residents remain major challenges. Even though Kausa Lake still has natural beauty and historical importance, it requires better management, awareness, and conservation efforts to protect it and restore its importance as a natural asset of Thane city.",
    image: "assets/images/lake-images/KAUSA1.JPG",
    moreImages: [
      "assets/images/lake-images/KAUSA2.JPG",
      "assets/images/lake-images/KAUSA3.JPG"
    ]
  },
  {
    name: "Khardipada Lake",
    description: "Khardipada Lake is located in Khardipada village near the Mumbra–Panvel Road area of Thane. In earlier times, the village was surrounded by natural landscapes such as mangroves, paddy fields, and vegetation, which created a calm and eco-friendly environment. The lake itself was a natural water body formed in a shallow rocky basin, which filled with rainwater during monsoon and partially dried in summer. The villagers used to visit the lake for activities such as swimming, fishing, and spending leisure time. However, with rapid urban development in recent decades, the area has changed significantly. New roads and construction projects have made the village easily accessible, which attracted builders and led to the development of large housing complexes around the lake. As a result, the natural beauty and peaceful atmosphere of the area have been affected. Although there are some remains of beautification work done earlier by the municipal corporation, the lake today appears neglected and difficult to access because it is hidden between large buildings. If proper conservation efforts are not taken soon, the ecological benefits and historical importance of Khardipada Lake may be lost for future generations.",
    image: "assets/images/lake-images/KHARDIPADA.JPG",
    moreImages: [
      "assets/images/lake-images/KHARDIPADA2.JPG",
      "assets/images/lake-images/KHARDIPADA3.JPG"
    ]
  },
  {
    name: "Kharegaon Lake",
    description: "Kharigaon Lake, located near Kalwa and close to the railway line, is a revived and beautified historic lake renamed in 2011 as Senior Freedom Fighter Nagnath Mahadu Mhatre Lake. It now covers around 4116 sq. meters and is maintained by the Ganesh Machhimar Cooperative Society. The lake has two gates, a separate Ganesh idol immersion pond, and a beautiful Ganesh temple on its bank. Festivals and community gatherings are regularly held here. Facilities include a jogging track, children\u2019s play equipment, toilets, seating areas, and landscaped trees such as Umbar, Pimpal, and Coconut. Musical ambiance, fountains, and white ducks add charm to the environment. Boating facilities are available, making it a recreational hub. The lake water is clean due to natural underground water sources. Various fish, turtles, and snakes coexist here. It is considered a cultural and social center for the community. This lake stands as a successful example of lake renovation and citizen responsibility.",
    image: "assets/images/lake-images/KHAREGAON 1.JPG",
    moreImages: [
      "assets/images/lake-images/KHAREGAON 2.JPG",
      "assets/images/lake-images/KHAREGAON 3.JPG",
      "assets/images/lake-images/KHAREGAON 4.JPG"
    ]
  },
  {
    name: "Khidkali Lake",
    description: "Situated near the famous Khidkali Temple, this lake is a spiritual and natural destination. The backdrop of hills makes it exceptionally beautiful.",
    image: "assets/images/lake-images/KHIDKALI1 (1).JPG",
    moreImages: [
      "assets/images/lake-images/KHIDKALI1 (2).JPG",
      "assets/images/lake-images/KHIDKALI3.JPG",
      "assets/images/lake-images/KHIDKALI4.JPG",
      "assets/images/lake-images/KHIDKALI5.JPG"
    ]
  },
  {
    name: "Madarde Lake",
    description: "One of the most expansive lakes in Thane's rural belt. Its massive size and the open sky above create a truly grand atmosphere.",
    image: "assets/images/lake-images/MADARDE1.JPG",
    moreImages: [
      "assets/images/lake-images/MADARDE2.JPG",
      "assets/images/lake-images/MADARDE3.JPG",
      "assets/images/lake-images/MADARDE4 (1).JPG",
      "assets/images/lake-images/MADARDE4 (2).JPG",
      "assets/images/lake-images/MADARDE5 (1).JPG",
      "assets/images/lake-images/MADARDE5 (2).JPG"
    ]
  },
  {
    name: "Mafatlal Lake",
    description: "Mafatlal Lake consists of two artificial twin lakes (Mafatlal 1 & 2) created by the Mafatlal Engineering Company by digging rocks for industrial use. A road built across the middle divided the lake into two parts. These lakes are nearly 100 years old and stand as witnesses to Kalwa\u2019s transformation. A tall stone water tank building near the lake once supplied water to the company but is now dilapidated. During monsoon, both lakes merge and overflow. Today, the lakes are neglected, filled with garbage, dirt, and sewage due to lack of protection walls or railings. They are not officially listed under the Thane Municipality, so no authority takes responsibility for their upkeep. NGO \u201cTalav\u201d once removed several bags of waste, but pollution remains severe. Biodiversity is minimal, with only some fishing activity continuing. Legal disputes after the company\u2019s closure in 1980 worsened their condition. Experts suggest shoreline restoration could revive aquatic life. With community awareness and conservation efforts, these historic lakes can be restored before they disappear completely.",
    image: "assets/images/lake-images/MAFATLAL1.JPG",
    moreImages: [
      "assets/images/lake-images/MAFATALAL2.JPG",
      "assets/images/lake-images/MAFATALAL3.JPG"
    ]
  },
  {
    name: "Mogharpada Lake",
    description: "Mogharpada Lake, also called Dawle Lake, is located in Mogharpada village near Ovala. It has a unique almond or heart-shaped structure. A jogging track and stone boundary have been constructed around the lake. Social organizations have undertaken tree plantations, increasing greenery. Compared to other lakes, the water appears relatively clean. Fish and seasonal birds, including seagulls, are seen here. A Jarimari Mata temple nearby enhances its cultural value. The lake area is peaceful and less crowded, providing a relaxing environment. However, urbanization in surrounding areas poses a future threat. Though currently in better condition than many lakes, consistent monitoring and biodiversity protection are essential. Sustainable planning can preserve its ecological and cultural identity.",
    image: "assets/images/lake-images/MOGHARPADA1.JPG",
    moreImages: [
      "assets/images/lake-images/MOGHARPADA2.JPG",
      "assets/images/lake-images/MOGHARPADA3.JPG"
    ]
  },
  {
    name: "Mumbreshwar Lake",
    description: "The lake near the Mumbreshwar Mahadev Temple in Mumbra is closely connected with the religious and historical heritage of the region. Mumbra was originally a small and scenic village located between Mumbra Creek in the east and the Parsik Hills in the west. Among the ancient temples of the region, the Mumbreshwar Mahadev Temple stands as an important spiritual landmark believed to be around 350 years old, while the lake situated in front of the temple is considered even older. The temple complex contains several self-manifested (swayambhu) idols including Lord Mahadev, Nandi, Ganesh, Hanuman and Kalbhairav, which were reportedly discovered during excavations centuries ago. The shrine of Mahadev lies under a Bilva tree, while the idol of Kalbhairav stands under a Jambhul tree, both of which are believed to be very old and still flourishing. Historically, the surrounding area was rich in biodiversity with trees like umbar, coconut, mango, jackfruit and karanj growing around the lake and temple. The temple complex also includes a large goshala, prayer halls, and facilities where religious activities such as Ramayan recitations, bhajans, kirtans, and festivals like Mahashivratri and Dussehra are celebrated with great enthusiasm. Despite the temple’s active religious life and social services like yoga classes and an Ayurvedic clinic, the natural lake nearby appears neglected. Although the Thane Municipal Corporation constructed cement walls and installed a water purification system, the lake still suffers from algae growth, garbage accumulation and lack of proper maintenance. This once-beautiful natural water body therefore needs careful conservation and community involvement so that both the temple and the lake can continue to remain important cultural and environmental landmarks of Mumbra.",
    image: "assets/images/lake-images/MUMBRESHWAR1.JPG",
    moreImages: [
      "assets/images/lake-images/MUNNBRESHWAR2.JPG",
      "assets/images/lake-images/MUMBRESHWAR3.JPG"
    ]
  },
  {
    name: "Nar Lake",
    description: "Naar Lake is located near Ovala village on Ghodbunder Road in Thane. Although Thane is known as the “City of Lakes,” this lake is relatively unknown and often neglected. In earlier times, Naar Lake was much larger and an important natural water body in the area. However, over time the lake has been affected by encroachments, pollution, and uncontrolled urban development. The lake is surrounded by chawls, slums, and buildings, which has reduced its size and natural beauty. Aquatic plants like water hyacinth cover much of the water surface, and untreated sewage, plastic waste, and drainage water have further polluted the lake. Because of these conditions, the lake area has become unhygienic and filled with mosquitoes. The situation highlights the need for immediate conservation efforts such as desilting, building protective walls, water purification, and proper waste management. The lake represents the environmental challenges faced by growing cities like Thane. Protecting and restoring Naar Lake is important not only for maintaining biodiversity but also for preserving the natural heritage of Thane for future generations.",
    image: "assets/images/lake-images/NAR1.JPG",
    moreImages: [
      "assets/images/lake-images/NAR2.JPG"
    ]
  },
  {
    name: "Ovala Lake",
    description: "Ovala Lake is one of the most critically neglected lakes in Thane. It is located behind residential buildings near Ovala bus stop. Over time, heavy encroachments have surrounded it from all sides. The lake is filled with aquatic weeds, plastic waste and sewage water from nearby houses. There is no proper access road or signboard indicating its presence. Due to urbanization, its size has significantly reduced. The foul smell and polluted condition reflect severe environmental degradation. Even many local residents are unaware that a lake exists there. It lacks any protective wall, beautification or maintenance system. Without urgent intervention, this lake may disappear completely. Immediate revival measures, sewage control and cleaning drives are necessary to save it.",
    image: "assets/images/lake-images/OVALA1.JPG",
    moreImages: [
      "assets/images/lake-images/OVALA2.JPG",
      "assets/images/lake-images/OVALA3.JPG",
      "assets/images/lake-images/OVALA4.JPG"
    ]
  },
  {
    name: "Pandurang Bhoir Lake",
    description: "Pandurang Ba. Bhoir Lake, popularly known as Kopri Lake or Tolnaka Lake, is located near Kopri village in the eastern part of Thane city, close to the boundary between Thane and Mumbai. The lake has historical importance and is considered one of the ancient Shilahara-period lakes of the region. Kopri village itself has a long cultural history, inhabited mainly by the Koli fishing community and Agri salt-pan workers, who have preserved their traditional lifestyle for generations. The lake has also played a significant role in religious and social activities, particularly during Ganeshotsav, when idols of Lord Ganesha are immersed here. In recent decades, however, the condition of the lake has deteriorated drastically due to pollution and urban development. Although beautification work such as the construction of a grand entrance, protective walls and an immersion ghat was carried out around 2015, the lake lacks proper systems for water purification and oxygenation. Environmental problems such as garbage dumping, foul smell from nearby dumping grounds and loss of biodiversity have seriously affected the lake ecosystem. The surrounding area shows a stark contrast: on one side there are modern residential societies while on the other side poor settlements and waste dumping areas exist. The lake still contains sufficient water due to a natural spring, but environmental experts warn that the biodiversity is under threat, especially after incidents of mass fish deaths in recent years. If proper conservation measures are not implemented soon, this historically important lake may disappear, causing irreparable ecological damage and reducing the number of natural lakes in Thane, a city known for its rich network of water bodies.",
    image: "assets/images/lake-images/PANDURANGA BHOIR.JPG",
    moreImages: [
      "assets/images/lake-images/PANDURANGABHOIR1.JPG",
      "assets/images/lake-images/PANDURANG BHOIR2.JPG"
    ]
  },
  {
    name: "Phadkepada Lake",
    description: "Phadkepada Lake is a natural lake located near Phadkepada village close to the road connecting Mumbra and Diva. In the past, the lake was surrounded by green paddy fields and natural vegetation, with colorful lotuses and various water birds adding to its beauty. The lake was known for its clean water and natural ecosystem. In 2013–14, the Thane Municipal Corporation undertook a lake conservation and beautification project, which included paving the area around the lake and constructing a Shiva temple called Phadakeshwar Mandir near its bank. However, an important step—building a proper retaining wall—was not completed. Because the lake lies close to the road and receives heavy rainwater flowing down from nearby hills, it often overflows during the monsoon season and floods the road. In one such incident in July 2022, a car accidentally drove into the flooded lake during heavy rain. Another issue is the accumulation of sludge in the lake, which has reduced its depth and water holding capacity. Experts suggest measures such as desilting, building protective walls, improving drainage, and creating public facilities like walking tracks and gardens. Proper planning and cooperation between the municipal corporation and local leaders can help restore the lake and preserve its natural beauty.",
    image: "assets/images/lake-images/PHADKEPADA1.JPG",
    moreImages: [
      "assets/images/lake-images/PHADKEPADA2.JPG",
      "assets/images/lake-images/PHADKEPADA3.JPG"
    ]
  },
  {
    name: "Rayladevi Lake",
    description: "Railadevi Lake is located near Teen Hath Naka between Raheja Garden and Wagle Estate. It is one of the largest lakes from the Shilahara period, covering around 8 hectares. The lake has strong religious significance due to nearby Raileshwar and Railadevi temples. A footpath connects the temples along the lake bank. Although boating facilities exist, pollution from garbage and religious waste has increased. Broken steps and missing protective rocks make the lake unsafe. More than half of the water surface is covered with aquatic plants and algae. Migratory birds and fish are still present, showing ecological value. Despite its size and central location, maintenance is inadequate. Comprehensive cleaning, desilting and safety infrastructure are urgently required. With proper planning, it can become a major tourist and recreational attraction.",
    image: "assets/images/lake-images/RAYLADEVI1.JPG",
    moreImages: [
      "assets/images/lake-images/RAYLADEVI2.JPG",
      "assets/images/lake-images/RAYLADEVI3.JPG"
    ]
  },
  {
    name: "Saba Lake",
    description: "Saba Lake is located in Saba village near Diva, close to Siddhant Park housing society. The lake has become a unique attraction because a Ganesh Temple has been built in the middle of the lake, which can be reached through a wooden bridge constructed above the water. This temple and bridge give the lake a distinctive and scenic appearance. The lake is surrounded by residential buildings on one side and a small park on the other, making it a pleasant recreational spot for local residents. The water of the lake supports fish and other aquatic life, and the surrounding trees create a cool and breezy environment. The area around the lake is clean, quiet, and attractive, especially for families and children who visit the park and temple. Festivals and social events are also organized here, which increases the cultural importance of the lake. The maintenance and beautification of the lake are mainly handled by the Siddhant Park Society, although there is little visible involvement from the municipal corporation. Despite being small in size, the lake provides peace and relaxation to visitors. As the Diva area becomes more densely populated, preserving Saba Lake becomes important for maintaining environmental balance and protecting this historical natural resource.",
    image: "assets/images/lake-images/SABA1.JPG",
    moreImages: [
      "assets/images/lake-images/SABA2.JPG",
      "assets/images/lake-images/SABA4.JPG",
      "assets/images/lake-images/SABA3 (1).JPG",
      "assets/images/lake-images/SABA3 (2).JPG",
      "assets/images/lake-images/SABA3 (3).JPG"
    ]
  },
  {
    name: "Shil Lake",
    description: "Shil Lake is a historic natural water body located near Shilphata, though it remains hidden behind garages and industrial sheds. There are no information boards indicating its importance. The lake once had natural rainwater inflow from nearby hillocks and supported a rich aquatic ecosystem. Today, it is surrounded by tin partitions and neglected structures. Industrial waste, sewage, and household garbage are dumped into the lake. Rapid urbanization, construction, and altered natural water channels have caused severe ecological damage. The original Agri-Koli population has reduced, and many new settlers lack connection to the lake\u2019s heritage. The lake reportedly has live water streams along its inner boundary, making it perennial. However, lack of protection and administration support has pushed it toward deterioration. Traditional fisheries and biodiversity have declined drastically. With proper awareness, administrative action, and community involvement, Shil Lake can regain its lost glory.",
    image: "assets/images/lake-images/SHIL1.JPG",
    moreImages: [
      "assets/images/lake-images/SHIL2.JPG",
      "assets/images/lake-images/SHILL3.JPG"
    ]
  },
  {
    name: "Taklemamancha Lake",
    description: "A well-loved local lake that provides a cooling presence in its neighborhood. It's a quiet haven where one can sit and enjoy the water.",
    image: "assets/images/lake-images/TAKLEMAMANCHA1.JPG",
    moreImages: [
      "assets/images/lake-images/TAKLEMAMANCHA2.JPG",
      "assets/images/lake-images/TAKLEMAMANCHA3.JPG"
    ]
  },
  {
    name: "Turfapada Lake",
    description: "Turfapada Lake, also known as Mama Talao, is located behind Hiranandani Estate near the Bramhand area. It has historical roots similar to the Malgujari lakes of Vidarbha. The lake is surrounded by dense tree plantations, making it an \u201coxygen hub\u201d for nearby residents. Recent efforts have added partial jogging tracks and entry gates, but development work is incomplete. The lake has a natural rocky structure and deep water. Unfortunately, water quality has deteriorated over time, and aquatic life is rarely visible. Local residents sometimes misuse the lake for washing clothes or swimming. Although fencing is installed for safety, its strength is questionable. The natural surroundings provide a calm and peaceful atmosphere. With proper water purification, biodiversity conservation and safety improvements, this lake can become an important eco-friendly recreational spot.",
    image: "assets/images/lake-images/TURFAPADA1.JPG",
    moreImages: [
      "assets/images/lake-images/TURFAPADA2.JPG",
      "assets/images/lake-images/TURFAPADA3.JPG",
      "assets/images/lake-images/TURFAPADA4.JPG",
      "assets/images/lake-images/TURFAPADA5.JPG"
    ]
  }
];

let currentIndex = 0;

// Safety check for GSAP
const hasGSAP = typeof gsap !== 'undefined';

// DOM Elements
const explorationSection = document.getElementById("explorationSection");
const lakeGridEl = document.getElementById("lakeGrid");
const modal = document.getElementById("detailsModal");
const closeModalBtn = document.querySelector(".close-modal");
const collageGrid = document.getElementById("collageGrid");
const modalLakeName = document.getElementById("modalLakeName");
const modalLakeDescription = document.getElementById("modalLakeDescription");

// Lake display logic removed as per background simplification request



// Render Lake Cards Grid
function renderGrid() {
  try {
    if (!lakeGridEl) {
      console.error("lakeGridEl not found!");
      return;
    }
    lakeGridEl.innerHTML = ""; // Clear existing
    const fragment = document.createDocumentFragment();
    
    allLakes.forEach((lake, i) => {
      const card = document.createElement("div");
      card.classList.add("lake-card");

      card.innerHTML = `
        <div class="lake-card-image">
          <img src="${lake.image}" alt="${lake.name}" draggable="false" loading="lazy">
        </div>
        <div class="lake-card-info">
          <h3>${lake.name}</h3>
          <div class="card-actions"></div>
        </div>
      `;

      const actionsDiv = card.querySelector(".card-actions");

      const exploreBtn = document.createElement("button");
      exploreBtn.classList.add("explore-more-btn");
      exploreBtn.innerText = "Details";
      exploreBtn.addEventListener("click", () => openLakeDetails(i));

      actionsDiv.appendChild(exploreBtn);
      fragment.appendChild(card);

      const img = card.querySelector('img');
      img.setAttribute('draggable', 'false');
      img.dataset.lakeName = lake.name;
    });
    
    lakeGridEl.appendChild(fragment);
    console.log(`Rendered ${allLakes.length} lakes in grid.`);
  } catch (err) {
    console.error("Error in renderGrid:", err);
  }
}

// Navigation functions removed as no longer needed for grid view

// Filter Function with Debounce for performance
let searchTimeout;
function filterLakes() {
  clearTimeout(searchTimeout);
  searchTimeout = setTimeout(() => {
    const input = document.getElementById("searchLake");
    if (!input) return;
    const filter = input.value.toUpperCase();
    const cards = document.querySelectorAll(".lake-card");

    cards.forEach(card => {
      const title = card.querySelector("h3").innerText;
      if (title.toUpperCase().indexOf(filter) > -1) {
        card.style.display = "flex";
      } else {
        card.style.display = "none";
      }
    });
    // Refresh ScrollTrigger since layout changed
    if (typeof ScrollTrigger !== 'undefined') ScrollTrigger.refresh();
  }, 250);
}

// Modal Logic wrapper
function openLakeDetails(index) {
  currentIndex = index;
  openModal();
}

function openModal() {
  try {
    const lake = allLakes[currentIndex];
    if (!lake) return;
    if (modalLakeName) modalLakeName.innerText = lake.name;
    if (modalLakeDescription) modalLakeDescription.innerText = lake.description;

    // Clear and fill collage
    if (collageGrid) {
      collageGrid.innerHTML = "";

      // Filter for unique images and limit to 3
      let imageSet = new Set([lake.image, ...(lake.moreImages || [])]);
      let imagesToLoad = Array.from(imageSet).slice(0, 3);

      imagesToLoad.forEach((src) => {
        const wrapper = document.createElement("div");
        wrapper.classList.add("collage-item-wrapper", "watermark-container");

        const img = document.createElement("img");
        img.src = src;
        img.alt = lake.name;
        img.classList.add("collage-item");
        img.dataset.lakeName = lake.name;

        wrapper.appendChild(img);
        collageGrid.appendChild(wrapper);
      });
    }

    if (modal) {
      modal.style.display = "flex";
      // Force reflow
      modal.offsetHeight;
      modal.classList.add("open");
    }

    // GSAP Animation for Modal
    if (hasGSAP) {
      const tl = gsap.timeline();

      tl.from(".modal-info", {
        x: 100,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      });

      tl.from(".collage-item-wrapper", {
        opacity: 0,
        y: 50,
        stagger: 0.1,
        duration: 0.8,
        ease: "power3.out"
      }, "-=0.6");
    }
  } catch (err) {
    console.error("Error in openModal:", err);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("img").forEach(img => {
    img.setAttribute("draggable", "false");
  });
});

function closeModal() {
  if (hasGSAP) {
    gsap.to(".modal-content", {
      opacity: 0,
      scale: 0.9,
      y: 20,
      duration: 0.3,
      ease: "power2.in",
      onComplete: () => {
        if (modal) modal.classList.remove("open");
        // Clear GSAP properties so CSS can take over or it doesn't block
        gsap.set(modal, { clearProps: "all" });
        gsap.set(".modal-content", { clearProps: "all" });
      }
    });
  } else {
    if (modal) modal.classList.remove("open");
  }
}

// Initialize
function init() {
  // Mobile Menu Toggle logic
  const mobileMenuBtn = document.getElementById('mobileMenuBtn');
  const navLinks = document.querySelector('.nav-links');
  
  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener('click', () => {
      mobileMenuBtn.classList.toggle('active');
      navLinks.classList.toggle('active');
    });

    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenuBtn.classList.remove('active');
        navLinks.classList.remove('active');
      });
    });
  }

  console.log("Initializing Thane Lakes app...");
  renderGrid();

  if (closeModalBtn) closeModalBtn.onclick = closeModal;

  if (modal) {
    modal.onclick = (e) => {
      if (e.target === modal) closeModal();
    };
  }
}

// Landing Page Logic
const landingPage = document.getElementById("landingPage");
const startExploreBtn = document.getElementById("startExploreBtn");

if (landingPage) {
  // Setup Scroll Indicator
  const scrollIndicator = document.querySelector('.scroll-indicator');
  if (scrollIndicator) {
    scrollIndicator.addEventListener('click', () => {
      const firstContent = document.querySelector('.landing-content-section');
      landingPage.scrollTo({
        top: firstContent.offsetTop,
        behavior: 'smooth'
      });
    });
  }

  // Setup Scroll Animations
  if (typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

    gsap.utils.toArray('.scroll-anim').forEach((block) => {
      gsap.from(block, {
        scrollTrigger: {
          trigger: block,
          scroller: ".landing-page",
          start: "top 85%",
          toggleActions: "play none none reverse"
        },
        y: 50,
        opacity: 0,
        duration: 1,
        ease: "power3.out"
      });
    });
  }

  const hideLandingPage = () => {
    landingPage.classList.add("hidden");
    if (explorationSection) explorationSection.classList.add("active");

    // Give a slight delay before triggering the intro animations
    setTimeout(() => {
      if (hasGSAP) {
        gsap.from(".exploration-header", {
          opacity: 0,
          y: -50,
          duration: 0.6,
          clearProps: "all"
        });

        // Simpler, faster stagger for visible cards instead of per-card scrolltriggers
        gsap.from(".lake-card", {
          opacity: 0,
          y: 20,
          duration: 0.5,
          stagger: 0.05,
          ease: "power1.out",
          clearProps: "all"
        });
      }
    }, 300);
  };

  if (startExploreBtn) startExploreBtn.addEventListener('click', hideLandingPage);
  const heroExploreBtn = document.getElementById("heroExploreBtn");
  if (heroExploreBtn) heroExploreBtn.addEventListener('click', hideLandingPage);

  const heroScrollBtn = document.getElementById("heroScrollBtn");
  if (heroScrollBtn) {
    heroScrollBtn.addEventListener('click', () => {
      const section = document.querySelector('.landing-content-section');
      if (section) landingPage.scrollTo({ top: section.offsetTop, behavior: 'smooth' });
    });
  }

  const backToHomeBtn = document.getElementById("backToHomeBtn");
  if (backToHomeBtn) {
    backToHomeBtn.addEventListener('click', () => {
      landingPage.classList.remove("hidden");
      if (explorationSection) explorationSection.classList.remove("active");
    });
  }

  // Visitor Counter Logic
  const visitorCountElement = document.getElementById("visitorCount");
  if (visitorCountElement) {
    const updateVistorCount = async () => {
      try {
        const response = await fetch("https://api.counterapi.dev/v1/thanelakeswebsite/visits/up");
        const data = await response.json();
        const displayCount = parseInt(data.count || 0);
        visitorCountElement.textContent = displayCount.toLocaleString();
      } catch (error) {
        console.error("Failed to fetch visitor count:", error);
        let localCount = parseInt(localStorage.getItem("total_explorers")) || 0;
        if (!sessionStorage.getItem("counted")) {
          localCount++;
          localStorage.setItem("total_explorers", localCount);
          sessionStorage.setItem("counted", "true");
        }
        visitorCountElement.textContent = localCount.toLocaleString();
      }
    };
    updateVistorCount();
  }
} else {
  // If no landing page, do animations straight away
  if (hasGSAP) {
    gsap.from(".top-header", {
      opacity: 0,
      y: -50,
      duration: 1,
      delay: 0.5,
      clearProps: "all"
    });

    gsap.from(".explore-btn:not(.landing-btn)", {
      opacity: 0,
      x: -50,
      duration: 1,
      delay: 0.8,
      clearProps: "all"
    });
  }
}
// Start
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  init();
}


