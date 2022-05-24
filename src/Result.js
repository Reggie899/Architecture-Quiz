import { useContext } from "react";
import { Mainstream } from "./Contexts/Mainstream";
import { Specific } from "./Contexts/Specific";
import { Traditional } from "./Contexts/Traditional";
import { Modern } from "./Contexts/Modern";
import { QuestionCounter } from "./Contexts/QuestionCounter";

export default function Result() {
  const { question, setQuestion } = useContext(QuestionCounter);
  const { modern, setModern } = useContext(Modern);
  const { traditional, setTraditional } = useContext(Traditional);
  const { mainstream, setMainstream } = useContext(Mainstream);
  const { specific, setSpecific } = useContext(Specific);

  const TimberFraming = () => (
    <div className="displayResult">
    <div className="gridImagesResult">
            <h2 className="h1Question">The traditionalist</h2>{" "}
      <img src="https://images.pexels.com/photos/2886284/pexels-photo-2886284.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"></img>{" "}
      <p className="resultP">
        You are timber framing as you love traditions, old objects and
        relationships that have proven stable. You are not living in the past
        though. Basically you carefully filter what is worth preserving and then
        take care of those chosen things carefully. The result is that you
        surround yourself with beautiful things that deserve your attention.
      </p>{" "}
    </div>
    </div>
  );

  const Norman = () => (
    <div className="displayResult">
    <div className="gridImagesResult">      <h2 className="h1Question">Norman - you like horror stories </h2>{" "}
      <img src="https://images.pexels.com/photos/4697786/pexels-photo-4697786.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"></img>{" "}
      <p className="resultP">
        You love to tickle your mind with true crime stories and horror movies,
        but that does not mean that you are a bad seed yourself. You are just
        fascinated by the dark and intimidating sides of life and humans. You
        love to indulge in the psychology of the mind and often practice what
        you have learned there in the real life.
      </p>{" "}
    </div>
    </div>
  );

  const Pagode = () => (
    <div className="displayResult">
    <div className="gridImagesResult">
            <h2 className="h1Question">Pagode - modern believer </h2>{" "}
      <img src="https://images.pexels.com/photos/3204950/pexels-photo-3204950.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"></img>{" "}
      <p className="resultP">
        You are the pagoda as you are a modern believer. You go with the time,
        but feel a strong connection to your ancestral line and spirituality at
        the same time. You would love to see more meaningful architecture in
        your daily life and it makes you a little sad that more and more of that
        is replaced by soulless buildings. You don’t want to lose touch with
        what’s really important in life.
      </p>{" "}
    </div>
    </div>
  );

  const Pyramid = () => (
    <div className="displayResult">
    <div className="gridImagesResult">      <h2 className="h1Question">Pyramid - the mystic</h2>{" "}
      <img src="https://images.pexels.com/photos/12046436/pexels-photo-12046436.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"></img>{" "}
      <p className="resultP">
        You are a pyramid. You are mysterious, but magnetic. Many people look up
        to you. Not all of them understand you and your impact and yet they are
        mesmerized by your presence. But this effect didn’t come to you easily.
        It took many years of work for you to get there, to build up that image
        and foundation. You got a lot of help and now is the time to give back.
        You may be or end up as a philanthropist that is involved in many
        projects that help others.
      </p>{" "}
    </div>
    </div>
  );

  const Baroque = () => (
    <div className="displayResult">
    <div className="gridImagesResult">
            <h2 className="h1Question">Baroque - You have class</h2>{" "}
      <img src="https://images.pexels.com/photos/3229580/pexels-photo-3229580.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"></img>{" "}
      <p className="resultP">
        You are Baroque, because your level of class and style is unbeautiful.
        You are what Anna Denvy always wanted to be without even faking any of
        it. You probably own a collection of expensive sunglasses or shoes, your
        hair always smells good and your exclusive accessoires are the cherry on
        the top. You probably speak French or plan to learn it in the future.
        You are high class, but you are not kitschy. So you ditch the extra
        layer of gold to brag with and cut down to what is actually important.
        You are likely invested into trading. Many look up to you and not a few
        of them envy you. Through your elegant aura you manage to gain a lot of
        power and followers and your actions have impact. Being a mentor may be
        your role.
      </p>{" "}
    </div>
    </div>
  );

  const ClassicalArchitecture = () => (
    <div className="displayResult">
    <div className="gridImagesResult">
            <h2 className="h1Question">Classical Architecture - You are content</h2>{" "}
      <img src="https://images.pexels.com/photos/7907896/pexels-photo-7907896.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"></img>{" "}
      <p className="resultP">
        You love history and suck it up like a sponge. You are also interested
        in philosophy and literature. And classical architecture you are meant
        to just be yourself throughout time. A lot is changing in the world
        quickly, but your role is to preserve the old, sacred knowledge. People
        love and respect you as you are and you have the rare privilege to not
        have to change yourself to fit in.
      </p>{" "}
    </div>
    </div>
  );

  const Suburban = () => (
    <div className="displayResult">
    <div className="gridImagesResult">
            <h2 className="h1Question">Suburban Home - Family person</h2>{" "}
      <img src="https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"></img>{" "}
      <p className="resultP">
        You have a solid picture in your mind of how your life should look and
        you follow the path that leads you there consequently. Whatever is on
        your to-do list you get done, but everyone who works hard also should
        play hard. You enjoy your free time with family and friends and love to
        invite your neighbors for a barbecue. You are well adjusted to our
        society and the foundation of it being able to function and run.
      </p>{" "}
    </div>
    </div>
  );

  const OldNew = () => (
    <div className="displayResult">
    <div className="gridImagesResult">      <h2 className="h1Question">Mixing old with new - the story teller</h2>{" "}
      <img src="https://images.pexels.com/photos/600622/pexels-photo-600622.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"></img>{" "}
      <p className="resultP">
        You are an odd, but inspiring mix of the traditional and modern times.
        Creativity is your biggest asset and you are a great storyteller. Any
        party-host is happy to have you there as a guest as you tend to stir
        things up and to bring life and inspiration to any group you join. You
        don’t like to throw parties yourself though. Actually you enjoy your
        solitude and daydreaming. You may be a true introvert. Considering you
        have a really social way with people and a rather eccentric clothing
        style, people may be irritated as they perceive you as an extrovert with
        an endless amount of energy.
      </p>{" "}
    </div>
    </div>
  );

  const Amsterdam = () => (
    <div className="displayResult">
    <div className="gridImagesResult">
      <h2 className="h1Question">Amsterdam Style - The cozy one</h2>{" "}
      <img src="https://images.pexels.com/photos/280189/pexels-photo-280189.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"></img>{" "}
      <p className="resultP">
        You are the cozy type. You don’t like to leave your house or
        neighborhood too much. You don’t need to see the world. Your environment
        is what you love and you chose that on purpose. You love your daily
        routine and you work with what you have. The goals you set aren’t set
        too high and you rarely exhaust yourself. It is very rare that you are stressed out. People love that about you. They feel very safe and comforting being
        around you.
      </p>{" "}
    </div>
    </div>
  );

  const Bhutanese = () => (
    <div className="displayResult">
    <div className="gridImagesResult">
            <h2 className="h1Question">Bhutanese - The reflected one</h2>{" "}
      <img src="https://images.pexels.com/photos/910368/pexels-photo-910368.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"></img>{" "}
      <p className="resultP">
        You are irritated by how fast things go out there in the big cities and
        decide that it’s not for you anymore. Instead you have spent time
        building up a retreat for yourself where you can live life at your own
        pace, reflect and philosophize. This introversion brought you a lot of
        wisdom that others can perceive. Whenever they need advice they turn to
        you.
      </p>{" "}
    </div>
    </div>
  );

  const FirstTier = () => (
    <div className="displayResult">
    <div className="gridImagesResult">      <h2 className="h1Question">Chinese First Tier City Architecture- The hustler</h2>{" "}
      <img src="https://images.pexels.com/photos/618079/pexels-photo-618079.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"></img>{" "}
      <p className="resultP">
        While others seem to deal with burnout and existential crises, you are
        hustling and winning. You love modern life and feel very comfortable on
        the fast lane. It is possible that you are a manager or entrepreneur.
        You don’t mind looking back to the past, but mainly because you use the
        knowledge for your current projects. It is possible that you may change
        the world one day with your impact and energy to strive forwards.
      </p>{" "}
    </div>
    </div>
  );

  const Bauhaus = () => (
    <div className="displayResult">
    <div className="gridImagesResult">      <h2 className="h1Question">Bauhaus - Modern pragmatic</h2>{" "}
      <img src="https://images.unsplash.com/photo-1608700272578-057e251574b3?ixlib=rb-1.2.1&raw_url=true&q=60&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NHx8YmF1aGF1c3xlbnwwfHwwfHw%3D&auto=format&fit=crop&w=700"></img>{" "}
      <p className="resultP">
        You are a very pragmatic person that loves design. Your appearance is
        not cluttered with many useless things, but rather things you use daily
        and that look stylish at the same time. You are a good and respectful
        listener and give great advice as you focus on the important things in
        life. Decluttering the world and helping others as their muse is a role
        that fits you well.
      </p>{" "}
    </div>
    </div>
  );

  const ArtNouveau = () => (
    <div className="displayResult">
    <div className="gridImagesResult">      <h2 className="h1Question">Art Nouveau - The art lover</h2>{" "}
      <img src="https://c0.wallpaperflare.com/preview/669/36/857/latvia-riga-neustadt-art-nouveau.jpg"></img>{" "}
      <p className="resultP">
        You are in love with art and seek to surround yourself with special,
        extraordinary things. Going on crazy adventures that expand your mind
        and creating unique experiences is on the top of your priorities in
        life. People see you as a muse and you never fail to share your spark
        and sweet ideas. To come up with those you do need a lot of inspiration
        yourself as well and you don’t mind picking it up through weekly gallery
        and museum visits.
      </p>{" "}
    </div>
    </div>
  );

  const Mosque = () => (
    <div className="displayResult">
    <div className="gridImagesResult">      <h2 className="h1Question">Mosque - The spiritual</h2>{" "}
      <img src="https://images.pexels.com/photos/1537086/pexels-photo-1537086.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"></img>{" "}
      <p className="resultP">
        You are very spiritual and on a constant quest to do the right thing.
        Listening to and helping others is a big part of your life. Life can be
        tough, but you feel support through your spirituality and that gives you
        energy, even with rocky parts of the road ahead. Keep going your way.
        For many you are the oasis of trust and hope they are yearning to find.
      </p>{" "}
    </div>
    </div>
  );

  const Industrial = () => (
    <div className="displayResult">
    <div className="gridImagesResult">      <h2 className="h1Question">Industrial Architecture - The subcultural</h2>{" "}
      <img src="https://images.pexels.com/photos/3054252/pexels-photo-3054252.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"></img>{" "}
      <p className="resultP">
        On the outside you don’t really seem that exciting, but when one gets to
        know you, it suddenly becomes clear that there is so much to you. You
        don’t like to spend much time on decorating the fassade and putting on
        fancy outfits, in fact you see that rather as a waste of time and look
        down on giving the appearance too much attention. What counts for you is
        on the inside and you hold much exclusive knowledge there. Therefore it
        is not surprising that you rather connect with a specific subculture
        than the mainstream.
      </p>{" "}
    </div>
    </div>
  );

  const Brutalist = () => (
    <div className="displayResult">
    <div className="gridImagesResult">      <h2 className="h1Question">Brutalist - The curious</h2>{" "}
      <img src="https://images.pexels.com/photos/1835675/pexels-photo-1835675.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"></img>{" "}
      <p className="resultP">
        You are very clear and direct and you do not tolerate any disrespect.
        You strive for power and top positions to make sure you are secured. Is
        it possible though that sometimes you are provocative and that way start
        arguments with others? Your motives are not always very clear to others.
        Something you definitely deserve credit for though is that you are very
        curious. When you feel safe, you like to leave your comfort zone and
        explore new perspectives.
      </p>{" "}
    </div>
    </div>
  );

  const Contemporary = () => (
    <div className="displayResult">
    <div className="gridImagesResult">      <h2 className="h1Question">Contemporary - Living in the moment</h2>{" "}
      <img src="https://images.pexels.com/photos/3685203/pexels-photo-3685203.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"></img>{" "}
      <p className="resultP">
        Your motto is to go with the flow and live in the moment. You are well
        adjusted to life demands and are very independent, yet dependable.
        Naturally you don’t have a big ego that stands in your way constantly
        and you are able to move smoothly through life. Many love how pleasant
        and approachable you are and love to cooperate with you.
      </p>{" "}
    </div>
    </div>
  );

  const Glass = () => (
    <div className="displayResult">
    <div className="gridImagesResult">      <h2 className="h1Question">Glass buildung - The sensitive one</h2>{" "}
      <img src="https://images.pexels.com/photos/3735677/pexels-photo-3735677.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"></img>{" "}
      <p className="resultP">
        You are a very sensitive person that values transparency and is a
        reflection of their environment. You like to open up and share your
        feelings but that makes you vulnerable. Sometimes people hurt you.
        Nevertheless you like this trait of yours and wouldn’t stop being you no
        matter what. That makes you a great source of support and inspiration
        for others, even if it is hard sometimes. Your contribution to society
        is immense though and you are appreciated by many.
      </p>{" "}
    </div>
    </div>
  );

  const reset = () => {
    setQuestion(0);
    setModern(0);
    setTraditional(0);
    setMainstream(0);
    setSpecific(0);
  };

  const Result = () => (
    <div className="">
      <div className="buttonDiv">
        {" "}
        <button onClick={() => reset()} className="replayButton">
          Play again
        </button>{" "}
      </div>
      <h2 className="h1Question"> You are: </h2>
      <div className="">
        {traditional === 0 && mainstream > specific ? <Contemporary /> : null}
        {traditional === 0 && mainstream < specific ? <Glass /> : null}
        {traditional === 2 && mainstream > specific ? <FirstTier /> : null}
        {traditional === 2 && mainstream < specific ? <Bauhaus /> : null}
        {traditional === 3 && mainstream > specific ? <ArtNouveau /> : null}
        {traditional === 3 && mainstream < specific ? <Industrial /> : null}
        {traditional === 4 && mainstream > specific ? <Suburban /> : null}
        {traditional === 4 && mainstream < specific ? <OldNew /> : null}
        {traditional === 5 && mainstream > specific ? <Amsterdam /> : null}
        {traditional === 5 && mainstream < specific ? <Brutalist /> : null}
        {traditional === 6 && mainstream > specific ? <TimberFraming /> : null}
        {traditional === 6 && mainstream < specific ? <Pagode /> : null}
        {traditional === 7 && mainstream > specific ? <Baroque /> : null}
        {traditional === 7 && mainstream < specific ? <Mosque /> : null}
        {traditional === 8 && mainstream > specific ? <ClassicalArchitecture /> : null}
        {traditional === 8 && mainstream < specific ? <Bhutanese /> : null}
        {traditional === 9 && mainstream > specific ? <Norman /> : null}
        {traditional === 9 && mainstream < specific ? <Pyramid /> : null}
      </div>
      <a target="_blank" href="https://github.com/Reggie899"> 
      <div className="githubLink">
        Created by Reggie899
      </div>
      </a>
    </div>
  );
  return (
    <div>
      {" "}
      <Result />
    </div>
  );
}
