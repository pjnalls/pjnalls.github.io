import { Container, Text, Title } from '@mantine/core';
import { motion } from 'framer-motion';
import Markdown from 'react-markdown';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';

const markdown = `### Posts Coming Soon
<!-- - [Nature is quantum mechanical and here's why](#nature-is-quantum-mechanical-and-here's-why)
- [Quantum entanglement proves an existence of a utopia](#quantum-entanglement-proves-an-existence-of-a-utopia)
- [Neural networks on quantum computers might help us to finally understand the human brain](#neural-networks-on-quantum-computers-might-help-us-to-finally-understand-the-human-brain)


---

<h4 id="nature-is-quantum-mechanical-and-here's-why">Nature is quantum mechanical and here's why</h4>


<br/>

 American theoretical physicist Richard Feynman once said nature isn't classical but is quantum mechanical, but what evidence do we have of this to be true?

I would like to explain why Richard Feyman and physicists at large are correct according to (1) the quantum theories of spin and entanglement and (2) the Taoist view of nature being fundamentally spontaneous, adaptable, and even paradoxical yet not possessing rigid rules and regulations.

<br/>

I remember watching [a Google I/O talk](https://www.youtube.com/watch?v=rTx5nw3AgnY) given by members of the Quantum AI team showing the difference between the behavior of a classical Boolean bit and a quantum qubit. There was a slide in the presentation that showed a bit's states like a simple light switch while a qubit's states were like fading lights in all directions that seemed to spin and dance.

As the talk continues, I learned that qubits behave a lot like sound waves and when have qubits crowded arounded around each other they all seemed to spin and dance.

<br/>

Dancing in its purest form is a natural, spontaneous phenomenon and is meant to be done gracefully and without effort. I'm speaking of the type of dancing that happens at parties where people, by in large, are in the moment.

As Alan Watts put it, the goal of such things as music and dancing is not the end result itself but the process along the way.

Therefore, dancing is something done for the sake of the moment.

<br/>

So how does all this relate to nature not being classical but quantum mechanical?

Basically, nature is not fundamentally dualistic or binary (hot or cold; large or small; long or short) going from one extreme to the next; it is a string of spontaneous events which lie somewhere between chaos and order.

<br/>

But couldn't this be simulated in a classical logic? 

Yes, it could; however, Lao Tzu, the author of the Tao Te Ching, emphasizes throughout his work that nature is not only spontaneous but also paradoxical.

And here enters the quantum theory of entanglement.

<br/>

The quantum theory of entanglement basically can be condensed down to a belief that some physicists and I share that there are many worlds and many versions of people, places, and things.

So this means, for example, there are instances where someone is both asleep and awake at the same time.

But physicists say that it's only when measure, or simply see, someone that we know they are aleep or awake. -->

<br/>



<br/>
`;
export default function Blog() {
  return (
    <motion.main
      key='blog'
      initial={{ marginTop: -120, opacity: 0, scale: 0.96 }}
      animate={{ marginTop: 0, opacity: 1, scale: 1 }}
      exit={{ marginTop: 120, opacity: 0, scale: 0.96 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      style={{ zIndex: 2 }}
    >
      <Container
        mx={0}
        px={24}
        size={'xs'}
        mt={80}
      >
        <Title
          fw={500}
          order={2}
          ta={'left'}
          my={'lg'}
        >
          ✍️ My Blog
        </Title>
        <hr />
        <Text
          ta={'left'}
          my={'lg'}
        >
          🏗️ Welcome to the blog subsite of my website.
          <br />
          Here, I want to share with you my thoughts and ideas concerning the
          universe and many worlds as I study topics such as quantum
          entanglement, neural networks, quantum computers, Jungian psychology,
          Taoist philosophy and the history of mathematics.
        </Text>
        <Markdown
          remarkPlugins={[remarkGfm]}
          rehypePlugins={[rehypeRaw]}
        >
          {markdown}
        </Markdown>
      </Container>
    </motion.main>
  );
}
