'use client'

import Footer from "@/layout/Footer/Footer"
import { blue } from "@/themes/colors"


const AboutUs = () => {
  return (
    <div className="flex flex-col">
      <div className="px-5-0 sm:px-14-0 py-4-0 sm:py-10-0">
            <img src="/images/f-s.png"className="float-left mr-8-0 mb-1-2"/>
            <p className="font-fR text-1-8 sm:text-2-4 text-justify sm:pr-12-0 mt-9-0">ჩვენ ვიცით, რომ თითოეული ბავშვი არის უნიკალური და განსაკუთრებული და ადრეული ასაკის პოზიტიური გამოცდილება ბავშვის ზოგადი განვითარების საფუძველია, ამიტომ გვსურს დავეხმაროთ მშობლებს შესთავაზონ თავიანთ პატარებს მათი ინდივიდუალური თავისებურებების, ინტერესების, საჭიროებების შესაბამისი შესაძლებლობების დიდი არჩევანი.</p>
            <img src="/images/s.png" className="float-right mt-5-0 ml-3-0"/>
            <p className="font-fR text-1-8 sm:text-2-4 text-justify">მისათვის ჩვენ შევქმენით ეს ონლაინ სივრცე, სადაც მშობლები მოიძიებენ მრავალფეროვან რესურსებსა და სერვისებს ბავშვზე ზრუნვისა და ბავშვის მრავალმხრივი - სოციალური, ფიზიკური,</p>
            <p className="font-fR text-1-8 sm:text-2-4 text-justify">ემოციური და ინტელექტუალური განვითარებისთვის. ჩვენ გვინდა ამ სივრცის გამოყენებით მშობლებმა შეძლონ მისცენ პატარებს ბევრი დადებითი გამოცდილება, ხელი შეუწყონ მათ უკეთ შეიცნონ თავიანთი თავი, მართონ საკუთარი ცხოვრება, გაუფრთხილდნენ გარემოს, გაიზარდონ ბედნიერ და კეთილ ადამიანებად და უკეთესობისკენ შეცვალონ მსოფლიო.</p>
      </div>
        <Footer backgroundColor={blue}/>
    </div>
  )
}

export default AboutUs