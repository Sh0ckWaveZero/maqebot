![MAQE](https://maqe.github.io/img/logo.svg)

# MAQE Homework Challenge - MAQE Bot

<p>
  MAQE has built a robot called MAQE Bot which walks in 2-dimensional plane (X, Y coordinate). It can only turn left or right, and walk straight. It also knows of its current position (X, Y) as well as its direction (North, East, West and South). In order to command MAQE Bot to walk, it must be input with a walking command. The walking command can be represented with a string consisting of three alphabets <strong>R</strong>, <strong>L</strong> and <strong>W</strong> and a positive integer <strong><em>N</em></strong> to indicate the distance of how many positions it has to walk which can be explained as follows:
</p>

<pre>
  <ul>
    <li><strong>R</strong>: Turn 90 degree to the right of MAQE Bot (clockwise)</li>
    <li><strong>L</strong>: Turn 90 degree to the left of MAQE Bot (counterclockwise)</li>
    <li><strong>W</strong><strong><em>N</em></strong>: Walk straight for <strong><em>N</em></strong> point(s) where <strong><em>N</em></strong> can be any positive integers. For example, <strong>W1</strong> means walking straight for 1 point.</li>
  </ul>
</pre>

Initial Conditions:

<pre>
  <ul>
    <li>MAQE Bot starts at the position (X, Y) of 0, 0</li>
    <li>MAQE Bot is facing up North</li>
  </ul>
</pre>

![maqe-bot-diagram](https://maqe.github.io/img/maqe-bot-diagram.png)

<p>For example, the walking code of <strong>RW15RW1</strong> means</p>

<pre>
  <ul>
    <li>MAQE Bot starts at 0, 0 facing up North.</li>
    <li>MAQE Bot turns right (facing East) and walk straight 15 positions.</li>
    <li>MAQE Bot turns another right (now facing South) and walk straight 1 position.</li>
  </ul>
</pre>

<p>Your task is to create a <strong>command-line based script</strong> in <strong>any programming language of your choice</strong>. The script accepts a command line argument as an input string of the walking code and print out the result of the last position (X, Y) of MAQE Bot and its last facing direction (North, East, West or South).</p>

<p>Note that the output is case-sensitive.</p>

<p>A sample of a running script in a terminal with the input of <strong>RW15RW1</strong>:</p>

<pre>&gt; php maqebot.php RW15RW1
&gt; X: 15 Y: -1 Direction: South
</pre>

<p><strong>Sample of Test Data:</strong></p>

<pre>
  <ul>
    <li>W5RW5RW2RW1R</li>
    <li>RRW11RLLW19RRW12LW1</li>
    <li>LLW100W50RW200W10</li>
    <li>LLLLLW99RRRRRW88LLLRL</li>
    <li>W55555RW555555W444444W1</li>
  </ul>
</pre>