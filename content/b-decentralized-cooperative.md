---
title: "Research field B: (De-)centralized cooperative traffic management"
date: 2017-05-17
menu:
  main:
    name: "Research field B"
    weight: 70
weight: 70
---

{{< toc >}}

## Research field B: (De-&#x2060;)centralized cooperative traffic management

### B1. Sustainable cooperative traffic management for urban environments (Prof. Friedrich)

{{< img src="/images/b-decentralized-cooperative/B11und12_web.jpg" height="180px" >}}

#### B1.1 [Qinrui Tang:](.) Left Turn Prohibition Problem combining Traffic Assignment

#### B1.2 [Aleksandar Trifunović:](.) (Re)design of public transport network to integrate shared modes of transport

---

### B2. Distributed intelligent and cooperative systems (Prof. Müller)

{{< img src="/images/b-decentralized-cooperative/B21und22_web-neu.jpg" height="180px" >}}


#### B2.1 [Malte Aschermann:](https://github.com/masc) A mechanism for automatic coordination of cooperative driving manoeuvres: Fairness vs. Efficiency

{{< fig src="/images/b-decentralized-cooperative/malte/summary.nosvgo.svg" width="800px" align="left" title="Figure B2.1.1: Coordination of Vehicles by Means of Policies" >}}

##### **[Cooperative Lane Management and Traffic flow Optimisation](https://github.com/SocialCars/colmto/blob/master/readme.md)**

To answer my research questions regarding coordination mechanisms on 2+1 roadways, I developed the platform *Cooperative Lane Management and Traffic flow Optimisation (CoLMTO)*.

* **Execution Model**<br>
  The execution model of CoLMTO, developed to conduct my simulation studies, is depicted in the following figure:
  {{% fig src="/images/b-decentralized-cooperative/malte/CoLMTO-Execution-Model.nosvgo.svg" title="Figure B2.1.2: The CoLMTO Execution Model" align="left" %}}
* **Architecture**<br>
  The software architecture is structured as follows:
  {{% fig src="/images/b-decentralized-cooperative/malte/CoLMTO-EWGT2017-Architecture.nosvgo.svg" title="Figure B2.1.2: The CoLMTO Simulation Architecture as of release [v0.1.1](https://github.com/SocialCars/colmto/releases/tag/v0.1.1)" width="600px" align="left" %}}
* **[Source Code](https://github.com/SocialCars/colmto) Statistics**<br>
  [![license](https://img.shields.io/github/license/SocialCars/colmto.svg)](https://github.com/SocialCars/colmto/blob/master/license.md)<br><br>
  [![CircleCI](https://img.shields.io/circleci/project/github/SocialCars/colmto.svg?label=current build status)](https://circleci.com/gh/SocialCars/colmto)&nbsp;
  [![Codecov](https://img.shields.io/codecov/c/github/SocialCars/colmto.svg?label=test coverage)](https://codecov.io/gh/SocialCars/colmto)&nbsp;
  [![Codacy](https://img.shields.io/codacy/7219fdeb9df44627bf66e4966e02dafd.svg)](https://www.codacy.com/app/masc/socialcars_colmto)<br><br>
  [![html documentation](https://img.shields.io/badge/documentation-HTML-blue.svg)](http://socialcars.github.io/colmto/docs/sources/index.html)
  [![pdf documentation](https://img.shields.io/badge/documentation-PDF-blue.svg)](http://socialcars.github.io/colmto/docs/CoLMTO-doc.pdf)<br><br>
* **Timeline**
  * **2017-09-05:** [Presented paper](http://easychair.org/smart-program/EWGT2017/2017-09-05.html#talk:47210) at EWGT 2017.
  * **2017-05-31:** Paper got accepted for publication at EWGT 2017.
  * **2017-04-06:** [Released v0.1.1](https://github.com/SocialCars/colmto/releases/tag/v0.1.1) of CoLMTO, referenced as [![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.801531.svg)](https://doi.org/10.5281/zenodo.801531).<br>
  It was used for simulating *satisfaction*, *fairness* and *efficiency* on 2+1 roadways.
  The findings were submitted as EWGT 2017 paper *Towards Fair and Efficient Traffic Flow Coordination Mechanisms for 2+1 Roadways*. The resulting/related dataset is available as [![DOI](https://zenodo.org/badge/DOI/10.5281/zenodo.495742.svg)](https://doi.org/10.5281/zenodo.495742).


##### **LightJason/AgentSpeak(L++)**

Since 2015, I am working together with [Philipp Kraus](https://github.com/flashpixx) on a joint project called LightJason/AgentSpeak(L++).

As described on our [website](https://lightjason.github.io)

> LightJason is a concurrent BDI multi-agent framework for creating a multi-agent systems with Java. 
> The project is inspired by [AgentSpeak(L)](https://en.wikipedia.org/wiki/AgentSpeak) and [Jason](http://jason.sourceforge.net/), but designed and implemented from scratch. LightJason is fine-tuned to concurrent plan execution suitable for distributed computing environments and aims at efficient and scalable integration with existing platforms.

Our goal is to provide researchers a scalable platform to simulate multi-agent environments with concurrent execution in mind.

* **Timeline**
  * **2016-12-15:** We [presented](https://lightjason.github.io/publication/2016-eumas-slides.pdf) our paper at EUMAS 2016.
  * **2016-11-20:** We published a [technical report about LightJason](https://lightjason.github.io/publication/2016-ifi-techreport.pdf) in the IfI Technical Report Series.
  * **2016-10-19:** Our paper [LightJason: A BDI Framework Inspired by Jason](https://lightjason.github.io/publication/2016-eumas.pdf) got accepted for publication at [EUMAS 2016](http://eumas-at2016.webs.upv.es).

<br>

##### **Related student research projects (supervised by me)**
  * Platooning models for autonomous vehicles in SUMO ([GitHub](https://github.com/sinziana-sebe/sumo))
  * Vehicle following models with social force ([GitHub](https://github.com/TranKhacDat/SocialForceVehicles))
  * Agent-based simulation of cooperative driving manoeuvres of autonomous cars ([GitHub](https://github.com/adityaraj52/AgentDrive_BachelorsThesis))
  * Aufdeckung von regelwidrigem Verhalten von Agenten im Verkehrskontext (*Revealing rule-adverse behaviour of agents in traffic context*)
  * Entwicklung eines institutionellen Frameworks für multiagentenbasierte Verkehrssimulationen (*Developing an institutional framework for multiagent-based traffic simulations*)

<br>

##### **Attended Conferences, etc.**
  * **2017-09-04:** [EWGT 2017, Budapest, 20th EURO Working Group on Transportation Meeting](http://ewgt2017.bme.hu)
  * **2016-12-15:** [EUMAS 2016, Valencia, 14th European Conference On Multi-Agent Systems](http://eumas-at2016.webs.upv.es)
  * **2016-06-02:** [SECURITY 2016, Braunschweig](https://www.tu-braunschweig.de/tubsdigital/veranstaltungen/security2016/index.html)
  * **2015-07-06:** [EASSS 2015, Barcelona, 17th European Agent Systems Summer School](http://www.iiia.csic.es/easss2015/)
  * **2015-05-31:** [9th Joint Workshop of the German Research Training Groups in Computer Science, Dagstuhl 2015](http://www.dagstuhl.de/en/program/calendar/evhp/?semnr=15232)
  * **2015-02-12:** [AAET](https://www.its-automotive-nord.de/AAET/) [2015](https://www.its-automotive-nord.de/download/AAET/aaet_2015_programm.pdf)

<br>

##### **Publications**
{{< printpublication author="Aschermann" >}}

<br>

---

<br>

#### B2.2 [Sophie Dennisen:](https://github.com/sdennisen) Collective Decision-Making Mechanisms in Urban Traffic

* **[LightVoting](https://github.com/SocialCars/LightVoting)**
  * [![CircleCI](https://circleci.com/gh/SocialCars/LightVoting/tree/master.svg?style=shield)](https://circleci.com/gh/SocialCars/LightVoting/tree/master)
  * Documentation ([Project](http://socialcars.github.io/LightVoting/), [Source Code](http://socialcars.github.io/LightVoting/sources/index.html))


#### B2.3 [Fatema Tuj Johora:](https://github.com/Fatema080136) Scalable micro-simulation of Mixed Traffic based on cognitive and hybrid models


#### B2.4 [Sinziana Sebe:](https://github.com/sinziana-sebe) Collective decision-making for online coordination of same day delivery with mixed autonomous fleets
