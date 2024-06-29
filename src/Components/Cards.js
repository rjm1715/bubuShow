import React from 'react'
import Card from "../Components/Card"
import NavbarOthers from './NavbarOthers'
import card1 from "../images/cards/card1.jpg"
import card2 from "../images/cards/card2.jpg"
import card3 from "../images/cards/card3.jpg"
import card4 from "../images/cards/card4.jpg"
import card5 from "../images/cards/card5.jpg"
import card6 from "../images/cards/card6.jpg"
import card7 from "../images/cards/card7.jpg"
import card8 from "../images/cards/card8.jpg"
import card9 from "../images/cards/card9.jpeg"
import card10 from "../images/cards/card10.jpeg"

const headline1="Attire dilemma";
const headline9="Forever together!";
const headline8="Movie time";
const headline7="Furious call";
const headline6="Beginning";
const headline5="The first valentine's!";
const headline4="Longest VC";
const headline3="College secret";
const headline2="Pizza at Kanpur";
const headline10= "First visit to Udupi";


const story10= `On the magical day of February 16, 2024, Rajat's heart leapt with joy as he counted down the moments until he would be reunited with his beloved Devanshi after a nearly agonizing separation of nine months. Rajat had recently joined TCS, a long-awaited career move that had kept him waiting for half a year. Yet, amidst the excitement, misunderstandings had cast a shadow over their love—particularly his inadvertent oversight on Devanshi's January birthday and his rush back from Kerala without seeing her in Udupi. Despite these trials, fate had brought them back together as Rajat settled into his new role at the Innovation Lab.

Their reunion was meticulously planned—a weekend carefully chosen as Rajat braced for his new responsibilities and Devanshi prepared to conclude her MBA's first year before a lengthy break in Kanpur. Rajat meticulously organized every detail, with Devanshi's invaluable assistance, ensuring their travel, accommodations, activities, and meals were perfectly orchestrated.

Setting off from work on the evening of February 16th, Rajat embarked on a journey that mirrored the urgency of his longing. From Kazzhakuttam to Varkala Station, and then onwards to Mangaluru Junction without reservations, every mile brought him closer to Devanshi. He kept her updated on his progress, determined not to give her any reason for concern.

Upon arriving in Udupi in the early morning hours, Rajat hurriedly sought out a token of his affection—a box of chocolates, a sweet tradition between them that spoke volumes of his thoughtfulness. Devanshi, ever practical, had arranged a scooty for their convenience, a testament to her resourcefulness and readiness to join him in their adventures.

Their day unfolded like a symphony of love—a shared visit to DMart where Rajat's shopping habits contrasted with Devanshi's deliberate selections, a laughter-filled lakeside chat, and a hotel room adorned by Devanshi for their intimate movie session ;). True to their hearts' rhythm, they cherished each moment, from sunset walks on a tranquil beach to cozy dinners and late-evening movie ;), savoring every second before Devanshi's return to her college hostel.

As dawn broke, Rajat found solace in the scent of Devanshi lingering on their shared bed, a fleeting reminder of their perfect moments together. The morning's delay of Rajat's train offered them a precious gift—a final sunrise movie date ;) before bidding  farewell at the station, surrounded by the serene ambiance that mirrored their deep affection.

For Rajat and Devanshi, this reunion was nothing short of magical—a testament to their enduring love and the indelible memories they created with each tender glance, each shared laugh, and each loving touch. The meet is still considered the best one till now!`;


const story1= "In the early afternoon of August 28th, 2019, IMED Pune was abuzz with excitement, all set to welcome the newest crop of students. Meanwhile, the freshers were gearing up for the epic Freshers Party 2019. Among these newcomers, we find Devanshi Bajpai, faced with the age-old dilemma: what to wear to the big event. Living in the Air Force hostel, she found herself in a fashion crisis, as her college mates were nowhere to help her, and her hostel mates had vanished, possibly off on thier Wednesday adventures. In this fashion emergency, Devanshi turned to her most beloved confidante ;) , the one and only Rajat Mishra. She summoned him via video call and presented a chaotic array of wrinkled tops, desperately seeking his sartorial counsel.\nYou see, Devanshi hadn\'t given this event a second thought, and in her eyes, her wardrobe was suddenly devoid of anything remotely suitable. Thus began the epic fashion odyssey that unfolded over the next hour or two. Together, they deliberated on the top, the palazzo pants, the choice of sandals, and even the earrings, and so on. Eventually, after a whirlwind of rejections and fashion debates, they settled on an outfit.\nHours later, when Devanshi graced the event with her presence, Rajat, being the devoted friend he was ;) , eagerly requested photos of her in the chosen attire, all ready to shower her with compliments. Little did he know that a wardrobe consultation with her mother had transpired between their video call and the event, resulting in a completely different ensemble. The photos unveiled this delightful revelation, much to Rajat\'s surprise. Nevertheless, as usual, Devanshi looked stunning in her final choice!\nAnd that\'s the saga of how a confusion for attire found its stylish resolution!";

const story2= "On the early morning of October 17th, 2021, just a few days before celebrating their second anniversary, Devanshi and Rajat were about to reunite. They had spent the past two years apart due to COVID-19 and other challenges. Finally, their long wait was coming to an end as they were going to meet in Devanshi's hometown, Kanpur.\nRecently, Rajat's father had moved to Lucknow, near Rajat, and unfortunately, he had fallen ill with dengue. Rajat had been taking care of his father. He had made sure he could visit Devanshi by completing all his tasks the day before.\nHowever, Devanshi didn't know about the case. She had planned a lovely day starting late in the morning to spend with her boyfriend. But Rajat, who had received a call from his father needing help, rushed to the hospital 15 kilometers away, delaying his journey from Lucknow to Kanpur by about two hours.\nIn the meantime, Devanshi got a bit upset with Rajat for being late. He tried his best to reach Kanpur as quickly as possible but ended up arriving in the afternoon instead of the morning. Despite this hiccup, their love prevailed. They went to the Z-square mall, had fun playing games, and shared a delicious pizza.\nBefore saying goodbye to Rajat on his journey back to Lucknow, Devanshi took him for a short ride to the Ganga barrage. It was there, in the serene beauty of the surroundings, that she made him fall even more in love with her by sharing their first kiss.\nAnd so, on that sunny afternoon, their love story continued to unfold, proving that love could conquer distance and time.";

const story3=  "On the 25th of October 2021, the last day of a three-day-long Electronics branch fest at IET Lucknow, a sweet romantic tale unfolded. Rajat had extended an invitation to Devanshi for the event, marking her very first visit to his college. \"True to her punctual nature\", Devanshi hopped on a morning bus from Kanpur, aiming to arrive by noon. Rajat, who was supposed to be her gallant escort, had an unexpected emergency to handle in the morning as a member of the organizing team. With diligence, he managed to resolve the matter and hurried to Sringar Nagar, where an anxious Devanshi had been waiting for him for nearly an hour. He tenderly apologized and they set off together, embarking on their first journey as companions.\nUpon their arrival, Rajat whisked her away to his cherished cafe, treating her to the delectable 'Kabab-Paratha,' mindful that she hadn't had her breakfast. Then, he proudly introduced her to his circle of friends at the college. As the technical events unfolded, the two decided to sneak away into the college premises for some private enjoyment. Over the course of the day, they relished the festivities of the fest and even danced together.\nLater on, Devanshi's family made an appearance at the college to retrieve her, and Rajat saw her off, bidding her a fond farewell as she departed for Kanpur.\nAmidst the privacy of the college campus, a secret blossomed, one shared only between the couple and the silent lecture theaters—their first intimate encounter, a precious memory that would forever remain hidden within the walls of that academic institution.";

const story4= "On the 3rd of November in the year 2019, the atmosphere at IET Lucknow was electric, for it was the day of the Covergence 2019 ceremony, a gathering of the Class of '94 on the college grounds. Everything was in place, and all other activities at the college were put on hold, for this day held special significance.\nIn the midst of the excitement, Rajat, a recent addition to the Class of 2019, found himself in his modest room at the first-year boys' hostel. Circumstances had kept him from attending the event, but fate had a different plan for him. His roommate, filled with enthusiasm, had disappeared for the entire day, leaving Rajat alone.\nBut this solitude turned out to be a blessing in disguise, for it gave Rajat the chance to connect with his heart's desire, Devanshi. At 9 AM that morning, he initiated a video call, hoping to find her awake. To his joy, he discovered she was still in the gentle embrace of sleep. With a bit of cajoling, he convinced her to wake up and talk to him.\nTheir conversation was a sweet symphony of love and longing, covering topics that were impossible to recount, even for them. Amidst their talk, they managed their daily routines, but time seemed to slip away unnoticed as their connection deepened. Before they knew it, they had set an unbroken new personal record of a video call lasting more than 12 hours in a single day.\nTheir love story had taken an enchanting turn, transcending time and space as they held onto each other through the magic of technology, cherishing every moment they shared."

  const story5= "Rajat was swamped with college commitments as he navigated the tumultuous first year, especially with his first semester winding down, and the pressure of looming assignment deadlines and assessments bearing down upon him.\nOn the flip side, Devanshi, his girlfriend, had already triumphed over her own first semester. Their history together included a significant date: the 14th of February 2020, their special Valentine's Day.\nHowever, there was a marked difference between the two. Rajat often forgot important dates, but Devanshi was different. She was thoughtful and caring, a quality that set her apart. A few days before Valentine's Day, she cleverly got his address from him, even though he had no idea why she needed it.\nThen came the big day, and when Rajat returned to his hostel in the evening, a surprise was waiting at his door. It caught him off guard and deeply touched his heart. He found a peaceful corner in the hostel to call Devanshi and opened the box of love she had sent him. Inside, he discovered a delightful brownie and pastry. This sweet gesture deepened his love for her even more.";

  const story6= "On the 29th of October 2019, three days had passed since Devanshi and Rajat reunited in Jodhpur during their college break for Diwali. In those three days, they spent a lot of time together, going out on multiple outings and enjoying each other's company.\nDevanshi was very excited about these meetings, but Rajat felt a bit nervous. You see, on the 5th of September 2019, Rajat had confessed to Devanshi that he liked her. Her response was to say no to his proposal but suggested they remain friends. Their mutual friend advised Rajat to express his feelings and care for her in the hope of changing her mind. During these few days, he intended to propose again but couldn't find the right moment.\nHowever, on the late evening of the 29th of October, Devanshi and Rajat found themselves at one of Devanshi's favorite places, the DCafe restaurant. Rajat finally mustered the courage to face his feelings. However, just as he was about to speak, Devanshi received a call from her home and had to leave urgently. Rajat took her back to her neighborhood but stopped the scooter near a park. There, he gathered his thoughts and proposed to her. To his joy, she gracefully accepted his proposal.\nNow, Rajat felt like he was floating on air as he accompanied Devanshi back to her home. During the ride, Devanshi rested her chin on his shoulder, and it gave him a thrilling and entirely new sensation. That was the start of their journey together, and with each passing day, their love only growing stronger.";

  const story7="After attending his brother's wedding, Rajat returned to Lucknow with a burning desire to meet Devanshi. Devanshi wanted to visit Lucknow too, but she needed a good excuse, and that's where her friend came in. Her friend played a crucial role in the excuse and was the reason Devanshi's family gave her permission to go to Lucknow. They decided on the 16th of February 2022 as the perfect date for their reunion.\nUnfortunately, things took an unexpected turn. Devanshi's friend suddenly had an engagement on the same day, and their plans seemed on the verge of falling apart. Rajat, however, wasn't willing to accept a delay in their meeting. Devanshi found herself caught between her friend and Rajat, and she thought Rajat was being unreasonable and stubborn.\nThankfully, Devanshi's friend managed to resolve her engagement issue and agreed to go to Lucknow on the same day. So, they all set off for Lucknow, though Devanshi was still a little upset.\nOn that eventful day, as they were heading to their meeting spot, Rajat lost his wallet. It was a frustrating setback, but they didn't let it dampen their spirits.\nThey eventually smoothed over Devanshi's anger and decided to visit Janeshwar Mishra Park together. Something magical happened there: a stranger recognized them as a couple, which brought smiles to their faces. And that's how a initially upset Devanshi met Rajat on that day, amidst a backdrop of unexpected twists and turns.";

  const story8="On the late night of June 24th, 2021, Devanshi and Rajat made a plan to watch a movie together. The movie they chose was called \"Roohi,\" a new and popular film. What made this movie special was that it was the very first time Devanshi and Rajat watched a movie online together. Even more wonderful, it was their first time watching any movie together as a couple. They had a great time watching the movie and spent a beautiful evening together!";

  const story9="On May 25th, 2023, Rajat was getting ready to visit Kanpur, while Devanshi was about to leave to begin a new chapter of her life in Udupi, via Delhi, as she pursued an MBA. They knew that they wouldn't have many chances to meet for a while, so this meeting held a special significance as it might be their last for some time. Their excitement to see each other was palpable.\nInterestingly, Rajat, who often struggled with punctuality, managed to get everything in order this time and began his journey as planned. To preserve his phone battery, he opted not to share his live location with Devanshi. Instead, he promised to update her on his whereabouts. However, true to his habits, he ended up making a mistake and informed Devanshi only when he was about to enter the city. This led to another one of Devanshi's trademark scoldings that had a special place in his heart.\nDespite this hiccup, Devanshi managed to pick him up, and they headed to a new gaming zone in Z-Square Mall, where she had planned to have him play specific games. Unfortunately, there was a long waiting list, so they couldn't play the games they intended. Nevertheless, they made the most of their time, taking photos together at the gaming zone.\nAfterward, they went to Motijheel in search of some privacy, but luck was not on their side. Rajat's growing annoyance inadvertently upset Devanshi. They decided to take a calming walk and indulged in some delicious street food. Rajat made amends for his actions by lovingly feeding Devanshi.\nAs they headed towards the bus stand, a misunderstanding arose, hinting at a potential street fight. This left Devanshi feeling disheartened about their meet with Rajat. However, he managed to reassure her, helping her see the meeting from a different perspective. They concluded that their first meeting, despite its imperfections, didn't need a kiss and was  a formal date to be memorable.\nThough this was their last meet for a while, they knew that soon they would reunite and continue creating cherished memories together!";


export default function Cards() {
  return (
    <>
    <NavbarOthers/>
    <div className='cards'>
      <div  className='row cards-container'>
        <div className="col-lg-4 col-md-6 col-sm-12">
        <Card bg={card1} storyNo={1} headline={headline1}/>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
        <Card bg={card2} storyNo={2} headline={headline2}/>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
        <Card bg={card3} storyNo={3} headline={headline3}/>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
        <Card bg={card4} storyNo={4} headline={headline4}/>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
        <Card bg={card5} storyNo={5} headline={headline5}/>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
        <Card bg={card6} storyNo={6} headline={headline6}/>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
        <Card bg={card7} storyNo={7} headline={headline7}/>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
        <Card bg={card8} storyNo={8} headline={headline8}/>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
        <Card bg={card9} storyNo={9} headline={headline9}/>
        </div>
        <div className="col-lg-4 col-md-6 col-sm-12">
        <Card bg={card10} storyNo={10} headline={headline10}/>
        </div>
      </div>
    </div>
    </>
  )
}


/* Attire Confusion: 
Its early afternoon of 28th August in the year 2019. Everything in IMED Pune is prepared to welcome the new batch in the institute, likewise all the freshers are getting ready for the freshers party 2019. Amongst these freshies, Devanshi Bajpai also is trying to decide what to wear in the event. She lives in the hostle of Air Force, hence has no college-mate around to help her, furthermore, no hostel-mate is there too as its a wednessday and everbody is out. In this hour, she decided to ask for advice to her most lovable freind ;) , Rajat Mishra. She called him over video and threw number of wrinkled tops in front of him and asked to help her decide the same. She never thought about this event beforehand so she was not having anything suitable (as she thought of) to wear. Gradually, the process started and in an interval of about an hour or two they together decided the top, then the plazo, then the sandals, then the earrings, and what not. Finally the call came to a conclusion with a dress decided after a lot of rejections. A few hours later when she went to the event. Rajat being the most lovable friend of hers, asked or the pictures of her wearing that dress for compliments. A happening he was unaware of was that between his video call and her event, she consulted  the dress with her mother and a whole new attire was decided. The pictures made him enlightened about the fact. Nevertheless, Devanshi looked stunning in that dress too (as usual)! 

And thats how a confusion for the attire came to a solution! */

/*
  Pizza at Kanpur:
  Early morning of 17th October 2021, a few days before their 2nd anniversary. Devanshi and Rajat have are going to meet for the second time in their relationship. Last two years they have been apart because of the covid-19 and their other reasons. Finally with an end to their wait they will meet in Knapur, Devanshi's hometown. Recently, Rajat's father moved to Lucknow near Rajat and he caught dengue unfortunatley. Rajat has been taking care of him and did the same the last day. He made sure that he take can go to visit Devanshi today. Devanshi, on the other hand is unaware of this case and has planned a lovely meeting with his boyfriend with a timeline starting in late morning the same day. Rajat received a call from his father asking for him to give him a hand with his requirement, he rushed to the hospital 15 km away. He postponed his journey from lucknow to kanpur for about 2 hours. In the meantime, our mainlead devanshi got angry with him for being late. He started the journey as soon as possible but failed to reach in the morning, instead reached their in the afternoon. Somehow, the love of his life agreed to come to meet him and they visited the Z-square mall and had fun in the gaming arena. Later, they enjoyed a big fat pizza together. Before seeing him off to lucknow, Devanshi took him for a short ride to the ganga barrage and that's where she made him fall in love with her more by giving him his fist kiss!!
 */


/* College secret:
25th October 2021, the last day of 3 days long Electronics branch fest at IET Lucknow. Rajat has invited Devanshi to the event and she is going to visit his college first time. As usual, Devanshi being on time, has boarded the bus to lucknow from kanpur in the morning to reach by Noon. Rajat is supposed to receive her babe at Sringar Nagar, from where they will board a metro to reach the college. Despite this plan,being a member of the organising team, Rajat is stuck in an urgent emergency in the morning. He took care of it and left to receive Devanshi and reached the meeting point where Devanshi has been waiting for him from almost an hour. He apologised to her and started with her. They were travelling with each other for first time.On reaching, he took him to his favourite cafe to make her enjoy the exclusive 'Kabab-Paratha', also she didn't have her breakfast.
Afterwards, he brought her to the college and introduced her his friends. While the technical events were going on, they dcided to sneak back in the college premises and have fun in private. In the course of the day, they enjoyed the later event of the fest, danced together. 

Then her family came to the college to take her back, he saw her off and she went back to kanpur.

A very secret thing happened back in the time when they were alone in the college, they made out for the very first time. Hence, a secret was kept between the couple and the walls of those lecture theatres! */



/* Longest VC:
3rd November 2019, IET Lucknow is about to have its Covergence 2019 ceremony for the batch of 1994 in the college premises. Everything is set and all the other activities in the college are called-off in the event of this ceremony. A newly admitted student, Rajat of batch 2019 was in his room of first year boy hostel. He deicded not to visit the event due to some reasons, on the other hand his roommate being enthusiastic to meet there super seniors vanished from the room for the whole day. He seeing the opportunity to talk to her love Devanshi. At 9 AM in the morning, he called her over video to find out that she not awake yet. He forcefully made her wake and talk to him. Reciprocating her love for him, she agreed not to enjoy her sweet sleep and rather talk to him. They talked to each other about numerous things which are, infact, impossible to remember even for them. In the meantime they took care of basic daily activities. But loosing the track of time, they met a new personal record of the longest video call which is still unbroken. They totalled up to a count of 12+ vedio calling hours together in a single day.

*/


  

/* The first valentine's
  Rajat is busy with his college engagements, being in the first year and in the ending month of his first semester, he is burdened with assignment deadlines and assesments. On the other hand Devanshi her girlfriend has completed her first semester. 14th february 2020, marked their valentine's day together as a couple. Rajat was unaware of the dates but Devanshi is not like him. She is more considerate and loving than him. She has planned for a surprise gift for him. A few days earlier she very tactfully retreived his address from the innocnt parsad. On the day, the gift knocked his door in the evening, just when he returned to his hostel from the college. He was immensely surprised and touched by this gesture of his babe. He took the gift and went to find a peacefull place in the hostel. Called her girl and opened the love sent by her packed inside the box. He enjoyed the brownie and the pastry. And his love for her was infact more deepened by this!
*/




/* Beginning:
  29th October 2019, 3 days have passed after Devanshi and Rajat has reunited in Jopdhpur on their college break for diwali. In the last 3 days they went out with each other multiple times and enjoyed each other's company. Devanshi was very excited about the meets and on flip side Rajat was feeling a bit hesitated, going back in time to 5th september 2019, Rajat had confessed his feeling of liking-ness towards Devanshi to her. In response to that she had declined his proposal and convinced him to be friends. Their mutual friend had adviced Rajat to present his concerns and care towards her to make her feel differently about her decision. Presently, in these few days he has intended to again present his feelings, but was unable to do so. Devanshi had a hint of this fact and was enjoying thiese meets. In the late eveing of 29th October, Devanshi and Rajat were togehter at one of Devanshi'a favourite, the DCafe restaurant, Rajat decided to finally face the bulls  but with a twist in the story, Devanshi got a call from her home to reach earliest. Rajat took her back to her locality, but finally he stopped the scooter near a park and proposed to her, and gracefully she accepted the proposal. 

  Now Rajat was unable keep his feets on ground and took her to her home. On the ride back to her home, Devanshi put her chin on his shoulder and that made him feel a very new and exciting feeling. The journey began on that day and still going on with each day strengthening their love!
 */



/* Furious call:
After attending his brother's wedding, Rajat came back to lucknow and proposed to meet Devanshi in lucknow. Devanshi made an excuse for going to the lucknow at home, in which she involved her friend. Her friend was the backbone of the excuse and the only reason she got permission for the lucknow visit. 16th Feb 2022 was decided as the date. Unfortunately, Devanshi's friend got an unforeseen engagement on the day and the plan was under the clouds of cancellation. Rajat was not ready to compromise for a delay in the meet. Devanshi was sandwiched between her friend and Rajat, in the situation she found Rajat unreasonable and stubborn. Somehow, her friend sorted her problem and agreed to go to the lucknow the same day. They came to lucknow but with a furious Devanshi. On the same day, Rajat lost his wallet on his way to meet to meet them. Later, they sorted Devanshi's anger and went to visit Janeshwar Mishra Park. An amazing thing happened over there, an unknown person identified them as a couple and this made them happy. That's how a furious Devanshi met Rajat.
*/ 



/* Movie time:
 In the late night of 24th June 2021, Devanshi and Rajat decided to watch a movie together. The movie was named "Roohi" a new box office movie in the market. Something was very speical about this movie, that is, it was the first time Devanshi and Rajat watched a movie online together and even more special than this was that it was the first event when they watched any movie together as a couple overall. They enjoyed the movie together and ended up having beautiful time together!

*/ 



/* Forever together!

Rajat is about to visit Kanpur on 25th May 2023. Devanshi is all set to go to Uddupi via delhi for starting a new chapter of MBA. They are not certain, when they will get the chance to meet again. Hence, this meet is going to be the last one for a while. Both are excited to meet each other as usual. Contradictorily, Rajat has done everything on time today and has started his journey. In order to keep his phone battery getAllByDisplayValue, he is not sharing his live location with Devanshi,  instead, he will keep updating Devanshi his location. Now following his course of habits, he again managed to make a blunder by not updating Devanshi correctly, he informed Devanshi to just when he was entering the city and Devanshi has a short while to get ready and reach to receive her. He again adored his regular dose of Devanshi's scolding. Afterwards, Devanshi managed to pick him up and went to a new gaming zone in Z-square mall where she had plans to make him play some specific games. Due to a long waiting list they were unable to do so, instead they enjoyed together and took photos at the zone together. Then they went to motijheel to find some privacy but were not able to do so. Rajat became a little annoyed which resulted in upsetting Devanshi. They then had a walk together and went to enjoy some street food together. Their he made up for his actions by feeding Devanshi. Then they headed towards the bus stand. On the ride back a misunderstanding presented potential for a big street fight which made Devanshi made feel badly about her meet with Rajat. He then tried solving her overthinking and showed her the meet with a different virtue wherein they concluded their first meet without a kiss and a proper date!

 Though this was their last meet for a while but soon they will meet each other and continue these stories together!
*/






