// ==UserScript==
// @name         WME Place Interface Enhancements
// @namespace    https://greasyfork.org/users/30701-justins83-waze
// @version      2024.04.22.01
// @description  Enhancements to various Place interfaces
// @include      https://www.waze.com/editor*
// @include      https://www.waze.com/*/editor*
// @include      https://beta.waze.com/editor*
// @include      https://beta.waze.com/*/editor*
// @exclude      https://www.waze.com/user/editor*
// @exclude      https://www.waze.com/dashboard/editor
// @icon         data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAEAAQADAREAAhEBAxEB/8QAHQABAAEFAQEBAAAAAAAAAAAAAAUBAwQGBwIICf/EAEAQAAICAQICBQgHBwQCAwAAAAABAgMEBREGMRIhQVFhBxMUIjJScYEXI0JUkZLBCBVVYpOhsRYzcoJEolPR4f/EABsBAQACAwEBAAAAAAAAAAAAAAADBAECBgUH/8QAMBEBAAIBAgUBCAEEAwEAAAAAAAECAwQRBRIhMVFBBhMiMmFxkdGBFCOhsVLB4fD/2gAMAwEAAhEDEQA/AP1TAAAAAAAAAAAAAAAAAAADwrFJtR9bbm+wyxu9mGQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY+Vm04cd7JbPsiubNorNuzW1or3YONlW6tc0t6saPNJ9cvDckmsUj6o4tN5+iVjFQioxSSXJIhTKgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH1PWnVJ1UNdJdUp93wJ6Y9+soL5NukIOc5WScpScpPm2WdtleZ37tg4elF4ckvaU+sq5e6zi7JQhTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABj6hc6MK2cfaS6jasbzENbTtWZalzLyioBk4GdPBu6ceuL6pR70aWrzRs3rblls2LmVZkOlXLfvj2oqTWa91uLRbsvmrYAAAAAAAAAAAAAAAAAAAAAAAAAACzLKh53zUPXs7Yrs+Jtt03a7+i6k9ut7s1bKgWMyj0nFtrXOS6vibVnad2to3jZqMouLaa2a6mi8oqAAPVdkqpKUJOMl2oxMb92YnbsmcLX+UMlf90v8AKILYv+KeuXymK7YXQUoSUovtRBMbd08Tv2ezDIAAAAAAAAAAAAAAAAAAAAAB4uuhj1yssl0YrmzMRMztDEzERvKAzdctv3jT9VDv7WWa44jurWyTPSGfoEIrDc11zlJ9JkWT5tkmLskyJMAAInVtI8+3dSvrPtR94npfbpKC9N+sICUXCTUk01zTLKsoAAAX8bMtxJ9Kqbj3rsZrNYt3bRaa9k5ha3VkbRt+qn48mVrY5jssVyRPdJJ7kSZUAAAAAAAAAAAAAAAAAAAAEHxHZLemv7Ozl8yxijvKvlntCFLCuzdN1KWBN7rpVy5x/VEd6cySl+VseNl1ZcOlVNS712oqzWa91qLRbsvGrYAAYuZp1OavXjtLsmuZvW017NLVi3dA5ukXYm8kvOV+9Hs+JZreLK1qTVgkiMAAAM3C1W7D2SfTr92X6EdqRZJW81bBhahVnQ3g9pLnF80VrVmvdZraLdmSaNwAAAAAAAAAAAAAAAAAAYGr4DzKE4f7kOtLv8CSluWeqO9eaGstOLaa2a7GXFNQD3XbOmalCTjJdqMTG/dmJ27JjC1/faGSv+8V/lEFsXrCeuXyma7I2xUoSUovtRBtsnid+z0YZAAEdm6LVk7yr+qs8OTJa5JjuitjieyBysK7DltZHZdklyZZraLdlaazXusGzUAAe6bp0WRnCXRkuTMTET0lmJmJ3htWBmLNx42Lqlyku5lO1eWdl2tuaN2SaNgAAAAAAAAAAAAAAAAAAYWdpVObvJroWe+v1JK3mqO1IsgczTbsJ7yj0oe/HkWa3iytak1Yhu0AL+Lm24c+lXLZdsXyZrasW7totNezZcDPhnVdJerNe1HuKlqzWVutotDKNG4AA8zhGyLjOKlF80zO+x3Q+boClvPHez9x8vkT1y/8le2LwhrK5UzcJxcZLmmTxMT1hBMbd3gywATPDkn07o/Z2TK+X0WMXqnSusAAAAAAAAAAAAAAAAAAAAUaUk01un2MCLzdCru3lQ/Nz93sf/0TVyTHdDbHE9kHfj2Y1nQsi4y/yWYmJ6wrTEx0laMsM/RbZV6hBLlLdNEeSN6pMc7WbOU1wAAAAGDquDHLx5SS+tgt0/0JKW5ZR3rzQ1cuKaqW72XWwNl0fCeJjtzW1k+truRUyW5p6LeOvLHVIESUAAAAAAAAAAAAAAAAAAAAAAxNTxoZOJYpL1opyi+5m9J2lpeImGqpNvZLdl1STui6ZKiXn7V0ZbbRi+zxK2S+/SFnHTbrKYIE4AAAALOZfHHxrLJPkurxZtWN52a2naN2sYmBdmy+rj6vbJ8kW7WivdUrWbdk9g6RVh7Sf1lvvPs+BWtebLFccVZ5GlAAAAAAAAAAAAAAAAAAAAAAAGJmqzKrdNPUpdUrHyS7l3m9doneWlt56QYemU4STiulP35cxa82K0irLNG4AAAAKSkorv8ABAYtuH6XNSv9iPs1Ll8X3m8W5ezSa83dlRioRUYpRS5JGjfsqAAAAAAAAAAAAAAAAAAAAAAAAUa3At5GVTh1Oy+2uitc52SUUvmzW160je07Q2rWbTtWN2p6r5XuEdIco26zTbNfYx07X/6po8nLxfRYfmyRP26/6elj4Zq8vak/z0axmftI8NUNqjGz8nxVcYr+7PMv7R6Svy1mf/vu9CvAdTPzTEI2f7Tump+pomXJfzWxRWn2mxemOfzCxHs/l9ckfgh+07prfr6JlxX8tsWI9psXrjn8wT7P5fTJH4SWH+0jw1e0r8bPxvF1xkv7Ms09o9Jb5qzH/wB91e3AdTHyzEtn0ryvcI6u4xq1mmqb+xkJ1P8A9kkeni4vos3y5Ij79P8Abz8nDNXi70n+OrbMfKpzKlbRbXdW+U65KSfzR61b1vG9Z3h5tqzWdrRtK6bNQAAAAAAAAAAAAAAAAAAAAAAAA1ni3yjaDwXW/wB45sfSNt441Xr2y+XZ89jzNXxHTaKP7tuviO6/ptDn1c/269PPo4rxT+0dq+oudWi41emUPqVtm1lr/Rfgzi9V7R58nw6eOWPPef06zTcCw065p5p/EOX6vxDqevXO3Uc/IzJvtusckvguSOZzajNnnfLaZ+7ocWDFhjbHWIR5XTgAAAAASGkcQ6noNyt07PyMOa7abHFP4rkyxh1GbBPNitMfZBlwYs0bZKxLp/Cv7R2r6c4Va1jV6nQup217V2r9H+COm0vtHnx/DqI5o/E/pz2p4Fhv1wzyz+Ydr4S8o2g8aVr93ZsfSNt5YtvqWx+Xb8tztNJxHTa2P7Vuvie7lNToc+kn+5Xp59GzHpvPAAAAAAAAAAAAAAAAAAAAwtX1nC0HBszNQya8TGrW8rLHsvh4vwIc2bHgpOTLO0QlxYr5rRTHG8uA8f8A7QmZqbtwuHVLBxeuLzJr62a/lX2V/f4HA6/2gyZd8el+GPPr/wCO00XBKY9r6jrPj0/9cdvvtyrp23WSttm95Tm9234s4+1ptPNad5dRERWNojows3UqNPhvbNJ9kV1tm9Mdsnywxa0V7sbSNXlqlt/qKFcNuiu35kmXFGKIa0vz7pMrpQCM17UfQcNxi9rbOqPh3ssYMfPbr2hFktywaDqPp2Goye9tfVLx7mM+Pkt07SY7c0JMrpQCM1fV5aXbR6inXPfpLt+RYxYoyxKK9+SYZOFqVGoQ3qmm+2L6miO+O2P5obVtFuzNovtxboW02Sqtg94zg9mn4M0raazzVnaWZiLRtMdHYeAP2g8zTHXh8RKWdi8llwX1sF/MvtL+/wATsNB7QZMW2PVfFHn1/wDXL63glMm99P0nx6f+O/6RrOFr2BXm6fk15WNYt42VvdfB9z8DvsObHnpGTFO8S4vLivhtNMkbSzSZEAAAAAAAAAAAAAAAANO8oHlP0rgHEavksnUJrerDrfrPxl7qPH4hxPDoK/F1t6Q9TRcPy623w9K+svmHjLjrVuONQeTqN7daf1WPDqrrXgv15nzLWa7Nrr8+WftHpD6DpdHh0dOXHH8+stePPXkdrmpPTsROH+7N7R37PEsYcfvLdeyLJblhptls7puc5OcnzbZ68RERtClM790/wjzyf+v6lDV+ixh9WyHnrQBo+s5jzc+yTfqxfRivBHs4aclIhQvbmsaNmPCz65J+rJ9GS8GM1OekwUty2bweMvgGt8Xc8b/t+h6Gk9VXN6ICu2dM1OEnCS5NMvzETG0q8Tt2bloepPUcRuf+7B7S27fE8jNj93bp2Xcd+aEiV0rYODuOtW4Hz1k6be1CTXncefXXYu5r9eZ6Gj12bQ358U/ePSVHVaPFrKcuSP59YfT/AJPvKfpXH+KlRL0bUILe3DsfrLxj7yPpvD+J4dfX4elvWP8A7u+fa3h+XRW+LrX0luJ7DywAAAAAAAAAAAAKN7Ld8gOP+U7y7Y2hK3TdAnDL1DrjPK9qul+HvS/sjkOJ8drg3xabrbz6R+5dRw/g9s22XUdK+PWXzvnZ+RqeXblZd08jItl0p22PeUmfPL5LZbTe87zLuKUrjrFaRtELBo3AIfiTAszMWE605Sre/RXNotae8UttPqgy1m0dGp9CTl0dn0u7brPV3juptu4d0+eFiSlYujZY93F9i7DydRki9to7Qu468sdUsVkwBo+rafZg5dilF9CTbjLsaPZxZIvWFC9ZrJpOn2Z2XWoxfQi05S7EhlyRSslKzaW8HjL4BE8RafPNxIyrXSsre6iu1dpZ0+SKW2ntKHLXmjo1HoSUujs+l3bdZ628d1JtnDeBZh4s52JxlY9+i+aR5WovF7bR6LmKs1jqmCqnAL+Dn5GmZdWViXTx8iqXShbXLaUX8TemS2K0XpO0w0vSuSs1vG8S+iPJh5dsfXfNabr84YmodUa8r2a7n4+7L+zPofDOO1z7YdT0t59J/UuH4hwe2HfLp+tfHrDsCe63XI69y6oAAAAAAAAABEcR8V6VwnhPK1TMrxa9vVjJ7zn4RjzZU1Oqw6SnPmtss4NNl1NuXFXd87+Uby5ahxWrcHS1PTdLfVJp7W3L+ZrkvBHzziPHMur3x4fhp/mXcaDhGPTbZMvxW/xDlxzDogAAAAePNQ6XS6Eel37dZneezGz2YZAAFJRjNbSSku5ob7MEYxgtopRXckN9xUMgADx5qHS6XQj0u/brM7z2Y2ezDIAAAAOo+Tny5ajwoqsHVFPUtLXVFt/W0r+VvmvBnT8O45l0m2PN8VP8w57XcIx6ne+L4bf4l9EcOcV6VxZhRytLzK8qtr1op7Tg+6UeaPoem1eHV058Nt3DZ9Nl01uXLXZLltWAAAABonlb42v4Q0WmGE1DOzJOELGt/NxXtSXj1r8TlvaDid+H4IjF89u0+PMva4Xo66rLM3+WrgP+pNW9L9J/eWX6Rvv5zz0t9/xPk/8AW6nn957y2/neXbf0+Hl5eSNvs2fJ8tfFb0mOLRfjxvS2eU6t7Gv8b+Ox0VPabWxjjHaY387df086OEaT3nPMTt49HL9Y1DUNUzJ5OpX3ZORLnZdJyZ5l89tRbnvbml72LHjx15ccbQxK6Z2vaEXJ+BFNor3SzOzOo0hvZ2y2/lRVtn/4o5v4ZteFTWuqtPxfWV5yXn1RzaZXfNQ9yP4Gm8+WN5eJ4tVi9auL+RtF7R2lneYYl+kQkt65OL7n1onrnmPmbxefVH3YltD9aD271yLVb1t2lJExK0k29kt2btmXRpltvXJebj3vmQ2zVr26tJvEM+rTKa+a6b75FW2a0opvMshU1xXVCK+RFzTPq13kdNcl1wi/kOaY9TeWPbplNnJdB98SWua0NovMMC/TLauuK85HvRarmrbv0SxeJYjTT2a2ZN3brtOJbe/Vg9u98jS1617y1mYhIUaRCK3sk5PuXUirbPM/Kjm8+jLhi1Vr1a4r5EE3tPeWm8y9+ah7kfwNd58sbytWYVNi660vFdRvGS8erMWmGFfpDXXVLf8AlkWa5/8Akki/lgWUzqe04uL8UWYtFuySJ3Zmj6hqGl5kMnTb7sbIjyspk4slpntp7c9LcsosuPHkry5I3h0/G8tfFa0mWLffjyva2WUqtrIr/G/jsepf2m1vu5x1mN/O3X9PBnhGk95zxE7ePRrP+pNW9L9J/eWX6Rvv5zz0t9/xOc/rdTz+895O/neXo/0+Hl5eSNvs795JONr+L9FuhmtTzsOShOxLbzkX7Mn49T/A+sez/E78QwTGX56958+JcTxTR10uWJp8tm9nUvFAOc+WnhHK4j0XGy8Kt3ZGFKUnVHrcoNLfZdrWyOO9peH5NZgrkwxvNN+n0l73CNVTT5JpknaLf7fPcouEnGScZJ7NNdaPkcxMTtLuu/ZQA0nzW4FEkuS2AqAAbgAAACijFPqSXyG8ioAAAAAAKOMW+tJ/IbyKgAAAwBkAKNJ81uASS5LYCoFYxc5KMU5Sb2SS3bERMztBM7dZfQnkW4RyuHNFycvNrdORmyjJVS6nGCT23XY3uz657NcPyaPBbJmjab7dPpDheL6qmoyRTHO8V/26Mdi8EAAadxh5LtH4u6V0q/Q85/8Ak0JJv/kuT/yc7xHgel4hvaY5b+Y/78vV0nEs2l+GJ3r4lxPi7yY6xwlYnZCOZjTbULqOvf4rmmfO9Z7O67S7zWvPXzH67urwcV02bpM8s/X9tSnCVbalFxa7GtjmrUtSdrRtL1otFo3rO4k5PZJt+CMRWbdIjdmZiO6RwuHs/Pa6FEoQf27PVR72k4Fr9ZMcmOYjzPSHm5+JabTx8V958R1bLpvBeNj7SypPIn7q6o//AKfQNB7J6bBtbVTz28do/cuX1PHM2T4cMcsf5TkNOxa4dCONUo93QR1tNDpaV5a4q7faHh21Oe0803nf7o3UOE8DNTcK/R7Per6l+B4et9mtBq4maV5LeY/XZ6Wn4vqcHS080fX9tYz+Es7DbdcPSa++vn+B881vsxrtLMzjjnr9O/4dTp+MabN0tPLP1/aHsqnVLo2QlB90lscvfFkxTtkrMT9YezW9bxvWd3kibsjG0/KzJJU49lnio9X4l7T6DVaqdsOOZ/j/ALVsupw4Y3yXiGwadwRbZtPMsVcf/jr63+J2+g9kMl9r623LHiO/57f7c7qeO0r8Onjf6z2bLiaJg4UUqsavf3pLpN/NnfabhGh0kbYsUfeY3n8y5nNrtTnne95/0pmaJg5kGrMavfb2orotfNDU8I0OrjbJij7xG0/mDDrtTgnel5/255bhuLfQe67mcBr/AGRyU3vo7c0eJ7/ns6fTccpb4dRG31hYlCUOcWjidRoNVpZ2zY5j+P8At0OLU4c0b47xLyUVkSbeyW5LTFkyztSszP0hpa9aRvadl2GNOfNdFeJ1Gi9mddqpickclfr3/DxtRxfTYelZ5p+n7ZEMaEOa6T8T6DovZvQaSIm1ee3mf12cvqOLanPO0Tyx9P2uOuL+yvwPcvodLevJbFWY+0POrqc1Z5ovO/3WbMSL64+q+7sOS1/snps+9tLPJPjvH7h7mm43mx9M0c0f5Y86Jw5x38UcBq+B6/RzPPjmY8x1h0+DiOmz/LfafE9Hg8KazXpMbPRiYnsLrZtSlsk7Ujefoxa0Vje07Nq4J8neo8bXWeYcMbFqaVl9u+yb7Eu1nS6P2c12q2m9eSvmf13eRqOK6bD0rPNP0/buXCHkx0bhFRtrq9LzkuvJvSbX/FckfReH8E0vD9rVjmv5n/rw5TVcRzarpM7V8Q286B5YAAAAMDW9KhrOm2409lJreEvdl2M2rPLO7ExvDj2VhKq+dV9UfOQk4yUop7NE1sWPJ1vWJ+8I4venyzs8Qprr9muEf+MUhXDjp8tYj+GbZL2+aZl7JUYAAAAPMq4z9qKl8VuaWpW/S0btotavaXhYtKe6prT8IIijTYIneKR+IbzmyT3tP5XEtlsupFiIiOkIu6oACkvZfwA5zL2n8TVuoYmN+knZToruX4EE6fDPWaR+ISRlyR2tP5EkiWtK0+WNmk2m3eVTdgAAAAFHFPmkyK2LHf5qxP8ADeL3r8szC9hYVmdl042PX07rZqEIpc2xXHjx/JWI+0E3tf5p3fTXCXDtXC+hY2BXs5xXStmvtzfNkUzvO7MRsmTDIAAAAAADRPKDofQnHUqo9Uto2pd/Y/0J8dvRHaPVpRMjAAAAAAAAAAABSXsv4Ac5l7T+Jq3UAAAAAAAAAAOr+RXhLzltmu5MPVhvXjJrm/tS/T8SK8+jasOwkLcAAAAAAAAs5eLXm41tFselXZFxaMxO3Ucg1bTbNJ1C7Fs5wfU/eXYy3E7xugmNmIZYAAAAAAAAAACkvZfwA5zL2n8TVuoAAAAAAAAAk+G9Cu4k1rG0+hPpWy9aXuR7X8kYmdo3I6vpzTdPp0rAow8eHQopgoRXgitPVKyTAAAAAAAAAANW470P07BWZVHe6hettzlDt/Alpbadmlo3c4LCIAAAAAAAAAAKS9l/ADnMvafxNW6gAAAAAAAADunke4S/c+kPVMiG2XmL1E11wr7Px5/gQXnedm8Q6IRtgAAAAAAAAAApKKlFprdPqaYGj5nk5ssyrZ0ZVddMpNxhKL3S7ieMiPlWfo2yfvlX5WPeR4OQ+jbJ++VflY95Hg5D6Nsn75V+Vj3keDkPo2yfvlX5WPeR4OQ+jbJ++VflY95Hg5D6Nsn75V+Vj3keDkPo2yfvlX5WPeR4OQ+jbJ++VflY95Hg5D6Nsn75V+Vj3keDkUfk1yWmvTKvyse8jwcjWH5B89tv96Y39ORj3kM8qn0D5/8AFMb+nIe8g5T6B8/+KY39OQ95Byn0D5/8Uxv6ch7yDlPoHz/4pjf05D3kHKfQPn/xTG/pyHvIOU+gfP8A4pjf05D3kHKfQPn/AMUxv6ch7yDlZWmeQy6jUMezM1Cm7FhNSsrhBpyS7DE3OV1yEI1xUYpRjFbJLkkRN3oAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//Z
// @author       JustinS83
// @grant        GM_xmlhttpRequest
// @require      https://cdn.jsdelivr.net/npm/@turf/turf@7.2.0/turf.min.js
// @require      https://cdn.jsdelivr.net/npm/proj4@2.19.5/dist/proj4.min.js
// @require      https://cdn.jsdelivr.net/npm/@terraformer/wkt@2.2.1/dist/t-wkt.umd.min.js
// @require      https://greasyfork.org/scripts/24851-wazewrap/code/WazeWrap.js
// @require      https://greasyfork.org/scripts/27023-jscolor/code/JSColor.js
// @require      https://update.greasyfork.org/scripts/37486/1158035/WME%20Utils%20-%20HoursParser.js
// @require      https://greasyfork.org/scripts/38421-wme-utils-navigationpoint/code/WME%20Utils%20-%20NavigationPoint.js
// @require      https://greasyfork.org/scripts/39208-wme-utils-google-link-enhancer/code/WME%20Utils%20-%20Google%20Link%20Enhancer.js
// @require      https://greasyfork.org/scripts/375202-photo-viewer-db-interface/code/Photo%20Viewer%20DB%20Interface.js
// @connect     greasyfork.org
// @contributionURL https://github.com/WazeDev/Thank-The-Authors
// @license      GPLv3
// @downloadURL https://update.greasyfork.org/scripts/26340/WME%20Place%20Interface%20Enhancements.user.js
// @updateURL https://update.greasyfork.org/scripts/26340/WME%20Place%20Interface%20Enhancements.meta.js
// ==/UserScript==

/* global W */
/* global OpenLayers */
/* ecmaVersion 2017 */
/* global $ */
/* global jscolor */
/* global I18n */
/* global _ */
/* global WazeWrap */
/* global SDKGoogleLinkEnhancer */
/* global HoursParser */
/* global require */
/* global idbPVKeyval */
/* eslint curly: ["warn", "multi-or-nest"] */

let UpdateObject;
let MultiAction;

// import { WmeSDK, DataModel, Editing, Venues } from "./node_modules/wme-sdk-typings/index";
// import "./node_modules/@turf/turf";
// import { simplify } from "./node_modules/@turf/turf/dist/esm/index";
/**
 * @var sdk
 * @type WmeSDK
 */
var sdk;
unsafeWindow.SDK_INITIALIZED.then(() => {
    if (!unsafeWindow.getWmeSdk) {
        throw new Error("SDK is not installed");
    }
    sdk = unsafeWindow.getWmeSdk({
        scriptId: "wme-place-interface-enhancements",
        scriptName: "WME PIE",
    });

    console.log(`SDK v ${sdk.getSDKVersion()} on ${sdk.getWMEVersion()} initialized`);
    sdk.Events.once({ eventName: "wme-ready" }).then(pie);
});

function pie(tries = 1) {
    if (!jscolor || !WazeWrap.Ready) {
        setTimeout(() => {
            pie(tries + 1);
        }, 200);
        return;
    }

    const curr_ver = GM_info.script.version;
    let settings = {};
    // const placeMenuSelector = "#primary-toolbar > div > div.toolbar-group.toolbar-group-venues > wz-menu"; //"#edit-buttons > div > div.toolbar-button.waze-icon-place.toolbar-submenu.toolbar-group.toolbar-group-venues.ItemInactive > menu";
    //"#edit-buttons > div > div.toolbar-submenu.toolbar-group.toolbar-group-venues.ItemInactive > menu";
    // const placementMode = false;
    const resCategory = "RESIDENTIAL";
    let wazePL;
    let hoursparser;
    let GLE;
    let catalog = [];
    const updateMessage =
        "Fixing the place copy functionality.  Until they change the geometry access again, at least.";
    let lastSelectedFeature;
    const SCRIPT_VERSION = GM_info.script.version.toString();
    const SCRIPT_NAME = GM_info.script.name;
    const DOWNLOAD_URL = GM_info.script.fileURL;
    const mainLayerName = "WME PIE";
    // let PLSpotEstimatorLayer, PLSpotEstimatorCalibrationLayer;
    let PIEPlaceNameLayer;
    // let showStopPointsLayer;
    // let closestSegmentLayer;
    let drawPoly, PLSpotEstimatordrawControl, PLSpotEstimatorCalibrationdrawControl;
    let isDrawing;
    let savedSelectedVenue;
    // let pointStyle = {
    //     pointRadius: 6,
    //     fillOpacity: 0,
    //     strokeColor: '#00ece3',
    //     strokeWidth: '2',
    //     strokeLinecap: 'round'
    // };

    //Closest segment

    const styleConfig = {
        styleContext: {
            labelYOffset: (context) => {
                return context?.feature?.properties?.style?.labelYOffset;
            },
            pointRadius: (context) => {
                return context?.feature?.properties?.style?.pointRadius;
            },
            fontStyle: (context) => {
                return context?.feature?.properties?.style?.fontStyle;
            },
            label: (context) => {
                return context?.feature?.properties?.style?.label;
            },
            display: (context) => {
                return context?.feature?.properties?.style?.display;
            },
            fontWeight: (context) => {
                return context?.feature?.properties?.style?.fontWeight;
            },
            fontSize: (context) => {
                return context?.feature?.properties?.style?.fontSize;
            },
            labelOutlineWidth: (context) => {
                return context?.feature?.properties?.style?.labelOutlineWidth;
            },
            fontColor: (context) => {
                return context?.feature?.properties?.style?.fontColor;
            },
            labelOutlineColor: (context) => {
                return context?.feature?.properties?.style?.labelOutlineColor;
            },
        },
        styleRules: [
            {
                predicate: (properties) => {
                    return properties.style === "default";
                },
                style: {
                    pointRadius: "${pointRadius}",
                    label: "${label}",
                    fontFamily: "Tahoma, Arial, Verdana",
                    labelOutlineColor: settings.PlaceNameFontOutline,
                    labelOutlineWidth: Number(settings.PlaceNameFontOutlineWidth),
                    labelAlign: "cm",
                    fontColor: "${fontColor}",
                    fontOpacity: 1.0,
                    fontSize: "${fontSize}",
                    labelYOffset: "${labelYOffset}",
                    fontStyle: "${fontStyle}",
                    fontWeight: "${fontWeight}",
                },
            },
            {
                predicate: (properties) => {
                    return properties.styleName === "pointStyle";
                },
                style: {
                    pointRadius: 6,
                    fillColor: "white",
                    fillOpacity: 1,
                    strokeColor: "#00ece3",
                    strokeWidth: "3",
                    strokeLinecap: "round",
                },
            },
            {
                predicate: (properties) => {
                    return properties.styleName === "lineStyleToNavPoint";
                },
                style: {
                    strokeWidth: 3,
                    strokeColor: "#00ece3",
                    strokeLinecap: "round",
                    strokeDashstyle: "dash",
                },
            },
            {
                predicate: (properties) => {
                    return properties.styleName === "lineStyleToClosestSeg";
                },
                style: {
                    strokeWidth: 4,
                    strokeColor: "#00ece3",
                    strokeLinecap: "round",
                },
            },
            {
                predicate: (properties) => {
                    return properties.styleName === "pointStyleNavPoint";
                },
                style: {
                    externalGraphic:
                        "data:image/gif;base64,R0lGODlhFgAWAPZ/AD09PT8/Pj8/P0M9PUA/P1s9PUBAPz09Qz09Zz09c0M9SWc9bT9AQD1DT0FBQEJBQURDQkRDQ0JGRkZFRUlIRklIR0lISElJSVFPTFJPTlJQTVNQTlNRT1ZTT1lWUlhWU11ZVmFbSXNDW2FhT2diXUlDYUNJbVtDc1thYWBgYGFhYWxsbG1tbZE9PbZzPaRVVZFnSbZzQ7BtYbB/Z8J/Q7yFW4uRbZGLc8iLYdqkZ8iqeeCwZ+y8cz09iz09kT1Dlz1nlz1JpENbkUNztmGFvD2R1EOR1H+wyG2w4HO25nO27Hm88p2dnZ6enraXl7a2ts7Cl/jIi/LOkfjUkf/Ukf/Ul//gqv/mtoW22pe22pfCzovI8pfU+KTa/7zs/8LCwsLOzs7Ozs/Pz9rOzubUzuzazvLgyP/syP//1P/42v//2s7U5s744NTm+Nrs/87y/8j4/9T//+bm5v//4P//5v//7ODy/+b///Pz8/jy8v//8vL4////+Pj//////wAAACH5BAUAAH8ALAAAAAAWABYAAAf+gH+CgyQeFQ8AAAQTHiSDj48ZDAIAlJWVAhyQjw8CAitMYXh4YUwrlQ+bf54VX36vsK9fEwKpnAIgcrBpTll9sHIgDLZ/GQITurBUAD1xsXIWAhmCnq6wZjMACFhusV+VfxyfsHw5JjfaNiVcsSsCHRUATLA8Qm9WBUFxUydesEwAKhgQEOaVmhddYr3KYcTPrzC1KOFRIwOEAhRbYNXBEaIBCSR+8CRKhAdNi5FKNLoIEABAkZCJWobhQwbKAi3dYJXRAQRMGz8QIVQQMM+PHhpJ/NQZs6YPnRhL/gmo8AfAClhXRGCRwoxNjSF3YJ2iJsCanzMwMB0gEvbVE09GgsQhixVFQA84z6JdGERLRTI/VQb8cPZKjgoBECAROGY2zx5YT6IJUNXpU6hRpdzVUhXXk6VEngx44PwIxAQJiSRUAKEqEAA7",
                    graphicWidth: 22,
                    graphicHeight: 22,
                },
            },
            {
                predicate: (properties) => {
                    return properties.styleName === "placeNameLabel";
                },
                style: {
                    display: "${display}",
                    label: "${label}",
                    labelYOffset: "${labelYOffset}",
                    fontWeight: "${fontWeight}",
                    fontSize: "${fontSize}",
                    labelOutlineWidth: "${labelOutlineWidth}",
                    fontColor: "${fontColor}",
                    labelOutlineColor: "${labelOutlineColor}",
                },
            },
        ],
    };

    const layerConfig = {
        PIEPlaceNameLayer: {
            layerName: "PIEPlaceNameLayer",
            uniqueName: "__PIEPlaceNameLayer",
            displayInLayerSwitcher: false,
            styleRules: styleConfig.styleRules,
            styleContext: styleConfig.styleContext,
        },
        "WME PIE": {
            layerName: mainLayerName,
            displayInLayerSwitcher: false,
            styleRules: styleConfig.styleRules,
            styleContext: styleConfig.styleContext,
        },
        PIEPLSpotEstimatorLayer: {
            layerName: "PIEPLSpotEstimatorLayer",
            displayInLayerSwitcher: false,
            uniqueName: "__PIEPLSpotEstimatorLayer",
            styleRules: styleConfig.styleRules,
            styleContext: styleConfig.styleContext,
        },
        PIEPLSpotEstimatorCalibrationLayer: {
            styleRules: styleConfig.styleRules,
            styleContext: styleConfig.styleContext,
            layerName: "PIEPLSpotEstimatorCalibrationLayer",
            displayInLayerSwitcher: false,
            uniqueName: "__PIEPLSpotEstimatorCalibrationLayer",
        },
        PIEShowStopPointsLayer: {
            layerName: "PIEShowStopPointsLayer",
            displayInLayerSwitcher: false,
            uniqueName: "__PIEShowStopPointsLayer",
            styleRules: styleConfig.styleRules,
            styleContext: styleConfig.styleContext,
        },
        PIEClosestSegment: {
            layerName: "PIEClosestSegment",
            displayInLayerSwitcher: false,
            uniqueName: "__PIEClosesetSegmentLayer",
            styleRules: styleConfig.styleRules,
            styleContext: styleConfig.styleContext,
        },
    };

    loadScriptUpdateMonitor();
    init();

    function loadScriptUpdateMonitor() {
        let updateMonitor;
        try {
            updateMonitor = new WazeWrap.Alerts.ScriptUpdateMonitor(
                SCRIPT_NAME,
                SCRIPT_VERSION,
                DOWNLOAD_URL,
                GM_xmlhttpRequest
            );
            updateMonitor.start();
        } catch (ex) {
            // Report, but don't stop if ScriptUpdateMonitor fails.
            console.error(`${SCRIPT_NAME}:`, ex);
        }
    }

    function _setLayerVisibility(layerName, visibility) {
        sdk.Map.setLayerVisibility({
            layerName: layerName,
            visibility: visibility,
        });
    }

    async function init() {
        loadTranslations();
        GLE = new SDKGoogleLinkEnhancer(sdk, turf);
        hoursparser = new HoursParser();

        const $section = $("<div>", { style: "padding:8px 16px", id: "WMEPIESettings" });
        $section.html(
            [
                `<h4 style="margin-bottom:0px;"><b>${I18n.t("pie.prefs.title")}</b></h4>`,
                `<h6 style="margin-top:0px;">${curr_ver}</h6>`,
                '<fieldset id="fieldPlaceFilter" style="border: 1px solid silver; padding: 8px; border-radius: 4px;">',
                `<legend style="margin-bottom:0px; border-bottom-style:none;width:auto;"><h4>${I18n.t(
                    "pie.filter.PlaceFilterPanel"
                )}</h4></legend>`,
                `<div class="controls-container pie-controls-container" id="divPlaceFilter">${I18n.t(
                    "pie.filter.filter"
                )} <input type="text" name="txtPlaceFilter" id="piePlaceFilter" style="border: 1px solid #000000"/></div>`,
                "</br>",
                `<div class="controls-container pie-controls-container" id="divPlaceFilterOptions"><input type="radio" id="_rbHidePlaces" name="PlaceFilterToggle" checked><label for="_rbHidePlaces">${I18n.t(
                    "pie.filter.Hide"
                )}</label><input type="radio" id="_rbOnlyShowPlaces" name="PlaceFilterToggle"><label for="_rbOnlyShowPlaces">${I18n.t(
                    "pie.filter.Show"
                )}</label></div>`,
                "</fieldset>",

                '<fieldset id="fieldPlacePanel" style="border: 1px solid silver; padding: 8px; border-radius: 4px;">',
                `<legend style="margin-bottom:0px; border-bottom-style:none;width:auto;"><h4>${I18n.t(
                    "pie.prefs.PropertiesPanel"
                )}</h4></legend>`,
                '<div class="controls-container pie-controls-container" id="divAreaPlaceSizeControls">',
                `<div id="divShowAreaPlaceSize" class="controls-container pie-controls-container"><input type="checkbox" id="_cbShowAreaPlaceSize" class="pieSettingsCheckbox" /><label for="_cbShowAreaPlaceSize">${I18n.t(
                    "pie.prefs.ShowAreaPlaceSize"
                )}</label></div>`,
                `<div id="divShowAreaPlaceSizeImperial"class="controls-container pie-controls-container" style="padding-left:20px;"><input type="checkbox" id="_cbShowAreaPlaceSizeImperial" class="pieSettingsCheckbox" disabled /><label for ="_cbShowAreaPlaceSizeImperial">${I18n.t(
                    "pie.prefs.ShowImperial"
                )}</label></div>`,
                `<div id="divShowAreaPlaceSizeMetric" class="controls-container pie-controls-container" style="padding-left:20px;"><input type="checkbox" id="_cbShowAreaPlaceSizeMetric" class="pieSettingsCheckbox" disabled /><label for ="_cbShowAreaPlaceSizeMetric">${I18n.t(
                    "pie.prefs.ShowMetric"
                )}</label></div>`,
                "</div>",
                //!WazeWrap.isBetaEditor ? '<div class="controls-container pie-controls-container" id="divShowLockButtonsRPP" title="' + I18n.t('pie.prefs.ShowRPPLockButtonsTitle') + '"><input type="checkbox" id="_cbShowLockButtonsRPP" class="pieSettingsCheckbox" /><label for="_cbShowLockButtonsRPP" style="white-space:pre-line;">' + I18n.t('pie.prefs.ShowRPPLockButtons') + '</label></div>' : '',
                `<div class="controls-container pie-controls-container" id="divShowPlaceLocatorCrosshair" title="${I18n.t(
                    "pie.prefs.ShowPlaceLocatorCrosshairTitle"
                )}" ><input type="checkbox" id="_cbShowPlaceLocatorCrosshair" class="pieSettingsCheckbox" /><label for="_cbShowPlaceLocatorCrosshair" style="white-space:pre-line;">${I18n.t(
                    "pie.prefs.ShowPlaceLocatorCrosshair"
                )}</label></br>`,
                `<span class="controls-container pie-controls-container" style="padding-left:30px;" title=""><input type="checkbox" id="_cbPlaceLocatorCrosshairProdPL" class="pieSettingsCheckbox" /><label for="_cbPlaceLocatorCrosshairProdPL" style="white-space:pre-line;">${I18n.t(
                    "pie.prefs.ProdPL"
                )}</label></span></br>`,
                `<span class="controls-container pie-controls-container" style="padding-left:30px;" title="${I18n.t(
                    "pie.prefs.ZoomTitle"
                )}">${I18n.t(
                    "pie.prefs.Zoom"
                )} <select id="piePlaceZoom"><option value="22">22</option><option value="21">21</option><option value="20">20</option><option value="19">19</option><option value="18">18</option><option value="17">17</option><option value="16">16</option><option value="15">15</option><option value="14">14</option><option value="13">13</option><option value="12">12</option></select></span></div>`,
                `<div class="controls-container pie-controls-container" id="divShowSearchButton" title="${I18n.t(
                    "pie.prefs.ShowAddressSearchTitle"
                )}"><input type="checkbox" id="_cbShowSearchButton" class="pieSettingsCheckbox"/><label for="_cbShowSearchButton" style="white-space:pre-line;">${I18n.t(
                    "pie.prefs.ShowAddressSearch"
                )}</label></div>`,
                `<div class="controls-container pie-controls-container" id="divAddPlaceCategoriesButtons"><input type="checkbox" id="_cbAddPlaceCategoriesButtons" class="pieSettingsCheckbox"/><label for="_cbAddPlaceCategoriesButtons" style="white-space:pre-line;" style="white-space:pre-line;">${I18n.t(
                    "pie.prefs.ShowPlaceCategoryButtons"
                )}</label></div>`,
                `<div class="controls-container pie-controls-container" id="divShowParkingLotButton" title="${I18n.t(
                    "pie.prefs.ShowPLAButtonTitle"
                )}" ><input type="checkbox" id="_cbShowParkingLotButton" class="pieSettingsCheckbox" /><label for="_cbShowParkingLotButton" style="white-space:pre-line;">${I18n.t(
                    "pie.prefs.ShowPLAButton"
                )}</label></div>`,
                `<div class="controls-container pie-controls-container" id="divShowCopyPlaceButton" title="${I18n.t(
                    "pie.prefs.ShowCopyPlaceButtonTitle"
                )}" ><input type="checkbox" id="_cbShowCopyPlaceButton" class="pieSettingsCheckbox" /><label for="_cbShowCopyPlaceButton" style="white-space:pre-line;">${I18n.t(
                    "pie.prefs.ShowCopyPlaceButton"
                )}</label></div>`,
                `<div class="controls-container pie-controls-container" id="divShowExternalProviderTooltip" title="${I18n.t(
                    "pie.prefs.ShowGPIDTooltipTitle"
                )}" ><input type="checkbox" id="_cbShowExternalProviderTooltip" class="pieSettingsCheckbox" /><label for="_cbShowExternalProviderTooltip" style="white-space:pre-line;">${I18n.t(
                    "pie.prefs.ShowGPIDTooltip"
                )}</label></div>`,
                `<div class="controls-container pie-controls-container" id="divClearDescription" title="${I18n.t(
                    "pie.prefs.ClearDescriptionTitle"
                )}" ><input type="checkbox" id="_cbClearDescription" class="pieSettingsCheckbox" /><label for="_cbClearDescription" style="white-space:pre-line;">${I18n.t(
                    "pie.prefs.ClearDescription"
                )}</label></div>`,
                //'<div class="controls-container pie-controls-container" id="divMoveAddress" title="' + I18n.t('pie.prefs.MoveAddressTitle') + '"><input type="checkbox" id="_cbMoveAddress" class="pieSettingsCheckbox"/><label for="_cbMoveAddress" style="white-space:pre-line;">' + I18n.t('pie.prefs.MoveAddress') + '</label></div>',
                //'<div class="controls-container pie-controls-container" id="divMoveHNEntry" title="' + I18n.t('pie.prefs.MoveHNEntryTitle') + '"><input type="checkbox" id="_cbMoveHNEntry" class="pieSettingsCheckbox"/><label for="_cbMoveHNEntry" style="white-space:pre-line;">' + I18n.t('pie.prefs.MoveHNEntry') + '</label></div>',
                "<br>",
                `<div class="controls-container pie-controls-container" id="divHidePaymentType" title="${I18n.t(
                    "pie.prefs.HidePaymentTypeTitle"
                )}"><input type="checkbox" id="_cbHidePaymentType" class="pieSettingsCheckbox" /><label for="_cbHidePaymentType" style="white-space:pre-line;">${I18n.t(
                    "pie.prefs.HidePaymentType"
                )}</label></div>`,
                `<div class="controls-container pie-controls-container" id="divGeometryMods" title="${I18n.t(
                    "pie.prefs.GeometryModsTitle"
                )}"><input type="checkbox" id="_cbGeometryMods" class="pieSettingsCheckbox" /><label for="_cbGeometryMods" style="white-space:pre-line;">${I18n.t(
                    "pie.prefs.GeometryMods"
                )}</label></div>`,
                `<div class="controls-container pie-controls-container" id="divSimplifyFactor" style="padding-left:20px;" title="${I18n.t(
                    "pie.prefs.SimplifyFactorTitle"
                )}"> ${I18n.t(
                    "pie.prefs.SimplifyFactor"
                )} <input type="number" min="0" max="10" step=".5" style="width:45px; height:20px;" id="pieSimplifyFactor"></div>`,
                `<div class="controls-container pie-controls-container" id="divHideShopAndServices" title="${I18n.t(
                    "pie.prefs.HideShoppingServicesTitle"
                )}"><input type="checkbox" id="_cbHideShopAndServices" class="pieSettingsCheckbox" /><label for="_cbHideShopAndServices" style="white-space:pre-line;">${I18n.t(
                    "pie.prefs.HideShoppingServices"
                )}</label></div>`,
                "</fieldset>",

                '<fieldset id="fieldNewPlaces" style="border: 1px solid silver; padding: 8px; border-radius: 4px;">',
                `<legend style="margin-bottom:0px; border-bottom-style:none;width:auto;"><h4>${I18n.t(
                    "pie.prefs.NewPlaces"
                )}</h4></legend>`,
                `<div id="divEditRPPAfterCreated" class="controls-container pie-controls-container" title="${I18n.t(
                    "pie.prefs.EditRPPAfterCreateTitle"
                )}"><input type="checkbox" id="_cbEditRPPAfterCreated" class="pieSettingsCheckbox"><label for="_cbEditRPPAfterCreated" style="white-space:pre-line;">${I18n.t(
                    "pie.prefs.EditRPPAfterCreate"
                )}</label></div>`,
                `<div id="divUseStreetFromClosestSeg" class="controls-container pie-controls-container" title="${I18n.t(
                    "pie.prefs.UseStreetFromClosestSegmentTitle"
                )}"><input type="checkbox" id="_cbUseStreetFromClosestSeg" class="pieSettingsCheckbox"><label for="_cbUseStreetFromClosestSeg" style="white-space:pre-line;">${I18n.t(
                    "pie.prefs.UseStreetFromClosestSegment"
                )}</label></div>`,
                `<div id="divUseCityFromClosestSeg" class="controls-container pie-controls-container" title="${I18n.t(
                    "pie.prefs.UseCityFromClosestSegmentTitle"
                )}"><input type="checkbox" id="_cbUseCityFromClosestSeg" class="pieSettingsCheckbox"><label for="_cbUseCityFromClosestSeg" style="white-space:pre-line;">${I18n.t(
                    "pie.prefs.UseCityFromClosestSegment"
                )}</label></div>`,
                `<div id="divUseAltCity" class="controls-container pie-controls-container" title="${I18n.t(
                    "pie.prefs.ClosestSegmentAltCityTitle"
                )}" style="padding-left:20px; word-wrap: break-word;"><input type="checkbox" id="_cbUseAltCity" class="pieSettingsCheckbox"><label for="_cbUseAltCity" style="white-space:pre-line;">${I18n.t(
                    "pie.prefs.ClosestSegmentAltCity"
                )}</label></div>`,
                `<div id="divSkipPLR" class="controls-container pie-controls-container" title="${I18n.t(
                    "pie.prefs.ClosestSegmentIgnorePLRUnnamedPRTitle"
                )}"><input type="checkbox" id="_cbSkipPLR" class="pieSettingsCheckbox"/><label for="_cbSkipPLR" style="white-space:pre-line;">${I18n.t(
                    "pie.prefs.ClosestSegmentIgnorePLRUnnamedPR"
                )}</label></div>`,
                `<div id="divDefaultLockLevel" class="controls-container pie-controls-container" style="left:8px;" title="${I18n.t(
                    "pie.prefs.LockLevelTitle"
                )}">${I18n.t(
                    "pie.prefs.LockLevel"
                )}<select id="pieDefaultLockLevel">${buildLockLevelsList()}</select></div>`,
                "</fieldset>",

                '<fieldset id="fieldMapMods" style="border: 1px solid silver; padding: 8px; border-radius: 4px;">',
                `<legend style="margin-bottom:0px; border-bottom-style:none;width:auto;"><h4>${I18n.t(
                    "pie.prefs.MapChanges"
                )}</h4></legend>`,
                `<div id="divShowNames" class="controls-container pie-controls-container" title="${I18n.t(
                    "pie.prefs.ShowPlaceNames"
                )}"><input type="checkbox" id="_cbShowPlaceNames" class="pieSettingsCheckbox" /><label for="_cbShowPlaceNames">${I18n.t(
                    "pie.prefs.ShowPlaceNames"
                )}</label></div>`,
                `<br><div id="divShowNamesPoint"class="controls-container pie-controls-container" style="padding-left:20px;" title="${I18n.t(
                    "pie.prefs.ShowPointNamesTitle"
                )}"><input type="checkbox" id="_cbShowPlaceNamesPoint" class="pieSettingsCheckbox" disabled /><label for ="_cbShowPlaceNamesPoint">${I18n.t(
                    "pie.prefs.ShowPointNames"
                )}</label></div>`,
                `<div id="divShowNamesArea" class="controls-container pie-controls-container" style="padding-left:20px;" title="${I18n.t(
                    "pie.prefs.ShowAreaNamesTitle"
                )}"><input type="checkbox" id="_cbShowPlaceNamesArea" class="pieSettingsCheckbox" disabled /><label for ="_cbShowPlaceNamesArea">${I18n.t(
                    "pie.prefs.ShowAreaNames"
                )}</label></div>`,
                `<br><div id="divShowNamesPLA" class="controls-container pie-controls-container" style="padding-left:20px;" title="${I18n.t(
                    "pie.prefs.ShowPLANameTitle"
                )}"><input type="checkbox" id="_cbShowPlaceNamesPLA" class="pieSettingsCheckbox" disabled /><label for ="_cbShowPlaceNamesPLA">${I18n.t(
                    "pie.prefs.ShowPLAName"
                )}</label></div>`,
                `<br><div id="divShowNamesLock" class="controls-container pie-controls-container" style="padding-left:20px;" title="${I18n.t(
                    "pie.prefs.ShowLockLevelTitle"
                )}"><input type="checkbox" id="_cbShowPlaceNamesLock" class="pieSettingsCheckbox" disabled /><label for ="_cbShowPlaceNamesLock">${I18n.t(
                    "pie.prefs.ShowLockLevel"
                )}</label></div>`,
                `<br><div id="divhidePlaceNamesWhenPlacesHidden" class="controls-container pie-controls-container" style="padding-left:20px;" title="${I18n.t(
                    "pie.prefs.hidePlaceNamesWhenPlacesHiddenTitle"
                )}"><input type="checkbox" id="_cbhidePlaceNamesWhenPlacesHidden" class="pieSettingsCheckbox" disabled /><label for="_cbhidePlaceNamesWhenPlacesHidden">${I18n.t(
                    "pie.prefs.hidePlaceNamesWhenPlacesHidden"
                )}</label></div>`,
                '<div id="divPlaceNamesFontCustomization" class="controls-container pie-controls-container" style="padding-left:20px;">',
                `${I18n.t("pie.prefs.FontSize")} <input type="text" size="1" id="piePlaceNameFontSize"/>px</br>`,
                `${I18n.t(
                    "pie.prefs.FontColor"
                )} <button class="jscolor {valueElement:null,hash:true,closable:true}" style="width:15px; height:15px;border:2px solid black" id="colorPickerFont"></button></br>`,
                `<input type="checkbox" id="_cbPlaceNameFontBold" class="pieSettingsCheckbox"/><label for ="_cbPlaceNameFontBold">${I18n.t(
                    "pie.prefs.Bold"
                )}</label></br>`,
                `${I18n.t(
                    "pie.prefs.FontOutlineColor"
                )} <button class="jscolor {valueElement:null,hash:true,closable:true}" style="width:15px; height:15px;border:2px solid black" id="colorPickerFontOutline"></button></br>`,
                `${I18n.t(
                    "pie.prefs.FontOutlineWidth"
                )} <input type="text" size="1" id="piePlaceNameFontOutlineWidth"/>`,
                "</div>",
                `<div id="divShowPLSpotEstimatorButton" class="controls-container pie-controls-container" title="${I18n.t(
                    "pie.prefs.PSEShowPSEButtonTitle"
                )}"><input type="checkbox" id="_cbShowPLSpotEstimatorButton" class="pieSettingsCheckbox" /><label for="_cbShowPLSpotEstimatorButton" style="white-space:pre-line;">${I18n.t(
                    "pie.prefs.PSEShowPSEButton"
                )}</label></div>`,
                `<div id="divShowNavPointClosestSegmentOnHover" class="controls-container pie-controls-container" title=""><input type="checkbox" id="_cbShowNavPointClosestSegmentOnHover" class="pieSettingsCheckbox" /><label for="_cbShowNavPointClosestSegmentOnHover" style="white-space:pre-line;">${I18n.t(
                    "pie.prefs.ShowNavPointClosestSegmentOnHover"
                )}</label></div>`,
                `<div id="divShowClosestSegmentSelected" class="controls-container pie-controls-container" title=""><input type="checkbox" id="_cbShowClosestSegmentSelected" class="pieSettingsCheckbox" /><label for="_cbShowClosestSegmentSelected" style="white-space:pre-line;">${I18n.t(
                    "pie.prefs.ShowClosestSegmentSelected"
                )}</label></div>`,
                `<div id="divEnableGLE" class="controls-container pie-controls-container" title="${I18n.t(
                    "pie.prefs.EnableGLETitle"
                )}"><input type="checkbox" id="_cbEnableGLE" class="pieSettingsCheckbox"/><label for="_cbEnableGLE" style="white-space:pre-line;">${I18n.t(
                    "pie.prefs.EnableGLE"
                )}</label></div>`,
                `<div id="divGLEShowTempClosed" class="controls-container pie-controls-container" style="padding-left:20px;" title=""><input type="checkbox" id="_cbGLEShowTempClosed" class="pieSettingsCheckbox" disabled/><label for="_cbGLEShowTempClosed">${I18n.t(
                    "pie.prefs.GLEShowTempClosed"
                )}</label></div>`,
                `<div id="divOpenPUR" class="controls-container pie-controls-container" title="${I18n.t(
                    "pie.prefs.OpenPURTitle"
                )}"><input type="checkbox" id="_cbOpenPUR" class="pieSettingsCheckbox"/><label for="_cbOpenPUR" style="white-space:pre-line;">${I18n.t(
                    "pie.prefs.OpenPUR"
                )}</label></div>`,
                `<div id="divEnablePhotoViewer" class="controls-container pie-controls-container" title="${I18n.t(
                    "pie.prefs.PhotoViewerTitle"
                )}"><input type="checkbox" id="_cbEnablePhotoViewer" class="pieSettingsCheckbox"/><label for="_cbEnablePhotoViewer" style="white-space:pre-line;">${I18n.t(
                    "pie.prefs.PhotoViewer"
                )}</label></div>`,
                `<div id="divEnlargeGeoHandles" class="controls-container pie-controls-container" title="${I18n.t(
                    "pie.prefs.EnlargeGeoHandlesTitle"
                )}"><input type="checkbox" id="_cbEnlargeGeoHandles" class="pieSettingsCheckbox"/><label for="_cbEnlargeGeoHandles" style="white-space:pre-line;">${I18n.t(
                    "pie.prefs.EnlargeGeoHandles"
                )}</label></div>`,
                "</fieldset>",
                '<div class="controls-container" id="divPlaceMenuCustomization">',
                `<b>${I18n.t("pie.prefs.PlaceMenuCustomization")}</b></br>`,
                buildItemOption(1),
                buildItemOption(2),
                buildItemOption(3),
                buildItemOption(4),
                buildItemOption(5),
                buildItemOption(6),
                buildItemOption(7),
                buildItemOption(8),
                buildItemOption(9),
                buildItemOption(10),
                buildItemOption(11),
                buildItemOption(12),
                "</div>",
            ].join(" ")
        );

        UpdateObject = require("Waze/Action/UpdateObject");
        MultiAction = require("Waze/Action/MultiAction");

        //Load settings
        await loadSettings();

        // const style = new OpenLayers.Style({
        //     pointRadius: "${pointRadius}",
        //     label : "${labelText}",
        //     fontFamily: "Tahoma, Arial, Verdana",
        //     labelOutlineColor: settings.PlaceNameFontOutline,
        //     labelOutlineWidth: Number(settings.PlaceNameFontOutlineWidth),
        //     labelAlign: 'cm',
        //     fontColor: settings.PlaceNameFontColor,
        //     fontOpacity: 1.0,
        //     fontSize: `${settings.PlaceNameFontSize}px`,
        //     labelYOffset: "${yOffset}",
        //     fontStyle: "${style}",
        //     fontWeight: (settings.PlaceNameFontBold ? 'bold' : ''),
        // });

        function _addDisplayLayer(name, visible = false) {
            sdk.Map.addLayer(layerConfig[name]);
            if (layerConfig[name].displayInLayerSwitcher) {
                sdk.LayerSwitcher.addLayerCheckbox({ name: layerConfig[name].layerName });
                sdk.LayerSwitcher.setCheckboxChecked({
                    name: layerConfig[name].layerName,
                    isChecked: true,
                });
            }
            _setLayerVisibility(name, visible);
        }
        // PIEPlaceNameLayer = new OpenLayers.Layer.Vector("PIEPlaceNameLayer",{displayInLayerSwitcher: false,
        //     uniqueName: "__PIEPlaceNameLayer", styleMap: new OpenLayers.StyleMap(style)});
        // W.map.addLayer(PIEPlaceNameLayer);
        _addDisplayLayer(layerConfig.PIEPlaceNameLayer.layerName, true);
        // PIEPlaceNameLayer.setVisibility(true);

        _addDisplayLayer(mainLayerName);
        // newPlaceLayer = new OpenLayers.Layer.Vector(mainLayerName,{displayInLayerSwitcher: false});
        // W.map.addLayer(newPlaceLayer);

        // PLSpotEstimatorLayer = new OpenLayers.Layer.Vector("PIEPLSpotEstimatorLayer",{displayInLayerSwitcher: false, uniqueName: "__PIEPLSpotEstimatorLayer"});
        // //W.map.addLayer(PLSpotEstimatorLayer);
        // PLSpotEstimatorLayer.setVisibility(true);
        _addDisplayLayer(layerConfig.PIEPLSpotEstimatorLayer.layerName, true);

        // PLSpotEstimatorCalibrationLayer= new OpenLayers.Layer.Vector("PIEPLSpotEstimatorCalibrationLayer",{displayInLayerSwitcher: false, uniqueName: "__PIEPLSpotEstimatorCalibrationLayer"});
        // //W.map.addLayer(PLSpotEstimatorCalibrationLayer);
        // PLSpotEstimatorCalibrationLayer.setVisibility(true);
        _addDisplayLayer(layerConfig.PIEPLSpotEstimatorCalibrationLayer.layerName, true);

        // showStopPointsLayer = new OpenLayers.Layer.Vector("PIEShowStopPointsLayer", {displayInLayerSwitcher: false, uniqueName: "__PIEShowStopPointsLayer"});
        // W.map.addLayer(showStopPointsLayer);
        // showStopPointsLayer.setVisibility(true);
        _addDisplayLayer(layerConfig.PIEShowStopPointsLayer.layerName, true);

        // closestSegmentLayer = new OpenLayers.Layer.Vector("PIEClosestSegment", {displayInLayerSwitcher: false, uniqueName:"__PIEClosesetSegmentLayer"});
        // W.map.addLayer(closestSegmentLayer);
        // closestSegmentLayer.setVisibility(true);
        _addDisplayLayer(layerConfig.PIEClosestSegment.layerName, true);

        sdk.Events.on({
            eventName: "wme-layer-checkbox-toggled",
            eventHandler: (payload) => {
                sdk.Map.setLayerVisibility({
                    layerName: payload.name,
                    visibility: payload.checked,
                });
            },
        });

        /*var ctl = W.map.controls.find(function(ctrl) { return ctrl.displayClass ==="WazeControlSelectHighlightFeature"; });
        var ctlLayers = [].concat(ctl.layers);
        var myLayer = W.map.getLayersByName('PIEPlaceNameLayer')[0];
        ctlLayers.push(myLayer);
        ctl.setLayer(ctlLayers);*/

        //***** Set Google Link Enhancer translations *****
        GLE.strings.closedPlace = I18n.t("pie.GLE.closedPlace");
        GLE.strings.multiLinked = I18n.t("pie.GLE.multiLinked");
        GLE.strings.linkedToThisPlace = I18n.t("pie.GLE.linkedToThisPlace");
        GLE.strings.linkedNearby = I18n.t("pie.GLE.linkedNearby");
        GLE.strings.linkedToXPlaces = I18n.t("pie.GLE.linkedToXPlaces");
        GLE.strings.badLink = I18n.t("pie.GLE.badLink");
        GLE.strings.tooFar = I18n.t("pie.GLE.tooFar");

        injectCss();
        // WazeWrap.Interface.Tab('PIE', $section.html(), init2, 'PIE');
        sdk.Sidebar.registerScriptTab().then((r) => {
            r.tabLabel.innerHTML = "PIE";
            r.tabPane.innerHTML = $section.html();
            init2();
        });
    }

    /**
     * Finds the closest on-screen drivable segment to the given point, ignoring PLR and PR segments if the options are set
     * Similar to WazeWrap.Util just using turf.
     * @function WazeWrap.Geometry.findSDKClosestSegment
     * @param {GeoJSON.Point} The given point to find the closest segment to
     * @param {boolean} If true, Parking Lot Road segments will be ignored when finding the closest segment
     * @param {boolean} If true, Private Road segments will be ignored when finding the closest segment
     * @returns {Object} Returns an Object containing the Segment and Closest Point on the Segment
     **/
    function findSDKClosestSegment(myPoint, ignorePLR, ignoreUnnamedPR) {
        let minDistance = Number.POSITIVE_INFINITY;
        let closestSegment;

        for (const s of sdk.DataModel.Segments.getAll()) {
            const segmentType = s.roadType;
            if (
                segmentType === 10 ||
                segmentType === 16 ||
                segmentType === 18 ||
                segmentType === 19 ||
                (ignorePLR && segmentType === 20)
            )
                continue;

            if (ignoreUnnamedPR && segmentType === 17) {
                const primaryStreetId = s.primaryStreetId;
                const nm = sdk.DataModel.Streets.getById({ streetId: primaryStreetId }).name;
                if (nm === null || nm.trim().length === 0)
                    //PR
                    continue;
            }

            const distanceToSegment = turf.pointToLineDistance(myPoint, s.geometry);

            if (distanceToSegment < minDistance) {
                minDistance = distanceToSegment;
                closestSegment = { segment: s, closestPoint: turf.nearestPointOnLine(s.geometry, myPoint) };
            }
        }
        return closestSegment;
    }

    function getActiveEditor(tries = 1) {
        return new Promise((resolve, reject) => {
            if (W.geometryEditing.activeEditor) resolve(W.geometryEditing.activeEditor);
            else {
                if (tries <= 10) setTimeout(() => resolve(getActiveEditor()), 100);
            }
        });
    }

    function init2() {
        $("#cboPlaceNameFontWeight").select2({ placeholder: "No font weight set", allowClear: true });
        $("#divPlaceNamesFontCustomization .select2-choices").css("font-size", "10px");

        initColorPicker();
        if ($("#colorPickerFont")[0].jscolor) {
            $("#colorPickerFont")[0].jscolor.fromString(settings.PlaceNameFontColor);
            $("#colorPickerFontOutline")[0].jscolor.fromString(settings.PlaceNameFontOutline);
        }

        //$('#divPlaceNamesFontCustomization .select2-input').remove()
        //Set up event handlers
        $("#_cbShowAreaPlaceSize").on("change", function () {
            if (this.checked) {
                attachPlaceSizeHandlers();
                updatePlaceSizeDisplay();
                $("#_cbShowAreaPlaceSizeImperial")[0].disabled = false;
                $("#_cbShowAreaPlaceSizeMetric")[0].disabled = false;
            } else {
                removePlaceSizeHandlers();
                $("#AreaSize").remove();
                $("#_cbShowAreaPlaceSizeImperial")[0].disabled = true;
                $("#_cbShowAreaPlaceSizeMetric")[0].disabled = true;
            }
        });

        $("#_cbShowPlaceNames").on("change", function () {
            // PIEPlaceNameLayer.setVisibility(this.checked);
            _setLayerVisibility(layerConfig.PIEPlaceNameLayer.layerName, this.checked);
            $("#_cbShowPlaceNamesPoint")[0].disabled = !this.checked;
            $("#_cbShowPlaceNamesArea")[0].disabled = !this.checked;
            $("#_cbShowPlaceNamesPLA")[0].disabled = !this.checked;
            $("#_cbShowPlaceNamesLock")[0].disabled = !this.checked;
            $("#_cbhidePlaceNamesWhenPlacesHidden")[0].disabled = !this.checked;

            DisplayPlaceNames();
        });

        $('[id^="_cbShowPlaceNames"]').on("change", () => {
            DisplayPlaceNames();
        });

        $("#_cbhidePlaceNamesWhenPlacesHidden").on("change", () => {
            DisplayPlaceNames();
        });

        $("#_cbShowExternalProviderTooltip").on("change", function () {
            ToggleExternalProvidersCSS(this.checked);
        });

        $("#_cbShowPlaceLocatorCrosshair").on("change", function () {
            if (this.checked) registerEvents(ShowPlaceLocatorCrosshair);
            else unregisterEvents(ShowPlaceLocatorCrosshair);
        });

        $("#_cbShowParkingLotButton").on("change", function () {
            if (this.checked) registerEvents(ShowParkingLotButton);
            else unregisterEvents(ShowParkingLotButton);
        });

        $("#_cbShowCopyPlaceButton").on("change", function () {
            if (this.checked) registerEvents(ShowCopyPlaceButton);
            else unregisterEvents(ShowCopyPlaceButton);
        });

        $("#_cbShowSearchButton").on("change", function () {
            if (this.checked) registerEvents(ShowSearchButton);
            else unregisterEvents(ShowSearchButton);
        });

        $("#_cbAddPlaceCategoriesButtons").on("change", function () {
            if (this.checked) registerEvents(AddPlaceCategoriesButtons);
            else unregisterEvents(AddPlaceCategoriesButtons);
        });

        //         $('#_cbMoveHNEntry').on("change",function(){
        //             if(this.checked)
        //                 registerEvents(MoveHNEntry);
        //             else
        //                 unregisterEvents(MoveHNEntry);
        //         });

        $("#_cbClearDescription").on("change", function () {
            if (this.checked) registerEvents(ShowClearDescription);
            else unregisterEvents(ShowClearDescription);
        });

        $("#_cbShowPLSpotEstimatorButton").on("change", function () {
            if (this.checked) registerEvents(ShowPLSpotEstimatorButton);
            else unregisterEvents(ShowPLSpotEstimatorButton);
        });

        $("#_cbShowNavPointClosestSegmentOnHover").on("change", function () {
            if (this.checked)
                sdk.Events.on({ eventName: "wme-map-mouse-move", eventHandler: drawNavPointClosestSegmentLines });
            // WazeWrap.Events.register("mousemove", null, drawNavPointClosestSegmentLines);
            else sdk.Events.off({ eventName: "wme-map-mouse-move", eventHandler: drawNavPointClosestSegmentLines });
            // WazeWrap.Events.unregister("mousemove", null, drawNavPointClosestSegmentLines);
        });

        $("#_cbShowClosestSegmentSelected").on("change", function () {
            if (this.checked) {
                // WazeWrap.Events.register('afterundoaction', this, checkSelection);
                // WazeWrap.Events.register('afteraction', this, checkSelection);
                // WazeWrap.Events.register('selectionchanged', this, checkSelection);
                // W.model.venues.on('objectschanged', ObjectsChanged);
                sdk.Events.on({ eventName: "wme-after-undo", eventHandler: checkSelection });
                sdk.Events.on({ eventName: "wme-selection-changed", eventHandler: checkSelection });
                // sdk.Events.on({ eventName: "wme-data-model-objects-changed", eventHandler: ObjectsChanged });
            } else {
                // WazeWrap.Events.unregister('afterundoaction', this, checkSelection);
                // WazeWrap.Events.unregister('afteraction', this, checkSelection);
                // WazeWrap.Events.unregister('selectionchanged', this, checkSelection);
                // W.model.venues.off('objectschanged', ObjectsChanged);
                sdk.Events.off({ eventName: "wme-after-undo", eventHandler: checkSelection });
                sdk.Events.off({ eventName: "wme-selection-changed", eventHandler: checkSelection });
                // sdk.Events.off({ eventName: "wme-data-model-objects-changed", eventHandler: ObjectsChanged });
            }
        });

        $("#_cbOpenPUR").on("change", function () {
            if (this.checked) sdk.Events.on({ eventName: "wme-selection-changed", eventHandler: openPUR });
            // WazeWrap.Events.register('selectionchanged', this, openPUR);
            else sdk.Events.off({ eventName: "wme-selection-changed", eventHandler: openPUR });
            // WazeWrap.Events.unregister('selectionchanged', this, openPUR);
        });

        $("#_cbEnableGLE").on("change", function () {
            if (this.checked) GLE.enable();
            else GLE.disable();
            $("#_cbGLEShowTempClosed")[0].disabled = !this.checked;
        });

        $("#_cbGLEShowTempClosed").on("change", function () {
            GLE.showTempClosedPOIs = this.checked;
        });

        $("#_cbEnablePhotoViewer").on("change", function () {
            if (this.checked) $("#launchDiv").css("display", "block");
            else {
                hide_visio();
                $("#launchDiv").css("display", "none");
            }
        });

        $("#_cbEnlargeGeoHandles").on("change", function () {
            if (this.checked) changeGeoHandleStyle(8);
            else changeGeoHandleStyle(6);
            unregisterEvents(enlargeVirtualVerticies);
            registerEvents(enlargeVirtualVerticies);
        });

        $("#_cbHidePaymentType").on("change", function () {
            if (this.checked) registerEvents(HidePaymentTypePlaceSelected);
            else unregisterEvents(HidePaymentTypePlaceSelected);
        });

        $("#_cbGeometryMods").on("change", function () {
            if (this.checked) registerEvents(InsertGeometryMods);
            else unregisterEvents(InsertGeometryMods);
        });

        //Load settings to interface
        setChecked("_cbShowAreaPlaceSize", settings.ShowAreaPlaceSize);
        setChecked("_cbShowAreaPlaceSizeImperial", settings.ShowAreaPlaceSizeImperial);
        setChecked("_cbShowAreaPlaceSizeMetric", settings.ShowAreaPlaceSizeMetric);
        setChecked("_cbShowLockButtonsRPP", settings.ShowLockButtonsRPP);
        setChecked("_cbEditRPPAfterCreated", settings.EditRPPAfterCreated);
        setChecked("_cbUseStreetFromClosestSeg", settings.UseStreetFromClosestSeg);
        setChecked("_cbUseCityFromClosestSeg", settings.UseCityFromClosestSeg);
        setChecked("_cbShowPlaceLocatorCrosshair", settings.ShowPlaceLocatorCrosshair);
        setChecked("_cbShowParkingLotButton", settings.ShowParkingLotButton);
        setChecked("_cbShowCopyPlaceButton", settings.ShowCopyPlaceButton);
        setChecked("_cbShowExternalProviderTooltip", settings.ShowExternalProviderTooltip);
        setChecked("_cbUseAltCity", settings.UseAltCity);
        setChecked("_cbShowSearchButton", settings.ShowSearchButton);
        setChecked("_cbAddPlaceCategoriesButtons", settings.AddPlaceCategoriesButtons);
        setChecked("_cbSkipPLR", settings.SkipPLR);
        setChecked("_cbShowPlaceNames", settings.ShowPlaceNames);
        setChecked("_cbShowPlaceNamesPoint", settings.ShowPlaceNamesPoint);
        setChecked("_cbShowPlaceNamesArea", settings.ShowPlaceNamesArea);
        setChecked("_cbShowPlaceNamesPLA", settings.ShowPlaceNamesPLA);
        setChecked("_cbShowPlaceNamesLock", settings.ShowPlaceNamesLock);
        setChecked("_cbClearDescription", settings.ClearDescription);
        setChecked("_cbPlaceNameFontBold", settings.PlaceNameFontBold);
        setChecked("_cbPlaceLocatorCrosshairProdPL", settings.PlaceLocatorCrosshairProdPL);
        //setChecked('_cbMoveHNEntry', settings.MoveHNEntry);
        setChecked("_cbShowPLSpotEstimatorButton", settings.ShowPLSpotEstimatorButton);
        setChecked("_cbShowNavPointClosestSegmentOnHover", settings.ShowNavPointClosestSegmentOnHover);
        setChecked("_cbShowClosestSegmentSelected", settings.ShowClosestSegmentSelected);
        setChecked("_cbEnableGLE", settings.EnableGLE);
        setChecked("_cbOpenPUR", settings.OpenPUR);
        setChecked("_cbHidePaymentType", settings.HidePaymentType);
        setChecked("_cbGeometryMods", settings.GeometryMods);
        setChecked("_cbEnablePhotoViewer", settings.EnablePhotoViewer);
        setChecked("_cbHideShopAndServices", settings.HideShopAndServices);
        setChecked("_cbEnlargeGeoHandles", settings.EnlargeGeoHandles);
        setChecked("_cbhidePlaceNamesWhenPlacesHidden", settings.hidePlaceNamesWhenPlacesHidden);
        setChecked("_cbGLEShowTempClosed", settings.GLEShowTempClosed);

        $("#_cbGLEShowTempClosed")[0].disabled = !settings.EnableGLE;
        if (settings.ShowPlaceNames) {
            $("#_cbShowPlaceNamesPoint")[0].disabled = false;
            $("#_cbShowPlaceNamesArea")[0].disabled = false;
            $("#_cbShowPlaceNamesPLA")[0].disabled = false;
            $("#_cbShowPlaceNamesLock")[0].disabled = false;
            $("#_cbhidePlaceNamesWhenPlacesHidden")[0].disabled = false;
        }
        if (settings.PlaceZoom < 12) settings.PlaceZoom = Number.parseInt(settings.PlaceZoom) + 12;
        $("#piePlaceZoom")[0].value = settings.PlaceZoom;
        $("#pieDefaultLockLevel")[0].value = settings.DefaultLockLevel;
        $("#piePlaceNameFontSize")[0].value = settings.PlaceNameFontSize;
        $("#piePlaceNameFontOutlineWidth")[0].value = settings.PlaceNameFontOutlineWidth;
        $("#pieSimplifyFactor")[0].value = settings.SimplifyFactor;

        if (settings.ShowNavPointClosestSegmentOnHover)
            // WazeWrap.Events.register("mousemove", null, drawNavPointClosestSegmentLines);
            sdk.Events.on({ eventName: "wme-map-mouse-move", eventHandler: drawNavPointClosestSegmentLines });

        if (settings.ShowAreaPlaceSize) {
            $("#_cbShowAreaPlaceSizeImperial")[0].disabled = false;
            $("#_cbShowAreaPlaceSizeMetric")[0].disabled = false;
            attachPlaceSizeHandlers();
        }

        if (settings.ShowPlaceLocatorCrosshair) {
            registerEvents(ShowPlaceLocatorCrosshair);
            //JUSTIN
            //ShowPlaceLocatorCrosshair(); //in case the user opened a PL with a Place selected
        }

        if (settings.ShowParkingLotButton) {
            registerEvents(ShowParkingLotButton);
            ShowParkingLotButton(); //in case the user opened a PL with a Place selected
        }

        if (settings.ShowCopyPlaceButton) {
            registerEvents(ShowCopyPlaceButton);
            ShowCopyPlaceButton();
        }

        if (settings.ShowExternalProviderTooltip) {
            //registerEvents(ShowExternalProviderTooltip);
            //ShowExternalProviderTooltip();
            const observer = new MutationObserver((mutations) => {
                mutations.forEach((mutation) => {
                    if ($(mutation.target).hasClass("select2-chosen")) ShowExternalProviderTooltip();
                });
            });

            observer.observe(document.getElementById("edit-panel"), { childList: true, subtree: true });
        }

        if (settings.ShowSearchButton) {
            registerEvents(ShowSearchButton);
            ShowSearchButton(); //in case the user opened a PL with a Place selected
        }

        if (settings.AddPlaceCategoriesButtons) {
            registerEvents(AddPlaceCategoriesButtons);
            AddPlaceCategoriesButtons();
        }

        if (settings.ClearDescription) {
            registerEvents(ShowClearDescription);
            ShowClearDescription();
        }

        //         if(settings.MoveHNEntry){
        //             registerEvents(MoveHNEntry);
        //             MoveHNEntry();
        //         }

        if (settings.ShowPLSpotEstimatorButton) {
            registerEvents(ShowPLSpotEstimatorButton);
            ShowPLSpotEstimatorButton();
        }

        if (settings.ShowExternalProviderTooltip) ToggleExternalProvidersCSS(true);

        if (settings.ShowClosestSegmentSelected) {
            // WazeWrap.Events.register('afterundoaction', null, checkSelection);
            sdk.Events.on({ eventName: "wme-after-undo", eventHandler: checkSelection });
            // WazeWrap.Events.register('afteraction', null, checkSelection);
            // WazeWrap.Events.register('selectionchanged', null, checkSelection);
            sdk.Events.on({ eventName: "wme-selection-changed", eventHandler: checkSelection });
            // W.model.venues.on('objectschanged', ObjectsChanged);
            // sdk.Events.on({ eventName: "wme-data-model-objects-changed", eventHandler: ObjectsChanged });
        }

        if (settings.OpenPUR)
            // WazeWrap.Events.register('selectionchanged', null, openPUR);
            sdk.Events.on({ eventName: "wme-selection-changed", eventHandler: openPUR });

        GLE.showTempClosedPOIs = settings.showTempClosedPOIs;

        if (settings.EnableGLE) GLE.enable();

        //if(settings.EnablePhotoViewer)
        SetupPhotoViewer();

        if (settings.EnlargeGeoHandles) {
            changeGeoHandleStyle(8);
            registerEvents(enlargeVirtualVerticies);
        }

        if (settings.HidePaymentType) {
            registerEvents(HidePaymentTypePlaceSelected);
            HidePaymentTypePlaceSelected();
        }

        if (settings.GeometryMods) {
            registerEvents(InsertGeometryMods);
            InsertGeometryMods();
        }

        $(".pieSettingsCheckbox").on("change", function () {
            const settingName = $(this)[0].id.substr(3);
            settings[settingName] = this.checked;
            saveSettings();
        });

        $("#piePlaceZoom").on("change", function () {
            const settingName = $(this)[0].id.substr(3);
            settings[settingName] = $(this)[0].value;
            saveSettings();
        });

        $("#pieDefaultLockLevel").on("change", function () {
            settings[$(this)[0].id.substr(3)] = $(this)[0].value;
            saveSettings();
        });

        $("#_cbPlaceNameFontBold").on("change", () => {
            DisplayPlaceNames();
        });

        $("#piePlaceNameFontSize").on("focusout", function () {
            const fontSize = $(this)[0].value;
            if (fontSize === "" || fontSize === "0") $(this)[0].value = 12;
            settings[$(this)[0].id.substr(3)] = fontSize;
            saveSettings();
            // PIEPlaceNameLayer.styleMap.styles.default.defaultStyle.fontSize = `${fontSize}px`;
            DisplayPlaceNames();
        });

        $("#piePlaceNameFontOutlineWidth").on("focusout", function () {
            const outlineWidth = $(this)[0].value;
            if (outlineWidth === "" || outlineWidth === "0") $(this)[0].value = 3;
            settings[$(this)[0].id.substr(3)] = outlineWidth;
            saveSettings();
            // PIEPlaceNameLayer.styleMap.styles.default.defaultStyle.labelOutlineWidth = outlineWidth;
            DisplayPlaceNames();
        });

        $("#piePlaceNameFontSize").on("keypress", (event) => {
            if (event.which < 48 || event.which > 57) event.preventDefault();
        });

        $("#piePlaceNameFontOutlineWidth").on("keypress", (event) => {
            if (event.which < 48 || event.which > 57) event.preventDefault();
        });

        $("#pieSimplifyFactor").on("focusout", function () {
            let factor = $(this)[0].value;
            if (factor === "") $(this)[0].value = 5;
            if (factor > 10) factor = 10;
            if (factor < 0) factor = 0;
            settings[$(this)[0].id.substring(3)] = factor;
            saveSettings();
        });

        // var i;
        //Whenever a Place item is changed, read the settings and save to localStorage
        $('[id^="pieItem"]').on("change", () => {
            for (let i = 0; i < 12; i++) settings.NewPlacesList[i] = $(`#pieItem${i + 1}`)[0].value;

            saveSettings();
            //buildNewPlaceList();
        });

        //Load settings into Place Customization list options
        for (let i = 0; i < 12; i++) $(`#pieItem${i + 1}`)[0].value = settings.NewPlacesList[i];

        //Build our new menu
        //buildNewPlaceList();
        //coming back from the HN edit mode now rebuilds the Place menu.
        //W.editingMediator.on('change:editingHouseNumbers', buildNewPlaceList);

        // Rebuild the places menu options after saving
        //W.editingMediator.on('change:editingEnabled', buildNewPlaceList);

        /********* SHORTCUTS *********/
        // new WazeWrap.Interface.Shortcut(
        //     "CreateResidentialPlaceShortcut",
        //     "Creates a resdiential Place point",
        //     "wmepie",
        //     "Place Interface Enhancements",
        //     settings.CreateResidentialPlaceShortcut,
        //     () => {
        //         startPlacementMode(resCategory, true);
        //     },
        //     null
        // ).add();

        try {
            if (
                !settings.CreateResidentialPlaceShortcut ||
                sdk.Shortcuts.areShortcutKeysInUse({ shortcutKeys: settings.CreateResidentialPlaceShortcut })
            )
                settings.CreateResidentialPlaceShortcut = null;
            const rppShortcut = {
                shortcutId: "CreateResidentialPlaceShortcut",
                description: "Creates a resdiential Place point",
                callback: () => {
                    startPlacementMode(resCategory, true);
                },
                shortcutKeys: settings.CreateResidentialPlaceShortcut,
            };
            sdk.Shortcuts.createShortcut(rppShortcut);
        } catch (ex) {
            console.error(`PIE: Unable To Create Shortcut: CreateResidentialPlaceShortcut.  Exception: ${ex}`);
        }

        // new WazeWrap.Interface.Shortcut(
        //     "CreateParkingLotShortcut",
        //     "Creates a parking lot Place",
        //     "wmepie",
        //     "Place Interface Enhancements",
        //     settings.CreateParkingLotShortcut,
        //     () => {
        //         startPlacementMode("PARKING_LOT", false);
        //     },
        //     null
        // ).add();
        try {
            if (
                !settings.CreateParkingLotShortcut ||
                sdk.Shortcuts.areShortcutKeysInUse({ shortcutKeys: settings.CreateParkingLotShortcut })
            )
                settings.CreateParkingLotShortcut = null;
            const parkingLotShortcut = {
                shortcutId: "CreateParkingLotShortcut",
                description: "Creates a parking lot Place",
                callback: () => {
                    startPlacementMode("PARKING_LOT", false);
                },
                shortcutKeys: settings.CreateParkingLotShortcut,
            };
            sdk.Shortcuts.createShortcut(parkingLotShortcut);
        } catch (ex) {
            console.error(`PIE: Unable To Create Shortcut: CreateParkingLotShortcut.  Exception: ${ex}`);
        }

        // new WazeWrap.Interface.Shortcut(
        //     "HideAreaPlacesShortcut",
        //     "Toggle hiding area Places",
        //     "wmepie",
        //     "Place Interface Enhancements",
        //     settings.ToggleAreaPlacesShortcut,
        //     ToggleHideAreaPlaces,
        //     null
        // ).add();
        try {
            if (
                !settings.ToggleAreaPlacesShortcut ||
                sdk.Shortcuts.areShortcutKeysInUse({ shortcutKeys: settings.ToggleAreaPlacesShortcut })
            )
                settings.ToggleAreaPlacesShortcut = null;
            const hideAreaPlaces = {
                shortcutId: "HideAreaPlacesShortcut",
                description: "Toggle hiding area Places",
                callback: ToggleHideAreaPlaces,
                shortcutKeys: settings.ToggleAreaPlacesShortcut,
            };
            sdk.Shortcuts.createShortcut(hideAreaPlaces);
        } catch (ex) {
            console.error(`PIE: Unable To Create Shortcut: HideAreaPlacesShortcut.  Exception: ${ex}`);
        }
        // new WazeWrap.Interface.Shortcut(
        //     "OrthogonalizeShortcut",
        //     "Orthogonalize Area Place",
        //     "wmepie",
        //     "Place Interface Enhancements",
        //     settings.OrthogonalizeShortcut,
        //     OrthogonalizePlace,
        //     null
        // ).add();
        try {
            if (
                !settings.OrthogonalizeShortcut ||
                sdk.Shortcuts.areShortcutKeysInUse({ shortcutKeys: settings.OrthogonalizeShortcut })
            )
                settings.OrthogonalizeShortcut = null;
            const orthogonalizeShortcut = {
                shortcutId: "OrthogonalizeShortcut",
                description: "Orthogonalize Area Place",
                callback: OrthogonalizePlace,
                shortcutKeys: settings.OrthogonalizeShortcut,
            };
            sdk.Shortcuts.createShortcut(orthogonalizeShortcut);
        } catch (ex) {
            console.error(`PIE: Unable To Create Shortcut: OrthogonalizeShortcut.  Exception: ${ex}`);
        }
        // new WazeWrap.Interface.Shortcut(
        //     "SimplifyPlaceShortcut",
        //     "Simplify Area Place",
        //     "wmepie",
        //     "Place Interface Enhancements",
        //     settings.SimplifyPlaceShortcut,
        //     SimplifyPlace,
        //     null
        // ).add();
        try {
            if (
                !settings.SimplifyPlaceShortcut ||
                sdk.Shortcuts.areShortcutKeysInUse({ shortcutKeys: settings.SimplifyPlaceShortcut })
            )
                settings.SimplifyPlaceShortcut = null;
            const simplifyPlaceShortcut = {
                shortcutId: "SimplifyPlaceShortcut",
                description: "Simplify Area Place",
                callback: SimplifyPlace,
                shortcutKeys: settings.SimplifyPlaceShortcut,
            };
            sdk.Shortcuts.createShortcut(simplifyPlaceShortcut);
        } catch (ex) {
            console.error(`PIE: Unable To Create Shortcut: SimplifyPlaceShortcut.  Exception: ${ex}`);
        }
        // new WazeWrap.Interface.Shortcut(
        //     "CreateItem1Shortcut",
        //     "Create Item 1",
        //     "wmepie",
        //     "Place Interface Enhancements",
        //     settings.CreateItem1Shortcut,
        //     () => {
        //         PlaceMenuShortcut(1);
        //     },
        //     null
        // ).add();
        try {
            if (
                !settings.CreateItem1Shortcut ||
                sdk.Shortcuts.areShortcutKeysInUse({ shortcutKeys: settings.CreateItem1Shortcut })
            )
                settings.CreateItem1Shortcut = null;
            const itemShortcut = {
                shortcutId: "CreateItem1Shortcut",
                description: "Create Item 1",
                callback: () => {
                    PlaceMenuShortcut(1);
                },
                shortcutKeys: settings.CreateItem1Shortcut,
            };
            sdk.Shortcuts.createShortcut(itemShortcut);
        } catch (ex) {
            console.error(`PIE: Unable To Create Shortcut: CreateItem1Shortcut.  Exception: ${ex}`);
        }
        // new WazeWrap.Interface.Shortcut(
        //     "CreateItem2Shortcut",
        //     "Create Item 2",
        //     "wmepie",
        //     "Place Interface Enhancements",
        //     settings.CreateItem2Shortcut,
        //     () => {
        //         PlaceMenuShortcut(2);
        //     },
        //     null
        // ).add();

        try {
            if (
                !settings.CreateItem2Shortcut ||
                sdk.Shortcuts.areShortcutKeysInUse({ shortcutKeys: settings.CreateItem2Shortcut })
            )
                settings.CreateItem2Shortcut = null;
            const item2Shortcut = {
                shortcutId: "CreateItem2Shortcut",
                description: "Create Item 2",
                callback: () => {
                    PlaceMenuShortcut(2);
                },
                shortcutKeys: settings.CreateItem2Shortcut,
            };
            sdk.Shortcuts.createShortcut(item2Shortcut);
        } catch (ex) {
            console.error(`PIE: Unable To Create Shortcut: CreateItem2Shortcut.  Exception: ${ex}`);
        }
        // new WazeWrap.Interface.Shortcut(
        //     "CreateItem3Shortcut",
        //     "Create Item 3",
        //     "wmepie",
        //     "Place Interface Enhancements",
        //     settings.CreateItem3Shortcut,
        //     () => {
        //         PlaceMenuShortcut(3);
        //     },
        //     null
        // ).add();
        try {
            if (
                !settings.CreateItem3Shortcut ||
                sdk.Shortcuts.areShortcutKeysInUse({ shortcutKeys: settings.CreateItem3Shortcut })
            )
                settings.CreateItem3Shortcut = null;
            const item3Shortcut = {
                shortcutId: "CreateItem3Shortcut",
                description: "Create Item 3",
                callback: () => {
                    PlaceMenuShortcut(3);
                },
                shortcutKeys: settings.CreateItem3Shortcut,
            };
            sdk.Shortcuts.createShortcut(item3Shortcut);
        } catch (ex) {
            console.error(`PIE: Unable To Create Shortcut: CreateItem3Shortcut.  Exception: ${ex}`);
        }
        // new WazeWrap.Interface.Shortcut(
        //     "CreateItem4Shortcut",
        //     "Create Item 4",
        //     "wmepie",
        //     "Place Interface Enhancements",
        //     settings.CreateItem4Shortcut,
        //     () => {
        //         PlaceMenuShortcut(4);
        //     },
        //     null
        // ).add();

        try {
            if (
                !settings.CreateItem4Shortcut ||
                sdk.Shortcuts.areShortcutKeysInUse({ shortcutKeys: settings.CreateItem4Shortcut })
            )
                settings.CreateItem4Shortcut = null;
            const item4Shortcut = {
                shortcutId: "CreateItem4Shortcut",
                description: "Create Item 4",
                callback: () => {
                    PlaceMenuShortcut(4);
                },
                shortcutKeys: settings.CreateItem4Shortcut,
            };
            sdk.Shortcuts.createShortcut(item4Shortcut);
        } catch (ex) {
            console.error(`PIE: Unable To Create Shortcut: CreateItem4Shortcut.  Exception: ${ex}`);
        }
        // new WazeWrap.Interface.Shortcut(
        //     "CreateItem5Shortcut",
        //     "Create Item 5",
        //     "wmepie",
        //     "Place Interface Enhancements",
        //     settings.CreateItem5Shortcut,
        //     () => {
        //         PlaceMenuShortcut(5);
        //     },
        //     null
        // ).add();

        try {
            if (
                !settings.CreateItem5Shortcut ||
                sdk.Shortcuts.areShortcutKeysInUse({ shortcutKeys: settings.CreateItem5Shortcut })
            )
                settings.CreateItem5Shortcut = null;
            const item5Shortcut = {
                shortcutId: "CreateItem5Shortcut",
                description: "Create Item 5",
                callback: () => {
                    PlaceMenuShortcut(5);
                },
                shortcutKeys: settings.CreateItem5Shortcut,
            };
            sdk.Shortcuts.createShortcut(item5Shortcut);
        } catch (ex) {
            console.error(`PIE: Unable To Create Shortcut: CreateItem5Shortcut.  Exception: ${ex}`);
        }
        // new WazeWrap.Interface.Shortcut(
        //     "CreateItem6Shortcut",
        //     "Create Item 6",
        //     "wmepie",
        //     "Place Interface Enhancements",
        //     settings.CreateItem6Shortcut,
        //     () => {
        //         PlaceMenuShortcut(6);
        //     },
        //     null
        // ).add();

        try {
            if (
                !settings.CreateItem6Shortcut ||
                sdk.Shortcuts.areShortcutKeysInUse({ shortcutKeys: settings.CreateItem6Shortcut })
            )
                settings.CreateItem6Shortcut = null;
            const item6Shortcut = {
                shortcutId: "CreateItem6Shortcut",
                description: "Create Item 6",
                callback: () => {
                    PlaceMenuShortcut(6);
                },
                shortcutKeys: settings.CreateItem6Shortcut,
            };
            sdk.Shortcuts.createShortcut(item6Shortcut);
        } catch (ex) {
            console.error(`PIE: Unable To Create Shortcut: CreateItem6Shortcut.  Exception: ${ex}`);
        }
        // new WazeWrap.Interface.Shortcut(
        //     "CreateItem7Shortcut",
        //     "Create Item 7",
        //     "wmepie",
        //     "Place Interface Enhancements",
        //     settings.CreateItem7Shortcut,
        //     () => {
        //         PlaceMenuShortcut(7);
        //     },
        //     null
        // ).add();

        try {
            if (
                !settings.CreateItem7Shortcut ||
                sdk.Shortcuts.areShortcutKeysInUse({ shortcutKeys: settings.CreateItem7Shortcut })
            )
                settings.CreateItem7Shortcut = null;
            const item7Shortcut = {
                shortcutId: "CreateItem7Shortcut",
                description: "Create Item 7",
                callback: () => {
                    PlaceMenuShortcut(7);
                },
                shortcutKeys: settings.CreateItem7Shortcut,
            };
            sdk.Shortcuts.createShortcut(item7Shortcut);
        } catch (ex) {
            console.error(`PIE: Unable To Create Shortcut: CreateItem7Shortcut.  Exception: ${ex}`);
        }
        // new WazeWrap.Interface.Shortcut(
        //     "CreateItem8Shortcut",
        //     "Create Item 8",
        //     "wmepie",
        //     "Place Interface Enhancements",
        //     settings.CreateItem8Shortcut,
        //     () => {
        //         PlaceMenuShortcut(8);
        //     },
        //     null
        // ).add();

        try {
            if (
                !settings.CreateItem8Shortcut ||
                sdk.Shortcuts.areShortcutKeysInUse({ shortcutKeys: settings.CreateItem8Shortcut })
            )
                settings.CreateItem8Shortcut = null;
            const item8Shortcut = {
                shortcutId: "CreateItem8Shortcut",
                description: "Create Item 8",
                callback: () => {
                    PlaceMenuShortcut(8);
                },
                shortcutKeys: settings.CreateItem8Shortcut,
            };
            sdk.Shortcuts.createShortcut(item8Shortcut);
        } catch (ex) {
            console.error(`PIE: Unable To Create Shortcut: CreateItem8Shortcut.  Exception: ${ex}`);
        }
        // new WazeWrap.Interface.Shortcut(
        //     "CreateItem9Shortcut",
        //     "Create Item 9",
        //     "wmepie",
        //     "Place Interface Enhancements",
        //     settings.CreateItem9Shortcut,
        //     () => {
        //         PlaceMenuShortcut(9);
        //     },
        //     null
        // ).add();

        try {
            if (
                !settings.CreateItem9Shortcut ||
                sdk.Shortcuts.areShortcutKeysInUse({ shortcutKeys: settings.CreateItem9Shortcut })
            )
                settings.CreateItem9Shortcut = null;
            const item9Shortcut = {
                shortcutId: "CreateItem9Shortcut",
                description: "Create Item 9",
                callback: () => {
                    PlaceMenuShortcut(9);
                },
                shortcutKeys: settings.CreateItem9Shortcut,
            };
            sdk.Shortcuts.createShortcut(item9Shortcut);
        } catch (ex) {
            console.error(`PIE: Unable To Create Shortcut: CreateItem9Shortcut.  Exception: ${ex}`);
        }
        // new WazeWrap.Interface.Shortcut(
        //     "CreateItem10Shortcut",
        //     "Create Item 10",
        //     "wmepie",
        //     "Place Interface Enhancements",
        //     settings.CreateItem10Shortcut,
        //     () => {
        //         PlaceMenuShortcut(10);
        //     },
        //     null
        // ).add();

        try {
            if (
                !settings.CreateItem10Shortcut ||
                sdk.Shortcuts.areShortcutKeysInUse({ shortcutKeys: settings.CreateItem10Shortcut })
            )
                settings.CreateItem10Shortcut = null;
            const item10Shortcut = {
                shortcutId: "CreateItem10Shortcut",
                description: "Create Item 10",
                callback: () => {
                    PlaceMenuShortcut(10);
                },
                shortcutKeys: settings.CreateItem10Shortcut,
            };
            sdk.Shortcuts.createShortcut(item10Shortcut);
        } catch (ex) {
            console.error(`PIE: Unable To Create Shortcut: CreateItem10Shortcut.  Exception: ${ex}`);
        }
        // new WazeWrap.Interface.Shortcut(
        //     "CreateItem11Shortcut",
        //     "Create Item 11",
        //     "wmepie",
        //     "Place Interface Enhancements",
        //     settings.CreateItem11Shortcut,
        //     () => {
        //         PlaceMenuShortcut(11);
        //     },
        //     null
        // ).add();

        try {
            if (
                !settings.CreateItem11Shortcut ||
                sdk.Shortcuts.areShortcutKeysInUse({ shortcutKeys: settings.CreateItem11Shortcut })
            )
                settings.CreateItem11Shortcut = null;
            const item11Shortcut = {
                shortcutId: "CreateItem11Shortcut",
                description: "Create Item 11",
                callback: () => {
                    PlaceMenuShortcut(11);
                },
                shortcutKeys: settings.CreateItem11Shortcut,
            };
            sdk.Shortcuts.createShortcut(item11Shortcut);
        } catch (ex) {
            console.error(`PIE: Unable To Create Shortcut: CreateItem11Shortcut.  Exception: ${ex}`);
        }
        // new WazeWrap.Interface.Shortcut(
        //     "CreateItem12Shortcut",
        //     "Create Item 12",
        //     "wmepie",
        //     "Place Interface Enhancements",
        //     settings.CreateItem12Shortcut,
        //     () => {
        //         PlaceMenuShortcut(12);
        //     },
        //     null
        // ).add();

        try {
            if (
                !settings.CreateItem12Shortcut ||
                sdk.Shortcuts.areShortcutKeysInUse({ shortcutKeys: settings.CreateItem12Shortcut })
            )
                settings.CreateItem12Shortcut = null;
            const item12Shortcut = {
                shortcutId: "CreateItem12Shortcut",
                description: "Create Item 12",
                callback: () => {
                    PlaceMenuShortcut(12);
                },
                shortcutKeys: settings.CreateItem12Shortcut,
            };
            sdk.Shortcuts.createShortcut(item12Shortcut);
        } catch (ex) {
            console.error(`PIE: Unable To Create Shortcut: CreateItem12Shortcut.  Exception: ${ex}`);
        }
        $("#piePlaceFilter").on("propertychange keyup paste input", UpdatePlaceFilter);
        $("input[type=radio][name=PlaceFilterToggle]").on("change", UpdatePlaceFilter);

        unsafeWindow.addEventListener(
            "beforeunload",
            () => {
                checkShortcutsChanged();
                //saveSettings();
            },
            false
        );

        const extprovobserver = new MutationObserver((mutations) => {
            //    mutations.forEach((mutation) => {
            for (const mutation of mutations) {
                /*if ($(mutation.target).hasClass('external-providers-view'))
                       if(W.loginManager.user.normalizedLevel === 1)
                           $('.external-providers-view').parent().parent().remove();
                           */

                for (let i = 0; i < mutation.addedNodes.length; i++) {
                    const addedNode = mutation.addedNodes[i];
                    // Only fire up if it's a node
                    if (
                        addedNode.nodeType === Node.ELEMENT_NODE &&
                        ($(addedNode).hasClass("address-edit-view") || $(addedNode).hasClass("conversation-view"))
                    ) {
                        updatePlaceSizeDisplay();
                        AddPlaceCategoriesButtons();
                        delayFire(250, AddHoursParserInterface);
                        //AddHoursParserInterface();
                        AddMakePrimaryButtons();
                        if (settings.ShowPlaceLocatorCrosshair) ShowPlaceLocatorCrosshair();
                        if (settings.ShowSearchButton) ShowSearchButton();
                        if (settings.ShowParkingLotButton) ShowParkingLotButton();
                        if (settings.ShowCopyPlaceButton) ShowCopyPlaceButton();
                        if (settings.GeometryMods) InsertGeometryMods();
                    } else if (addedNode.nodeType === Node.ELEMENT_NODE && $(addedNode).hasClass("payment-checkbox")) {
                        if (settings.HidePaymentType) _hidePaymentType();
                    }
                }
            }
        });

        // W.model.venues.on("objectschanged", (venues) => {
        //     //Hide the suggested categories for Shopping / Services due to the amount of vertical space it takes up - is often used as a valid category
        //     try {
        //         if (WazeWrap.hasPlaceSelected())
        //             if (
        //                 settings.HideShopAndServices &&
        //                 WazeWrap.getSelectedFeatures()[0].WW.getObjectModel().attributes.categories.length === 1 &&
        //                 WazeWrap.getSelectedFeatures()[0].WW.getObjectModel().attributes.categories[0] ===
        //                     "SHOPPING_AND_SERVICES"
        //             )
        //                 $("wz-card.categories-card:eq(1)").hide();
        //     } catch (ex) {
        //         // Log error and move on.
        //         console.error("PIE:", ex);
        //     }
        // });
        // sdk.Events.on({
        //     eventName: "wme-data-model-objects-changed",
        //     eventHandler: (dataModelName, objectIds) => {
        //         try {
        //             const selection = sdk.Editing.getSelection();
        //             if (selection !== null && dataModelName === "venues") {
        //                 for (const objId of objectIds) {
        //                     for (const category of sdk.DataModel.Venues.getById({ venueId: objId }).categories) {
        //                         if (settings.HideShopAndServices && category === "SHOPPING_AND_SERVICES") {
        //                             $("wz-card.categories-card:eq(1)").hide();
        //                             break;
        //                         }
        //                     }
        //                 }
        //             }
        //         } catch (ex) {
        //             console.error("PIE: ", ex);
        //         }
        //     },
        // });

        extprovobserver.observe(document.getElementById("edit-panel"), { childList: true, subtree: true });

        // WazeWrap.Events.register("selectionchanged", null, () => {
        //     if (W.selectionManager.getSelectedFeatures.length > 0)
        //         lastSelectedFeature = W.selectionManager.getSelectedFeatures()[0].WW.getType;
        //     if (WazeWrap.hasPlaceSelected()) {
        //         setTimeout(() => {
        //             //Trim whitespace from start and end of house number field on Places
        //             $(".form-control.house-number").on("focusout", () => {
        //                 $(".form-control.house-number")[0].value = $(".form-control.house-number")[0].value.trim();
        //             });

        //             //Make Website label a clickable link to the set website
        //             let placeURL = WazeWrap.getSelectedFeatures()[0].WW.getObjectModel().attributes.url || "";

        //             $('input[name="url"]').on("focusout", () => {
        //                 placeURL = $('input[name="url"]')[0].value.trim();
        //                 if (placeURL === "") {
        //                     $('input[name="url"]').parent().parent().find("label").unwrap();
        //                     return;
        //                 }
        //                 if (!placeURL.startsWith("http")) placeURL = `https://${placeURL}`;
        //                 if ($("#websiteLink").length === 0)
        //                     $('input[name="url"]')
        //                         .parent()
        //                         .parent()
        //                         .find("label")
        //                         .wrap(
        //                             `<a href="${placeURL}" id="websiteLink" target="_blank" style="cursor:pointer;"></a>`
        //                         );
        //                 else $("#websiteLink").attr("href", placeURL);
        //             });
        //             if (placeURL !== "") {
        //                 if (!placeURL.startsWith("http")) placeURL = `https://${placeURL}`;
        //                 $('input[name="url"]')
        //                     .parent()
        //                     .parent()
        //                     .find("label")
        //                     .wrap(
        //                         `<a href="${placeURL}" id="websiteLink" target="_blank" style="cursor:pointer;"></a>`
        //                     );
        //                 $('input[name="url"]').parent().parent().find("label").css("text-decoration", "underline");
        //                 $('input[name="url"]').parent().parent().find("label").css("cursor", "pointer");
        //             }

        //             //Hide the suggested categories for Shopping / Services due to the amount of vertical space it takes up - is often used as a valid category
        //             if (
        //                 settings.HideShopAndServices &&
        //                 WazeWrap.getSelectedFeatures()[0].WW.getObjectModel().attributes.categories.length === 1 &&
        //                 WazeWrap.getSelectedFeatures()[0].WW.getObjectModel().attributes.categories[0] ===
        //                     "SHOPPING_AND_SERVICES"
        //             )
        //                 $("wz-card.categories-card:eq(1)").hide();
        //         }, 0);
        //     }
        // });

        sdk.Events.on({
            eventName: "wme-selection-changed",
            eventHandler: () => {
                const currentSelection = sdk.Editing.getSelection();
                if (currentSelection !== null) {
                    if (currentSelection.objectType === "venue") {
                        //Trim whitespace from start and end of house number field on Places
                        $(".form-control.house-number").on("focusout", () => {
                            $(".form-control.house-number")[0].value = $(".form-control.house-number")[0].value.trim();
                        });

                        //Make Website label a clickable link to the set website
                        const venue = sdk.DataModel.Venues.getById({ venueId: currentSelection.ids[0] });
                        let placeURL = venue.url || "";

                        $('input[name="url"]').on("focusout", () => {
                            placeURL = $('input[name="url"]')[0].value.trim();
                            if (placeURL === "") {
                                $('input[name="url"]').parent().parent().find("label").unwrap();
                                return;
                            }
                            if (!placeURL.startsWith("http")) placeURL = `https://${placeURL}`;
                            if ($("#websiteLink").length === 0)
                                $('input[name="url"]')
                                    .parent()
                                    .parent()
                                    .find("label")
                                    .wrap(
                                        `<a href="${placeURL}" id="websiteLink" target="_blank" style="cursor:pointer;"></a>`
                                    );
                            else $("#websiteLink").attr("href", placeURL);
                        });
                        if (placeURL !== "") {
                            if (!placeURL.startsWith("http")) placeURL = `https://${placeURL}`;
                            $('input[name="url"]')
                                .parent()
                                .parent()
                                .find("label")
                                .wrap(
                                    `<a href="${placeURL}" id="websiteLink" target="_blank" style="cursor:pointer;"></a>`
                                );
                            $('input[name="url"]').parent().parent().find("label").css("text-decoration", "underline");
                            $('input[name="url"]').parent().parent().find("label").css("cursor", "pointer");
                        }

                        //Hide the suggested categories for Shopping / Services due to the amount of vertical space it takes up - is often used as a valid category

                        if (settings.HideShopAndServices) {
                            for (const category of venue.categories) {
                                if (category === "SHOPPING_AND_SERVICES") {
                                    $("wz-card.categories-card:eq(1)").hide();
                                    break;
                                }
                            }
                        }
                    }
                }
            },
        });

        //No one really uses this and it is causing issues due to the rotate handle persisting after de-selecting a MC
        /*W.selectionManager.events.register("selectionchanged", null, function(){
            let selectedItems = WazeWrap.getSelectedFeatures();
            if(selectedItems.length > 0 && selectedItems[0].attributes.repositoryObject.type === "mapComment")
                getActiveEditor().then(val => {
                    if((val.mode & OpenLayers.Control.ModifyFeature.ROTATE) == 0){
                        val.mode |= OpenLayers.Control.ModifyFeature.ROTATE;
                        val.resetVertices();
                    }
                });
        });*/

        //Obsoleted by WME update released 2017-10-24
        /*var observer = new MutationObserver(function(mutations) {
               mutations.forEach(function(mutation) {
                   if ($('#dialog-region').find('.venue-image-dialog').length > 0 && $('#detailsWrap').length == 0) ImageDialogEnhancement();
               });
           });*/

        //observer.observe(document.getElementById('dialog-region'), { childList: true, subtree: true });

        //Highlight the categories box when the old hospital category is present
        /*W.selectionManager.events.register("selectionchanged", null, highlightObsoleteHospitalCategory);
        W.model.actionManager.events.register("afterundoaction",null, highlightObsoleteHospitalCategory);
        W.model.actionManager.events.register("afterclearactions",null, highlightObsoleteHospitalCategory);
        W.model.actionManager.events.register("afteraction",null, highlightObsoleteHospitalCategory);*/

        // WazeWrap.Events.register("zoomend", null, DisplayPlaceNames);
        sdk.Events.on({ eventName: "wme-map-zoom-changed", eventHandler: DisplayPlaceNames });
        // WazeWrap.Events.register("changelayer", null, DisplayPlaceNames);
        sdk.Events.on({ eventName: "wme-map-layer-changed", eventHandler: DisplayPlaceNames });

        //Shamelessly copied from URO+
        // const MO_MPLayer = new MutationObserver(MPLayerChanged);
        // MO_MPLayer.observe(W.map.getLayerByName("mapProblems").div, { childList: true });
        function dataModelObjectUpdate({ dataModelName, objectIds }) {
            // if (dataModelName === "mapProblems") {
            //     for (const objId of objectIds) {
            //         MarkerClick(objId);
            //     }
            // }
            if (dataModelName === "venues") {
                try {
                    for (const objId of objectIds) {
                        MarkerClick(objId);
                        const processingVenue = sdk.DataModel.Venues.getById({ venueId: objId });
                        if (processingVenue === null) continue;
                        for (const category of processingVenue.categories) {
                            if (settings.HideShopAndServices && category === "SHOPPING_AND_SERVICES") {
                                $("wz-card.categories-card:eq(1)").hide();
                                break;
                            }
                        }
                    }
                } catch (ex) {
                    console.error("PIE: ", ex);
                }
                if (settings.ShowClosestSegmentSelected) {
                    const selection = sdk.Editing.getSelection();
                    ObjectsChanged(selection !== null);
                }
            }
        }
        sdk.Events.trackDataModelEvents({ dataModelName: "mapProblems" });
        sdk.Events.trackDataModelEvents({ dataModelName: "venues" });
        sdk.Events.on({ eventName: "wme-data-model-objects-changed", eventHandler: dataModelObjectUpdate });
        sdk.Events.on({ eventName: "wme-data-model-objects-added", eventHandler: dataModelObjectUpdate });
        sdk.Events.on({ eventName: "wme-data-model-objects-removed", eventHandler: dataModelObjectUpdate });

        wazePL = document.querySelector(".WazeControlPermalink>a.fa-link");
        if (wazePL == null) wazePL = document.querySelector(".permalink");
        wazePL.id = "wazePermalink";

        /******** Hours Parser ************/
        registerEvents(AddHoursParserInterface);
        delayFire(150, AddHoursParserInterface);
        //AddHoursParserInterface();

        registerEvents(AddMakePrimaryButtons);
        AddMakePrimaryButtons();

        WazeWrap.Events.register("change:mode", null, (x, modeID) => {
            if (modeID === 1)
                //in event mode
                GLE.disable();
            else {
                if (settings.EnableGLE) GLE.enable();
            }
        });

        WazeWrap.Interface.ShowScriptUpdate(
            "WME Place Interface Enhancements",
            GM_info.script.version,
            updateMessage,
            "",
            "https://www.waze.com/discuss/t/script-wme-place-interface-enhancements/217315"
        );
    }

    function SetupPhotoViewer() {
        //Black background
        const mainDiv = document.createElement("div");
        mainDiv.id = "photoViewerMainDiv";
        $(mainDiv).css({
            float: "right",
            position: "absolute",
            left: "0px",
            top: "0px",
            width: "100%",
            height: "100%",
            "background-color": "rgb(0, 0, 0, 0.85)",
            "z-index": "1005",
            "overflow-y": "auto",
            display: "none",
            "font-size": "13px",
        });
        $("#map").append(mainDiv);

        //Div options
        const optDiv = document.createElement("div");
        optDiv.id = "options";
        $(optDiv).css({
            position: "absolute",
            top: "0",
            width: "100%",
            height: "100%",
            "z-index": "1011",
            "background-color": "rgb(0, 0, 0, 0.85)",
            display: "none",
        });
        /*optDiv.onclick = function(){
             $(optDiv).css('display', 'none');
        };*/
        $("#map").append(optDiv);

        const optDiv2 = document.createElement("div");
        optDiv2.className = "photoViewerOptionsContainer";
        $(optDiv2).css({
            "text-align": "center",
            width: "500px",
            position: "relative",
            top: "30px",
            "background-color": "black",
            color: "white",
            margin: "0 auto",
            border: "1px solid white",
            "border-radius": "12px",
            padding: "10px",
        });
        optDiv2.innerHTML =
            '<div class="photoViewerOptionsOptionText"><div><span>Sort by</span></div><div><span>Sort order</span></div><div><span>Keep position after picture deletion</span></div><div><span>Show whitelisted Places</span></div></div>' +
            '<div class="photoViewerOptionsOptionSetting"><div><select id="sortBy"><option value="sortbyname">Name</option><option value="sortbylockRank">Lock level</option><option value="sortbyImageCount">Image count</option></select></div><div><select id="sortOrder"><option value="sortAsc">Ascending</option><option value="sortDesc">Descending</option></select></div><div><span><input type="checkbox" id="photoViewerPreserveLayout"></span></div><div><span><input type="checkbox" id="photoViewerShowHiddenPlaces"></span></div></div>' +
            '<div class="photoViewerOptionsFooter" style="margin-top:15px;"><button class="btn btn-primary" type="button" id="photoViewerSave">Save</button><button type="button" class="btn btn-default" id="photoViewerCancel">Cancel</button></div>';
        optDiv.appendChild(optDiv2);

        $("#photoViewerCancel").on("click", () => {
            $(optDiv).css("display", "none");
        });

        const topbar = document.createElement("div");
        $(topbar).css({ position: "sticky", top: "0px", width: "100%", height: "23px" });
        mainDiv.appendChild(topbar);

        //Button to quit
        const quit = document.createElement("button");
        quit.innerHTML = I18n.translations[I18n.currentLocale()].merge_places.actions.cancel;
        $(quit).css({
            float: "right",
            height: "23px",
            "line-height": "23px",
            margin: "3px",
            padding: "0 10px",
            "background-color": "#26bae8",
            color: "white",
            border: "0",
            "border-radius": "13px",
        });
        quit.onclick = hide_visio;
        topbar.appendChild(quit);

        //Button for script options
        const param = document.createElement("button");
        param.innerHTML = '<i style="color:#ccc;" class="fa fa-gear"></i>';
        $(param).css({
            float: "right",
            height: "22px",
            "line-height": "22px",
            margin: "3px",
            "background-color": "#354148",
            color: "white",
            border: "0",
            "border-radius": "11px",
        });
        param.onclick = () => {
            $(optDiv).css("display", "block");
        };
        topbar.appendChild(param);

        //Quantity
        const quantities = document.createElement("div");
        $(quantities).css({
            float: "right",
            height: "22px",
            "line-height": "22px",
            margin: "3px",
            padding: "0 8px",
            "background-color": "#354148",
            color: "white",
            border: "0",
            "border-radius": "11px",
        });
        const placeqty = document.createElement("div");
        $(placeqty).css({ color: "white", display: "inline-block", "margin-right": "5px" });
        placeqty.innerHTML =
            '<i class="fa fa-map-marker" style="color:red;" title="Total Places found with images"></i> <span id="placessqty"></span>';
        quantities.appendChild(placeqty);
        const imageqty = document.createElement("div");
        $(imageqty).css({ display: "inline-block" });
        imageqty.innerHTML =
            '<i class="fa fa-file-image-o" title="Total images found"></i> <span id="imagesqty"></span>';
        quantities.appendChild(imageqty);
        topbar.appendChild(quantities);

        //Refresh
        const refresh = document.createElement("div");
        refresh.innerHTML = '<i class="fa fa-refresh"></i>';
        $(refresh).css({
            float: "right",
            height: "22px",
            "line-height": "22px",
            margin: "3px",
            padding: "0 8px",
            "background-color": "#354148",
            color: "white",
            border: "0",
            "border-radius": "11px",
            cursor: "pointer",
        });
        refresh.id = "refreshScan";
        $(refresh).on("click", Photos_scan);
        topbar.appendChild(refresh);

        const showDiv = document.createElement("div");
        showDiv.id = "showDiv";
        showDiv.style.padding = "5px";
        mainDiv.appendChild(showDiv);

        //Icon near chat
        const launchDiv = document.createElement("div");
        launchDiv.id = "launchDiv";
        $(launchDiv).css({
            "z-index": "10000 !important",
            title: "test",
            bottom: "20px",
            left: "70px",
            position: "absolute",
            "font-weight": "400",
            display: settings.EnablePhotoViewer ? "block" : "none",
        });
        const tmpdiv = document.createElement("div");
        $(tmpdiv).css({ height: "40px", position: "absolute", bottom: "0px", transition: "all 0.3s" });
        tmpdiv.onmouseenter = togglePhotoViewerMouseEvent;
        launchDiv.appendChild(tmpdiv);
        const launchButton = document.createElement("button");
        $(launchButton).css({
            filter: "filter:grayscale(100%)",
            border: "none",
            "background-color": "white",
            "border-radius": "8px 8px 8px 8px",
            width: "43px",
            height: "40px",
        });
        launchButton.innerHTML = '<i style="color:#666;font-size:20px;" class="fa fa-image"></i>';
        launchButton.id = "photoViewerButton";
        tmpdiv.appendChild(launchButton);
        $("#map").append(launchDiv);

        $("#sortBy")[0].value = settings.sortBy;
        $("#sortOrder")[0].value = settings.sortOrder;
        setChecked("photoViewerPreserveLayout", settings.PhotoViewerPreserveLayout);
        setChecked("photoViewerShowHiddenPlaces", settings.PhotoViewerShowHiddenPlaces);

        $("#photoViewerSave").on("click", () => {
            settings.sortBy = $("#sortBy")[0].value;
            settings.sortOrder = $("#sortOrder")[0].value;
            settings.PhotoViewerPreserveLayout = isChecked("photoViewerPreserveLayout");
            settings.PhotoViewerShowHiddenPlaces = isChecked("photoViewerShowHiddenPlaces");
            saveSettings();
            $(optDiv).css("display", "none");
            Photos_scan();
        });
    }

    function togglePhotoViewerMouseEvent() {
        //if the Places category is not enabled or all of the Place options are not enabled, don't allow opening the viewer - nothing will display.
        if (
            !$("#layer-switcher-group_places").prop("checked") ||
            (!$("#layer-switcher-item_parking_places").prop("checked") &&
                !$("#layer-switcher-item_residential_places").prop("checked") &&
                !$("#layer-switcher-item_venues").prop("checked"))
        ) {
            $("#photoViewerButton").css("cursor", "not-allowed");
            $("#photoViewerButton").attr("title", "Enable the Places layers to use this tool");
            $("#photoViewerButton").off();
        } else {
            $("#photoViewerButton").css("cursor", "pointer");
            $("#photoViewerButton").attr("title", "");
            $("#photoViewerButton").off("click");
            $("#photoViewerButton").on("click", show_visio);
        }
    }

    function hide_visio() {
        $("#photoViewerMainDiv").css("display", "none");
        $("#chat-overlay").css("display", "block");
        $("#launchDiv").css("display", "inline-block");
        $("#photoViewerZoom").remove();
    }
    function show_visio() {
        $(".save-popover-container").css("z-index", 1011);
        $(".changes-log-region").css("z-index", 1012);
        $("#photoViewerMainDiv").css("display", "block");
        $("#chat-overlay").css("display", "none");
        $("#launchDiv").css("display", "none");
        Photos_scan();
    }

    function dynamicSort(property) {
        let sortOrder = 1;
        if (property[0] === "-") {
            sortOrder = -1;
            property = property.substr(1);
        }

        return (a, b) => {
            if (sortOrder === -1) {
                if (property === "name") return b.attributes[property].localeCompare(a.attributes[property]);
                if (property === "ImageCount")
                    return Number.parseInt(b.attributes.images.length) - Number.parseInt(a.attributes.images.length);
                return Number.parseInt(b.attributes[property]) - Number.parseInt(a.attributes[property]);
            }
            if (property === "name") return a.name.localeCompare(b.name);
            if (property === "ImageCount") return a.images.length - b.images.length;
            return Number.parseInt(a[property]) - Number.parseInt(b[property]);
        };
    }

    function Photos_scan() {
        catalog = [];
        // const venues = [];
        // for (const poi in W.model.venues.objects) venues.push(W.model.venues.getObjectById(poi));
        const venues = sdk.DataModel.Venues.getAll();

        venues.sort(dynamicSort((settings.sortOrder === "sortDesc" ? "-" : "") + settings.sortBy.substr(6)));
        // for (let i = 0; i < venues.length; i++) {
        //     const venue = venues[i];
        //     const vattr = venue.attributes;
        //     if (typeof venue === "undefined" || vattr.id === null || venue.isSelected()) continue;

        //     if (vattr.images.length !== 0 && onScreen(venue)) catalog.push(vattr.id);
        // }
        for (const venue of venues) {
            if (venue?.images.length !== 0) catalog.push(venue.id);
        }
        Photos_show();
    }

    async function Photos_show() {
        $("#showDiv").html("");
        let c = 0;
        let picCount = 0;
        for (const vId of catalog) {
            const venue = sdk.DataModel.Venues.getById({ venueId: vId });
            // const vattr = venue.attributes;
            const myplace = await idbPVKeyval.get("Places", vId);
            let matchCount = 0;

            if (!settings.PhotoViewerShowHiddenPlaces) {
                if (typeof myplace !== "undefined") {
                    for (let j = 0; j < venue.images.length; j++) {
                        if (myplace.placePicturesIDs.indexOf(venue.images[j].id) > -1) matchCount++;
                    }
                    if (matchCount === venue.images.length)
                        //if all images are in the "okayed" list, skip displaying this Place
                        continue;
                }
            }

            const venueDiv = document.createElement("div");
            $(venueDiv).css({
                float: "left",
                "min-width": "200px",
                height: "220px",
                margin: "0 10px 10px 0",
                padding: "5px",
                "border-radius": "10px",
                "background-color": "black",
                color: "white",
                "overflow-y": "auto",
            });
            if (venue.approved) {
                venueDiv.style.border = "1px solid #26bae8";
                //venueDiv.title='This POI is approved';
            } else {
                venueDiv.style.border = "1px solid #f00";
                venueDiv.title = "This POI is not approved";
            }
            if (venue.isAdLocked) {
                venueDiv.style.backgroundColor = "#600";
                venueDiv.title = I18n.translations[I18n.currentLocale()].objects.venue.fields.adLocked;
                //continue; Hide POI if it's adloacked (option)
            }
            $("#showDiv").append(venueDiv);

            // POI's Name
            const venueName = document.createElement("span");
            venueName.style.float = "left";
            venueName.innerHTML = venue.name; // + ` (${parseInt(vattr.lockRank) + 1})`;
            if (venue.categories[0] === "RESIDENCE_HOME") {
                const address = sdk.DataModel.Venues.getAddress({ venueId: venue.id });
                if (address !== null) {
                    venueName.innerHTML = `${address?.houseNumber} ${address?.street.name}`;
                }
            }
            venueDiv.appendChild(venueName);

            if (venue.approved) {
                // Whitelist button
                const venueCheck = document.createElement("span");
                venueCheck.style.float = "right";
                venueCheck.style.marginRight = "5px";
                venueCheck.style.cursor = "pointer";
                venueCheck.innerHTML =
                    '<i style="color:#fff;" class="fa fa-thumbs-up" title="Whitelist this Place\'s pictures"></i>';
                venueCheck.addEventListener(
                    "click",
                    ((venue, venueDiv) =>
                        async function () {
                            await idbPVKeyval.set("Places", {
                                placeID: venue.id,
                                placeName: venue.name,
                                placePicturesIDs: venue.images.map((image) => {
                                    if (image.isApproved) return image.id;
                                }),
                            });

                            if (
                                !settings.PhotoViewerShowHiddenPlaces &&
                                ((matchCount > 0 && matchCount === venue.images.length) || matchCount === 0)
                            ) {
                                if (settings.PhotoViewerPreserveLayout) $(this).parent().css("visibility", "hidden");
                                else $(this).parent().remove();
                                $("#placessqty").html($("#placessqty").html() - 1);
                                $("#imagesqty").html($("#imagesqty").html() - Number.parseInt(venue.images.length));
                            } else if (settings.PhotoViewerShowHiddenPlaces)
                                $(this).parent().find(".approvedImage.pvImage").css("border-color", "#fff"); //turn the border white on the images that are not in a PUR
                        })(venue, venueDiv),
                    false
                );
                venueDiv.appendChild(venueCheck);
            } else {
                const purActions = document.createElement("span");
                purActions.style.float = "right";
                purActions.style.marginRight = "5px";
                purActions.style.cursor = "pointer";
                const purApprove = document.createElement("i");
                purApprove.className = "fa fa-check";
                purApprove.title = "Approve this PUR";
                purApprove.style.color = "#0f0";
                purApprove.venue = venue;
                purApprove.addEventListener(
                    "click",
                    function (evt) {
                        const ven = evt.target.venue;
                        W.model.actionManager.add(
                            new (require("Waze/Action/UpdatePlaceUpdate"))(
                                ven,
                                ven.attributes.venueUpdateRequests[0],
                                true
                            )
                        );
                        $($(this).parent().parent()).css("border", "1px solid #0f0");
                        $($(this).parent().parent().find("img")).css("border", "1px solid #0f0");
                        $(this).parent().remove();
                    },
                    false
                );
                purActions.appendChild(purApprove);

                const purReject = document.createElement("i");
                purReject.className = "fa fa-times";
                purReject.title = "Reject this PUR";
                purReject.style.color = "#f00";
                purReject.venue = venue;
                purReject.addEventListener(
                    "click",
                    function (evt) {
                        const ven = evt.target.venue;
                        W.model.actionManager.add(
                            new (require("Waze/Action/UpdatePlaceUpdate"))(
                                ven,
                                ven.attributes.venueUpdateRequests[0],
                                false
                            )
                        );
                        $(this).parent().parent().remove();
                    },
                    false
                );
                purActions.appendChild(purReject);

                venueDiv.appendChild(purActions);
            }

            // Check to localize POI
            const venuePos = document.createElement("span");
            venuePos.style.float = "right";
            venuePos.style.margin = "0 5px";
            venuePos.style.cursor = "pointer";
            venuePos.innerHTML = '<i style="color:#aaa;" class="fa fa-crosshairs" title="Geolocate and Select"></i>'; // title="'+ I18n.translations[I18n.currentLocale()].geolocation.focus-btn +'"
            venuePos.id = vId;
            venuePos.addEventListener(
                "click",
                ((geo, id) => () => {
                    hide_visio();
                    // debugger;
                    const venueList = [];
                    //     venueList.push(W.model.venues.objects[id]);

                    //     const lon = ((geo.left + geo.right) / 2 + geo.right) / 2;
                    //     const lat = ((geo.bottom + geo.top) / 2 + geo.bottom) / 2;
                    //     W.map.setCenter(new OpenLayers.Geometry.Point(lon, lat));
                    //     W.map.getOLMap().zoomTo(17);
                    //     W.selectionManager.unselectAll();
                    //     W.selectionManager.setSelectedModels(venueList);
                    // venueList.push(sdk.DataModel.Venues.getById({venueId: id}));

                    const lon = ((geo[0] + geo[2]) / 2 + geo[2]) / 2;
                    const lat = ((geo[3] + geo[1]) / 2 + geo[3]) / 2;
                    sdk.Map.setMapCenter({ lonLat: { lat: lat, lon: lon }, zoomLevel: 17 });
                    sdk.Editing.clearSelection();
                    sdk.Editing.setSelection({ selection: { ids: [id], objectType: "venue" } });
                })(venue.geometry?.bbox ? venue.geometry?.bbox : turf.bbox(venue.geometry), vId),
                false
            );
            venueDiv.appendChild(venuePos);
            const tmp = document.createElement("div");
            tmp.style.clear = "both";
            venueDiv.appendChild(tmp);

            const venueLock = document.createElement("div");
            venueLock.innerHTML = `<span style="font-size:10px; color:#aaa;">${
                I18n.translations[I18n.currentLocale()].edit.segment.fields.lock
            }: ${venue.lockRank + 1}</span>`;
            venueDiv.appendChild(venueLock);
            //Show differents categories
            const venueCat = document.createElement("div");
            for (let j = 0; I18n.translations[I18n.currentLocale()].venues.categories[venue.categories[j]]; j++)
                venueCat.innerHTML += `<span style="font-size:10px;color:#aaa;">${
                    I18n.translations[I18n.currentLocale()].venues.categories[venue.categories[j]]
                }${j < venue.categories.length - 1 ? "," : ""} </span>`;

            venueCat.innerHTML += '<div style="clear:both;"></div>';
            venueDiv.appendChild(venueCat);

            //Show differents images
            for (let k = 0; venue.images[k]; k++) {
                const imgDIV = document.createElement("div");
                imgDIV.id = venue.images[k].id;
                $(imgDIV).addClass("pvImage");
                $(imgDIV).css({ float: "left", "padding-right": "3px" });
                if (k > 0) $(imgDIV).css("margin-left", "5px");
                const venueImg = document.createElement("img");
                $(venueImg).css({
                    float: "left",
                    "max-width": "180px",
                    height: "140px",
                    margin: "5px",
                    cursor: "pointer",
                });
                venueImg.src = `https://venue-image.waze.com/thumbs/thumb347_${venue.images[k].id}`;
                if (venue.images[k].isApproved) {
                    const picIsWhitelisted =
                        typeof myplace !== "undefined" && myplace.placePicturesIDs.indexOf(venue.images[k].id) > -1;
                    imgDIV.style.border = `1px solid ${picIsWhitelisted ? "#fff" : "#0f0"}`;
                    $(imgDIV).addClass("approvedImage");
                    if (picIsWhitelisted) imgDIV.title = "This image has been whitelisted";
                } else {
                    imgDIV.style.border = "1px solid #f00";
                    imgDIV.title = "This image is not approved";
                }
                venueImg.addEventListener(
                    "click",
                    ((imageid, venue, approved) => () => {
                        Photos_zoom(venue, imageid, approved);
                        // W.selectionManager.unselectAll();
                        sdk.Editing.clearSelection();
                        //Disabling selecting the Place when viewing the expanded picture
                        //let venueList = [];
                        //venueList.push(W.model.venues.objects[idvenue]);
                        //W.selectionManager.setSelectedModels(venueList);
                        $("#venue-edit-photos").css("display", "block");
                        $("#venue-edit-general").css("display", "none");
                    })(venue.images[k].id, venue, venue.images[k].isApproved),
                    false
                );

                if (venue.images[k].isApproved) {
                    //Add a trash can icon to delete a picture if the picture is approved on the Place (not a PUR)
                    const deleteImg = document.createElement("i");
                    $(deleteImg).addClass("fa fa-trash-o");
                    $(deleteImg).css({ float: "right", cursor: "pointer", title: "Delete photo" });
                    $(deleteImg).prop({ "data-id": venue.id, "data-imageID": venue.images[k].id });
                    $(deleteImg).on("click", function () {
                        const imageID = $(this).prop("data-imageID");
                        DeleteImage(venue, imageID);
                    });
                    imgDIV.appendChild(deleteImg);
                } else {
                    if (venue.isApproved) {
                        const purActions = document.createElement("span");
                        purActions.style.float = "right";
                        purActions.style.marginRight = "5px";
                        purActions.style.cursor = "pointer";
                        const purApprove = document.createElement("i");
                        purApprove.className = "fa fa-check";
                        purApprove.title = "Approve this picture";
                        purApprove.style.color = "#0f0";
                        purApprove.venue = venue;
                        purApprove.currImage = venue.images[k].id;
                        purApprove.addEventListener(
                            "click",
                            function (evt) {
                                processPlacePUR(evt, true);
                                $($(this).parent().parent()).css("border", "1px solid #0f0");
                                $(this).parent().remove();
                            },
                            false
                        );
                        purActions.appendChild(purApprove);

                        const br = document.createElement("br");
                        purActions.appendChild(br);

                        const purReject = document.createElement("i");
                        purReject.className = "fa fa-times";
                        purReject.title = "Reject this picture";
                        purReject.style.color = "#f00";
                        purReject.venue = venue;
                        purReject.currImage = venue.images[k].id;
                        purReject.addEventListener(
                            "click",
                            function (evt) {
                                processPlacePUR(evt, false);
                                $(this).parent().remove();
                            },
                            false
                        );
                        purActions.appendChild(purReject);
                        imgDIV.appendChild(purActions);
                    }
                }
                picCount++;
                imgDIV.appendChild(venueImg);
                venueDiv.appendChild(imgDIV);
            }
            c++;
        }
        $("#placessqty").html(c);
        $("#imagesqty").html(picCount);
    }

    function processPlacePUR(evt, approve) {
        const ven = evt.target.venue;
        const currImage = evt.target.currImage;
        let pur;
        const venURs = ven.attributes.venueUpdateRequests;
        for (let i = 0; i < venURs.length; i++) {
            if (venURs[i].attributes.updateType === "ADD_IMAGE") {
                if (venURs[i].id === currImage) {
                    pur = venURs[i];
                    break;
                }
            }
        }
        if (pur) W.model.actionManager.add(new (require("Waze/Action/UpdatePlaceUpdate"))(ven, pur, approve));
    }
    /**
     * Finds the closest on-screen drivable segment to the given point, ignoring PLR and PR segments if the options are set
     * Similar to WazeWrap.Util just using turf.
     * @function Photos_zoom
     * @param {Venue} Venue Being Modified
     * @param {String} Image ID
     **/
    function DeleteImage(venue, imageID) {
        // const UpdateObject = require("Waze/Action/UpdateObject");
        const newimages = [].concat(venue.images);
        for (let i = newimages.length - 1; i >= 0; i--) {
            if (newimages[i].id === imageID) newimages.splice(i, 1);
        }
        // W.model.actionManager.add(new UpdateObject(venue, { images: newimages }));
        sdk.DataModel.Venues.updateVenue({ images: newimages, venueId: venue.id });
        if (newimages.length > 0) {
            if (settings.PhotoViewerPreserveLayout) $(`#${imageID}`).css("visibility", "hidden");
            else $(`#${imageID}`).remove();
            $("#imagesqty").html($("#imagesqty").html() - 1);
        } else {
            if (settings.PhotoViewerPreserveLayout) $(`#${imageID}`).parent().css("visibility", "hidden");
            else $(`#${imageID}`).parent().remove();
            $("#placessqty").html($("#placessqty").html() - 1);
            $("#imagesqty").html($("#imagesqty").html() - 1);
        }
    }

    // function onScreen(obj) {
    //     if (obj.getOLGeometry()) return W.map.getExtent().intersectsBounds(obj.getOLGeometry().getBounds());
    //     return false;
    // }

    /**
     * Finds the closest on-screen drivable segment to the given point, ignoring PLR and PR segments if the options are set
     * Similar to WazeWrap.Util just using turf.
     * @function Photos_zoom
     * @param {Venue} The given point to find the closest segment to
     * @param {String} If true, Parking Lot Road segments will be ignored when finding the closest segment
     * @param {boolean} If true, Private Road segments will be ignored when finding the closest segment
     **/
    function Photos_zoom(venue, id, approved) {
        const zoom = document.createElement("div");
        let zoomPicIndex = null;
        const images = venue.images;
        for (let i = 0; i < images.length; i++) {
            if (images[i].id === id) {
                zoomPicIndex = i;
                break;
            }
        }
        zoom.id = "photoViewerZoom";
        $(zoom).css({
            position: "absolute",
            top: "0",
            width: "100%",
            height: "100%",
            "z-index": "1011",
            "background-color": "rgb(0, 0, 0, 0.85)",
        });
        const imageDIV = document.createElement("div");
        $(imageDIV).css({ "text-align": "center", position: "relative", top: "30px" });
        imageDIV.innerHTML = `<img id="zoomImage" style="border-radius:12px; border:2px solid ${
            approved ? "#0f0" : "#f00"
        };" src="https://venue-image.waze.com/thumbs/thumb700_${id}" />${
            approved
                ? '<i id="zoomDelete" class="fa fa-trash-o fa-lg" style="cursor:pointer; color:white; position:absolute; top:0; margin-left:7px;"></i>'
                : ""
        }`;
        zoom.appendChild(imageDIV);

        const zoomDateDiv = document.createElement("div");
        zoomDateDiv.setAttribute("id", "zoomDate");
        $(zoomDateDiv).css({ "text-align": "center", position: "relative", top: "30px", color: "white" });
        const d = new Date(images[zoomPicIndex].creationDate);
        zoomDateDiv.innerHTML = `${d.toLocaleString()}`;
        zoom.appendChild(zoomDateDiv);

        if (venue.images.length > 1) {
            const zoomNavDiv = document.createElement("div");
            $(zoomNavDiv).css({ "text-align": "center", position: "relative", top: "30px" });
            zoomNavDiv.innerHTML =
                '<a href="#" id="zoomPrev" style="text-decoration: none; display: inline-block; background-color: #ddd; padding: 8px 16px; font-size:18px;">&#8249;</a><a href="#" id="zoomNext" style="text-decoration: none; display: inline-block; background-color: #ddd; padding: 8px 16px; font-size:18px;">&#8250;</a>';
            zoom.appendChild(zoomNavDiv);
        }

        zoom.onclick = () => {
            zoom.remove();
        };
        $("#map").append(zoom);
        $("#zoomDelete").on("click", () => {
            DeleteImage(venue, id);
        });

        $("#zoomPrev").on("click", (event) => {
            if (zoomPicIndex > 0) {
                zoomPicIndex--;
                $("#zoomImage").attr("src", `https://venue-image.waze.com/thumbs/thumb700_${images[zoomPicIndex].id}`);
                id = images[zoomPicIndex].id;
                const d = new Date(images[zoomPicIndex].creationDate);
                $("#zoomDate").text(d.toLocaleString());
            }
            event.stopPropagation();
        });

        $("#zoomNext").on("click", (event) => {
            if (zoomPicIndex < images.length - 1) {
                zoomPicIndex++;
                $("#zoomImage").attr("src", `https://venue-image.waze.com/thumbs/thumb700_${images[zoomPicIndex].id}`);
                id = images[zoomPicIndex].id;
                const d = new Date(images[zoomPicIndex].creationDate);
                $("#zoomDate").text(d.toLocaleString());
            }
            event.stopPropagation();
        });
    }

    function PlaceMenuShortcut(itemNum) {
        const selected = sdk.Editing.getSelection();
        if (selected?.objectType === "venue") {
            //add the category to the Place
            // const selected = WazeWrap.getSelectedFeatures()[0].WW.getObjectModel();
            // const newCategories = [].concat(selected.attributes.categories);
            const selectedVenue = sdk.DataModel.Venues.getById({ venueId: selected.ids[0] });
            const newCategories = structuredClone(selectedVenue.categories);
            let catToAdd;
            if ($(`#piePlaceMainItem${itemNum}`).length > 0)
                catToAdd = $(`#piePlaceMainItem${itemNum}`)[0].getAttribute("data-category");
            else catToAdd = $(`#piePlaceAreaItem${itemNum}`)[0].getAttribute("data-category");
            if (selected.categories.indexOf(catToAdd) === -1) {
                //if the category isn't already on the Place, add it
                newCategories.push(catToAdd);
                // W.model.actionManager.add(new UpdateObject(selected, { categories: newCategories }));
                sdk.DataModel.Venues.updateVenue({ categories: newCategories, venueId: selectedVenue.id });
            }
        } else {
            //start new Place placement mode
            if ($(`#piePlaceMainItem${itemNum}`).length > 0) $(`#piePlaceMainItem${itemNum}`).trigger("click");
            else if ($(`#piePlaceAreaItem${itemNum}`).length > 0) $(`#piePlaceAreaItem${itemNum}`).trigger("click");
        }
    }

    function AddHoursParserInterface() {
        if (WazeWrap.hasPlaceSelected()) {
            const $PIEHoursParser = $("<div>", { style: "min-height:20px" });
            if (!$("#PIEHoursParserDiv").length) {
                $PIEHoursParser.html(
                    [
                        '<div id="PIEHoursParserDiv" style="margin-top:5px">',
                        `<textarea id="PIE-hourspaste" placeholder="${I18n.t(
                            "pie.hoursParser.defaultText"
                        )}" wrap="off" autocomplete="off" style="overflow: auto; width: 85%; max-width: 85%; min-width: 85%; font-size: 0.85em; height: 24px; min-height: 24px; max-height: 300px; padding-left: 3px; color: rgb(153, 153, 153);"></textarea>`,
                        `<input class="btn btn-default btn-xs" id="PIEAppendHours" title="${I18n.t(
                            "pie.hoursParser.AddHoursTitle"
                        )}" type="button" value="${I18n.t("pie.hoursParser.AddHours")}" style="margin-bottom:4px">`,
                        `<input class="btn btn-default btn-xs" id="PIEReplaceHours" title="${I18n.t(
                            "pie.hoursParser.ReplaceHoursTitle"
                        )}" type="button" value="${I18n.t("pie.hoursParser.ReplaceHours")}" style="margin-bottom:4px">`,
                        '<span id="PIEHoursParserError" style="display:block; color:red"></span>',
                        "</div>",
                    ].join(" ")
                );
                const appendDiv = () => {
                    $(".opening-hours-add").parent().append($PIEHoursParser.html());
                    $("#PIEAppendHours").click(() => {
                        addHours(false);
                    });
                    $("#PIEReplaceHours").click(() => {
                        addHours(true);
                    });
                };
                delayFire(150, appendDiv);

                // Enter = Add hours, shift || ctrl + Enter = new line
                $("#PIE-hourspaste").keydown(function (event) {
                    if (event.keyCode === 13) {
                        if (event.ctrlKey) {
                            // Simulate a newline event (shift + enter)
                            const text = this.value;
                            const selStart = this.selectionStart;
                            this.value = `${text.substr(0, selStart)}\n${text.substr(
                                this.selectionEnd,
                                text.length - 1
                            )}`;
                            this.selectionStart = selStart + 1;
                            this.selectionEnd = selStart + 1;
                            return true;
                        }
                        if (!(event.shiftKey || event.ctrlKey) && $("#PIE-hourspaste").val() !== "") {
                            event.stopPropagation();
                            event.preventDefault();
                            event.returnValue = false;
                            event.cancelBubble = true;
                            addHours(false);
                            return false;
                        }
                    }
                });
            }
        }
    }

    function addHours(replaceAll = false) {
        const selection = sdk.Editing.getSelection();
        if (selection === null || selection.objectType !== "venue") return;
        const selectedVenue = sdk.DataModel.Venues.getById({ venueId: selection.ids[0] });

        let pasteHours = $("#PIE-hourspaste").val();
        if (pasteHours.trim() === "") return;

        if (!I18n.translations[I18n.locale].date.day_names) {
            I18n.translations[I18n.locale].date.day_names = [];
            _.forOwn(I18n.translations[I18n.locale].date, (v, k) => {
                if (k.indexOf("day_names_") > -1) {
                    I18n.translations[I18n.locale].date.day_names.push(v);
                }
            });
        }

        const englishNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
        const lngDate = I18n.translations[I18n.locale].date.day_names.map((value) => value.toLowerCase());
        const lngFullDate = I18n.translations[I18n.locale].date.abbr_day_names.map((value) => value.toLowerCase());
        for (let i = 0; i < englishNames.length; i++) {
            pasteHours = pasteHours.replace(lngDate[i], englishNames[i]);
            pasteHours = pasteHours.replace(lngFullDate[i], englishNames[i]);
        }

        if (!replaceAll) pasteHours = `${pasteHours},${getOpeningHours(selectedVenue).join(",")}`;
        const parserResult = hoursparser.parseHours(pasteHours);
        if (
            parserResult.hours &&
            parserResult.overlappingHours === false &&
            parserResult.sameOpenAndCloseTimes === false &&
            parserResult.parseError === false
        ) {
            // W.model.actionManager.add(
            //     new UpdateObject(WazeWrap.getSelectedFeatures()[0].WW.getObjectModel(), {
            //         openingHours: parserResult.hours,
            //     })
            // );
            sdk.DataModel.Venues.updateVenue();
            $("#PIEHoursParserError").empty({ openingHours: parserResult.hours, venueId: selectedVenue.id });
        } else {
            $("#PIE-hourspaste").css({ "background-color": "#FDD" }); //.attr({title:bannButt.noHours.getTitle(parserResult.hours)});
            if (parserResult.overlappingHours)
                $("#PIEHoursParserError").text(I18n.t("pie.hoursParser.errorOverlappingHours"));
            else if (parserResult.sameOpenAndCloseTimes)
                $("#PIEHoursParserError").text(I18n.t("pie.hoursParser.errorSameOpenClose"));
            else $("#PIEHoursParserError").text(I18n.t("pie.hoursParser.errorCannotParse"));
        }
    }

    //******* Taken from WMEPH for hours parsing
    // Formats "hour object" into a string.
    function formatOpeningHour(hourEntry) {
        const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const hours = `${hourEntry.fromHour}-${hourEntry.toHour}`;
        return hourEntry.days.map((day) => `${dayNames[day]} ${hours}`).join(", ");
    }

    // Pull natural text from opening hours
    function getOpeningHours(venue) {
        return venue?.openingHours?.map(formatOpeningHour);
    }

    function changeGeoHandleStyle(radius) {
        let handleStyle;
        const rules = W.map.getLayerByUniqueName("venues").styleMap.styles.default.rules;
        for (let i = 0; i < rules.length; i++) {
            if (rules[i].id === "Waze_Rule_14") {
                handleStyle = rules[i];
                break;
            }
        }
        if (handleStyle) {
            handleStyle.symbolizer.pointRadius = radius;
            W.map.getLayerByUniqueName("venues").redraw();
        }
    }

    function enlargeVirtualVerticies() {
        if (WazeWrap.hasPlaceSelected()) {
            setTimeout(() => {
                if (settings.EnlargeGeoHandles) {
                    W.map.controls.find(
                        (c) => c.displayClass === "olControlModifyFeature"
                    ).virtualStyle.pointRadius = 6;
                } else {
                    W.map.controls.find(
                        (c) => c.displayClass === "olControlModifyFeature"
                    ).virtualStyle.pointRadius = 4;
                }
                W.map.controls.find((c) => c.displayClass === "olControlModifyFeature").resetVertices();
                unregisterEvents(enlargeVirtualVerticies);
            }, 50);
        }
    }

    //*******/
    function UpdatePlaceFilter() {
        const index = W.map.venueLayer.styleMap.styles.default.rules.findIndex((e) => e.name === "PIEPlaceFilter");
        if (index > -1) {
            W.map.venueLayer.styleMap.styles.default.rules.splice(index, 1);
            W.map.venueLayer.redraw();
        }
        if ($("#piePlaceFilter").val().trim() !== "") {
            const myRule = new W.Rule({
                filter: new OpenLayers.Filter.Comparison({
                    type: "==",
                    evaluate: (venue) => {
                        if ($("#_rbHidePlaces").prop("checked"))
                            return new RegExp($("#piePlaceFilter").val(), "ig").exec(
                                WazeWrap.Model.getObjectModel(venue).attributes.name
                            );
                        return !new RegExp($("#piePlaceFilter").val(), "ig").exec(
                            WazeWrap.Model.getObjectModel(venue).attributes.name
                        );
                    },
                }),
                symbolizer: {
                    display: "none",
                },
                name: "PIEPlaceFilter",
            });
            W.map.venueLayer.styleMap.styles.default.rules.push(myRule);
            W.map.venueLayer.redraw();
        }
        DisplayPlaceNames();
    }

    function ToggleHideAreaPlaces() {
        const index = W.map.venueLayer.styleMap.styles.default.rules.findIndex((e) => e.name === "PIEHide");
        if (index === -1) {
            const myRule = new W.Rule({
                filter: new OpenLayers.Filter.Comparison({
                    type: "==",
                    evaluate: (venue) =>
                        venue.getOLGeometry() != null ? /POLYGON/i.test(venue.getOLGeometry().id) : false,
                }),
                symbolizer: {
                    display: "none",
                },
                name: "PIEHide",
            });
            W.map.venueLayer.styleMap.styles.default.rules.push(myRule);
            W.map.venueLayer.redraw();
        } else {
            W.map.venueLayer.styleMap.styles.default.rules.splice(index, 1);
            W.map.venueLayer.redraw();
        }
        DisplayPlaceNames(); //refresh the name display
    }

    let highlightedVenue, highlighting;
    function drawNavPointClosestSegmentLines() {
        // try {
        highlighting = false;
        if (highlightedVenue !== null)
            if (highlightedVenue === W.map.venueLayer.getFeatureBy("renderIntent", "highlight")) highlighting = true;
            else sdk.Map.removeAllFeaturesFromLayer({ layerName: layerConfig.PIEShowStopPointsLayer.layerName });
        highlightedVenue = W.map.venueLayer.getFeatureBy("renderIntent", "highlight");

        if (
            highlightedVenue !== null &&
            WazeWrap.Model.getObjectModel(highlightedVenue) &&
            highlighting === false &&
            sdk.Map.getZoomLevel() >= 16
        ) {
            const sdkVenue = sdk.DataModel.Venues.getById({ venueId: highlightedVenue.attributes.wazeFeature.id });
            // const isArea = !WazeWrap.Model.getObjectModel(highlightedVenue).isPoint();
            const isArea = sdkVenue.geometry.type === "Polygon";
            let navPoint;

            if (sdkVenue?.navigationPoints.length > 0) {
                // navPoint = W.userscripts.toOLGeometry(
                //     WazeWrap.Model.getObjectModel(highlightedVenue).getNavigationPoints()[0]._point
                // );
                navPoint = sdkVenue.navigationPoints[0].point;
            } else {
                if (isArea) {
                    // navPoint = WazeWrap.Model.getObjectModel(highlightedVenue).getOLGeometry().getCentroid();
                    navPoint = turf.centroid(sdkVenue.geometry).geometry;
                } else {
                    // navPoint = WazeWrap.Model.getObjectModel(highlightedVenue).getOLGeometry().clone();
                    navPoint = sdkVenue.geometry;
                }
            }

            const closestSeg = findSDKClosestSegment(navPoint, false, false);
            //nav point to closest segment
            // const closestSeg = WazeWrap.Geometry.findClosestSegment(navPoint, false, false);
            // let lineFeature = new OpenLayers.Feature.Vector(new OpenLayers.Geometry.LineString([navPoint, closestSeg.closestPoint]), {}, lineStyleToClosestSeg);
            // let pointFeature = new OpenLayers.Feature.Vector(closestSeg.closestPoint, {}, pointStyle);
            let lineFeature = turf.lineString(
                [navPoint.coordinates, closestSeg.closestPoint.geometry.coordinates],
                {
                    styleName: "lineStyleToClosestSeg",
                },
                { id: `line_${navPoint.toString()}_${closestSeg.toString()}` }
            );
            let pointFeature = turf.point(
                closestSeg.closestPoint.geometry.coordinates,
                {
                    styleName: "pointStyle",
                },
                { id: `point_${closestSeg.toString()}` }
            );
            // showStopPointsLayer.addFeatures([lineFeature, pointFeature]);
            sdk.Map.addFeaturesToLayer({
                features: [lineFeature, pointFeature],
                layerName: layerConfig.PIEShowStopPointsLayer.layerName,
            });

            //place center to nav point
            let startPt = sdkVenue.geometry;
            if (isArea) startPt = turf.centroid(sdkVenue.geometry).geometry;
            // lineFeature = new OpenLayers.Feature.Vector(new OpenLayers.Geometry.LineString([startPt, navPoint]), {}, lineStyleToNavPoint);
            lineFeature = turf.lineString(
                [startPt.coordinates, navPoint.coordinates],
                { styleName: "lineStyleToNavPoint" },
                { id: `point_${navPoint.toString()}` }
            );
            // pointFeature = new OpenLayers.Feature.Vector(navPoint, {}, pointStyleNavPoint);
            pointFeature = turf.point(
                navPoint.coordinates,
                { styleName: "pointStyleNavPoint" },
                { id: `point_${navPoint.toString()}` }
            );
            if (sdkVenue?.navigationPoints.length > 0 || isArea)
                sdk.Map.addFeaturesToLayer({
                    features: [lineFeature, pointFeature],
                    layerName: layerConfig.PIEShowStopPointsLayer.layerName,
                });
            // showStopPointsLayer.addFeatures([lineFeature, pointFeature]);
        }
        // if(highlightedVenue === null || W.map.getZoom() < 16)
        if (highlightedVenue === null || sdk.Map.getZoomLevel() < 16)
            // showStopPointsLayer.removeAllFeatures();
            sdk.Map.removeAllFeaturesFromLayer({ layerName: layerConfig.PIEShowStopPointsLayer.layerName });
        // } catch (err) {
        //     console.log(err.message);
        // }
    }

    function ObjectsChanged(selectionExists = false) {
        if (selectionExists)
            getActiveEditor().then((val) => {
                if (placeIsPoint && val.vertices.length > 0) {
                    removeDragCallbacks();
                    checkSelection();
                }
            });
    }

    function handleNavPointOffScreen() {
        if (
            selectedItem !== WazeWrap.getSelectedFeatures().first() ||
            WazeWrap.Geometry.isGeometryInMapExtent(
                new OpenLayers.Geometry.Point(ClosestSegmentNavPoint.lonlat.lon, ClosestSegmentNavPoint.lonlat.lat)
            )
        ) {
            W.map.events.unregister("moveend", window, handleNavPointOffScreen);
            checkSelection();
        }
    }

    function clearClosesetSegmentLayerFeatures() {
        // return closestSegmentLayer.features.length > 0 && closestSegmentLayer.removeAllFeatures();
        sdk.Map.removeAllFeaturesFromLayer({ layerName: layerConfig.PIEClosestSegment.layerName });
    }

    function checkConditions() {
        const a = sdk.Map.getZoomLevel() > 15, //W.map.getZoom() > 15,
            b = sdk.Map.isLayerVisible({ layerName: "venues" }), // W.map.venueLayer.getVisibility(),
            c = sdk.Map.isLayerVisible({ layerName: layerConfig.PIEClosestSegment.layerName }), //closestSegmentLayer.getVisibility(),
            d = !$("#map-lightbox > div").is(":visible"), //$('#map-lightbox > div').length === 0,/* Check for HN editing */
            e = sdk.Editing.getSelection()?.objectType === "bigJunction"; //WazeWrap.hasSelectedFeatures() && WazeWrap.getSelectedFeatures()[0].WW.getType() !== "bigJunction";

        return a && b && c && d && e;
        // 	return true;
        // else
        // 	return false;
    }

    function drawLine(start, end, lStyle, pStyle) {
        // let lineFeature, pointFeature;

        // const lineFeature = new OpenLayers.Feature.Vector(new OpenLayers.Geometry.LineString([start, end]), {}, lStyle);
        const lineFeature = turf.lineString(
            start.geometry.coordinates,
            end.geometry.coordinates,
            { styleName: lStyle },
            { id: `ls_${start.toString()}_${end.toString()}` }
        );
        // const pointFeature = new OpenLayers.Feature.Vector(end, {}, pStyle);
        const pointFeature = turf.point(
            end.geometry.coordinates,
            { styleName: pStyle },
            { id: `landingPoint_${end.toString()}` }
        );
        // closestSegmentLayer.addFeatures([lineFeature, pointFeature]);
        sdk.Map.addFeaturesToLayer({
            features: [lineFeature, pointFeature],
            layerName: layerConfig.closestSegmentLayer.layerName,
        });
    }

    function drawNearestLanding(navPoint, ignorePLR = false, ignoreUnnamedPR = false) {
        const closestSegment = findSDKClosestSegment(navPoint, ignorePLR, ignoreUnnamedPR);

        clearClosesetSegmentLayerFeatures();
        drawLine(navPoint, closestSegment.closestPoint, lineStyleToClosestSeg, pointStyle);
    }

    let placeIsPoint = false;
    function checkSelection() {
        if (!checkConditions()) {
            removeDragCallbacks();
            return;
        }

        getActiveEditor().then((_val) => {
            const selected = sdk.Editing.getSelection();
            if (selected !== null) {
                if ("venue" !== selected.objectType) {
                    removeDragCallbacks();
                    clearClosesetSegmentLayerFeatures();
                } else {
                    const selectedVenue = sdk.DataModel.Venues.getById({ venueId: selected.ids[0] });
                    placeIsPoint = selectedVenue.geometry.type === "Point";
                    if (placeIsPoint) {
                        //Event when the Place is moved
                        /*
                        val.dragControl.onDrag = function (e, t) {
                            val.dragVertex.apply(val, [e, t]);
                            let entryExitPoint = selectedItem.model.geometry.clone();
                            if(selectedItem.model.getNavigationPoints().length > 0)
                                entryExitPoint = selectedItem.model.attributes.entryExitPoints[0]._point;
                            findNearestSegment(entryExitPoint);
                        };*/
                        let entryExitPoint = selectedVenue.geometry;
                        if (selectedVenue.navigationPoints.length > 0)
                            entryExitPoint = selectedVenue.navigationPoints[0].point;
                        drawNearestLanding(entryExitPoint);
                    } else {
                        if (selectedVenue.navigationPoints.length === 0)
                            drawNearestLanding(turf.centroid(selectedVenue.geometry));
                        else {
                            for (let i = 0; i < selectedVenue.navigationPoints.length; i++)
                                drawNearestLanding(selectedVenue.navigationPoints.point);
                        }
                    }
                }
            } else {
                removeDragCallbacks();
                clearClosesetSegmentLayerFeatures();
            }
        });
    }

    function removeDragCallbacks() {
        if (!W.geometryEditing.activeEditor == null) {
            W.geometryEditing.activeEditor.dragControl.onDrag = (e, t) => {
                W.geometryEditing.activeEditor.dragVertex.apply(W.geometryEditing.activeEditor, [e, t]);
            };
            if (ClosestSegmentNavPoint === null) {
                try {
                    ClosestSegmentNavPoint.events.unregister(
                        "drag",
                        W.geometryEditing.activeEditor,
                        drawNearestLanding
                    );
                } catch (_err) {}
            }
        }
        clearClosesetSegmentLayerFeatures();
    }

    // function buildNewPlaceList() {
    //     //Clear out the Places menu
    //     $(placeMenuSelector).empty();
    //     let cat = "";
    //     let icon = "";
    //     let i;
    //     for (i = 0; i < 12; i++) {
    //         icon = "";
    //         cat = $(`#pieItem${i + 1}`)[0].value;
    //         icon = $(`#pieItem${i + 1}`)[0].options[$(`#pieItem${i + 1}`)[0].selectedIndex].getAttribute("data-icon");
    //         if (cat !== "PARKING_LOT" && cat !== resCategory && cat !== "GAS_STATION")
    //             $(placeMenuSelector).append(
    //                 `<wz-menu-item class="toolbar-group-item WazeControlDrawFeature  ${icon}" id="piePlaceMainItem${
    //                     i + 1
    //                 }" data-category="${cat}"><div class="item-container"><div class="item-icon"></div><span class="menu-title">${
    //                     $(`#pieItem${i + 1}`)[0].options[$(`#pieItem${i + 1}`)[0].selectedIndex].innerHTML
    //                 }</span><div class="drawing-controls"><wz-basic-tooltip class="sc-wz-basic-tooltip-h sc-wz-basic-tooltip-s"><wz-tooltip class="sc-wz-basic-tooltip sc-wz-basic-tooltip-s"><wz-tooltip-source><wz-button color="clear-icon" size="sm" class="point"><wz-tooltip-target></wz-tooltip-target><i class="w-icon w-icon-node"></i></wz-button></wz-tooltip-source><wz-tooltip-content>Create Point</wz-tooltip-content></wz-tooltip></wz-basic-tooltip><wz-basic-tooltip class="sc-wz-basic-tooltip-h sc-wz-basic-tooltip-s"><wz-tooltip class="sc-wz-basic-tooltip sc-wz-basic-tooltip-s"><wz-tooltip-source><wz-button color="clear-icon" size="sm" class="polygon" id="piePlaceAreaItem${
    //                     i + 1
    //                 }" data-category="${cat}"><wz-tooltip-target></wz-tooltip-target><i class="w-icon w-icon-polygon"></i></wz-button></wz-tooltip-source><wz-tooltip-content>Create Area</wz-tooltip-content></wz-tooltip></wz-basic-tooltip></div></div></div></wz-menu-item>`
    //             );
    //         else {
    //             //$(placeMenuSelector).append('<div class="toolbar-group-item WazeControlDrawFeature ItemInactive" style="' + (icon !== "" ? "padding-left:0px;" : "") + ' height:40px;" id="piePlaceMainItem' + (i+1) + '" data-category="'+ cat + '"><span class="menu-title ' + icon + '" style="font-size:26px;"><span style="font-size:12px;">' + $('#pieItem' + (i+1))[0].options[$('#pieItem' + (i+1))[0].selectedIndex].innerHTML + '</span></span><div class="drawing-controls"><span class="drawing-control polygon secondary-control" id="piePlaceAreaItem' + (i+1) + '" data-category="' + cat + '" title="Place (area)"></span><span class="drawing-control main-control point" id="piePlacePointItem' + (i+1) + '" data-category="' + cat + '" title="Place (point)"></span></div></div>');            else{
    //             if (cat === resCategory)
    //                 //force point
    //                 //$(placeMenuSelector).append('<div class="toolbar-group-item WazeControlDrawFeature ItemInactive ' + icon +'" id="piePlaceMainItem' + (i+1) + '" data-category="'+ cat + '"><div class="item-icon"></div><span class="menu-title">' + $('#pieItem' + (i+1))[0].options[$('#pieItem' + (i+1))[0].selectedIndex].innerHTML + '</span></div>');
    //                 $(placeMenuSelector).append(
    //                     `<wz-menu-item class="toolbar-group-item WazeControlDrawFeature  ${icon}" id="piePlaceMainItem${
    //                         i + 1
    //                     }" data-category="${cat}"><div class="item-container"><div class="item-icon"></div><span class="menu-title">${
    //                         $(`#pieItem${i + 1}`)[0].options[$(`#pieItem${i + 1}`)[0].selectedIndex].innerHTML
    //                     }</span></div></wz-menu-item>`
    //                 );
    //             //Parking lot & gas station - force area
    //             else
    //                 $(placeMenuSelector).append(
    //                     `<wz-menu-item class="toolbar-group-item WazeControlDrawFeature  ${icon}" id="piePlaceAreaItem${
    //                         i + 1
    //                     }" data-category="${cat}"><div class="item-container"><div class="item-icon"></div><span class="menu-title">${
    //                         $(`#pieItem${i + 1}`)[0].options[$(`#pieItem${i + 1}`)[0].selectedIndex].innerHTML
    //                     }</span></div></wz-menu-item>`
    //                 );
    //             //$(placeMenuSelector).append('<div class="toolbar-group-item WazeControlDrawFeature ItemInactive"             id="piePlaceAreaItem' + (i+1) + '" data-category="'+ cat + '">                             <span class="menu-title" style="flex-grow:1;">' + $('#pieItem' + (i+1))[0].options[$('#pieItem' + (i+1))[0].selectedIndex].innerHTML + '</span></div>');
    //         }
    //     }

    //     $('[id^="piePlaceMainItem"]').on("click", function (e) {
    //         $(".toolbar-group-venues").removeClass("open");
    //         startPlacementMode($(`#${this.id}`).data("category"), true);
    //     });

    //     $('[id^="piePlaceAreaItem"]').on("click", function (e) {
    //         e.stopPropagation();
    //         $(".toolbar-group-venues").removeClass("open");
    //         startPlacementMode($(`#${this.id}`).data("category"), false);
    //     });
    // }

    function initColorPicker(tries = 1) {
        tries = tries || 1;

        if ($("#colorPickerFont")[0].jscolor) {
            $("#colorPickerFont")[0].jscolor.fromString(settings.PlaceNameFontColor);
            $('[id^="colorPicker"]')[0].jscolor.closeText = "Close";
            $("#colorPickerFont")[0].jscolor.onChange = jscolorChanged;

            $("#colorPickerFontOutline")[0].jscolor.fromString(settings.PlaceNameFontOutline);
            $("#colorPickerFontOutline")[0].jscolor.onChange = jscolorChanged;
        } else if (tries < 1000)
            setTimeout(() => {
                initColorPicker(tries + 1);
            }, 200);
    }

    function jscolorChanged() {
        settings.PlaceNameFontColor = `#${$("#colorPickerFont")[0].jscolor.toString()}`;
        settings.PlaceNameFontOutline = `#${$("#colorPickerFontOutline")[0].jscolor.toString()}`;
        saveSettings();
        PIEPlaceNameLayer.styleMap.styles.default.defaultStyle.fontColor = settings.PlaceNameFontColor;
        PIEPlaceNameLayer.styleMap.styles.default.defaultStyle.labelOutlineColor = settings.PlaceNameFontOutline;
        DisplayPlaceNames();
    }

    function registerEvents(handler) {
        // WazeWrap.Events.register("selectionchanged", null, handler);
        // //W.selectionManager.events.register("selectionchanged", null, handler);
        // WazeWrap.Events.register("afterundoaction",null, handler);
        // WazeWrap.Events.register("afterclearactions",null, handler);
        // WazeWrap.Events.register("afteraction",null, handler);
        sdk.Events.on({ eventName: "wme-selection-changed", eventHandler: handler });
        sdk.Events.on({ eventName: "wme-after-undo", eventHandler: handler });
        // sdk.Events.on({ eventName: "wme-after-redo-clear", eventHandler: handler });
        sdk.Events.on({ eventName: "wme-after-edit", eventHandler: handler });
    }

    function unregisterEvents(handler) {
        // WazeWrap.Events.unregister("selectionchanged", null, handler);
        // //W.selectionManager.events.unregister("selectionchanged", null, handler);
        // WazeWrap.Events.unregister("afterundoaction",null, handler);
        // WazeWrap.Events.unregister("afterclearactions",null, handler);
        // WazeWrap.Events.unregister("afteraction",null, handler);
        sdk.Events.off({ eventName: "wme-selection-changed", eventHandler: handler });
        sdk.Events.off({ eventName: "wme-after-undo", eventHandler: handler });
        // sdk.Events.off({ eventName: "wme-after-redo-clear", eventHandler: handler });
        sdk.Events.off({ eventName: "wme-after-edit", eventHandler: handler });
    }

    function ToggleExternalProvidersCSS(truthiness) {
        if (truthiness)
            injectCSSWithID(
                "pieExternalProvidersTweaks",
                "#edit-panel .external-providers-view .select2-container {width:90%; margin-bottom:2px;}"
            );
        else {
            const styles = document.getElementById("pieExternalProvidersTweaks");
            if (styles) styles.parentNode.removeChild(styles);
        }
    }

    function DisplayPlaceNames() {
        // PIEPlaceNameLayer.removeAllFeatures();
        sdk.Map.removeAllFeaturesFromLayer({ layerName: layerConfig.PIEPlaceNameLayer.layerName });
        let showPoint, showArea, showLock, showNames, showPLA, hideNames;
        showNames = isChecked("_cbShowPlaceNames");
        showPoint = isChecked("_cbShowPlaceNamesPoint");
        showArea = isChecked("_cbShowPlaceNamesArea");
        showLock = isChecked("_cbShowPlaceNamesLock");
        showPLA = isChecked("_cbShowPlaceNamesPLA");
        hideNames = isChecked("_cbhidePlaceNamesWhenPlacesHidden");

        if (showNames) {
            // var isPoint;
            // for (var placeID in W.model.venues.objects) {
            for (const venue of sdk.DataModel.Venues.getAll()) {
                // var venue = W.model.venues.getObjectById(placeID);
                // isPoint = venue.isPoint();
                const isPoint = venue.geometry.type === "Point";

                if ((isPoint && sdk.Map.getZoomLevel() >= 17) || (!isPoint && sdk.Map.getZoomLevel() >= 15)) {
                    const mapExtent = sdk.Map.getMapExtent();
                    const polygon = turf.bboxPolygon(mapExtent);

                    if (
                        (isPoint && turf.booleanPointInPolygon(venue.geometry, polygon)) ||
                        (!isPoint &&
                            turf.intersect(turf.featureCollection([turf.polygon(venue.geometry.coordinates), polygon])))
                    ) {
                        if (
                            (isPoint && showPoint) ||
                            (!isPoint && showArea && venue.categories[0] !== "PARKING_LOT") ||
                            (!isPoint && showPLA && venue.categories[0] === "PARKING_LOT")
                        ) {
                            const placeFilter = $("#piePlaceFilter").val();
                            if (placeFilter.length > 0) {
                                const nameMatch = RegExp($("#piePlaceFilter").val(), "ig").exec(venue.name);
                                if (nameMatch && $("#_rbHidePlaces").prop("checked")) continue;
                                if (!nameMatch && !$("#_rbHidePlaces").prop("checked"))
                                    //no name match and show only
                                    continue;
                            }

                            let textLoc;

                            if (isPoint)
                                // textLoc = new OpenLayers.Geometry.Point(
                                //     venue.getOLGeometry().x,
                                //     venue.getOLGeometry().y
                                // );
                                textLoc = venue.geometry;
                            else textLoc = turf.centroid(venue.geometry).geometry;
                            let placeName = WordWrap(venue.name.trim() + (showLock ? ` (L${venue.lockRank + 1})` : ""));
                            if (venue.categories[0] === "RESIDENTIAL") {
                                const venueAddress = sdk.DataModel.Venues.getAddress(venue.id);
                                placeName =
                                    (venueAddress?.houseNumber || "") +
                                    (venue.name.trim() !== "" ? ` - ${venue.name}` : "") +
                                    (showLock ? ` (L${venue.lockRank + 1})` : "");
                            }
                            const placeNameLabel = turf.point(
                                textLoc.coordinates,
                                {
                                    styleName: "placeNameLabel",
                                    style: {
                                        display: "block",
                                        label: placeName.trim(),
                                        labelYOffset: isPoint ? -13 - placeName.split("\n").length * 5 : 0,
                                        fontWeight: settings.PlaceNameFontBold ? "bold" : "",
                                        fontSize: Number.parseInt(settings.PlaceNameFontSize),
                                        labelOutlineWidth: settings.PlaceNameFontOutlineWidth,
                                        fontColor: settings.PlaceNameFontColor,
                                        labelOutlineColor: settings.PlaceNameFontOutline,
                                    },
                                },
                                { id: `placeNameLabelPoint_${placeName.trim()}` }
                            );
                            // const placeNameLabel = new OpenLayers.Feature.Vector(textLoc, {
                            //     display: "block",
                            //     labelText: placeName.trim(),
                            //     yOffset: isPoint ? -13 - placeName.split("\n").length * 5 : 0,
                            // });
                            // PIEPlaceNameLayer.addFeatures([placeNameLabel]);
                            sdk.Map.addFeatureToLayer({
                                feature: placeNameLabel,
                                layerName: layerConfig.PIEPlaceNameLayer.layerName,
                            });
                        }
                    }
                }
            }
        }
    }

    function WordWrap(text) {
        let newName = "";

        if (text !== "") {
            const splitName = text.match(/(.{1,35})(?:\s|$)/g);
            for (let i = 0; i < splitName.length; i++)
                newName += splitName[i] + (i !== splitName.length - 1 ? "\n" : "");
        }
        return newName;
    }

    //Shamelessly copied from URO+
    // function MPLayerChanged() {
    //     for (const mObj in W.map.getLayerByName("mapProblems").markers) {
    //         const mIcon = W.map.getLayerByName("mapProblems").markers[mObj].icon.div;
    //         mIcon.addEventListener("click", MarkerClick, false);
    //     }
    // }

    function MarkerClick(objectId) {
        // const markerType = GetMarkerType(objectId);
        const pur = sdk.DataModel.Venues.getById({ venueId: objectId });
        if (pur?.venueUpdateRequests.length > 0 && pur?.categories[0] === "PARKING_LOT") {
            waitForElementLoaded("#panel-container > div > wz-card > div > div > div.actions > form").then(() => {
                const $PIECreatePLA = $('<div id="PIECreatePLA">', { style: "min-height:20px" });
                $PIECreatePLA.html(
                    [
                        '<div class="btn btn-block" id="PIECreatePLAButton" style="color: #fff; background-color: #92c2d1; border-color: #78b0bf; margin-top:5px; width:67%; margin: 0 auto;">Create Suggested PLA</div>',
                    ].join(" ")
                );
                $("#panel-container > div > wz-card > div > div > div.actions > form").append($PIECreatePLA);
                $("#PIECreatePLAButton").on("click", () => {
                    createPLAFromMP(markerID);
                });
            }, 150);
        }
    }

    //Shamelessly copied from URO+
    // Not Necessary with SDK
    // function GetMarkerType(className) {
    //     let markerType = null;
    //     if (className.indexOf("user-generated") !== -1) markerType = "ur";
    //     else if (className.indexOf("map-problem") !== -1) markerType = "mp";
    //     else if (className.indexOf("place-update") !== -1) markerType = "pur";
    //     return markerType;
    // }

    function createPLAFromMP(MPID) {
        const pos = W.model.problemDetails.objects[MPID].venueGeom;

        const PlaceObject = require("Waze/Feature/Vector/Landmark");
        const AddPlace = require("Waze/Action/AddLandmark");

        const points = [];
        let i;
        for (i = 0; i < pos.components[0].components.length; i++)
            points.push(
                new OpenLayers.Geometry.Point(pos.components[0].components[i].x, pos.components[0].components[i].y)
            );

        const ring = new OpenLayers.Geometry.LinearRing(points);
        const NewPlace = new PlaceObject({
            geoJSONGeometry: W.userscripts.toGeoJSONGeometry(new OpenLayers.Geometry.Polygon([ring])),
        });

        NewPlace.attributes.categories.push("PARKING_LOT");

        W.model.actionManager.add(new AddPlace(NewPlace));
        W.selectionManager.setSelectedModels([NewPlace]);
    }

    // Function use has been commented out.  - Karlsosha
    // function highlightObsoleteHospitalCategory() {
    //     if (WazeWrap.getSelectedFeatures().length > 0 && WazeWrap.getSelectedFeatures()[0].WW.getType() === "venue") {
    //         if (
    //             _.includes(
    //                 WazeWrap.getSelectedFeatures()[0].WW.getObjectModel().attributes.categories,
    //                 "HOSPITAL_MEDICAL_CARE"
    //             )
    //         ) {
    //             $(".select2-choices").css("animation-iteration-count", "infinite");
    //             $(".select2-choices").attr(
    //                 "title",
    //                 'The "Hospital / Medical Care" category is no longer valid.\n\nPlease change it to "Hospital / Urgent Care" or "Doctor / Clinic", whichever is most appropriate'
    //             );
    //             $(".select2-choices").tooltip();
    //         }
    //     }
    // }

    let newPlaceCategory = "";
    function startPlacementMode(category, isPoint) {
        // if (W.editingMediator.attributes.editingHouseNumbers)
        //     //don't allow creating Places in HN edit mode
        //     return;

        if (category === "PARKING_LOT") {
            if (!$("#layer-switcher-item_parking_places").prop("checked")) {
                if (!$("#layer-switcher-group_places").prop("checked"))
                    $("#layer-switcher-group_places").trigger("click");
                $("#layer-switcher-item_parking_places").trigger("click");
            }
        } else if (category === resCategory) {
            if (!$("#layer-switcher-item_residential_places").prop("checked")) {
                if (!$("#layer-switcher-group_places").prop("checked"))
                    $("#layer-switcher-group_places").trigger("click");
                $("#layer-switcher-item_residential_places").trigger("click");
            }
        }
        $(
            "#edit-buttons > div > div.toolbar-button.waze-icon-place.toolbar-submenu.toolbar-group.toolbar-group-venues.ItemInactive"
        ).removeClass("open");
        newPlaceCategory = category;
        // const polyDrawFeatureOptions = { callbacks: { done: doneHandler } };
        if (isPoint) {
            $(".olMapViewport").on("mousemove", MouseMoveHandler);
            $(".olMapViewport").on("click", (event) => {
                const lonLat = sdk.Map.getLonLatFromPixel({ x: event.screenX, y: event.screenY });
                endPlacementMode(lonLat, category, isPoint);
            });
            /*drawPoly = new OpenLayers.Control.DrawFeature(newPlaceLayer, OpenLayers.Handler.Polygon, polyDrawFeatureOptions);
            W.map.addControl(drawPoly);
            drawPoly.activate();*/
        } else {
            if (drawPoly != null && drawPoly.events != null) drawPoly.deactivate();
            // drawPoly = new OpenLayers.Control.DrawFeature(
            //     newPlaceLayer,
            //     OpenLayers.Handler.Polygon,
            //     polyDrawFeatureOptions
            // );
            // W.map.addControl(drawPoly);
            // drawPoly.activate();
            sdk.Map.drawPolygon().then((coordinates) => {
                doneHandler(coordinates);
            });
        }
        document.addEventListener("keyup", keyUpHandler, false);
    }

    let businessPLAPlaceName, businessPLAPlaceAddress; //, businessPLAPlacePhone, businessPLAPlaceURL;
    function startBusinessPLAPlacementMode() {
        // const polyDrawFeatureOptions = { callbacks: { done: doneHandlerBusinessPLAPlace } };
        // drawPoly = new OpenLayers.Control.DrawFeature(
        //     newPlaceLayer,
        //     OpenLayers.Handler.Polygon,
        //     polyDrawFeatureOptions
        // );
        // W.map.addControl(drawPoly);
        // drawPoly.activate();
        drawPoly = sdk.Map.drawPoly().then(() => {
            doneHandlerBusinessPLAPlace();
        });
        document.addEventListener("keyup", keyUpHandler, false);
    }

    function doneHandlerBusinessPLAPlace(geom) {
        drawPoly.destroy();
        BusinessPLAMode = false;
        CreateBusinessPLAPlace(geom, businessPLAPlaceName, businessPLAPlaceAddress); //, businessPLAPlacePhone, businessPLAPlaceURL);
    }

    function CreateBusinessPLAPlace(geom, name, address) {
        //, phone, url){
        drawPoly.destroy();

        const PlaceObject = require("Waze/Feature/Vector/Landmark");
        const AddPlace = require("Waze/Action/AddLandmark");
        const multiaction = new MultiAction();

        const points = [];
        let i;
        for (i = 0; i < geom.components[0].components.length; i++)
            points.push(
                new OpenLayers.Geometry.Point(geom.components[0].components[i].x, geom.components[0].components[i].y)
            );

        const ring = new OpenLayers.Geometry.LinearRing(points);
        const NewPlace = new PlaceObject({
            geoJSONGeometry: W.userscripts.toGeoJSONGeometry(new OpenLayers.Geometry.Polygon([ring])),
        });
        NewPlace.attributes.categories.push("PARKING_LOT");

        NewPlace.attributes.lockRank = Number(settings.DefaultLockLevel);
        NewPlace.attributes.name = `Parking - ${name}`;
        //NewPlace.attributes.phone = phone;
        //NewPlace.attributes.url = url;
        NewPlace.attributes.categoryAttributes.PARKING_LOT = {};
        NewPlace.attributes.categoryAttributes.PARKING_LOT.parkingType = "RESTRICTED";
        NewPlace.attributes.categoryAttributes.PARKING_LOT.lotType = ["STREET_LEVEL"];
        NewPlace.attributes.categoryAttributes.PARKING_LOT.costType = "FREE";

        if (address) {
            let newAttributes,
                UpdateFeatureAddress = require("Waze/Action/UpdateFeatureAddress");
            newAttributes = {
                countryID: address.country.id,
                stateID: address.state.id,
                emptyCity: address.city.attributes.name ? null : true,
                emptyStreet: address.street.name ? null : true,
                houseNumber: address.houseNumber,
            };

            newAttributes.streetName = address.street.name;

            const cityName = address.city.attributes.name;

            if (cityName !== "") newAttributes.emptyCity = null;
            newAttributes.cityName = cityName;
        }

        W.model.actionManager.add(new AddPlace(NewPlace));

        const UFA = new UpdateFeatureAddress(NewPlace, newAttributes);
        UFA.options.updateHouseNumber = true;
        multiaction.doSubAction(W.model, UFA);
        W.model.actionManager.add(multiaction);

        W.selectionManager.setSelectedModels([NewPlace]);
    }

    function doneHandler(geom) {
        // drawPoly.destroy();
        createPlace(geom, newPlaceCategory, false);
    }

    function keyUpHandler(e) {
        if (e.keyCode === 27) {
            BusinessPLAMode = false;
            disablePlacementMode();
            if (drawPoly !== "undefined") drawPoly.destroy();
        } else if (e.keyCode === 90 && e.ctrlKey) drawPoly.undo();
        else if (e.keyCode === 89 && e.ctrlKey) drawPoly.redo();
        else if (e.keyCode === 13) drawPoly.finishSketch();
    }

    function disablePlacementMode() {
        $(".olMapViewport").off("click"); //, endPlacementMode);
        $(".olMapViewport").off("mousemove", MouseMoveHandler);
        clearLayer();
        document.removeEventListener("keyup", keyUpHandler);
    }

    function endPlacementMode(lonLat, category, isPoint) {
        disablePlacementMode();
        createPlace(turf.point([lonLat.lon, lonLat.lat]), category, isPoint);
    }

    // function getMousePos900913() {
    //     const mousePosition = $(".wz-map-ol-control-span-mouse-position").text().split(" ");
    //     [mousePosition[0], mousePosition[1]] = [mousePosition[1], mousePosition[0]];
    //     return WazeWrap.Geometry.ConvertTo900913(mousePosition[0], mousePosition[1]);
    // }

    function MouseMoveHandler(e) {
        clearLayer();
        const lonLat = sdk.Map.getLonLatFromPixel({ x: e.screenX, y: e.screenY });
        drawCircle(lonLat);
    }

    function clearLayer() {
        // var layer = W.map.getLayersByName(mainLayerName)[0];
        // layer.removeAllFeatures();
        sdk.Map.removeAllFeaturesFromLayer({ layerName: mainLayerName });
    }

    function drawCircle(lonLat) {
        // var pointFeature = new OpenLayers.Feature.Vector(new OpenLayers.Geometry.Point(e.lon, e.lat), {}, pointStyle);
        // W.map.getLayersByName(mainLayerName)[0].addFeatures([pointFeature]);
        const pointFeature = turf.point(
            [lonLat.lon, lonLat.lat],
            {
                styleName: "pointStyle",
            },
            { id: `NewVenuePoint_${lonLat.toString()}` }
        );
        sdk.Map.addFeatureToLayer({ feature: pointFeature, layerName: mainLayerName });
    }

    function createPlace(pos, category, _isPoint) {
        // const PlaceObject = require("Waze/Feature/Vector/Landmark");
        // const AddPlace = require("Waze/Action/AddLandmark");
        // const multiaction = new MultiAction();

        // let newOLgeometry;
        // if (!isPoint) newOLgeometry = new OpenLayers.Geometry.Point(pos.lon, pos.lat);
        // else
        // {
        //     const points = [];
        //     let i;
        //     for (i = 0; i < pos.components[0].components.length; i++)
        //         points.push(
        //             new OpenLayers.Geometry.Point(pos.components[0].components[i].x, pos.components[0].components[i].y)
        //         );

        //     const ring = new OpenLayers.Geometry.LinearRing(points);
        //     newOLgeometry = new OpenLayers.Geometry.Polygon([ring]);
        // }

        // const NewPlace = new PlaceObject({ geoJSONGeometry: W.userscripts.toGeoJSONGeometry(newOLgeometry) });
        const newPlace = sdk.DataModel.Venues.addVenue({ category: category, geometry: pos });

        // NewPlace.attributes.categories.push(category);
        if (category === resCategory) {
            NewPlace._originalResidential = true;
            NewPlace.attributes.residential = true;
            const eep = new NavigationPoint(
                W.userscripts.toGeoJSONGeometry(new OpenLayers.Geometry.Point(pos.lon, pos.lat))
            );
            NewPlace.attributes.entryExitPoints.push(eep);
        }
        const newVenue = sdk.DataModel.Venues.getById({ venueId: newPlace.toString() });
        // newPlace.attributes.lockRank = Number(settings.DefaultLockLevel);

        const placeCentroid = turf.centroid(pos);
        const closestSeg = findSDKClosestSegment(placeCentroid);

        // W.model.actionManager.add(new AddPlace(NewPlace));
        const sdkSeg = sdk.DataModel.Segments.getById({ segmentId: closestSeg.attributes.id });
        if (sdkSeg) {
            //if we were able to find a segment, try to pull the city and/or street name if the options are enabled
            // let newAttributes,
            //     UpdateFeatureAddress = require("Waze/Action/UpdateFeatureAddress"),
            //     address = closestSeg.getAddress();

            // newAttributes = {
            //     countryID: address.attributes.country.attributes.id,
            //     stateID: address.attributes.state.attributes.id,
            //     emptyCity: address.attributes.city.attributes.name ? null : true,
            //     emptyStreet: address.attributes.street.attributes.name ? null : true,
            // };

            // if (settings.UseStreetFromClosestSeg) newAttributes.streetName = address.attributes.street.attributes.name;
            // else newAttributes.emptyStreet = true;

            if (settings.UseCityFromClosestSeg) {
                // let cityName = address.attributes.city.attributes.name;
                sdk.DataModel.Venues.updateAddress({
                    streetId: sdkSeg.primaryStreedId,
                    houseNumber: null,
                    venueId: newVenue.id,
                });

                if (settings.UseAltCity && cityName === "") {
                    // if (address.attributes.altStreets.length > 0) {
                    if (sdkSeg.alternateStreetIds.length > 0) {
                        //segment has alt names
                        // for (let j = 0; j < closestSeg.attributes.streetIDs.length; j++) {
                        //     const altCity = W.model.cities.getObjectById(
                        //         W.model.streets.getObjectById(closestSeg.attributes.streetIDs[j]).attributes.cityID
                        //     ).attributes;
                        //     if (altCity.name !== null && altCity.englishName !== "") {
                        //         cityName = altCity.name;
                        //         break;
                        //     }
                        // }
                    }
                }
                if (cityName !== "") newAttributes.emptyCity = null;
                newAttributes.cityName = cityName;
            } else newAttributes.emptyCity = true;

            multiaction.doSubAction(W.model, new UpdateFeatureAddress(NewPlace, newAttributes));
            W.model.actionManager.add(multiaction);
            W.selectionManager.setSelectedModels([NewPlace]);
        } else console.log("WMEPIE - No segment found; cannot set street or city name.");

        if (category === resCategory && settings.EditRPPAfterCreated) setTimeout(editRPPAddress, 50);
    }

    async function delayFire(ms, func) {
        await new Promise((r) => setTimeout(r, ms));
        func();
    }

    async function editRPPAddress(rppTries = 1) {
        if ($(".address-edit-view").length > 0) {
            $(".full-address").trigger("click");
            await new Promise((r) => setTimeout(r, 150));
            $("#id", $(".house-number")[0].shadowRoot).focus();
        } else if (rppTries < 1000) {
            console.log("not found");
            setTimeout(() => {
                editRPPAddress(rppTries + 1);
            }, 200);
        }
    }

    function buildItemOption(itemNumber) {
        const $section = $("<div>", { style: "padding:8px 16px", id: `piePlaceCat${itemNumber}` });
        $section.html([`${I18n.t("pie.prefs.Item")} `, itemNumber, buildItemList(itemNumber), "</br>"].join(" "));

        return $section.html();
    }

    function buildLockLevelsList() {
        const $lockLevels = $("<div>");
        for (let i = 0; i < WazeWrap.User.Rank(); i++) $lockLevels.append(`<option value=${i}>${i + 1}</option>`);

        return $lockLevels.html();
    }

    function attachPlaceSizeHandlers() {
        // WazeWrap.Events.register("selectionchanged", null, updatePlaceSizeDisplay);
        // WazeWrap.Events.register("afteraction", null, updatePlaceSizeDisplay);
        // WazeWrap.Events.register("afterundoaction", null, updatePlaceSizeDisplay);
        // WazeWrap.Events.register("afterclearactions", null, updatePlaceSizeDisplay);
        sdk.Events.on({ eventName: "wme-selection-changed", eventHandler: updatePlaceSizeDisplay });
        sdk.Events.on({ eventName: "wme-after-undo", eventHandler: updatePlaceSizeDisplay });
        sdk.Events.on({ eventName: "wme-after-edit", eventHandler: updatePlaceSizeDisplay });
        // sdk.Events.on({ eventName: "wme-after-redo-clear", eventHandler: updatePlaceSizeDisplay });
        // W.model.actionManager.events.register("noActions", null, noActions);
        sdk.Events.on({ eventName: "wme-no-edits", eventHandler: noActions });
        updatePlaceSizeDisplay();
    }

    function removePlaceSizeHandlers() {
        // WazeWrap.Events.unregister("selectionchanged", null, updatePlaceSizeDisplay);
        // WazeWrap.Events.unregister("afteraction", null, updatePlaceSizeDisplay);
        // WazeWrap.Events.unregister("afterundoaction", null, updatePlaceSizeDisplay);
        // WazeWrap.Events.unregisterWazeWrap.Events.unregister("afterclearactions", null, updatePlaceSizeDisplay);
        sdk.Events.off({ eventName: "wme-selection-changed", eventHandler: updatePlaceSizeDisplay });
        sdk.Events.off({ eventName: "wme-after-undo", eventHandler: updatePlaceSizeDisplay });
        sdk.Events.off({ eventName: "wme-after-edit", eventHandler: updatePlaceSizeDisplay });
        // sdk.Events.off({ eventName: "wme-after-redo-clear", eventHandler: updatePlaceSizeDisplay });
        // W.model.actionManager.events.unregister("noActions", null, noActions);
        sdk.Events.off({ eventName: "wme-no-edits", eventHandler: noActions });
    }

    function openPUR() {
        const selection = sdk.Editing.getSelection();
        if (selection?.objectType === "venue" && $(".pending-changes-alert").length > 0) {
            const selectedVenue = sdk.DataModel.Venues.getById({venueId: selection.ids[0]});
            if (selectedVenue.venueUpdateRequests.length > 0 &&
                (typeof WazeWrap.getSelectedFeatures()[0].WW.getObjectModel().state === "undefined" ||
                    WazeWrap.getSelectedFeatures()[0].WW.getObjectModel().state === null)
            )
                W.commands.execute("place_updates:list", WazeWrap.getSelectedFeatures()[0].WW.getObjectModel()); // W.model.venues.get(WazeWrap.getSelectedFeatures()[0].attributes.repositoryObject.attributes.id)
        }
    }

    function _hidePaymentType() {
        const selected = sdk.Editing.getSelection();
        if (selected?.objectType === "venue") {
            const selectedVenue = sdk.DataModel.Venues.getById({ venueId: selected.ids[0] });
            if (selectedVenue?.categories.includes("PARKING_LOT")) {
                const costType = sdk.DataModel.Venues.ParkingLot.getCostType({ venueId: selectedVenue.id });
                if (costType !== null && costType === "FREE") {
                    if (
                        !$(
                            "#venue-edit-more-info > div > form > fieldset > div:nth-child(3) > div:nth-child(2)"
                        ).hasClass("collapse")
                    )
                        $(
                            "#venue-edit-more-info > div > form > fieldset > div:nth-child(3) > div:nth-child(2)"
                        ).addClass("collapse");
                } else {
                    if (
                        $(
                            "#venue-edit-more-info > div > form > fieldset > div:nth-child(3) > div:nth-child(2)"
                        ).hasClass("collapse")
                    )
                        $(
                            "#venue-edit-more-info > div > form > fieldset > div:nth-child(3) > div:nth-child(2)"
                        ).removeClass("collapse");
                }
            }
        }
    }

    function HidePaymentTypePlaceSelected() {
        const selected = sdk.Editing.getSelection();
        if (selected?.objectType === "venue") _hidePaymentType();
    }

    function OrthogonalizePlace() {
        const selected = sdk.Editing.getSelection();
        if (selected?.objectType === "venue") {
            const selectedVenue = sdk.DataModel.Venues.getById({ venueId: selected.ids[0] });
            if (selectedVenue?.geometry?.type === "Polygon") {
                // const selected = WazeWrap.getSelectedFeatures()[0].WW.getObjectModel();
                // const newOLGeom = WazeWrap.Util.OrthogonalizeGeometry(selected.getOLGeometry().clone().components[0].components);
                // const olGeometry = selectedVenue.geometry.coordinates[0].map((p) => {return proj4("EPSG:4326", "EPSG:900913", p)});
                // olGeometry.map((g) => { return OpenLayers.Geometry.Point(g[0], g[1])});
                const newGeom = WazeWrap.Util.GeoJSONOrthogonalizeGeometry(selectedVenue.geometry.coordinates);

                // const UFG = require("Waze/Action/UpdateFeatureGeometry");
                const originalGeometry = selectedVenue.geometry;

                if (!GeomArraysEqual(originalGeometry.coordinates[0], newGeom)) {
                    // selected.getOLGeometry().components[0].components = [].concat(newGeom);
                    // selected.getOLGeometry().components[0].clearBounds();

                    // const action = new UFG(
                    //     selected,
                    //     W.model.venues,
                    //     W.userscripts.toGeoJSONGeometry(originalGeometry),
                    //     W.userscripts.toGeoJSONGeometry(selected.getOLGeometry())
                    // );
                    // W.model.actionManager.add(action);
                    const newPolygon = turf.polygon([newGeom]);
                    sdk.DataModel.Venues.updateVenue({ venueId: selected.ids[0], geometry: newPolygon.geometry });
                }
            }
        }
    }

    function GeomArraysEqual(geom1, geom2) {
        if (geom1.length !== geom2.length) return false;

        for (let i = 0; i < geom1.length; i++) {
            if (different(geom1[i][0], geom2[i][0], 1e-6) || different(geom1[i][1], geom2[i][1], 1e-6)) return false;
        }
        return true;
    }

    function different(num1, num2, deltaLimit) {
        if (Math.abs(num1 - num2) > Math.abs(deltaLimit)) return true;
        return false;
    }

    // function round(val, decimals) {
    //     let multiplier = 1;
    //     for (let i = 0; i < decimals; i++) multiplier *= 10;
    //     return Math.round(val * multiplier) / multiplier;
    // }

    function SimplifyPlace() {
        const selected = sdk.Editing.getSelection();
        if (selected) {
            // const oldSelected = WazeWrap.getSelectedFeatures()[0].WW.getObjectModel();
            // const originalGeometry = selected.getOLGeometry().clone();
            // let ls = new OpenLayers.Geometry.LineString(originalGeometry.components[0].components);
            // ls = ls.simplify(settings.SimplifyFactor);
            // const newGeometry = new OpenLayers.Geometry.Polygon(new OpenLayers.Geometry.LinearRing(ls.components));

            // if (newGeometry.components[0].components.length < originalGeometry.components[0].components.length) {
            //     const UFG = require("Waze/Action/UpdateFeatureGeometry");
            //     W.model.actionManager.add(
            //         new UFG(
            //             selected,
            //             W.model.venues,
            //             W.userscripts.toGeoJSONGeometry(originalGeometry),
            //             W.userscripts.toGeoJSONGeometry(newGeometry)
            //         )
            //     );
            // }
            if (selected.objectType === "venue") {
                const venue = sdk.DataModel.Venues.getById({ venueId: selected.ids[0] });
                if (venue.geometry.type === "Point") {
                    console.log("Can't Simplify a Point Place");
                    return;
                }
                const toArcDegrees = proj4("EPSG:900913", "EPSG:4326", [Number.parseFloat(settings.SimplifyFactor), 0]);
                const newGeometry = turf.simplify(venue.geometry, { tolerance: toArcDegrees[0] });
                sdk.DataModel.Venues.updateVenue({ venueId: selected.ids[0], geometry: newGeometry });
            }
            if (selected.objectType === "mapComment") {
                const mc = sdk.DataModel.MapComments.getById({ mapCommentId: selected.ids[0] });
                if (mc.geometry.type === "Point") {
                    console.log("Can't Simplify a Point Map Comment");
                    return;
                }
                // const newGeometry = turf.simplify(mc.geometry, {tolerance: settings.SimplifyFactor});
                console.log("Waiting for Implementation of MC Geometry Updates.");
            }
        }
    }

    function ViewEditPlaceGeom() {
        $("#pieViewEditGeom").remove();
        const $section = $("<div>", { style: "padding:8px 16px" });
        $section.html(
            [
                '<div id="pieViewEditGeom" style="padding:8px 16px; position:fixed; z-index:1000; border-radius:10px; box-shadow:5px 5px 10px silver; top:25%; left:30%; background-color:white; min-width:100px; min-height:100px;">', //Main div
                '<div class="content">',
                '<div style="width:100%; height:18px;"><i class="fa fa-window-close" aria-hidden="true" style="float:right; cursor:pointer;" id="pieGeomClose"></i></div>',
                '<div style="float:left; margin-right:20px;"><h3>Standard (lat, lon)</h3>',
                '<div><textarea rows="7" cols="40" id="piePlaceGeomStandard" style="height:auto;"></textarea></div>',
                !WazeWrap.hasMapCommentSelected() ? '<button id="pieBtnApplyStandardGeom">Apply</button>' : "",
                "</div>",
                '<div style="float:left; margin-right:20px;"><h3>Waze (lon lat)</h3>',
                '<div><textarea rows="7" cols="40" id="piePlaceGeomWaze" style="height:auto;"></textarea></div>',
                !WazeWrap.hasMapCommentSelected() ? '<button id="pieBtnApplyWazeGeom">Apply</button>' : "",
                "</div>",
                '<div style="float:left;"><h3>WKT</h3>',
                '<div><textarea rows="7" cols="45" id="piePlaceGeomWKT" style="height:auto;"></textarea></div>',
                !WazeWrap.hasMapCommentSelected() ? '<button id="pieBtnApplyWKTGeom">Apply</button>' : "",
                "</div>",
                "</div>", //end content div
                "</div>", //end main div
            ].join(" ")
        );

        $("#WazeMap").append($section.html());

        updateGeometryInputs();

        $("#pieBtnApplyStandardGeom").on("click", () => {
            const lines = $("#piePlaceGeomStandard").val().split("\n");
            const polygonGeometry = [];

            for (let i = 0; i < lines.length; i++) {
                if (!/^(-?\d*(?:\.\d*)?),\s?(-?\d*(?:\.\d*))$/.test(lines[i])) {
                    WazeWrap.Alerts.error(GM_info.script.name, "Incorrectly formatted coordinates");
                    return;
                }
                const coords = lines[i].match(/^(-?\d*(?:\.\d*)?),\s?(-?\d*(?:\.\d*))$/);
                // const pt = WazeWrap.Geometry.ConvertTo900913(coords[2], coords[1]);
                // lines[i] = new OpenLayers.Geometry.Point(pt.lon, pt.lat);
                polygonGeometry.push([coords[2], coords[1]]);
            }
            if(polygonGeometry.length < 1) {
                WazeWrap.Alerts.error(GM_info.script.name, "Unable to Parse Coordinates");
                return;
            }
            if(polygonGeometry.length === 1) saveNewPlaceGeometry(turf.point(polygonGeometry).geometry); 
            else if(polygonGeometry.length < 4) {
                WazeWrap.Alerts.error(GM_info.script.name, "Malformed Polygon Supplied.");
                return;
            }
            else {
                polygonGeometry.push(structuredClone(polygonGeometry[0]));
                saveNewPlaceGeometry(turf.polygon([polygonGeometry]).geometry);
            }
            updateGeometryInputs();
        });

        $("#pieBtnApplyWazeGeom").on("click", () => {
            const lines = $("#piePlaceGeomWaze").val().split("\n");
            const polygonGeometry = [];

            for (let i = 0; i < lines.length; i++) {
                if (lines[i].length > 0) {
                    lines[i] = lines[i].replace(/\t/, " ");
                    if (!/^(-?\d*(?:\.\d*)?)\s+(-?\d*(?:\.\d*))$/.test(lines[i])) {
                        WazeWrap.Alerts.error(GM_info.script.name, "Incorrectly formatted coordinates");
                        return;
                    }
                    const coords = lines[i].match(/^(-?\d*(?:\.\d*)?)\s+(-?\d*(?:\.\d*))$/);
                    // const pt = WazeWrap.Geometry.ConvertTo900913(coords[1], coords[2]);
                    // lines[i] = new OpenLayers.Geometry.Point(pt.lon, pt.lat);
                    polygonGeometry.push([coords[1], coords[2]]);
                }
            }

            if(polygonGeometry.length < 1) {
                WazeWrap.Alerts.error(GM_info.script.name, "Unable to Parse Coordinates");
                return;
            }
            if(polygonGeometry.length === 1) saveNewPlaceGeometry(turf.point(polygonGeometry).geometry); 
            else if(polygonGeometry.length < 4) {
                WazeWrap.Alerts.error(GM_info.script.name, "Malformed Polygon Supplied.");
                return;
            }
            else {
                polygonGeometry.push(structuredClone(polygonGeometry[0]));
                saveNewPlaceGeometry(turf.polygon([polygonGeometry]).geometry);
            }
            updateGeometryInputs();
        });

        $("#pieBtnApplyWKTGeom").on("click", () => {
            const lines = $("#piePlaceGeomWKT")
                .val()
                .match(/POLYGON\((.*)\)/)[1]
                .split(",");
            const polygonGeometry = [];

            for (let i = 0; i < lines.length; i++) {
                if (!/^(-?\d*(?:\.\d*)?)\s(-?\d*(?:\.\d*))$/.test(lines[i].trim())) {
                    WazeWrap.Alerts.error(GM_info.script.name, "Incorrectly formatted coordinates");
                    return;
                }
                const coords = lines[i].trim().match(/^(-?\d*(?:\.\d*)?)\s(-?\d*(?:\.\d*))$/);
                // const pt = WazeWrap.Geometry.ConvertTo900913(coords[1], coords[2]);
                // lines[i] = new OpenLayers.Geometry.Point(pt.lon, pt.lat);
                polygonGeometry.push([coords[1], coords[2]]);
            }

            if(polygonGeometry.length < 1) {
                WazeWrap.Alerts.error(GM_info.script.name, "Unable to Parse Coordinates");
                return;
            }
            if(polygonGeometry.length === 1) saveNewPlaceGeometry(turf.point(polygonGeometry).geometry); 
            else if(polygonGeometry.length < 4) {
                WazeWrap.Alerts.error(GM_info.script.name, "Malformed Polygon Supplied.");
                return;
            }
            else {
                polygonGeometry.push(structuredClone(polygonGeometry[0]));
                saveNewPlaceGeometry(turf.polygon([polygonGeometry]).geometry);
            }
            updateGeometryInputs();
        });

        $("#pieGeomClose").on("click", () => {
            $("#pieViewEditGeom").remove();
        });
    }

    function saveNewPlaceGeometry(newGeom) {
        // const selected = WazeWrap.getSelectedFeatures()[0].WW.getObjectModel();
        // const originalGeometry = selected.getOLGeometry().clone();
        // const ls = new OpenLayers.Geometry.LineString(newGeom);
        // const newGeometry = new OpenLayers.Geometry.Polygon(new OpenLayers.Geometry.LinearRing(ls.components));

        // const UFG = require("Waze/Action/UpdateFeatureGeometry");
        // // debugger;
        // W.model.actionManager.add(
        //     new UFG(
        //         selected,
        //         W.model.venues,
        //         W.userscripts.toGeoJSONGeometry(originalGeometry),
        //         W.userscripts.toGeoJSONGeometry(newGeometry)
        //     )
        // );
        const selected = sdk.Editing.getSelection();
        if(selected?.objectType !== "venue") return;
        const selectedVenue = sdk.DataModel.Venues.getById({venueId: selected.ids[0]});
        if(selectedVenue === null) return;
        sdk.DataModel.Venues.updateVenue({geometry: newGeom, venueId: selectedVenue.id});
    }

    function updateGeometryInputs() {
        // const currPlaceModel = WazeWrap.getSelectedFeatures()[0].WW.getObjectModel();
        // const currPlaceGeom = currPlaceModel.getOLGeometry().components[0].clone().components;
        const selection = sdk.Editing.getSelection();
        if (selection.objectType !== "venue") {
            console.error("Unable to edit geomtry for Non Venue");
            return;
        }
        const selectedVenue = sdk.DataModel.Venues.getById({ venueId: selection.ids[0] });
        if (selectedVenue.geometry.type === "Point") {
            console.error("No Point in Editing Geometry of a point venue");
            return;
        }
        const currPlaceGeom = selectedVenue.geometry.coordinates[0];

        let standardGeom = "",
            WMEGeom = "",
            WKTGeom = "";
        WKTGeom = "POLYGON(";

        let coord;
        for (let i = 0; i < currPlaceGeom.length; i++) {
            if (i > 0) {
                WKTGeom += ", ";
                if (i < currPlaceGeom.length - 1) {
                    standardGeom += "\n";
                    WMEGeom += "\n";
                }
            }
            coord = currPlaceGeom[i];
            if (i < currPlaceGeom.length - 1) {
                // coord = coord.transform(W.Config.map.projection.local, W.Config.map.projection.remote);
                standardGeom += `${coord[1]}, ${coord[0]}`;
                WMEGeom += `${coord[0]} ${coord[1]}`;
            }
            WKTGeom += `${coord[0]} ${coord[1]}`;
        }
        WKTGeom += ")";
        $("#piePlaceGeomWKT").val(WKTGeom);
        $("#piePlaceGeomStandard").val(standardGeom);
        $("#piePlaceGeomWaze").val(WMEGeom);
    }

    async function InsertGeometryMods() {
        $("#pieGeometryMods").remove();
        $("#pieViewEditGeom").remove(); //remove the Place geometry window when the option is disabled or a Place is de-selected

        // if ( (WazeWrap.hasPlaceSelected() || WazeWrap.hasMapCommentSelected()) &&
        //       WazeWrap.getSelectedFeatures()[0].WW.getObjectModel().getOLGeometry().toString().match(/^POLYGON/) )
        const selected = sdk.Editing.getSelection();
        let geometry;
        if (selected?.objectType === "mapComment") {
            const mc = sdk.DataModel.MapComments.getById({ mapCommentId: selected.ids[0] });
            if (mc) {
                geometry = mc.geometry;
            }
        }
        if (selected?.objectType === "venue") {
            const venue = sdk.DataModel.Venues.getById({ venueId: selected.ids[0] });
            if (venue) {
                geometry = venue.geometry;
            }
        }
        if (geometry) {
            await new Promise((r) => setTimeout(r, 150));
            const $GeomMods = $(
                `<div class="form-group" id="pieGeometryMods"><label class="control-label">Geometry</label><div class="controls">${
                    selected.objectType !== "mapComment"
                        ? '<i id="pieorthogonalize" title="Orthogonalize" class="fa fa-plus-square-o fa-2x" aria-hidden="true" style="cursor:pointer;"></i> <i id="piesimplifyplace" title="Simplify" class="fa fa-magic fa-2x" aria-hidden="true" style="cursor:pointer;"></i>'
                        : ""
                } <i id="pierotate" title="Allow rotating the Place" class="fa fa-repeat fa-2x" aria-hidden="true" style="cursor:pointer; color:${
                    settings.Rotate ? "rgb(0,180,0)" : "black"
                }"></i> <i id="pieresize" title="Allow resizing the Place. While enabled the geometry cannot be modified" class="fa fa-expand fa-2x" aria-hidden="true" style="cursor:pointer; color:${
                    settings.Resize ? "rgb(0,180,0)" : "black"
                }"></i> <i id="pieEditGeom" class="fa fa-pencil-square-o fa-2x" aria-hidden="true" style="cursor:pointer;"></i> <i id="pieClearGeom" title="Clear geometry" class="fa fa-times fa-2x" aria-hidden="true" style="cursor:pointer; color:red;"></i></div></div>`
            );
            if (sdk.Editing.getSelection()?.objectType === "mapComment")
                $("#edit-panel > div > div > div.tab-content > div > form > div:nth-child(4)").after($GeomMods);
            else $("#venue-edit-general > div:nth-child(9)").after($GeomMods);

            $("#pieorthogonalize").on("click", () => {
                OrthogonalizePlace();
            });

            $("#piesimplifyplace").on("click", () => {
                SimplifyPlace();
            });

            $("#pieEditGeom").on("click", () => {
                ViewEditPlaceGeom();
            });

            $("#pieClearGeom").on("click", () => {
                // const selected = WazeWrap.getSelectedFeatures()[0].WW.getObjectModel();
                const selected = sdk.Editing.getSelection();
                if (!selected || selected.objectType !== "venue") {
                    console.error("Unable to clear Geometry on Someothing other than place");
                    return;
                }
                const selectedVenue = sdk.DataModel.Venues.getById({ venueId: selected.ids[0] });
                if (selectedVenue.geometry.type === "Point") {
                    console.error("Unable to clear Geometry of a Point");
                    return;
                }
                // const centerLonLat = selected.getOLGeometry().bounds.getCenterLonLat();
                const centerPoint = turf.centroid(selectedVenue.geometry);
                // Because SDK keeps everything in Degrees of Lattitude and Longitude we have to figure out
                // What 20 points is.
                const offsetValues = proj4("EPSG:900913", "EPSG:4326", [20, 0]);
                const polygonCoordinates = [
                    [centerPoint.geometry.coordinates[0], centerPoint.geometry.coordinates[1] - offsetValues[0]],
                    [centerPoint.geometry.coordinates[0] - offsetValues[0], centerPoint.geometry.coordinates[1]],
                    [centerPoint.geometry.coordinates[0], centerPoint.geometry.coordinates[1] + offsetValues[0]],
                    [centerPoint.geometry.coordinates[0] + offsetValues[0], centerPoint.geometry.coordinates[1]],
                    [centerPoint.geometry.coordinates[0], centerPoint.geometry.coordinates[1] - offsetValues[0]],
                ];
                // const newGeom = OpenLayers.Geometry.Polygon.createRegularPolygon(
                //     new OpenLayers.Geometry.Point(centerLonLat.lon, centerLonLat.lat),
                //     20,
                //     4,
                //     null
                // ).components[0].components;
                const newGeom = turf.polygon([polygonCoordinates]);
                // const UFG = require("Waze/Action/UpdateFeatureGeometry");
                // const originalGeometry = selected.getOLGeometry().clone();

                // selected.getOLGeometry().components[0].components = [].concat(newGeom);
                // selected.getOLGeometry().components[0].clearBounds();

                // const action = new UFG(
                //     selected,
                //     W.model.venues,
                //     W.userscripts.toGeoJSONGeometry(originalGeometry),
                //     W.userscripts.toGeoJSONGeometry(selected.getOLGeometry())
                // );
                // W.model.actionManager.add(action);
                sdk.DataModel.Venues.updateVenue({ venueId: selectedVenue.id, geometry: newGeom.geometry });
            });

            $("#pierotate").on("click", () => {
                settings.Rotate = !settings.Rotate;
                $("#pierotate").css("color", settings.Rotate ? "rgb(0,180,0)" : "black");
                saveSettings();
                getActiveEditor().then((val) => {
                    if ((val.olControl.mode & OpenLayers.Control.ModifyFeature.ROTATE) === 0)
                        val.olControl.mode |= OpenLayers.Control.ModifyFeature.ROTATE;
                    else val.olControl.mode &= ~OpenLayers.Control.ModifyFeature.ROTATE;
                    val.olControl.resetVertices();
                });
            });

            $("#pieresize").on("click", () => {
                settings.Resize = !settings.Resize;
                $("#pieresize").css("color", settings.Resize ? "rgb(0,180,0)" : "black");
                saveSettings();
                getActiveEditor().then((val) => {
                    if ((val.olControl.mode & OpenLayers.Control.ModifyFeature.RESIZE) === 0)
                        val.olControl.mode |= OpenLayers.Control.ModifyFeature.RESIZE;
                    else val.olControl.mode &= ~OpenLayers.Control.ModifyFeature.RESIZE;
                    val.olControl.resetVertices();
                });
            });

            //activate the changes when a Place is selected
            if (settings.Rotate) {
                getActiveEditor().then((val) => {
                    if ((val.olControl.mode & OpenLayers.Control.ModifyFeature.ROTATE) === 0)
                        val.olControl.mode |= OpenLayers.Control.ModifyFeature.ROTATE;
                    val.olControl.resetVertices();
                });
            }

            if (settings.Resize) {
                getActiveEditor().then((val) => {
                    if ((val.olControl.mode & OpenLayers.Control.ModifyFeature.RESIZE) === 0)
                        val.olControl.mode |= OpenLayers.Control.ModifyFeature.RESIZE;
                    val.olControl.resetVertices();
                });
            }
        } else if (
            !WazeWrap.hasSelectedFeatures() &&
            W.geometryEditing.activeEditor &&
            lastSelectedFeature === "venue"
        ) {
            if (W.geometryEditing.activeEditor.radiusHandle) W.geometryEditing.activeEditor.radiusHandle.destroy();
        }
    }

    function ShowPlaceLocatorCrosshair() {
        $("#pieCrosshairs").remove();
        const selected = sdk.Editing.getSelection();
        if (selected?.objectType === "venue") {
            const selectedVenue = sdk.DataModel.Venues.getById({venueId: selected.ids[0]});
            let $crosshairs;
            if (selectedVenue?.categories.includes("RESIDENCE_HOME")) {
                $(".venue > .tab-content").css("position", "relative");
                $crosshairs = $(
                    '<div style="position:absolute; z-index:100; cursor:pointer; top:0; right:0;" id="pieCrosshairs" title="Zoom and center on Place"><i class="fa fa-crosshairs fa-lg" id="placeCrosshair" aria-hidden="true"></i></div>'
                );
                //$('.address-edit.side-panel-section').before($crosshairs);
                $(".venue > .tab-content").append($crosshairs);
            } else {
                $crosshairs = $(
                    '<div style="float:right; z-index:100; cursor:pointer; top:0; right:0;" id="pieCrosshairs" title="Zoom and center on Place"><i class="fa fa-crosshairs fa-lg" id="placeCrosshair" aria-hidden="true"></i></div>'
                );
                $("#venue-edit-general > form > div:nth-child(1) > div:nth-child(2) > label").after($crosshairs);
            }
            $("#pieCrosshairs").on("click", () => {
                CenterOnPlace(settings.PlaceZoom);
            });

            $("#pieCrosshairs").on("mouseenter", () => {
                //var changedThisPl = getKMLPermalink(wazePL.getAttribute('href'));
                window.addEventListener("keydown", copyPLHotkeyEvent, false);
            });

            $("#pieCrosshairs").on("mouseleave", () => {
                window.removeEventListener("keydown", copyPLHotkeyEvent);
            });
        }
    }

    const copyPLHotkeyEvent = (e) => {
        if ((e.metaKey || e.ctrlKey) && e.which === 67) copyToClipboard(getPermalink(wazePL.getAttribute("href")));
    };

    let BusinessPLAMode = false;
    function ShowParkingLotButton() {
        $("#piePLAButton").remove();
        const selected = sdk.Editing.getSelection();
        if (selected?.objectType === "venue") {
            let $PLAButton;
            const selectedVenue = sdk.DataModel.Venues.getById({venueId: selected.ids[0]});
            if (selectedVenue !== null &&
                !(selectedVenue.categories.includes("RESIDENCE_HOME") ||
                  selectedVenue.categories.includes("PARKING_LOT"))
            ) {
                $PLAButton = $(
                    '<div style="float:right; z-index:100; cursor:pointer; top:0; right:0;" id="piePLAButton" title="Create a Parking Lot Area for this Place"><i class="fa fa-product-hunt fa-lg" aria-hidden="true"></i></div>'
                );
                $("#venue-edit-general > form > div:nth-child(1) > div:nth-child(2) > label").after($PLAButton);

                $("#piePLAButton").on("click", () => {
                    if (!BusinessPLAMode) {
                        BusinessPLAMode = true;
                        const selected = sdk.Editing.getSelection();
                        if(selected?.objectType !== "venue") return;
                        const selectedVenue = sdk.DataModel.Venues.getById({venueId: selected.ids[0]});
                        if(selectedVenue !== null) {
                            businessPLAPlaceName = selectedVenue.name;
                            businessPLAPlaceAddress = selectedVenue.address;
                            //businessPLAPlacePhone = WazeWrap.getSelectedFeatures()[0].attributes.repositoryObject.attributes.phone;
                            //businessPLAPlaceURL = WazeWrap.getSelectedFeatures()[0].attributes.repositoryObject.attributes.url;
                            startBusinessPLAPlacementMode();
                            if (!$("#layer-switcher-item_parking_places").prop("checked")) {
                                if (!$("#layer-switcher-group_places").prop("checked"))
                                    $("#layer-switcher-group_places").trigger("click");
                                $("#layer-switcher-item_parking_places").trigger("click");
                            }
                        }
                    }
                });
            }
        }
    }

    let extProviderTries = 0;
    function ShowExternalProviderTooltip() {
        if (isChecked("_cbShowExternalProviderTooltip")) {
            const selected = sdk.Editing.getSelection();
            if (selected?.objectType === "venue") {
                if ($(".select2-container.uuid").length > 0)
                    for (let i = 0; i < $(".select2-container.uuid").find("span.select2-chosen").length; i++) {
                        extProviderTries = 0;
                        ReadExtProviderText(i, extProviderTries);
                    }
            }
        }
    }

    let calibratingAngledWidth = false;
    // Function used in LaneTools.
    // Waiting for Element to Be Loaded, which is necessary due to shadowRoot delayed rendering.
    function waitForElementLoaded(selector, root = undefined) {
        return new Promise((resolve) => {
            if (!root) {
                if (document.querySelector(selector)) {
                    return resolve(document.querySelector(selector));
                }

                const observer = new MutationObserver((_mutations) => {
                    if (document.querySelector(selector)) {
                        observer.disconnect();
                        resolve(document.querySelector(selector));
                    }
                });

                observer.observe(document.body, {
                    childList: true,
                    subtree: true,
                });
            } else {
                if (root.querySelector(selector)) {
                    return resolve(root.querySelector(selector));
                }

                const observer = new MutationObserver((_mutations) => {
                    if (root.querySelector(selector)) {
                        observer.disconnect();
                        resolve(root.querySelector(selector));
                    }
                });

                observer.observe(root, {
                    childList: true,
                    subtree: true,
                });
            }
        });
    }

    function ShowPLSpotEstimatorButton() {
        $(".PIEParkingSpotEstimatorButton").remove();

        const selected = sdk.Editing.getSelection();
        if (selected !== null) {
            if (selected.objectType === "venue") {
                const venue = sdk.DataModel.Venues.getById({ venueId: selected.ids[0] });
                if (venue?.categories.includes("PARKING_LOT")) {
                    // let $ParkingSpotEstimatorButton;
                    const $ParkingSpotEstimatorButton = $(
                        `<div style="font-size:18px; float:right; z-index:100; cursor: pointer; top:0; right:0; margin-left:1px; margin-right:1px;" class="PIEParkingSpotEstimatorButton" title="${I18n.t(
                            "pie.prefs.PSEDisplayButtonTitle"
                        )}">#</div>`
                    );
                    $("#venue-edit-general > form > div:nth-child(1) > div:nth-child(2) > label").after(
                        $ParkingSpotEstimatorButton
                    );

                    waitForElementLoaded('wz-select[name="estimatedNumberOfSpots"]').then(() => {
                        $('wz-select[name="estimatedNumberOfSpots"]').before($ParkingSpotEstimatorButton.clone());
                        $(".PIEParkingSpotEstimatorButton").on("click", ShowPLSpotEstimator);
                    });

                    totalSpots = 0;
                }
            }
        } else {
            if (savedSelectedVenue === null) {
                $("#PIEParkingSpotEstimator").remove(); //if they de-select the Place, remove the tool from the screen
            }
        }
    }

    function startPLSpotEstimatorDrawMode() {
        // const polyDrawFeatureOptions = { callbacks: { done: PLSpotEstimatorDoneHandler, point: pointHandler } };
        sdk.Map.setLayerZIndex({ layerName: layerConfig.PIEPLSpotEstimatorLayer.layerName, zIndex: 3001 });
        // PLSpotEstimatorLayer.setZIndex(1000);
        // PLSpotEstimatordrawControl = new OpenLayers.Control.DrawFeature(
        //     PLSpotEstimatorLayer,
        //     OpenLayers.Handler.Path,
        //     polyDrawFeatureOptions
        // );
        // W.map.addControl(PLSpotEstimatordrawControl);
        // PLSpotEstimatordrawControl.activate();
        sdk.Map.drawLine().then((ls) => {
            sdk.Editing.setSelection({ selection: { ids: [savedSelectedVenue.id], objectType: "venue" } });
            PLSpotEstimatorDoneHandler(ls);
            savedSelectedVenue = null;
        });

        $("div#WazeMap.view-area.olMap").on("keydown", PLSpotEstimatorkeyUpHandler);
    }

    function startPLSpotEstimatorCalibrationMode() {
        // const polyDrawFeatureOptions = {
        //     callbacks: { done: PLSpotEstimatorCalibrationdoneHandler, point: pointHandler },
        // };
        // W.map.addLayer(PLSpotEstimatorCalibrationLayer);
        // PLSpotEstimatorCalibrationLayer.setZIndex(1005);
        // sdk.Map.addLayer({layerName: layerConfig.PIEPLSpotEstimatorCalibrationLayer.layerName, styleContext: styleConfig.styleContext, styleRules: styleConfig.styleRules, zIndex: 3005});
        sdk.Map.setLayerZIndex({ layerName: layerConfig.PIEPLSpotEstimatorCalibrationLayer.layerName, zIndex: 3005 });
        sdk.Map.drawLine().then((ls) => {
            sdk.Editing.setSelection({ selection: { ids: [savedSelectedVenue.id], objectType: "venue" } });
            PLSpotEstimatorCalibrationdoneHandler(ls);
            savedSelectedVenue = null;
        });
        // PLSpotEstimatorCalibrationdrawControl = new OpenLayers.Control.DrawFeature(
        //     PLSpotEstimatorCalibrationLayer,
        //     OpenLayers.Handler.Path,
        //     polyDrawFeatureOptions
        // );
        // W.map.addControl(PLSpotEstimatorCalibrationdrawControl);
        // PLSpotEstimatorCalibrationdrawControl.activate();

        $("div#WazeMap.view-area.olMap").keydown(PLSpotEstimatorCalibrationkeyUpHandler);
    }

    // function pointHandler() {
    //     isDrawing = true;
    // }

    function PLSpotEstimatorkeyUpHandler(e) {
        if (e.keyCode === 27) {
            if (isDrawing) {
                PLSpotEstimatordrawControl.cancel();
                isDrawing = false;
            } else {
                disablePLSpotEstimatorDrawMode();
                if (PLSpotEstimatordrawControl !== "undefined") PLSpotEstimatordrawControl.destroy();
                $("#PIE90DegreeSpotWidthDraw").removeClass("PSESelected");
                $("#PIEAngledSpotWidthDraw").removeClass("PSESelected");
            }
            e.stopPropagation();
        } else if (e.keyCode === 90 && e.ctrlKey)
            //ctrl+z
            PLSpotEstimatordrawControl.undo();
        else if (e.keyCode === 89 && e.ctrlKey)
            //ctrl+y
            PLSpotEstimatordrawControl.redo();
        else if (e.keyCode === 13)
            //enter
            PLSpotEstimatordrawControl.finishSketch();
    }

    function PLSpotEstimatorCalibrationkeyUpHandler(e) {
        if (e.keyCode === 27) {
            //esc
            if (isDrawing) {
                PLSpotEstimatorCalibrationdrawControl.cancel();
                isDrawing = false;
            } else {
                disablePLSpotEstimatorCalibrationDrawMode();
                if (PLSpotEstimatorCalibrationdrawControl !== "undefined")
                    PLSpotEstimatorCalibrationdrawControl.destroy();
                $("#PIE90DegreeSpotWidthCalibration").removeClass("PSESelected");
                $("#PIEAngledSpotWidthCalibration").removeClass("PSESelected");
            }
            e.stopPropagation();
        } else if (e.keyCode === 90 && e.ctrlKey) PLSpotEstimatorCalibrationdrawControl.undo();
        else if (e.keyCode === 89 && e.ctrlKey) PLSpotEstimatorCalibrationdrawControl.redo();
        else if (e.keyCode === 13) PLSpotEstimatorCalibrationdrawControl.finishSketch();
    }

    function disablePLSpotEstimatorDrawMode() {
        $("#map").off("click");
        if (PLSpotEstimatordrawControl) {
            PLSpotEstimatordrawControl.deactivate();
            PLSpotEstimatordrawControl.destroy();
        }
        sdk.Map.removeAllFeatures({ layerName: layerConfig.PLSpotEstimatorLayer.layerName });
        sdk.Map.removeLayer({ layerName: layerConfig.PLSpotEstimatorLayer.layerName });
        // W.map.removeLayer(PLSpotEstimatorLayer);
        $("div#WazeMap.view-area.olMap").off("keydown");
    }

    function disablePLSpotEstimatorCalibrationDrawMode() {
        $("#map").off("click");
        if (PLSpotEstimatorCalibrationdrawControl) {
            PLSpotEstimatorCalibrationdrawControl.deactivate();
            PLSpotEstimatorCalibrationdrawControl.destroy();
        }
        sdk.Map.removeAllFeaturesFromLayer({ layerName: layerConfig.PIEPLSpotEstimatorCalibrationLayer.layerName });
        $("div#WazeMap.view-area.olMap").off("keydown");
    }

    let totalSpots = 0;
    function PLSpotEstimatorDoneHandler(geom) {
        // const style = { strokeWidth: 3, strokeColor: "#ee9900" };
        // PLSpotEstimatorLayer.addFeatures(new OpenLayers.Feature.Vector(geom, {}, style));

        const spots = Math.round(
            // WazeWrap.Geometry.calculateDistance(geom.components) /
            (turf.length(geom) * 1000) /
                ($("#PIE90DegreeSpotWidthDraw").hasClass("PSESelected")
                    ? $("#PIE90DegreeSpotWidth")[0].value
                    : $("#PIEAngledSpotWidth")[0].value)
        );
        totalSpots += spots;

        $("#PIEPLSpotEstimatorTotal")[0].innerText = totalSpots;

        if (totalSpots > 0) $("#PIESetParkingSpacesToPlace").prop("disabled", false);
        isDrawing = false;
    }

    function PLSpotEstimatorCalibrationdoneHandler(geom) {
        // const style = { strokeWidth: 3, strokeColor: "#00ee00" };
        sdk.Map.addFeaturesToLayer({
            layername: layerConfig.PIEPLSpotEstimatorCalibrationLayer.layerName,
            features: geom,
        }); //.addFeatures(new OpenLayers.Feature.Vector(geom,{}, style));
        let totalLength = 0;

        // PLSpotEstimatorCalibrationLayer.features.forEach((f) => {
        //     const length = Math.round(WazeWrap.Geometry.calculateDistance(f.getOLGeometry().components) * 100) / 100;
        //     totalLength += length;
        // });
        totalLength = turf.length(geom);

        if (calibratingAngledWidth) {
            $("#PIEAngledSpotWidth")[0].value = totalLength;
            settings.PLAngledSpotWidth = totalLength;
        } else {
            $("#PIE90DegreeSpotWidth")[0].value = totalLength;
            settings.PLNormalSpotWidth = totalLength;
        }
        saveSettings();

        $("#PIE90DegreeSpotWidthCalibration").removeClass("PSESelected");
        $("#PIEAngledSpotWidthCalibration").removeClass("PSESelected");

        isDrawing = false;
        disablePLSpotEstimatorCalibrationDrawMode();
    }

    function ShowPLSpotEstimator() {
        if ($("#PIEParkingSpotEstimator").length > 0) $("#PIEParkingSpotEstimator").remove();
        else {
            const selected = sdk.Editing.getSelection();
            if (selected?.objectType === "venue") {
                const venue = sdk.DataModel.Venues.getById({ venueId: selected.ids[0] });
                if (venue.categories.includes("PARKING_LOT")) {
                    // W.map.addLayer(PLSpotEstimatorLayer);
                    // PLSpotEstimatorLayer.setZIndex(1000);
                    sdk.Map.setLayerZIndex({ layerName: layerConfig.PIEPLSpotEstimatorLayer.layerName, zIndex: 3000 });
                    const $PLSpotEstimator = $("<div>");
                    $PLSpotEstimator.html(
                        [
                            '<div style="position: absolute; text-align:center; z-index:1010; background-color:white; top:30px; left:300px; border-radius:20px; border: 2px solid; width: 300px; padding-left:10px; padding-right:10px; padding-bottom:5px; " draggable="true" id="PIEParkingSpotEstimator">',
                            `<span style="font-weight:bold;">${I18n.t("pie.prefs.PSEParkingSpaceEstimator")}</span><i class="fa fa-window-close-o" aria-hidden="true" style="float:right; cursor:pointer;" id="PIECloseParkingSpotEstimator"></i>`,
                            "<hr>",
                            '<div style=" display:flex; justify-content:space-between;">',
                            `<div style="display: inline;">${I18n.t("pie.prefs.PSELayoutType")}<br/><br/>${I18n.t("pie.prefs.PSESpotWidth")}</div>`,
                            `<div style="display: inline;">${I18n.t("pie.prefs.PSE90degree")}<br/><br/><input type="text" size=2 id="PIE90DegreeSpotWidth"><button id="PIE90DegreeSpotWidthCalibration" title="Measure the width of a single 90 degree parking spot">${I18n.t("pie.prefs.PSECal")}</button><br/><button id="PIE90DegreeSpotWidthDraw" class="fa fa-pencil" title="${I18n.t("pie.prefs.PSEDraw90DegreeTitle")}"></button></div>`,
                            `<div style="display: inline;">${I18n.t("pie.prefs.PSEAngled")}<br/><br/><input type="text" size=2 id="PIEAngledSpotWidth"><button id="PIEAngledSpotWidthCalibration" title="Measure the width of a single angled degree parking spot">${I18n.t("pie.prefs.PSECal")}</button><br/><button id="PIEAngledSpotWidthDraw" class="fa fa-pencil" title="${I18n.t("pie.prefs.PSEDrawAngledTitle")}"></button></div>`,
                            "</div>",
                            "<hr>",
                            `<div>${I18n.t("pie.prefs.PSEEstimatedNumOfSpots")}<span id="PIEPLSpotEstimatorTotal" style="color:blue; padding:0px 3px; font-weight:900; font-size:1.2em;" >0</span>&emsp;<div style="display:inline-block;"><button id="PIESetParkingSpacesToPlace" disabled>${I18n.t("pie.prefs.PSESet")}</button></div></div>`,
                            "</div>",
                        ].join(" ")
                    );

                    $PLSpotEstimator.draggable();
                    $("#WazeMap").append($PLSpotEstimator.html());

                    $("#PIECloseParkingSpotEstimator").on("click", () => {
                        $("#PIEParkingSpotEstimator").remove();
                        disablePLSpotEstimatorDrawMode();
                        disablePLSpotEstimatorCalibrationDrawMode();
                        if (PLSpotEstimatordrawControl != null) PLSpotEstimatordrawControl.destroy();
                        if (PLSpotEstimatorCalibrationdrawControl != null)
                            PLSpotEstimatorCalibrationdrawControl.destroy();
                    });

                    $("#PIEParkingSpotEstimator").on("keydown", (e) => {
                        disablePLSpotEstimatorDrawMode();
                        disablePLSpotEstimatorCalibrationDrawMode();
                        if (PLSpotEstimatordrawControl != null) PLSpotEstimatordrawControl.destroy();
                        if (PLSpotEstimatorCalibrationdrawControl != null)
                            PLSpotEstimatorCalibrationdrawControl.destroy();
                        $("#PIE90DegreeSpotWidthDraw").removeClass("PSESelected");
                        $("#PIEAngledSpotWidthDraw").removeClass("PSESelected");
                        $("#PIE90DegreeSpotWidthCalibration").removeClass("PSESelected");
                        $("#PIEAngledSpotWidthCalibration").removeClass("PSESelected");
                    });
                    $("#PIE90DegreeSpotWidth")[0].value = settings.PLNormalSpotWidth;
                    $("#PIEAngledSpotWidth")[0].value = settings.PLAngledSpotWidth;

                    $("#PIESetParkingSpacesToPlace").on("click", () => {
                        let spotCount = $("#PIEPLSpotEstimatorTotal")[0].innerText;
                        if (spotCount !== "0") {
                            const selection = sdk.Editing.getSelection();
                            if (selection?.objectType === "venue") {
                                const myPlace = sdk.DataModel.Venues.getById({ venueId: selection.ids[0] });
                                // const myPlace = WazeWrap.getSelectedFeatures()[0].WW.getObjectModel();
                                // const existingAttr = myPlace.attributes.categoryAttributes.PARKING_LOT;
                                // const newAttr = {};
                                // if (existingAttr) {
                                //     for (const prop in existingAttr) {
                                //         let value = existingAttr[prop];
                                //         if (Array.isArray(value)) value = [].concat(value);
                                //         newAttr[prop] = value;
                                //     }
                                // }
                                // let spotPropValue;
                                spotCount = Number.parseInt(spotCount);
                                if (spotCount < 11) spotPropValue = "R_1_TO_10";
                                else if (spotCount < 31) spotPropValue = "R_11_TO_30";
                                else if (spotCount < 61) spotPropValue = "R_31_TO_60";
                                else if (spotCount < 101) spotPropValue = "R_61_TO_100";
                                else if (spotCount < 301) spotPropValue = "R_101_TO_300";
                                else if (spotCount < 601) spotPropValue = "R_301_TO_600";
                                else if (spotCount >= 601) spotPropValue = "R_600_PLUS";

                                // newAttr.estimatedNumberOfSpots = spotPropValue;
                                // W.model.actionManager.add(
                                //     new UpdateObject(myPlace, { categoryAttributes: { PARKING_LOT: newAttr } })
                                // );
                                $("#PIEParkingSpotEstimator").remove();
                            }
                        }
                    });
                    $("#PIE90DegreeSpotWidth").on("focusout", function () {
                        const width = $(this)[0].value;
                        if (width === "" || width === "0") $(this)[0].value = 3.44;
                        settings.PLNormalSpotWidth = width;
                        saveSettings();
                    });

                    $("#PIEAngledSpotWidth").on("focusout", function () {
                        const width = $(this)[0].value;
                        if (width === "" || width === "0") $(this)[0].value = 3;
                        settings.PLAngledSpotWidth = width;
                        saveSettings();
                    });

                    $("#PIE90DegreeSpotWidthDraw").on("click", () => {
                        if (PLSpotEstimatordrawControl?.active) {
                            PLSpotEstimatordrawControl.deactivate();
                            PLSpotEstimatordrawControl.destroy();
                            $("div#WazeMap.view-area.olMap").off("keyup");
                            $("#PIE90DegreeSpotWidthDraw").removeClass("PSESelected");
                            $("#PIEAngledSpotWidthDraw").removeClass("PSESelected");
                        } else {
                            $("#PIEAngledSpotWidthDraw").removeClass("PSESelected");
                            $("#PIE90DegreeSpotWidthCalibration").removeClass("PSESelected");
                            $("#PIEAngledSpotWidthCalibration").removeClass("PSESelected");
                            $("#PIE90DegreeSpotWidthDraw").addClass("PSESelected");
                            savedSelectedVenue = venue;
                            startPLSpotEstimatorDrawMode();
                        }
                    });

                    $("#PIEAngledSpotWidthDraw").on("click", () => {
                        if (PLSpotEstimatordrawControl?.active) {
                            PLSpotEstimatordrawControl.deactivate();
                            PLSpotEstimatordrawControl.destroy();
                            $("div#WazeMap.view-area.olMap").off("keyup");
                            $("#PIEAngledSpotWidthDraw").removeClass("PSESelected");
                            $("#PIE90DegreeSpotWidthDraw").removeClass("PSESelected");
                        } else {
                            $("#PIE90DegreeSpotWidthDraw").removeClass("PSESelected");
                            $("#PIE90DegreeSpotWidthCalibration").removeClass("PSESelected");
                            $("#PIEAngledSpotWidthCalibration").removeClass("PSESelected");
                            $("#PIEAngledSpotWidthDraw").addClass("PSESelected");
                            savedSelectedVenue = venue;
                            startPLSpotEstimatorDrawMode();
                        }
                    });

                    $("#PIE90DegreeSpotWidthCalibration").on("click", () => {
                        if (PLSpotEstimatordrawControl) {
                            PLSpotEstimatordrawControl.deactivate();
                            PLSpotEstimatordrawControl.destroy();
                            $("#PIE90DegreeSpotWidthDraw").removeClass("PSESelected");
                            $("#PIEAngledSpotWidthDraw").removeClass("PSESelected");
                        }
                        if (PLSpotEstimatorCalibrationdrawControl) {
                            PLSpotEstimatorCalibrationdrawControl.deactivate();
                            PLSpotEstimatorCalibrationdrawControl.destroy();
                            $("#PIE90DegreeSpotWidthCalibration").removeClass("PSESelected");
                            $("#PIEAngledSpotWidthCalibration").removeClass("PSESelected");
                        }
                        $("#PIE90DegreeSpotWidthCalibration").addClass("PSESelected");
                        calibratingAngledWidth = false;
                        savedSelectedVenue = venue;
                        startPLSpotEstimatorCalibrationMode();
                    });

                    $("#PIEAngledSpotWidthCalibration").on("click", () => {
                        if (PLSpotEstimatordrawControl) {
                            PLSpotEstimatordrawControl.deactivate();
                            PLSpotEstimatordrawControl.destroy();
                            $("#PIE90DegreeSpotWidthDraw").removeClass("PSESelected");
                            $("#PIEAngledSpotWidthDraw").removeClass("PSESelected");
                        }
                        if (PLSpotEstimatorCalibrationdrawControl) {
                            PLSpotEstimatorCalibrationdrawControl.deactivate();
                            PLSpotEstimatorCalibrationdrawControl.destroy();
                            $("#PIE90DegreeSpotWidthCalibration").removeClass("PSESelected");
                            $("#PIEAngledSpotWidthCalibration").removeClass("PSESelected");
                        }
                        $("#PIEAngledSpotWidthCalibration").addClass("PSESelected");
                        calibratingAngledWidth = true;
                        startPLSpotEstimatorCalibrationMode();
                    });
                }
            } else {
                disablePLSpotEstimatorDrawMode();
                disablePLSpotEstimatorCalibrationDrawMode();
            }
        }
    }

    function ReadExtProviderText(index, extProviderTries) {
        const providersList = $(".select2-container.uuid").find("span.select2-chosen");
        if (
            $(".select2-container.uuid").find("span.select2-chosen")[index].innerHTML === "&nbsp;" &&
            extProviderTries <= 20
        )
            setTimeout(() => {
                ReadExtProviderText(index, extProviderTries + 1);
            }, 50);
        else {
            if ($(`#${providersList[index].id}`).parent().parent().data("original-title") == null) {
                $(`#${providersList[index].id}`)
                    .parent()
                    .parent()
                    .attr("title", $(".select2-container.uuid").find("span.select2-chosen")[index].innerText);
                $(`#${providersList[index].id}`).parent().parent().tooltip();
            } else
                $(`#${providersList[index].id}`)
                    .parent()
                    .parent()
                    .attr(
                        "data-original-title",
                        $(".select2-container.uuid").find("span.select2-chosen")[index].innerText
                    );
        }
    }

    function ShowCopyPlaceButton() {
        $("#pieCopyPlaceButton").remove();

        const selected = sdk.Editing.getSelection();
        if (selected?.objectType === "venue") {
            //WazeWrap.getSelectedFeatures()[0].attributes.repositoryObject.attributes.id.match(/(\d+\.){2}\d+/)
            // if (WazeWrap.getSelectedFeatures()[0].WW.getType() === "venue") {
            // && (typeof WazeWrap.getSelectedFeatures()[0].attributes.repositoryObject.attributes.id === "string")){ //id is only a string if the Place has been saved - don't allow copying unsaved Places
            let $PlaceCopyButton;
            const venue = sdk.DataModel.Venues.getById({ venueId: selected.ids[0] });
            if (
                !venue.categories.includes("RESIDENCE")
                // !_.includes(
                //     WazeWrap.getSelectedFeatures()[0].WW.getObjectModel().attributes.categories,
                //     "RESIDENCE_HOME"
                // )
            ) {
                $PlaceCopyButton = $(
                    '<div style="float:right; z-index:100; cursor:pointer; position: absolute; top:0; right:0; margin-left:1px; margin-right:1px;" id="pieCopyPlaceButton" title="Creates a copy of this Place"><i class="fa fa-files-o fa-lg" aria-hidden="true"></i></div>'
                );
                waitForElementLoaded('#venue-edit-general wz-text-input[name="name"]').then(() => {
                    $('#venue-edit-general wz-text-input[name="name"]').before($PlaceCopyButton);

                    $("#pieCopyPlaceButton").on("click", () => {
                        // const PlaceObject = require("Waze/Feature/Vector/Landmark");
                        // const AddPlace = require("Waze/Action/AddLandmark");

                        // const oldPlace = WazeWrap.getSelectedFeatures()[0].WW.getObjectModel();
                        const oldPlace = venue;

                        const newVenue = {
                            aliases: structuredClone(oldPlace.aliases),
                            name: `${oldPlace.name} copy`,
                            categories: structuredClone(oldPlace.categories),
                            openingHours: oldPlace.openingHours,
                            phone: oldPlace.phone,
                            services: oldPlace.services,
                            url: oldPlace.url,
                            venueId: null,
                        };
                        const oldAddress = sdk.DataModel.Venues.getAddress({ venueId: oldPlace.id });
                        const newVenueAddress = {
                            houseNumber: oldAddress.houseNumber,
                            streetId: oldAddress.street?.id,
                            venueId: null,
                        };
                        // NewPlace.attributes.name = `${oldPlace.attributes.name} (copy)`;
                        // NewPlace.attributes.phone = oldPlace.attributes.phone;
                        // NewPlace.attributes.url = oldPlace.attributes.url;
                        // NewPlace.attributes.categories = [].concat(oldPlace.attributes.categories);
                        // NewPlace.attributes.aliases = [].concat(oldPlace.attributes.aliases);
                        // NewPlace.attributes.description = oldPlace.attributes.description;
                        // NewPlace.attributes.houseNumber = oldPlace.attributes.houseNumber;
                        // NewPlace.attributes.lockRank = oldPlace.attributes.lockRank;

                        let newPlace;
                        if (oldPlace.geometry.type === "Polygon") {
                            let newCoordinates = structuredClone(oldPlace.geometry.coordinates).map((pos) => {
                                return structuredClone(pos);
                            });
                            newCoordinates = newCoordinates.map((outerPos) => {
                                return outerPos.map((pos) => {
                                    return [
                                        pos[0] + WazeWrap.Geometry.CalculateLongOffsetGPS(5, pos[0], pos[1]),
                                        pos[1],
                                    ];
                                });
                            });
                            newPlace = sdk.DataModel.Venues.addVenue({
                                category: oldPlace.categories[0],
                                geometry: turf.polygon(newCoordinates).geometry,
                            });
                        } else {
                            // convertedCoords = WazeWrap.Geometry.ConvertTo4326(
                            //     oldPlace.getOLGeometry().x,
                            //     oldPlace.getOLGeometry().y
                            // );
                            const newCoordinates = structuredClone(oldPlace.geometry.coordinates);
                            newCoordinates[0] += WazeWrap.Geometry.CalculateLongOffsetGPS(
                                5,
                                newCoordinates[0],
                                newCoordinates[1]
                            );
                            newPlace = sdk.DataModel.Venues.addVenue({
                                category: oldPlace.categories[0],
                                geometry: turf.point(newCoordinates).geometry,
                            });
                        }

                        newVenueAddress.venueId = newPlace.toString();
                        newVenue.venueId = newPlace.toString();
                        sdk.DataModel.Venues.updateAddress(newVenueAddress);
                        sdk.DataModel.Venues.updateVenue(newVenue);

                        // NewPlace.attributes.services = [].concat(oldPlace.attributes.services);
                        // NewPlace.attributes.openingHours = [].concat(oldPlace.attributes.openingHours);
                        // NewPlace.attributes.streetID = oldPlace.attributes.streetID;

                        const newlyAddedVenue = sdk.DataModel.Venues.getById({ venueId: newPlace.toString() });
                        if (newlyAddedVenue.categories.includes("GAS_STATION"))
                            NewPlace.attributes.brand = oldPlace.attributes.brand;

                        if (newlyAddedVenue.categories.includes("PARKING_LOT")) {
                            NewPlace.attributes.categoryAttributes.PARKING_LOT = {};
                            const PLAttribute = oldPlace.attributes.categoryAttributes.PARKING_LOT;
                            if (PLAttribute.lotType != null)
                                NewPlace.attributes.categoryAttributes.PARKING_LOT.lotType = [].concat(
                                    oldPlace.attributes.categoryAttributes.PARKING_LOT.lotType
                                );
                            if (PLAttribute.canExitWhileClosed != null)
                                NewPlace.attributes.categoryAttributes.PARKING_LOT.canExitWhileClosed =
                                    oldPlace.attributes.categoryAttributes.PARKING_LOT.canExitWhileClosed;
                            if (PLAttribute.costType != null)
                                NewPlace.attributes.categoryAttributes.PARKING_LOT.costType =
                                    oldPlace.attributes.categoryAttributes.PARKING_LOT.costType;
                            if (PLAttribute.estimatedNumberOfSpots != null)
                                NewPlace.attributes.categoryAttributes.PARKING_LOT.estimatedNumberOfSpots =
                                    oldPlace.attributes.categoryAttributes.PARKING_LOT.estimatedNumberOfSpots;
                            if (PLAttribute.hasTBR != null)
                                NewPlace.attributes.categoryAttributes.PARKING_LOT.hasTBR =
                                    oldPlace.attributes.categoryAttributes.PARKING_LOT.hasTBR;
                            if (PLAttribute.lotType != null)
                                NewPlace.attributes.categoryAttributes.PARKING_LOT.lotType = [].concat(
                                    oldPlace.attributes.categoryAttributes.PARKING_LOT.lotType
                                );
                            if (PLAttribute.parkingType != null)
                                NewPlace.attributes.categoryAttributes.PARKING_LOT.parkingType =
                                    oldPlace.attributes.categoryAttributes.PARKING_LOT.parkingType;
                            if (PLAttribute.paymentType != null)
                                NewPlace.attributes.categoryAttributes.PARKING_LOT.paymentType = [].concat(
                                    oldPlace.attributes.categoryAttributes.PARKING_LOT.paymentType
                                );
                        }

                        // W.model.actionManager.add(new AddPlace(NewPlace));

                        // let newAttributes,
                        //     UpdateFeatureAddress = require("Waze/Action/UpdateFeatureAddress"),
                        //     address = oldPlace.getAddress();
                        // const multiaction = new MultiAction();

                        // newAttributes = {
                        //     countryID: address.attributes.country.id,
                        //     stateID: address.attributes.state.id,
                        //     emptyCity: address.attributes.city.attributes.name ? null : true,
                        //     emptyStreet: address.attributes.street.name ? null : true,
                        // };

                        // newAttributes.streetName = address.attributes.street.name;
                        // const cityName = address.attributes.city.attributes.name;

                        // if (cityName !== "") newAttributes.emptyCity = null;
                        // newAttributes.cityName = cityName;

                        // const UFA = new UpdateFeatureAddress(NewPlace, newAttributes);
                        // UFA.options.updateHouseNumber = true;
                        // multiaction.doSubAction(W.model, UFA);
                        // W.model.actionManager.add(multiaction);
                        // W.selectionManager.setSelectedModels([NewPlace]);
                    });
                });
            }
        }
    }

    function ShowSearchButton() {
        $("#pieSearchButton").remove();
        if (WazeWrap.hasPlaceSelected()) {
            const $search = $(
                '<i class="fa fa-search" id="pieSearchButton" title="Fills the search bar with the address" aria-hidden="true" style="display:inline; margin:5px;"></i>'
            );

            $(".address-edit-view").parent().parent().find("wz-label").append($search);
            $("#pieSearchButton").on("click", () => {
                let address = $(".full-address")[0].innerHTML;
                const noCity = I18n.translations[I18n.currentLocale()].edit.address.no_city;
                const noStreet = I18n.translations[I18n.currentLocale()].edit.address.no_street;

                address = address.replace(`${noCity},`, "");
                if (address !== I18n.translations[I18n.currentLocale()].edit.venue.no_address)
                    $(".search-query")[0].value = address;
            });
        }
    }

    function ShowClearDescription() {
        setTimeout(() => {
            $("div.description-control").append(
                '<i class="fa fa-times-circle clearButton" style="position:absolute; top:0; right:0;"></i>'
            );
            $("div.description-control").css("position", "relative");
            $(".clearButton").on("click", () => {
                const selected = sdk.Editing.getSelection();
                if (selected?.objectType === "venue") {
                    sdk.DataModel.Venues.updateVenue({ description: "" });
                }
            });
        }, 0);
    }

    function MoveAddress() {
        if (WazeWrap.hasPlaceSelected()) $("#venue-edit-general").prepend($(".address-edit.side-panel-section"));
    }

    //     function MoveHNEntry(){
    //         if(WazeWrap.hasPlaceSelected()){
    //             let move = function(){
    //                 delayFire(200, function(){$('.street-name').parent().parent().before($('wz-text-input.house-number').parent())});
    //             };
    //             $('.address-edit-view').click(move);
    //         }
    //     }

    function AddMakePrimaryButtons() {
        const selected = sdk.Editing.getSelection();
        if (selected?.objectType === "venue") {
            waitForElementLoaded("div.alias-item-content").then(() => {
                const $button = $("<div>", { class: "makePrimary" })
                    .text("Make primary")
                    .on("click", function () {
                        const selected = sdk.Editing.getSelection();
                        if(selected?.objectType !== "venue") return;
                        const selectedVenue = sdk.DataModel.Venues.getById({venueId: selected.ids[0]});
                        if(selectedVenue === null) return;
                        const toPrimary = $(this).parent().parent().find(".alias-item-content").text();
                        const aliases = selectedVenue.aliases.filter((i) => i !== toPrimary);
                        aliases.push(selectedVenue.name);
                        // const multiaction = new MultiAction();
                        // multiaction.doSubAction(W.model, new UpdateObject(obj, { aliases: aliases }));
                        // multiaction.doSubAction(W.model, new UpdateObject(obj, { name: toPrimary }));
                        // W.model.actionManager.add(multiaction);
                        sdk.DataModel.Venues.updateVenue({aliases: aliases, name: toPrimary, venueId: selectedVenue.id});
                    });
                for (const aliasContent of $("div.alias-item-content")) {
                    $(aliasContent).parent().find("wz-button.alias-item-action-delete").after($button);
                }
            });
        }
    }

    async function AddPlaceCategoriesButtons() {
        $("#piePlaceCategoriesButtonsContainer").remove();
        const selected = sdk.Editing.getSelection();
        if (selected !== null) {
            await new Promise((r) => setTimeout(r, 150));
            const $container = $("<div>", { id: "piePlaceCategoriesButtonsContainer", style: "white-space: nowrap;" });
            if (selected.objectType === "venue") {
                const categoryOptions = $("[id^=pieItem]");

                let $button = $("<div>", {
                    id: "btnPlaceCatClear",
                    title: "Clear current categories",
                    style: "display:inline-block; cursor:pointer",
                }).on("click", function () {
                    onPlaceCategoriesButtonsClick(this.id);
                });

                $button.append('<span class="fa fa-times" style="font-size:20px; color:red;"></span>');
                $container.append($button);

                for (let i = 0; i < categoryOptions.length; i++) {
                    if (categoryOptions[i].selectedIndex === -1) continue;
                    const name = categoryOptions[i].options[categoryOptions[i].selectedIndex].innerHTML;
                    const icon = categoryOptions[i].options[categoryOptions[i].selectedIndex].getAttribute("data-icon");

                    const divid = `btnPlaceCat${categoryOptions[i].value}`;
                    if (categoryOptions[i].value !== resCategory && categoryOptions[i].value !== "PARKING_LOT") {
                        $button = $("<div>", {
                            class: `pie-${icon}`,
                            id: divid,
                            title: name.replace("&amp;", "&"),
                            style: "display:inline-block; cursor:pointer",
                            "data-category": categoryOptions[i].value,
                        }).on("click", function () {
                            onPlaceCategoriesButtonsClick(this.id);
                        });
                        $button.append('<span style="font-size:20px;"></span>');

                        $container.append($button);
                    }
                }
            }

            $(".categories-autocomplete").before($container);
        }
    }

    function onPlaceCategoriesButtonsClick(buttonid) {
        if (buttonid === "btnPlaceCatClear") {
            const blankCategories = []; //WazeWrap.getSelectedFeatures()[0].attributes.repositoryObject.attributes.categories.clone();
            //console.log(blankCategories.length);
            //blankCategories.splice(0, blankCategories.length);
            //console.log(blankCategories);
            W.model.actionManager.add(
                new UpdateObject(WazeWrap.getSelectedFeatures()[0].WW.getObjectModel(), { categories: blankCategories })
            );
        } else {
            const newCategories = [].concat(
                WazeWrap.getSelectedFeatures()[0].WW.getObjectModel().attributes.categories
            );
            //console.log($('#'+buttonid)[0].getAttribute("data-category"));
            newCategories.push($(`#${buttonid}`)[0].getAttribute("data-category"));
            W.model.actionManager.add(
                new UpdateObject(WazeWrap.getSelectedFeatures()[0].WW.getObjectModel(), { categories: newCategories })
            );
        }
    }

    function CenterOnPlace(zoom) {
        const selected = sdk.Editing.getSelection();
        if(selected?.objectType !== "venue") return;
        const venue = sdk.DataModel.Venues.getById({venueId: selected.ids[0]});
        if(venue === null) return;
        // var centroid = venue.getOLGeometry().getCentroid();
        const centroid = venue.geometry.type === "Point" ? venue.geometry : turf.centroid(venue.geometry);
        // W.map.setCenter([centroid.x, centroid.y], zoom);
        sdk.Map.centerMapOnGeometry({ geometry: centroid.geometry });
        sdk.Map.setZoomLevel({zoomLevel: zoom});
    }

    function isChecked(checkboxId) {
        return $(`#${checkboxId}`).is(":checked");
    }

    function setChecked(checkboxId, checked) {
        $(`#${checkboxId}`).prop("checked", checked);
    }

    function noActions() {
        setTimeout(updatePlaceSizeDisplay, 100); //have to put in a delay for when the user uses undo to clear all actions - WME updates on top of my changes otherwise.
    }

    function updatePlaceSizeDisplay() {
        const selected = sdk.Editing.getSelection();
        // const count = WazeWrap.getSelectedFeatures().length;
        let metersArea = 0;
        // const bold = false;
        if (selected?.venue === "venue") {
            // const venue = WazeWrap.getSelectedFeatures()[0];
            const venue = sdk.DataModel.Venues.getById({ venueId: selected.ids[0] });
            // const isArea = venue.geometry.toString().match(/^POLYGON/);
            //var isPoint = venue.geometry.toString().match(/^POINT/);
            const isArea = venue.geometry.type === "Polygon";

            if (isArea) {
                if ($("#AreaSize")) $("#AreaSize").remove();
                metersArea = turf.area(venue.geometry);
                // WazeWrap.getSelectedFeatures()[0].WW.getObjectModel().getOLGeometry().getGeodesicArea(W.map.getProjectionObject());

                if (metersArea > 0) {
                    const ftArea = Math.round(metersArea * 10.76391 * 100) / 100;

                    const list = $("#venue-edit-general > ul")[0];
                    const newList = document.createElement("UL");
                    newList.id = "AreaSize";

                    let newItem = document.createElement("LI");
                    if (isChecked("_cbShowAreaPlaceSizeMetric")) {
                        newItem.innerHTML = `Area: ${metersArea.toFixed(2)} m<sup>2</sup>`;
                        newList.appendChild(newItem);
                    }

                    if (isChecked("_cbShowAreaPlaceSizeImperial")) {
                        newItem = document.createElement("LI");
                        newItem.innerHTML = `Area: ${ftArea.toFixed(2)} ft<sup>2</sup>`;
                        newList.appendChild(newItem);
                    }
                    if (metersArea < 500) {
                        newItem = document.createElement("LI");
                        newItem.innerHTML =
                            "<span style='color:red; font-weight:bold;'>Places smaller than 500 m<sup>2</sup>/5382 ft<sup>2</sup> will not show in the client</span>";
                        newList.appendChild(newItem);
                    }
                    if (metersArea > 20000) {
                        newItem = document.createElement("LI");
                        newItem.innerHTML =
                            "<span style='color:red; font-weight:bold;'>Places larger than 20000 m<sup>2</sup>/215278.2 ft<sup>2</sup> will <i>always</i> show in the client</span>";
                        newList.appendChild(newItem);
                    }
                    if (list.before != null) list.before(newList);
                    else {
                        const parent = $("#venue-edit-general > ul")[0].parentNode;
                        parent.insertBefore(newList, $("#venue-edit-general > ul")[0]);
                    }

                    $("#AreaSize").addClass("list-unstyled");
                    $("#AreaSize").addClass("additional-attributes");
                }
            }
        }
    }

    const getPermalink = (currPl) => {
        let adjustedPL = currPl.substr(currPl.lastIndexOf("editor")).replace(/&[^&]*Filter=[^&]*|&s=(\d+)/gi, "");
        const lon = adjustedPL.match(/lon=(-?\d+\.\d+)/)[1];
        const lat = adjustedPL.match(/lat=(-?\d+\.\d+)/)[1];
        const zoom = adjustedPL.match(/zoom[Levl]*=\d+/)[0];
        const centroid = WazeWrap.getSelectedFeatures()[0].WW.getObjectModel().getOLGeometry().getCentroid();
        adjustedPL = adjustedPL.replace(lon, WazeWrap.Geometry.ConvertTo4326(centroid.x, centroid.y).lon);
        adjustedPL = adjustedPL.replace(lat, WazeWrap.Geometry.ConvertTo4326(centroid.x, centroid.y).lat);
        adjustedPL = adjustedPL.replace(zoom, `zoomLevel=${settings.PlaceZoom}`);
        if (settings.PlaceLocatorCrosshairProdPL) return `https://www.waze.com/${adjustedPL}`;
        return `${location.origin}/${adjustedPL}`;
    };

    const copyToClipboard = (str) => {
        const $temp = $("<input>");
        $("body").append($temp);
        $temp.val(str).select();
        document.execCommand("copy");
        $temp.remove();
    };

    function buildItemList(itemNumber) {
        const $places = $("<div>");
        function _getCategorySubCategoryOptions() {
            const mainCategories = new Map();
            const res = [];
            const venueCategories = sdk.DataModel.Venues.getVenueMainCategories();
            for (const vc of venueCategories) {
                mainCategories.set(vc.id, { localizedName: vc.localizedName, processed: false });
            }
            const venueSubCategories = sdk.DataModel.Venues.getVenueSubCategories();
            for (const vsc of venueSubCategories) {
                const mc = mainCategories.get(vsc.categoryId);
                if (mc !== null) {
                    if (!mc.processed) {
                        res.push(
                            `<option value="${vsc.categoryId}" data-icon="${vsc.categoryId
                                .toLowerCase()
                                .replace("_", "-")}" style="font-weight:bold;">${mc.localizedName}</option>`
                        );
                        mc.processed = true;
                    }
                    res.push(
                        `<option value="${vsc.subCategoryId}" data-icon="${vsc.categoryId
                            .toLowerCase()
                            .replace("_", "-")}" style="font-weight:bold;">${vsc.localizedName}</option>`
                    );
                }
            }
            return res;
        }
        categories = _getCategorySubCategoryOptions();
        const htmlItems = [`<select id="pieItem${itemNumber}">`];
        htmlItems.push(...categories);
        htmlItems.push("</select>");
        // $places.html(
        //     [
        //         `<select id="pieItem${itemNumber}">`,
        //         `<option value="CAR_SERVICES" data-icon="car-services" style="font-weight:bold;">${
        //             I18n.translations[I18n.currentLocale()].venues.categories.CAR_SERVICES
        //         }</option>`,
        //         `<option value="GAS_STATION" data-icon="car-services">${
        //             I18n.translations[I18n.currentLocale()].venues.categories.GAS_STATION
        //         }</option>`,
        //         `<option value="GARAGE_AUTOMOTIVE_SHOP" data-icon="car-services">${
        //             I18n.translations[I18n.currentLocale()].venues.categories.GARAGE_AUTOMOTIVE_SHOP
        //         }</option>`,
        //         `<option value="CAR_WASH" data-icon="car-services">${
        //             I18n.translations[I18n.currentLocale()].venues.categories.CAR_WASH
        //         }</option>`,
        //         `<option value="CHARGING_STATION" data-icon="car-services">${
        //             I18n.translations[I18n.currentLocale()].venues.categories.CHARGING_STATION
        //         }</option>`,
        //         `<option value="TRANSPORTATION" data-icon="transportation" style="font-weight:bold;">${
        //             I18n.translations[I18n.currentLocale()].venues.categories.TRANSPORTATION
        //         }</option>`,
        //         `<option value="AIRPORT" data-icon="transportation">${
        //             I18n.translations[I18n.currentLocale()].venues.categories.AIRPORT
        //         }</option>`,
        //         `<option value="BUS_STATION" data-icon="transportation">${
        //             I18n.translations[I18n.currentLocale()].venues.categories.BUS_STATION
        //         }</option>`,
        //         `<option value="FERRY_PIER" data-icon="transportation">${
        //             I18n.translations[I18n.currentLocale()].venues.categories.FERRY_PIER
        //         }</option>`,
        //         `<option value="SEAPORT_MARINA_HARBOR" data-icon="transportation">${
        //             I18n.translations[I18n.currentLocale()].venues.categories.SEAPORT_MARINA_HARBOR
        //         }</option>`,
        //         `<option value="SUBWAY_STATION" data-icon="transportation">${
        //             I18n.translations[I18n.currentLocale()].venues.categories.SUBWAY_STATION
        //         }</option>`,
        //         `<option value="TRAIN_STATION" data-icon="transportation">${
        //             I18n.translations[I18n.currentLocale()].venues.categories.TRAIN_STATION
        //         }</option>`,
        //         `<option value="BRIDGE" data-icon="transportation">${
        //             I18n.translations[I18n.currentLocale()].venues.categories.BRIDGE
        //         }</option>`,
        //         `<option value="TUNNEL" data-icon="transportation">${
        //             I18n.translations[I18n.currentLocale()].venues.categories.TUNNEL
        //         }</option>`,
        //         `<option value="TAXI_STATION" data-icon="transportation">${
        //             I18n.translations[I18n.currentLocale()].venues.categories.TAXI_STATION
        //         }</option>`,
        //         `<option value="JUNCTION_INTERCHANGE" data-icon="transportation">${
        //             I18n.translations[I18n.currentLocale()].venues.categories.JUNCTION_INTERCHANGE
        //         }</option>`,
        //         `<option value="PROFESSIONAL_AND_PUBLIC" data-icon="professional-and-public" style="font-weight:bold;">${
        //             I18n.translations[I18n.currentLocale()].venues.categories.PROFESSIONAL_AND_PUBLIC
        //         }</option>`,
        //         `<option value="COLLEGE_UNIVERSITY" data-icon="professional-and-public">${
        //             I18n.translations[I18n.currentLocale()].venues.categories.COLLEGE_UNIVERSITY
        //         }</option>`,
        //         `<option value="SCHOOL" data-icon="professional-and-public">${
        //             I18n.translations[I18n.currentLocale()].venues.categories.SCHOOL
        //         }</option>`,
        //         `<option value="CONVENTIONS_EVENT_CENTER" data-icon="professional-and-public">${
        //             I18n.translations[I18n.currentLocale()].venues.categories.CONVENTIONS_EVENT_CENTER
        //         }</option>`,
        //         `<option value="GOVERNMENT" data-icon="professional-and-public">${
        //             I18n.translations[I18n.currentLocale()].venues.categories.GOVERNMENT
        //         }</option>`,
        //         `<option value="LIBRARY" data-icon="professional-and-public">${
        //             I18n.translations[I18n.currentLocale()].venues.categories.LIBRARY
        //         }</option>`,
        //         `<option value="CITY_HALL" data-icon="professional-and-public">${
        //             I18n.translations[I18n.currentLocale()].venues.categories.CITY_HALL
        //         }</option>`,
        //         `<option value="ORGANIZATION_OR_ASSOCIATION" data-icon="professional-and-public">${
        //             I18n.translations[I18n.currentLocale()].venues.categories.ORGANIZATION_OR_ASSOCIATION
        //         }</option>`,
        //         `<option value="PRISON_CORRECTIONAL_FACILITY" data-icon="professional-and-public">${
        //             I18n.translations[I18n.currentLocale()].venues.categories.PRISON_CORRECTIONAL_FACILITY
        //         }</option>`,
        //         `<option value="COURTHOUSE" data-icon="professional-and-public">${
        //             I18n.translations[I18n.currentLocale()].venues.categories.COURTHOUSE
        //         }</option>`,
        //         `<option value="CEMETERY" data-icon="professional-and-public">${
        //             I18n.translations[I18n.currentLocale()].venues.categories.CEMETERY
        //         }</option>`,
        //         `<option value="FIRE_DEPARTMENT" data-icon="professional-and-public">${
        //             I18n.translations[I18n.currentLocale()].venues.categories.FIRE_DEPARTMENT
        //         }</option>`,
        //         `<option value="POLICE_STATION" data-icon="professional-and-public">${
        //             I18n.translations[I18n.currentLocale()].venues.categories.POLICE_STATION
        //         }</option>`,
        //         `<option value="MILITARY" data-icon="professional-and-public">${
        //             I18n.translations[I18n.currentLocale()].venues.categories.MILITARY
        //         }</option>`,
        //         `<option value="HOSPITAL_URGENT_CARE" data-icon="professional-and-public">${
        //             I18n.translations[I18n.currentLocale()].venues.categories.HOSPITAL_URGENT_CARE
        //         }</option>`,
        //         `<option value="DOCTOR_CLINIC" data-icon="professional-and-public">${
        //             I18n.translations[I18n.currentLocale()].venues.categories.DOCTOR_CLINIC
        //         }</option>`,
        //         `<option value="OFFICES" data-icon="professional-and-public">${
        //             I18n.translations[I18n.currentLocale()].venues.categories.OFFICES
        //         }</option>`,
        //         `<option value="POST_OFFICE" data-icon="professional-and-public">${
        //             I18n.translations[I18n.currentLocale()].venues.categories.POST_OFFICE
        //         }</option>`,
        //         `<option value="RELIGIOUS_CENTER" data-icon="professional-and-public">${
        //             I18n.translations[I18n.currentLocale()].venues.categories.RELIGIOUS_CENTER
        //         }</option>`,
        //         `<option value="KINDERGARTEN" data-icon="professional-and-public">${
        //             I18n.translations[I18n.currentLocale()].venues.categories.KINDERGARDEN
        //         }</option>`,
        //         `<option value="FACTORY_INDUSTRIAL" data-icon="professional-and-public">${
        //             I18n.translations[I18n.currentLocale()].venues.categories.FACTORY_INDUSTRIAL
        //         }</option>`,
        //         `<option value="EMBASSY_CONSULATE" data-icon="professional-and-public">${
        //             I18n.translations[I18n.currentLocale()].venues.categories.EMBASSY_CONSULATE
        //         }</option>`,
        //         `<option value="INFORMATION_POINT" data-icon="professional-and-public">${
        //             I18n.translations[I18n.currentLocale()].venues.categories.INFORMATION_POINT
        //         }</option>`,
        //         `<option value="EMERGENCY_SHELTER" data-icon="professional-and-public">${
        //             I18n.translations[I18n.currentLocale()].venues.categories.EMERGENCY_SHELTER
        //         }</option>`,
        //         `<option value="SHOPPING_AND_SERVICES" data-icon="shopping-and-services" style="font-weight:bold;">${
        //             I18n.translations[I18n.currentLocale()].venues.categories.SHOPPING_AND_SERVICES
        //         }</option>`,
        //         `<option value="ARTS_AND_CRAFTS" data-icon="shopping-and-services">${
        //             I18n.translations[I18n.currentLocale()].venues.categories.ARTS_AND_CRAFTS
        //         }</option>`,
        //         `<option value="BANK_FINANCIAL" data-icon="shopping-and-services">${
        //             I18n.translations[I18n.currentLocale()].venues.categories.BANK_FINANCIAL
        //         }</option>`,
        //         `<option value="SPORTING_GOODS" data-icon="shopping-and-services">${
        //             I18n.translations[I18n.currentLocale()].venues.categories.SPORTING_GOODS
        //         }</option>`,
        //         `<option value="BOOKSTORE" data-icon="shopping-and-services">${
        //             I18n.translations[I18n.currentLocale()].venues.categories.BOOKSTORE
        //         }</option>`,
        //         `<option value="PHOTOGRAPHY" data-icon="shopping-and-services">${
        //             I18n.translations[I18n.currentLocale()].venues.categories.PHOTOGRAPHY
        //         }</option>`,
        //         `<option value="CAR_DEALERSHIP" data-icon="shopping-and-services">${
        //             I18n.translations[I18n.currentLocale()].venues.categories.CAR_DEALERSHIP
        //         }</option>`,
        //         `<option value="FASHION_AND_CLOTHING" data-icon="shopping-and-services">${I18n.translations[I18n.currentLocale()].venues.categories.FASHION_AND_CLOTHING}</option>`,
        //         `<option value="CONVENIENCE_STORE" data-icon="shopping-and-services">${I18n.translations[I18n.currentLocale()].venues.categories.CONVENIENCE_STORE}</option>`,
        //         `<option value="PERSONAL_CARE" data-icon="shopping-and-services">${I18n.translations[I18n.currentLocale()].venues.categories.PERSONAL_CARE}</option>`,
        //         `<option value="DEPARTMENT_STORE" data-icon="shopping-and-services">${I18n.translations[I18n.currentLocale()].venues.categories.DEPARTMENT_STORE}</option>`,
        //         `<option value="PHARMACY" data-icon="shopping-and-services">${I18n.translations[I18n.currentLocale()].venues.categories.PHARMACY}</option>`,
        //         `<option value="ELECTRONICS" data-icon="shopping-and-services">${I18n.translations[I18n.currentLocale()].venues.categories.ELECTRONICS}</option>`,
        //         `<option value="FLOWERS" data-icon="shopping-and-services">${I18n.translations[I18n.currentLocale()].venues.categories.FLOWERS}</option>`,
        //         `<option value="FURNITURE_HOME_STORE" data-icon="shopping-and-services">${I18n.translations[I18n.currentLocale()].venues.categories.FURNITURE_HOME_STORE}</option>`,
        //         `<option value="GIFTS" data-icon="shopping-and-services">${I18n.translations[I18n.currentLocale()].venues.categories.GIFTS}</option>`,
        //         `<option value="GYM_FITNESS" data-icon="shopping-and-services">${
        //             I18n.translations[I18n.currentLocale()].venues.categories.GYM_FITNESS
        //         }</option>`,
        //         `<option value="SWIMMING_POOL" data-icon="shopping-and-services">${I18n.translations[I18n.currentLocale()].venues.categories.SWIMMING_POOL}</option>`,
        //         `<option value="HARDWARE_STORE" data-icon="shopping-and-services">${I18n.translations[I18n.currentLocale()].venues.categories.HARDWARE_STORE}</option>`,
        //         `<option value="MARKET" data-icon="shopping-and-services">${I18n.translations[I18n.currentLocale()].venues.categories.MARKET}</option>`,
        //         `<option value="SUPERMARKET_GROCERY" data-icon="shopping-and-services">${I18n.translations[I18n.currentLocale()].venues.categories.SUPERMARKET_GROCERY}</option>`,
        //         `<option value="JEWELRY" data-icon="shopping-and-services">${I18n.translations[I18n.currentLocale()].venues.categories.JEWELRY}</option>`,
        //         `<option value="LAUNDRY_DRY_CLEAN" data-icon="shopping-and-services">${I18n.translations[I18n.currentLocale()].venues.categories.LAUNDRY_DRY_CLEAN}</option>`,
        //         `<option value="SHOPPING_CENTER" data-icon="shopping-and-services">${I18n.translations[I18n.currentLocale()].venues.categories.SHOPPING_CENTER}</option>`,
        //         `<option value="MUSIC_STORE" data-icon="shopping-and-services">${I18n.translations[I18n.currentLocale()].venues.categories.MUSIC_STORE}</option>`,
        //         `<option value="PET_STORE_VETERINARIAN_SERVICES" data-icon="shopping-and-services">${I18n.translations[I18n.currentLocale()].venues.categories.PET_STORE_VETERINARIAN_SERVICES}</option>`,
        //         `<option value="TOY_STORE" data-icon="shopping-and-services">${I18n.translations[I18n.currentLocale()].venues.categories.TOY_STORE}</option>`,
        //         `<option value="TRAVEL_AGENCY" data-icon="shopping-and-services">${I18n.translations[I18n.currentLocale()].venues.categories.TRAVEL_AGENCY}</option>`,
        //         `<option value="ATM" data-icon="shopping-and-services">${I18n.translations[I18n.currentLocale()].venues.categories.ATM}</option>`,
        //         `<option value="CURRENCY_EXCHANGE" data-icon="shopping-and-services">${I18n.translations[I18n.currentLocale()].venues.categories.CURRENCY_EXCHANGE}</option>`,
        //         `<option value="CAR_RENTAL" data-icon="shopping-and-services">${I18n.translations[I18n.currentLocale()].venues.categories.CAR_RENTAL}</option>`,
        //         `<option value="FOOD_AND_DRINK" data-icon="food-and-drink" style="font-weight:bold;">${I18n.translations[I18n.currentLocale()].venues.categories.FOOD_AND_DRINK}</option>`,
        //         `<option value="RESTAURANT" data-icon="food-and-drink">${I18n.translations[I18n.currentLocale()].venues.categories.RESTAURANT}</option>`,
        //         `<option value="BAKERY" data-icon="food-and-drink">${I18n.translations[I18n.currentLocale()].venues.categories.BAKERY}</option>`,
        //         `<option value="DESSERT" data-icon="food-and-drink">${I18n.translations[I18n.currentLocale()].venues.categories.DESSERT}</option>`,
        //         `<option value="CAFE" data-icon="food-and-drink">${I18n.translations[I18n.currentLocale()].venues.categories.CAFE}</option>`,
        //         `<option value="FAST_FOOD" data-icon="food-and-drink">${I18n.translations[I18n.currentLocale()].venues.categories.FAST_FOOD}</option>`,
        //         `<option value="FOOD_COURT" data-icon="food-and-drink">${I18n.translations[I18n.currentLocale()].venues.categories.FOOD_COURT}</option>`,
        //         `<option value="BAR" data-icon="food-and-drink">${I18n.translations[I18n.currentLocale()].venues.categories.BAR}</option>`,
        //         `<option value="ICE_CREAM" data-icon="food-and-drink">${I18n.translations[I18n.currentLocale()].venues.categories.ICE_CREAM}</option>`,
        //         `<option value="CULTURE_AND_ENTERTAINEMENT" data-icon="culture-and-entertainement" style="font-weight:bold;">${I18n.translations[I18n.currentLocale()].venues.categories.CULTURE_AND_ENTERTAINEMENT}</option>`,
        //         `<option value="ART_GALLERY" data-icon="culture-and-entertainement">${I18n.translations[I18n.currentLocale()].venues.categories.ART_GALLERY}</option>`,
        //         `<option value="CASINO" data-icon="culture-and-entertainement">${I18n.translations[I18n.currentLocale()].venues.categories.CASINO}</option>`,
        //         `<option value="CLUB" data-icon="culture-and-entertainement">${I18n.translations[I18n.currentLocale()].venues.categories.CLUB}</option>`,
        //         `<option value="TOURIST_ATTRACTION_HISTORIC_SITE" data-icon="culture-and-entertainement">${I18n.translations[I18n.currentLocale()].venues.categories.TOURIST_ATTRACTION_HISTORIC_SITE}</option>`,
        //         `<option value="MOVIE_THEATER" data-icon="culture-and-entertainement">${I18n.translations[I18n.currentLocale()].venues.categories.MOVIE_THEATER}</option>`,
        //         `<option value="MUSEUM" data-icon="culture-and-entertainement">${I18n.translations[I18n.currentLocale()].venues.categories.MUSEUM}</option>`,
        //         `<option value="MUSIC_VENUE" data-icon="culture-and-entertainement">${I18n.translations[I18n.currentLocale()].venues.categories.MUSIC_VENUE}</option>`,
        //         `<option value="PERFORMING_ARTS_VENUE" data-icon="culture-and-entertainement">${I18n.translations[I18n.currentLocale()].venues.categories.PERFORMING_ARTS_VENUE}</option>`,
        //         `<option value="GAME_CLUB" data-icon="culture-and-entertainement">${I18n.translations[I18n.currentLocale()].venues.categories.GAME_CLUB}</option>`,
        //         `<option value="STADIUM_ARENA" data-icon="culture-and-entertainement">${I18n.translations[I18n.currentLocale()].venues.categories.STADIUM_ARENA}</option>`,
        //         `<option value="THEME_PARK" data-icon="culture-and-entertainement">${I18n.translations[I18n.currentLocale()].venues.categories.THEME_PARK}</option>`,
        //         `<option value="ZOO_AQUARIUM" data-icon="culture-and-entertainement">${I18n.translations[I18n.currentLocale()].venues.categories.ZOO_AQUARIUM}</option>`,
        //         `<option value="RACING_TRACK" data-icon="culture-and-entertainement">${I18n.translations[I18n.currentLocale()].venues.categories.RACING_TRACK}</option>`,
        //         `<option value="THEATER" data-icon="culture-and-entertainement">${I18n.translations[I18n.currentLocale()].venues.categories.THEATER}</option>`,
        //         `<option value="OTHER" data-icon="other" style="font-weight:bold;">${I18n.translations[I18n.currentLocale()].venues.categories.OTHER}</option>`,
        //         `<option value="CONSTRUCTION_SITE" data-icon="">${I18n.translations[I18n.currentLocale()].venues.categories.CONSTRUCTION_SITE}</option>`,
        //         `<option value="LODGING" data-icon="lodging" style="font-weight:bold;">${I18n.translations[I18n.currentLocale()].venues.categories.LODGING}</option>`,
        //         `<option value="HOTEL" data-icon="lodging">${I18n.translations[I18n.currentLocale()].venues.categories.HOTEL}</option>`,
        //         `<option value="HOSTEL" data-icon="lodging">${I18n.translations[I18n.currentLocale()].venues.categories.HOSTEL}</option>`,
        //         `<option value="CAMPING_TRAILER_PARK" data-icon="lodging">${I18n.translations[I18n.currentLocale()].venues.categories.CAMPING_TRAILER_PARK}</option>`,
        //         `<option value="COTTAGE_CABIN" data-icon="lodging">${I18n.translations[I18n.currentLocale()].venues.categories.COTTAGE_CABIN}</option>`,
        //         `<option value="BED_AND_BREAKFAST" data-icon="lodging">${I18n.translations[I18n.currentLocale()].venues.categories.BED_AND_BREAKFAST}</option>`,
        //         `<option value="OUTDOORS" data-icon="outdoors" style="font-weight:bold;">${I18n.translations[I18n.currentLocale()].venues.categories.OUTDOORS}</option>`,
        //         `<option value="PARK" data-icon="outdoors">${I18n.translations[I18n.currentLocale()].venues.categories.PARK}</option>`,
        //         `<option value="PLAYGROUND" data-icon="outdoors">${I18n.translations[I18n.currentLocale()].venues.categories.PLAYGROUND}</option>`,
        //         `<option value="BEACH" data-icon="outdoors">${I18n.translations[I18n.currentLocale()].venues.categories.BEACH}</option>`,
        //         `<option value="SPORTS_COURT" data-icon="outdoors">${I18n.translations[I18n.currentLocale()].venues.categories.SPORTS_COURT}</option>`,
        //         `<option value="GOLF_COURSE" data-icon="outdoors">${I18n.translations[I18n.currentLocale()].venues.categories.GOLF_COURSE}</option>`,
        //         `<option value="PLAZA" data-icon="outdoors">${I18n.translations[I18n.currentLocale()].venues.categories.PLAZA}</option>`,
        //         `<option value="PROMENADE" data-icon="outdoors">${I18n.translations[I18n.currentLocale()].venues.categories.PROMENADE}</option>`,
        //         `<option value="POOL" data-icon="outdoors">${I18n.translations[I18n.currentLocale()].venues.categories.POOL}</option>`,
        //         `<option value="SCENIC_LOOKOUT_VIEWPOINT" data-icon="outdoors">${I18n.translations[I18n.currentLocale()].venues.categories.SCENIC_LOOKOUT_VIEWPOINT}</option>`,
        //         `<option value="SKI_AREA" data-icon="outdoors">${I18n.translations[I18n.currentLocale()].venues.categories.SKI_AREA}</option>`,
        //         `<option value="NATURAL_FEATURES" data-icon="natural-features" style="font-weight:bold;">${I18n.translations[I18n.currentLocale()].venues.categories.NATURAL_FEATURES}</option>`,
        //         `<option value="ISLAND" data-icon="natural-features">${I18n.translations[I18n.currentLocale()].venues.categories.ISLAND}</option>`,
        //         `<option value="SEA_LAKE_POOL" data-icon="natural-features">${I18n.translations[I18n.currentLocale()].venues.categories.SEA_LAKE_POOL}</option>`,
        //         `<option value="RIVER_STREAM" data-icon="natural-features">${I18n.translations[I18n.currentLocale()].venues.categories.RIVER_STREAM}</option>`,
        //         `<option value="FOREST_GROVE" data-icon="natural-features">${I18n.translations[I18n.currentLocale()].venues.categories.FOREST_GROVE}</option>`,
        //         `<option value="FARM" data-icon="natural-features">${I18n.translations[I18n.currentLocale()].venues.categories.FARM}</option>`,
        //         `<option value="CANAL" data-icon="natural-features">${I18n.translations[I18n.currentLocale()].venues.categories.CANAL}</option>`,
        //         `<option value="SWAMP_MARSH" data-icon="natural-features">${I18n.translations[I18n.currentLocale()].venues.categories.SWAMP_MARSH}</option>`,
        //         `<option value="DAM" data-icon="natural-features">${I18n.translations[I18n.currentLocale()].venues.categories.DAM}</option>`,
        //         `<option value="PARKING_LOT" data-icon="parking-lot" style="font-weight:bold;">${
        //             I18n.translations[I18n.currentLocale()].venues.categories.PARKING_LOT
        //         }</option>`,
        //         `<option value="RESIDENCE_HOME" data-icon="residential" style="font-weight:bold;">${
        //             I18n.translations[I18n.currentLocale()].venues.categories.RESIDENCE_HOME
        //         }</option>`,
        //         "</select>",
        //     ].join(" ")
        // );
        $places.html(htmlItems.join(" "));

        return $places.html();
    }

    function injectCss() {
        const css = [
            // Lock button formatting
            ".btn-lh {cursor:pointer;padding:1px 6px;height:22px;border:solid 1px #c1c1c1;margin-right:3px;}",
            ".btn.btn-lh.btn-lh-selected {background-color:#6999ae;color:white}",
            ".btn.btn-lh.btn-lh-selected:hover {color:white}",
            ".btn.btn-lh.disabled {color:#909090;background-color:#f7f7f7;}",
            ".btn.btn-lh.btn-lh-selected.disabled {color:white;background-color:#6999ae;}",
            //Settings Panel
            "#sidebar .controls-container.pie-controls-container {padding: 0px;}",
            ".select2-choices {-webkit-animation-name: oldCategoryDetected; -webkit-animation-duration: 10s; -webkit-animation-iteration-count: 0; animation-name: oldCategoryDetected; animation-duration: 3s; animation-iteration-count: 0;}",
            //'@keyframes oldCategoryDetected {0% {border-color:rgb(204, 204, 204); border-width:3px;} 50%  {border-color:red; border-width:3px;} 100% {border-color:rgb(204, 204, 204); border-width:3px;}}',
            //Image Dialog Enhancement
            ".imgcon {position:relative; margin:0 auto;}",
            ".imnav {color: #ffffff; margin:0 auto; opacity:0.7; display:none; position:absolute; top:0; left:0px; width:100%; height:89%;}",
            ".imgcon:hover .imnav{display:inline-block;}",
            ".control {float:left; height:100%; width:33%; opacity:0;}",
            ".control:hover {opacity:0.7;}",
            '.prim {width:15%; background:url("http://i59.tinypic.com/294s94i.gif")left center no-repeat;}',
            ".zmim {width:70%;}",
            '.neim {width:15%; background:url("http://i62.tinypic.com/2cqfqxf.gif")right center no-repeat;}',
            //PSE
            ".PSESelected {border: 3px solid #ee9900;}",
            //hijacking new WME Place icons
            ".pie-car-services {background-image: url(//editor-assets.waze.com/beta/img/toolbar022c8e4d1f16c3825705364ff337bf1b.png); background-position: -29px -63px; width: 14px; height: 13px; } @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) { .pie-car-services {background-image: url(//editor-assets.waze.com/beta/img/toolbar@2xcd8b2ab08e978d00eeee7817e1a0edda.png); background-size: 99px 87px; } }",
            ".pie-transportation {background-image: url(//editor-assets.waze.com/beta/img/toolbar022c8e4d1f16c3825705364ff337bf1b.png); background-position: -56px -63px; width: 12px; height: 12px; } @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {.pie-transportation {background-image: url(//editor-assets.waze.com/beta/img/toolbar@2xcd8b2ab08e978d00eeee7817e1a0edda.png);background-size: 99px 87px; } }",
            ".pie-professional-and-public {background-image: url(//editor-assets.waze.com/beta/img/toolbar022c8e4d1f16c3825705364ff337bf1b.png); background-position: 0px -76px; width: 13px; height: 11px; } @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {.pie-professional-and-public {background-image:url(//editor-assets.waze.com/beta/img/toolbar@2xcd8b2ab08e978d00eeee7817e1a0edda.png); background-size: 99px 87px; } }",
            ".pie-shopping-and-services {background-image: url(//editor-assets.waze.com/beta/img/toolbar022c8e4d1f16c3825705364ff337bf1b.png); background-position: -88px 0px; width: 11px; height: 13px; } @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {.pie-shopping-and-services {background-image:url(//editor-assets.waze.com/beta/img/toolbar@2xcd8b2ab08e978d00eeee7817e1a0edda.png); background-size: 99px 87px; } }",
            ".pie-food-and-drink {background-image: url(//editor-assets.waze.com/beta/img/toolbar022c8e4d1f16c3825705364ff337bf1b.png); background-position: -65px 0px; width: 13px; height: 16px; } @mediait-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {.pie-food-and-drink {background-image:ditor-assets.waze.com/beta/img/toolbar@2xcd8b2ab08e978d00eeee7817e1a0edda.png); background-size: 99px 87px; } }",
            ".pie-culture-and-entertainement {background-image: url(//editor-assets.waze.com/beta/img/toolbar022c8e4d1f16c3825705364ff337bf1b.png); background-position: -30px -37px; width: 16px; height: 14px; }edia (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {.pie-culture-and-entertainement {background-image:ditor-assets.waze.com/beta/img/toolbar@2xcd8b2ab08e978d00eeee7817e1a0edda.png); background-size: 99px 87px; } }",
            ".pie-other {background-image: url(//editor-assets.waze.com/beta/img/toolbar022c8e4d1f16c3825705364ff337bf1b.png); background-position: 0px -63px; width: 15px; height: 13px; } @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {.pie-other {background-image:url(//editor-assets.waze.com/beta/img/toolbar@2xcd8b2ab08e978d00eeee7817e1a0edda.png); background-size: 99px 87px; } }",
            ".pie-lodging {background-image: url(//editor-assets.waze.com/beta/img/toolbar022c8e4d1f16c3825705364ff337bf1b.png); background-position: -20px -52px; width: 17px; height: 10px; } @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {.pie-lodging {background-image:url(//editor-assets.waze.com/beta/img/toolbar@2xcd8b2ab08e978d00eeee7817e1a0edda.png); background-size: 99px 87px; } }",
            ".pie-outdoors {background-image: url(//editor-assets.waze.com/beta/img/toolbar022c8e4d1f16c3825705364ff337bf1b.png); background-position: 0px -52px; width: 20px; height: 11px; } @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {.pie-outdoors {background-image:url(//editor-assets.waze.com/beta/img/toolbar@2xcd8b2ab08e978d00eeee7817e1a0edda.png); background-size: 99px 87px; } }",
            ".pie-natural-features {background-image: url(//editor-assets.waze.com/beta/img/toolbar022c8e4d1f16c3825705364ff337bf1b.png); background-position: -16px -21px; width: 17px; height: 15px; } @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {.pie-natural-features {background-image:url(//editor-assets.waze.com/beta/img/toolbar@2xcd8b2ab08e978d00eeee7817e1a0edda.png); background-size: 99px 87px; } }",
            ".pie-parking-lot {background-image: url(//editor-assets.waze.com/beta/img/toolbar022c8e4d1f16c3825705364ff337bf1b.png); background-position: -65px -48px; width: 13px; height: 13px; } @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {.pie-parking-lot {background-image:url(//editor-assets.waze.com/beta/img/toolbar@2xcd8b2ab08e978d00eeee7817e1a0edda.png); background-size: 99px 87px; } }",
            ".pie-residential {background-image: url(//editor-assets.waze.com/beta/img/toolbar022c8e4d1f16c3825705364ff337bf1b.png); background-position: -15px -37px; width: 15px; height: 14px; } @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {.pie-residential {background-image:url(//editor-assets.waze.com/beta/img/toolbar@2xcd8b2ab08e978d00eeee7817e1a0edda.png); background-size: 99px 87px; } }",
            ".makePrimary {border:1px solid gray; display:inline-block; cursor:pointer; margin-left:3px; border-radius:5px; padding:0px 2px 0px 2px; user-select: none; font-size:11px;}",
            ".makePrimary:hover {border-color: #26bae8; color: #26bae8}",
            '.photoViewerOptionsContainer { display: grid; grid-template-columns: 1fr 1fr; grid-template-rows: auto; grid-template-areas: "header header" "optionText optionSetting" "footer footer"}',
            ".photoViewerOptionsHeader { text-align: center; grid-area: header; }",
            ".photoViewerOptionsOptionSetting { grid-area: optionSetting; }",
            ".photoViewerOptionsOptionText {grid-area: optionText; }",
            ".photoViewerOptionsFooter { text-align: center; grid-area: footer; }",
            ".photoViewerOptionsOptionText div { height:32px;}",
            ".photoViewerOptionsOptionSetting div { height:32px;}",
            ".photoViewerOptionsOptionText div span { vertical-align: middle; line-height:32px;}",
            ".photoViewerOptionsOptionSetting div span { vertical-align: middle; line-height:32px;}",
        ].join(" ");
        $(`<style type="text/css">${css}</style>`).appendTo("head");
    }

    function injectCSSWithID(id, css) {
        $(`<style type="text/css" id=${id}>${css}</style>`).appendTo("head");
    }

    async function loadSettings() {
        const loadedSettings = JSON.parse(localStorage.getItem("WMEPIE_Settings"));
        const defaultSettings = {
            ShowAreaPlaceSize: false,
            ShowAreaPlaceSizeImperial: false,
            ShowAreaPlaceSizeMetric: false,
            ShowLockButtonsRPP: true,
            NewPlacesList: [].concat(W.Config.venues.categories),
            EditRPPAfterCreated: false,
            UseStreetFromClosestSeg: false,
            UseCityFromClosestSeg: false,
            ShowPlaceLocatorCrosshair: false,
            PlaceZoom: 18,
            DefaultLockLevel: 0,
            CreateResidentialPlaceShortcut: "A+r",
            CreateParkingLotShortcut: "A+p",
            UseAltCity: false,
            ShowSearchButton: false,
            AddPlaceCategoriesButtons: false,
            SkipPLR: false,
            ShowParkingLotButton: false,
            ShowPlaceNames: false,
            ShowPlaceNamesPoint: false,
            ShowPlaceNamesArea: false,
            ShowPlaceNamesLock: false,
            ShowCopyPlaceButton: false,
            ShowExternalProviderTooltip: false,
            ShowPlaceNamesPLA: false,
            ClearDescription: true,
            PlaceNameFontSize: "12",
            PlaceNameFontOutlineWidth: 3,
            PlaceNameFontBold: true,
            PlaceNameFontColor: "#FFFFFF",
            PlaceNameFontOutline: "#000000",
            PlaceLocatorCrosshairProdPL: true,
            MoveAddress: false,
            MoveHNEntry: false,
            PLNormalSpotWidth: 3.44,
            PLAngledSpotWidth: 3,
            ShowPLSpotEstimatorButton: false,
            ShowNavPointClosestSegmentOnHover: true,
            ShowClosestSegmentSelected: false,
            NavLink: false,
            ToggleAreaPlacesShortcut: "CS+a",
            EnableGLE: true,
            OpenPUR: true,
            HidePaymentType: false,
            GeometryMods: true,
            Rotate: false,
            Resize: false,
            OrthogonalizeShortcut: "",
            SimplifyFactor: 5,
            SimplifyPlaceShortcut: "",
            CreateItem1Shortcut: "",
            CreateItem2Shortcut: "",
            CreateItem3Shortcut: "",
            CreateItem4Shortcut: "",
            CreateItem5Shortcut: "",
            CreateItem6Shortcut: "",
            CreateItem7Shortcut: "",
            CreateItem8Shortcut: "",
            CreateItem9Shortcut: "",
            CreateItem10Shortcut: "",
            CreateItem11Shortcut: "",
            CreateItem12Shortcut: "",
            EnablePhotoViewer: true,
            sortBy: "sortbyname",
            sortOrder: "sortAsc",
            PhotoViewerPreserveLayout: false,
            HideShopAndServices: true,
            EnlargeGeoHandles: false,
            hidePlaceNamesWhenPlacesHidden: false,
            lastSaved: 0,
            GLEShowTempClosed: true,
        };
        /*settings = loadedSettings ? loadedSettings : defaultSettings;
        for (var prop in defaultSettings) {
            if (!settings.hasOwnProperty(prop))
                settings[prop] = defaultSettings[prop];
        }*/
        settings = $.extend({}, defaultSettings, loadedSettings);
        if (settings.NewPlacesList.length < 12) settings.NewPlacesList.push("RESIDENTIAL");

        const serverSettings = await WazeWrap.Remote.RetrieveSettings("WME_PIE");
        if (serverSettings && serverSettings.lastSaved > settings.lastSaved) $.extend(settings, serverSettings);

        if (settings.ShowAreaPlaceSizeImperial === false && settings.ShowAreaPlaceSizeMetric === false)
            if (W.prefs.attributes.isImperial) settings.ShowAreaPlaceSizeImperial = true;
            else settings.ShowAreaPlaceSizeMetric = true;
    }

    function saveSettings() {
        if (localStorage) {
            const localsettings = {
                ShowAreaPlaceSize: settings.ShowAreaPlaceSize,
                ShowAreaPlaceSizeImperial: settings.ShowAreaPlaceSizeImperial,
                ShowAreaPlaceSizeMetric: settings.ShowAreaPlaceSizeMetric,
                ShowLockButtonsRPP: settings.ShowLockButtonsRPP,
                NewPlacesList: settings.NewPlacesList,
                EditRPPAfterCreated: settings.EditRPPAfterCreated,
                UseStreetFromClosestSeg: settings.UseStreetFromClosestSeg,
                UseCityFromClosestSeg: settings.UseCityFromClosestSeg,
                ShowPlaceLocatorCrosshair: settings.ShowPlaceLocatorCrosshair,
                PlaceZoom: settings.PlaceZoom,
                DefaultLockLevel: settings.DefaultLockLevel,
                CreateResidentialPlaceShortcut: settings.CreateResidentialPlaceShortcut,
                CreateParkingLotShortcut: settings.CreateParkingLotShortcut,
                UseAltCity: settings.UseAltCity,
                ShowSearchButton: settings.ShowSearchButton,
                AddPlaceCategoriesButtons: settings.AddPlaceCategoriesButtons,
                SkipPLR: settings.SkipPLR,
                ShowParkingLotButton: settings.ShowParkingLotButton,
                ShowPlaceNames: settings.ShowPlaceNames,
                ShowPlaceNamesPoint: settings.ShowPlaceNamesPoint,
                ShowPlaceNamesArea: settings.ShowPlaceNamesArea,
                ShowPlaceNamesLock: settings.ShowPlaceNamesLock,
                ShowCopyPlaceButton: settings.ShowCopyPlaceButton,
                ShowExternalProviderTooltip: settings.ShowExternalProviderTooltip,
                ShowPlaceNamesPLA: settings.ShowPlaceNamesPLA,
                ClearDescription: settings.ClearDescription,
                PlaceNameFontSize: settings.PlaceNameFontSize,
                PlaceNameFontOutlineWidth: settings.PlaceNameFontOutlineWidth,
                PlaceNameFontBold: settings.PlaceNameFontBold,
                PlaceNameFontColor: settings.PlaceNameFontColor,
                PlaceNameFontOutline: settings.PlaceNameFontOutline,
                PlaceLocatorCrosshairProdPL: settings.PlaceLocatorCrosshairProdPL,
                MoveAddress: settings.MoveAddress,
                MoveHNEntry: settings.MoveHNEntry,
                PLNormalSpotWidth: settings.PLNormalSpotWidth,
                PLAngledSpotWidth: settings.PLAngledSpotWidth,
                ShowPLSpotEstimatorButton: settings.ShowPLSpotEstimatorButton,
                ShowNavPointClosestSegmentOnHover: settings.ShowNavPointClosestSegmentOnHover,
                ShowClosestSegmentSelected: settings.ShowClosestSegmentSelected,
                ToggleAreaPlacesShortcut: settings.ToggleAreaPlacesShortcut,
                EnableGLE: settings.EnableGLE,
                OpenPUR: settings.OpenPUR,
                HidePaymentType: settings.HidePaymentType,
                GeometryMods: settings.GeometryMods,
                Rotate: settings.Rotate,
                Resize: settings.Resize,
                OrthogonalizeShortcut: settings.OrthogonalizeShortcut,
                SimplifyFactor: settings.SimplifyFactor,
                SimplifyPlaceShortcut: settings.SimplifyPlaceShortcut,
                CreateItem1Shortcut: settings.CreateItem1Shortcut,
                CreateItem2Shortcut: settings.CreateItem2Shortcut,
                CreateItem3Shortcut: settings.CreateItem3Shortcut,
                CreateItem4Shortcut: settings.CreateItem4Shortcut,
                CreateItem5Shortcut: settings.CreateItem5Shortcut,
                CreateItem6Shortcut: settings.CreateItem6Shortcut,
                CreateItem7Shortcut: settings.CreateItem7Shortcut,
                CreateItem8Shortcut: settings.CreateItem8Shortcut,
                CreateItem9Shortcut: settings.CreateItem9Shortcut,
                CreateItem10Shortcut: settings.CreateItem10Shortcut,
                CreateItem11Shortcut: settings.CreateItem11Shortcut,
                CreateItem12Shortcut: settings.CreateItem12Shortcut,
                EnablePhotoViewer: settings.EnablePhotoViewer,
                sortBy: settings.sortBy,
                sortOrder: settings.sortOrder,
                PhotoViewerPreserveLayout: settings.PhotoViewerPreserveLayout,
                PhotoViewerShowHiddenPlaces: settings.PhotoViewerShowHiddenPlaces,
                HideShopAndServices: settings.HideShopAndServices,
                EnlargeGeoHandles: settings.EnlargeGeoHandles,
                hidePlaceNamesWhenPlacesHidden: settings.hidePlaceNamesWhenPlacesHidden,
                lastSaved: Date.now(),
                GLEShowTempClosed: settings.GLEShowTempClosed,
            };

            for (const name in W.accelerators.Actions) {
                let TempKeys = "";
                if (W.accelerators.Actions[name].group === "wme-place-interface-enhancements") {
                    if (W.accelerators.Actions[name].shortcut) {
                        if (W.accelerators.Actions[name].shortcut.altKey === true) TempKeys += "A";
                        if (W.accelerators.Actions[name].shortcut.shiftKey === true) TempKeys += "S";
                        if (W.accelerators.Actions[name].shortcut.ctrlKey === true) TempKeys += "C";
                        if (TempKeys !== "") TempKeys += "+";
                        if (W.accelerators.Actions[name].shortcut.keyCode)
                            TempKeys += W.accelerators.Actions[name].shortcut.keyCode;
                    } else {
                        TempKeys = "-1";
                    }
                    localsettings[name] = TempKeys;
                }
            }

            localStorage.setItem("WMEPIE_Settings", JSON.stringify(localsettings));
            WazeWrap.Remote.SaveSettings("WME_PIE", localsettings);
        }
    }

    function checkShortcutsChanged() {
        let triggerSave = false;
        for (const name in W.accelerators.Actions) {
            let TempKeys = "";
            if (W.accelerators.Actions[name].group === "wmepie") {
                if (W.accelerators.Actions[name].shortcut) {
                    if (W.accelerators.Actions[name].shortcut.altKey === true) TempKeys += "A";
                    if (W.accelerators.Actions[name].shortcut.shiftKey === true) TempKeys += "S";
                    if (W.accelerators.Actions[name].shortcut.ctrlKey === true) TempKeys += "C";
                    if (TempKeys !== "") TempKeys += "+";
                    if (W.accelerators.Actions[name].shortcut.keyCode)
                        TempKeys += W.accelerators.Actions[name].shortcut.keyCode;
                } else {
                    TempKeys = "-1";
                }
                if (settings[name] !== Tempkeys) {
                    triggerSave = true;
                    break;
                }
            }
        }
        if (triggerSave) saveSettings();
    }

    function loadTranslations() {
        setTranslations({
            en: {
                prefs: {
                    title: "Place Interface Enhancements",
                    ShowAreaPlaceSize: "Show area Place size",
                    ShowImperial: "Show imperial",
                    ShowMetric: "Show metric",
                    ShowRPPLockButtons: "Show lock buttons for RPPs",
                    ShowRPPLockButtonsTitle: "Displays lock level buttons for Residential Place Points",
                    ShowPlaceLocatorCrosshair: "Show Place locator crosshair",
                    ShowPlaceLocatorCrosshairTitle: "Centers the Place on screen and zooms to the defined level",
                    Zoom: "Zoom",
                    ZoomTitle: "The zoom level to use when centering on a Place",
                    ShowAddressSearch: "Show search button next to address",
                    ShowAddressSearchTitle:
                        "Show a magnifying glass next to the Place's address.  Clicking this button will load the address into the search box",
                    ShowPlaceCategoryButtons: "Add Place category buttons above the categories selection",
                    ShowPLAButton: "Show parking lot button",
                    ShowPLAButtonTitle:
                        "Starts creation mode for a Parking Lot Area Place and will set the name to match this Place's name when complete",
                    ShowCopyPlaceButton: "Show copy Place button",
                    ShowCopyPlaceButtonTitle: "Copies the selected Place to a new Place with identical settings",
                    ShowGPIDTooltip: "Show External Provider tooltip",
                    ShowGPIDTooltipTitle: "Displays a tooltip with the external provider information",
                    NewPlaces: "New Places",
                    EditRPPAfterCreate: "Edit RPP address after created",
                    EditRPPAfterCreateTitle:
                        "Automatically opens the RPP address edit window and focuses on the House Number entry",
                    UseStreetFromClosestSegment: "Use street name from closest segment",
                    UseStreetFromClosestSegmentTitle:
                        "Pulls the street name from the closest visible segment and inserts into the new Place's address",
                    UseCityFromClosestSegment: "Use city name from closest segment",
                    UseCityFromClosestSegmentTitle:
                        "Pulls the city name from the closest visible segment and inserts into the new Place's address",
                    ClosestSegmentAltCity: 'When the primary is "No city" look for an alt city',
                    ClosestSegmentAltCityTitle:
                        "When the primary is 'No city' try to find an alt street name with a city",
                    ClosestSegmentIgnorePLRUnnamedPR:
                        "Ignore PLRs & unnamed PR when using closest segment's name and city",
                    ClosestSegmentIgnorePLRUnnamedPRTitle:
                        "When looking for the closest segment, PLRs and unnamed PRs will be ignored",
                    LockLevel: "Lock level",
                    LockLevelTitle: "The lock level to set automatically when creating new Places",
                    MapChanges: "Map Features",
                    ShowPlaceNames: "Show Place names",
                    ShowPlaceNamesTitle: "",
                    ShowPointNames: "Show point names",
                    ShowPointNamesTitle: "Will display the Place's name below the Place point",
                    ShowAreaNames: "Show area names",
                    ShowAreaNamesTitle: "Will display the Place's name in the middle of the Place area",
                    ShowLockLevel: "Show lock level",
                    ShowLockLevelTitle: "Will display the Place's lock level in the middle of the Place area",
                    ShowPLAName: "Show PLA name",
                    ShowPLANameTitle: "",
                    Item: "Item",
                    PlaceMenuCustomization: "Place Menu Customization",
                    ClearDescription: "Show clear description button",
                    ClearDescriptionTitle:
                        "Adds a clear button to the top right of the description entry that when clicked will clear all text in the entry field",
                    PropertiesPanel: "Properties Panel",
                    FontSize: "Font size",
                    FontColor: "Font color",
                    Bold: "Bold",
                    FontOutlineColor: "Font outline color",
                    FontOutlineWidth: "Font outline width",
                    ProdPL: "Force production PL",
                    MoveAddress: "Move address to top of panel",
                    MoveAddressTitle: "Moves the address editor to the top of the properties panel",
                    MoveHNEntry: "Move HN entry before street entry",
                    MoveHNEntryTitle: "Moves the House Number entry before the Street entry in the address editor",
                    ShowParkingSpaceEstimatorTool: "Show Parking Space Estimator tool",
                    ShowParkingSpaceEstimatorToolTitle: "Shows the button to launch the Parking Space Estimator tool",
                    PSEParkingSpaceEstimator: "Parking Space Estimator",
                    PSELayoutType: "Layout type",
                    PSE90degree: "90 degree",
                    PSEAngled: "Angled",
                    PSEEstimatedNumOfSpots: "Estimated # of spots: ",
                    PSESet: "Set",
                    PSESpotWidth: "Spot width (m)",
                    PSECal: "Cal",
                    PSEDraw90DegreeTitle:
                        "Click to draw a line through an entire 90 degree parking space aisle.  Double click to finish drawing and measure the spaces.",
                    PSEDrawAngledTitle:
                        "Click to draw a line through an entire angled parking space aisle.  Double click to finish drawing and measure the spaces.",
                    PSEShowPSEButton: "Show Parking Space Estimator tool button",
                    PSEShowPSEButtonTitle: "Shows the button to launch the Parking Space Estimator tool",
                    PSEDisplayButtonTitle: "Opens the Parking Space Estimator tool",
                    ShowNavPointClosestSegmentOnHover: "Display the nav point and closest segment line on hover",
                    ShowClosestSegmentSelected: "Display a line from the nav point to the point on the closest segment",
                    EnableGLE: "Enable Google Link Enhancer",
                    EnableGLETitle:
                        "Highlights closed Google links in red, linked Google POIs > 400m from the Waze Place in teal, invalid Google links in magenta, Google POIs linked multiple times in orange, already linked POI in gray (autocomplete menu)",
                    OpenPUR: "Automatically open PUR",
                    OpenPURTitle: "Automatically opens the PUR associated with the selected Place",
                    HidePaymentType: "Hide payment type",
                    HidePaymentTypeTitle: "Hide the Payment Type section when the cost is set to Free",
                    GeometryMods: "Enable geometry modification options",
                    GeometryModsTitle:
                        "Enables options for modifying the geometry such as: orthogonalization, ability to rotate or resize (scale up/down) area Places",
                    SimplifyFactor: "Simplify Factor (px)",
                    SimplifyFactorTitle: "The larger the simplification factor the more nodes will be removed",
                    PhotoViewer: "Enable photo viewer",
                    PhotoViewerTitle: "",
                    HideShoppingServices: "Hide Shopping / Services sub category suggestions",
                    HideSHoppingServicesTitle: "",
                    EnlargeGeoHandles: "Enlarge geometry handles",
                    EnlargeGeoHandlesTitle:
                        "Makes the geometry handles on area Places larger so they are easier to grab to adjust the size",
                    hidePlaceNamesWhenPlacesHidden: "Hide Place names for hidden Places",
                    hidePlaceNamesWhenPlacesHiddenTitle:
                        "When enabled, any Place that is hidden (either via the filter or hiding area Places shortcut) will not show their name on the map",
                    GLEShowTempClosed: "Highlight temporarily closed Places",
                    GLEShowTempClosedTitle: "Highlights temporarily closed Places",
                },
                filter: {
                    PlaceFilterPanel: "Place Filtering",
                    filter: "Filter",
                    Hide: "Hide",
                    Show: "Show only",
                },
                hoursParser: {
                    defaultText: "Paste Hours Here",
                    AddHours: "Add hours",
                    AddHoursTitle: "Add pasted hours to existing",
                    ReplaceHours: "Replace all hours",
                    ReplaceHoursTitle: "Replace existing hours with pasted hours",
                    errorSameOpenClose: "Same open and close times detected",
                    errorOverlappingHours: "Overlapping hours detected",
                    errorCannotParse: "Unable to parse the provided hours",
                },
                GLE: {
                    closedPlace:
                        "Google indicates this place is permanently closed.\nVerify with other sources or your editor community before deleting.",
                    multiLinked: "Linked more than once already. Please find and remove multiple links.",
                    linkedToThisPlace: "Already linked to this place",
                    linkedNearby: "Already linked to a nearby place",
                    linkedToXPlaces: "This is linked to {0} places",
                    badLink: "Invalid Google link.  Please remove it.",
                    tooFar: "The Google linked place is more than {0} meters from the Waze place.  Please verify the link is correct.",
                },
            },
            "es-419": {
                prefs: {
                    title: "Place Interface Enhancements",
                    ShowAreaPlaceSize: "Mostrar tamaño del área",
                    ShowImperial: "Sistema Imperial",
                    ShowMetric: "Sistema Métrico",
                    ShowRPPLockButtons: "Mostrar botones de bloqueo para RPPs",
                    ShowRPPLockButtonsTitle: "Muestra los botones de nivel de bloqueo para lugares residenciales",
                    ShowPlaceLocatorCrosshair: "Mostrar reticula localizadora del lugar",
                    ShowPlaceLocatorCrosshairTitle: "Centra el lugar en la pantalla y acercamiento al nivel definido",
                    Zoom: "Acercamiento",
                    ZoomTitle: "Nivel de acercamiento a utilizar cuando se centra en un lugar",
                    ShowAddressSearch: "Mostrar el botón de búsqueda junto a la dirección",
                    ShowAddressSearchTitle:
                        "Muestra una lupa junto a la dirección del lugar. Al hacer clic en este botón, se cargará la dirección en la barra de búsqueda",
                    ShowPlaceCategoryButtons: "Botones de categorías de lugares",
                    ShowPLAButton: "Mostrar botón de PLAs",
                    ShowPLAButtonTitle:
                        "Inicia el modo de creación de un lugar del área de estacionamiento y establecerá el nombre del estacionamiento para que coincida con el nombre del lugar cuando se complete",
                    ShowCopyPlaceButton: "Mostrar botón de copiado de lugar",
                    ShowCopyPlaceButtonTitle:
                        "Copia el lugar seleccionado en un lugar nuevo con configuraciones idénticas",
                    ShowGPIDTooltip: "Mostrar información del proveedor externo",
                    ShowGPIDTooltipTitle: "Muestra un texto con la información del proveedor externo",
                    NewPlaces: "Nuevos lugares",
                    EditRPPAfterCreate: "Editar la dirección del RPP una vez creada",
                    EditRPPAfterCreateTitle:
                        "Automáticamente abre la ventana de edición en la dirección del lugar residencial y se enfoca en el campo de número de casa",
                    UseStreetFromClosestSegment: "Utilizar el nombre de la calle del segmento más cercano",
                    UseStreetFromClosestSegmentTitle:
                        "Extrae el nombre de la calle del segmento visible más cercano y lo agrega en la dirección del nuevo lugar",
                    UseCityFromClosestSegment: "Usar el nombre de la ciudad del segmento más cercano",
                    UseCityFromClosestSegmentTitle:
                        "Extrae el nombre de la ciudad del segmento visible más cercano y lo agrega en la dirección del nuevo lugar",
                    ClosestSegmentAltCity: "Buscar una ciudad alternativa cuando la ciudad principal sea 'Ninguno'",
                    ClosestSegmentAltCityTitle:
                        'Cuando la ciudad principal es "Ninguno" trata de encontrar un nombre de calle alternativo con una ciudad',
                    ClosestSegmentIgnorePLRUnnamedPR:
                        "Ignorar los PLR y PR sin nombre cuando utilice el nombre y la ciudad del segmento más cercano",
                    ClosestSegmentIgnorePLRUnnamedPRTitle:
                        "Ignorar segmentos de estacionamiento o privados al buscar el segmento mas cercano",
                    LockLevel: "Nivel de bloqueo",
                    LockLevelTitle: "El nivel de bloqueo para establecer automáticamente al crear nuevos lugares",
                    MapChanges: "Cambios en el mapa",
                    ShowPlaceNames: "Mostrar nombres de lugares",
                    ShowPlaceNamesTitle: "",
                    ShowPointNames: "Mostrar nombres de punto",
                    ShowPointNamesTitle: "Muestra el nombre de lugares definidos como punto",
                    ShowAreaNames: "Mostrar nombres de área",
                    ShowAreaNamesTitle: "Muestra el nombre de lugares definidos como área",
                    ShowLockLevel: "Mostrar nivel de bloqueo",
                    ShowLockLevelTitle: "Muestra el nivel de bloqueo en el centro del lugar",
                    ShowPLAName: "Mostrar nombre de PLA",
                    ShowPLANameTitle: "Muestra el nombre de áreas de estacionamiento (PLAs)",
                    Item: "Opción",
                    PlaceMenuCustomization: "Personalización del menú de lugares",
                    ClearDescription: "Mostrar botón de borrar descripción",
                    ClearDescriptionTitle:
                        "Añade un botón de borrado en la parte superior derecha del campo de descripción que deja vacíos todos los campos",
                    PropertiesPanel: "Propiedades del panel",
                    FontSize: "Tamaño de letra",
                    FontColor: "Color de Letra",
                    Bold: "Negrita",
                    FontOutlineColor: "Color del contorno de la letra",
                    FontOutlineWidth: "Ancho del contorno de la letra",
                    ProdPL: "Forzar Permalink de producción",
                    MoveAddress: "Move address to top of panel",
                    MoveAddressTitle: "Moves the address editor to the top of the properties panel",
                    MoveHNEntry: "Move HN entry before street entry",
                    MoveHNEntryTitle: "Moves the House Number entry before the Street entry in the address editor",
                    ShowParkingSpaceEstimatorTool: "Show Parking Space Estimator tool",
                    ShowParkingSpaceEstimatorToolTitle: "Shows the button to launch the Parking Space Estimator tool",
                    PSEParkingSpaceEstimator: "Parking Space Estimator",
                    PSELayoutType: "Layout type",
                    PSE90degree: "90 degree",
                    PSEAngled: "Angled",
                    PSEEstimatedNumOfSpots: "Estimated # of spots: ",
                    PSESet: "Set",
                    PSESpotWidth: "Spot width (m)",
                    PSECal: "Cal",
                    PSEDraw90DegreeTitle:
                        "Click to draw a line through an entire 90 degree parking space aisle.  Double click to finish drawing and measure the spaces.",
                    PSEDrawAngledTitle:
                        "Click to draw a line through an entire angled parking space aisle.  Double click to finish drawing and measure the spaces.",
                    PSEShowPSEButton: "Show Parking Space Estimator tool button",
                    PSEShowPSEButtonTitle: "Shows the button to launch the Parking Space Estimator tool",
                    PSEDisplayButtonTitle: "Opens the Parking Space Estimator tool",
                    ShowNavPointClosestSegmentOnHover: "Display the nav point and closest segment line on hover",
                    ShowClosestSegmentSelected: "Display a line from the nav point to the point on the closest segment",
                    EnableGLE: "Habilitar mejoras en links de Google",
                    EnableGLETitle:
                        "Resalta los GPIDs a lugares cerrados en rojo, GPIDs a mas de 400m del lugar en Waze en verde azulado, GPIDs no válidos en magenta, GPIDs vinculados varias veces en naranja, GPIDs ya vinculados en gris (menú de autocompletar)",
                    OpenPUR: "Automatically open PUR",
                    OpenPURTitle: "Automatically opens the PUR associated with the selected Place",
                    HidePaymentType: "Hide payment type",
                    HidePaymentTypeTitle: "Hide the Payment Type section when the cost is set to Free",
                    GeometryMods: "Enable geometry modification options",
                    GeometryModsTitle:
                        "Enables options for modifying the geometry such as: orthogonalization, ability to rotate or resize (scale up/down) area Places",
                    SimplifyFactor: "Simplify Factor",
                    SimplifyFactorTitle: "The larger the simplification factor the more nodes will be removed",
                    PhotoViewer: "Enable photo viewer",
                    PhotoViewerTitle: "",
                    HideShoppingServices: "Hide Shopping / Services sub category suggestions",
                    HideSHoppingServicesTitle: "",
                    EnlargeGeoHandles: "Enlarge geometry handles",
                    EnlargeGeoHandlesTitle:
                        "Makes the geometry handles on area Places larger so they are easier to grab to adjust the size",
                    hidePlaceNamesWhenPlacesHidden: "Hide Place names for hidden Places",
                    hidePlaceNamesWhenPlacesHiddenTitle:
                        "When enabled, any Place that is hidden (either via the filter or hiding area Places shortcut) will not show their name on the map",
                },
                filter: {
                    PlaceFilterPanel: "Place Filtering",
                    filter: "Filter",
                    Hide: "Hide",
                    Show: "Show only",
                },
                hoursParser: {
                    defaultText: "Paste Hours Here",
                    AddHours: "Add hours",
                    AddHoursTitle: "Add pasted hours to existing",
                    ReplaceHours: "Replace all hours",
                    ReplaceHoursTitle: "Replace existing hours with pasted hours",
                    errorSameOpenClose: "Same open and close times detected",
                    errorOverlappingHours: "Overlapping hours detected",
                    errorCannotParse: "Unable to parse the provided hours",
                },
                GLE: {
                    closedPlace:
                        "Google indica que este lugar está permanentemente cerrado. Verifica con otras fuentes o tu comunidad de edición antes de eliminar.",
                    multiLinked: "Vinculado más de una vez. Encuentra y elimina enlaces múltiples.",
                    linkedToThisPlace: "Ya vinculado a este lugar",
                    linkedNearby: "Ya vinculado a un lugar cercano",
                    linkedToXPlaces: "Esto está vinculado a {0} lugares",
                    badLink: "Enlace de Google no válido. Por favor elimínalo.",
                    tooFar: "El lugar vinculado a Google está a más de {0} metros del lugar de Waze. Verifica que el enlace sea correcto.",
                },
            },
            fr: {
                prefs: {
                    title: "Place Interface Enhancements",
                    ShowAreaPlaceSize: "Afficher la taille de la place",
                    ShowImperial: "Afficher en imperial",
                    ShowMetric: "Afficher en métrique",
                    ShowRPPLockButtons: "Afficher les boutons de lock pour les résidentiels",
                    ShowRPPLockButtonsTitle:
                        "Affiche des boutons pour le niveau de verrouillage des lieux résidentiels",
                    ShowPlaceLocatorCrosshair: "Afficher le repère de localisation du lieu",
                    ShowPlaceLocatorCrosshairTitle: "Centre le lieu à l'écran et zoome au niveau défini",
                    Zoom: "Zoom",
                    ZoomTitle: "Niveau de zoom utilisé lorsqu'on se centre sur un lieu",
                    ShowAddressSearch: "Afficher icône de recherche à côté de l'adresse",
                    ShowAddressSearchTitle:
                        "Affiche une loupe à côté de l'adresse du lieu. Cliquer ce bouton chargera l'adresse dans la barre de recherche",
                    ShowPlaceCategoryButtons: "Ajouter des icônes de catégorie au dessus de la sélection de catégories",
                    ShowPLAButton: "Afficher le bouton de création de parking",
                    ShowPLAButtonTitle:
                        "Démarre le mode création de parking pour tracer un parking qui aura le nom du lieu sélectionné",
                    ShowCopyPlaceButton: "Afficher le bouton de clonage de lieu",
                    ShowCopyPlaceButtonTitle: "Clone le lieu sélectionné en nouveau lieu avec les mêmes valeurs",
                    ShowGPIDTooltip: "Afficher en infobulle le fournisseur externe",
                    ShowGPIDTooltipTitle: "Affiche une infobulle avec les informations du fournisseur externe",
                    NewPlaces: "Nouveaux Lieux",
                    EditRPPAfterCreate: "Editer l'adresse du résidentiel après création",
                    EditRPPAfterCreateTitle:
                        "Ouvre automatiquement la zone d'édition de l'adresse du lieu résidentiel et se positionne sur la saisie du n° de rue",
                    UseStreetFromClosestSegment: "Utiliser le nom de rue du segment le plus proche",
                    UseStreetFromClosestSegmentTitle:
                        "Prend le nom de rue du segment visible le plus proche et l'insère dans l'adresse du nouveau lieu",
                    UseCityFromClosestSegment: "Utiliser le nom de ville du segment le plus proche",
                    UseCityFromClosestSegmentTitle:
                        "Prend le nom de ville du segment visible le plus proche et l'insère dans l'adresse du nouveau lieu",
                    ClosestSegmentAltCity: "Lorsque le nom principal est «Hors ville» regarder le nom en alt",
                    ClosestSegmentAltCityTitle:
                        "Lorsque le nom principal est «Hors ville» essayer de trouver un nom de rue alternatif avec une ville",
                    ClosestSegmentIgnorePLRUnnamedPR: "Ignorer les parkings et voies privées non nommés",
                    ClosestSegmentIgnorePLRUnnamedPRTitle:
                        "Lorsque le script regarde le nom du segment visible le plus proche, les parkings et voies privées non nommées seront ignorés",
                    LockLevel: "Verrouillage ",
                    LockLevelTitle: "Le niveau de verrouillage est appliqué automatiquement à la création du lieu",
                    MapChanges: "Changements de carte",
                    ShowPlaceNames: "Afficher le nom des lieux",
                    ShowPlaceNamesTitle: "",
                    ShowPointNames: "Afficher le nom des lieux point",
                    ShowPointNamesTitle: "Affiche le nom du lieu sous le lieu point",
                    ShowAreaNames: "Afficher le nom des lieux zone",
                    ShowAreaNamesTitle: "Affiche le nom du lieu au milieu du lieu zone",
                    ShowLockLevel: "Afficher le niveau de verrouillage",
                    ShowLockLevelTitle: "Afficher le niveau de verrouillage du lieu au milieu du lieu zone",
                    ShowPLAName: "Afficher le nom des parkings",
                    ShowPLANameTitle: "Affiche le nom du parking au milieu du lieu zone",
                    Item: "Option",
                    PlaceMenuCustomization: "Personnalisation du menu Lieu",
                    ClearDescription: "Afficher le bouton «Effacer description»",
                    ClearDescriptionTitle:
                        "Ajoute un bouton «Effacer description» en haut à droite de l'entrée de description qui, lorsqu'il est cliqué, effacera tout le texte dans le champ de saisie",
                    PropertiesPanel: "Panneau des propriétés",
                    FontSize: "Taille de police",
                    FontColor: "Couleur de police",
                    Bold: "Gras",
                    FontOutlineColor: "Couleur surlignage police",
                    FontOutlineWidth: "Épaisseur surlignage police",
                    ProdPL: "Force production PL",
                    MoveAddress: "Déplacer l'adresse en haut du panneau",
                    MoveAddressTitle: "Déplace l'édition d'adresse en haut du panneau de propritétés",
                    MoveHNEntry: "Placer n° de rue avant nom de rue",
                    MoveHNEntryTitle:
                        "Place l'édition du numéro de rue avant le nom de la rue dans l'éditeur d'adresse",
                    ShowParkingSpaceEstimatorTool: "Afficher le simulateur de places de stationnement",
                    ShowParkingSpaceEstimatorToolTitle:
                        "Affiche un bouton pour lancer le simulateur de places de stationnement",
                    PSEParkingSpaceEstimator: "Simulateur places de stationnement",
                    PSELayoutType: "Emplacements:",
                    PSE90degree: "A 90 degrés",
                    PSEAngled: "Inclinés",
                    PSEEstimatedNumOfSpots: "Nombre estimé de places: ",
                    PSESet: "Set",
                    PSESpotWidth: "Largeur place (m)",
                    PSECal: "Cal",
                    PSEDraw90DegreeTitle:
                        "Cliquez pour dessiner une ligne passant à travers les emplacements de parking à 90°. Double-cliquez pour terminer le tracé et mesurer les espaces.",
                    PSEDrawAngledTitle:
                        "Cliquez pour dessiner une ligne passant à travers les emplacements de parking inclinés. Double-cliquez pour terminer le tracé et mesurer les espaces.",
                    PSEShowPSEButton: "Afficher le simulateur de places de stationnement",
                    PSEShowPSEButtonTitle: "Affiche un bouton pour lancer le simulateur de places de stationnement",
                    PSEDisplayButtonTitle: "Ouvre le simulateur de places de stationnement",
                    ShowNavPointClosestSegmentOnHover:
                        "Afficher une ligne entre le point d'entrée et le segment le plus proche",
                    ShowClosestSegmentSelected:
                        "Afficher une ligne depuis le point d'entrée vers le point sur le segment le plus proche",
                    EnableGLE: "Activer le lien Google amélioré",
                    EnableGLETitle:
                        "Met en évidence les liens Google fermés en rouge, les points d'intérêt Google liés se trouvant à plus de 400 m du Lieu Waze en bleu ciel, les liens Google non valides en magenta, les points d'intérêt Google liés plusieurs fois en orange, les points d'intérêt déjà liés en gris (menu de saisie semi-automatique)",
                    OpenPUR: "Ouverture automatique des PUR",
                    OpenPURTitle: "Ouvre automatiquement les PUR associés au lieu sélectionné",
                    HidePaymentType: "Masquer les modes de paiement",
                    HidePaymentTypeTitle:
                        "Masque la section des modes de paiement lorsque le coût est défini comme gratuit",
                    GeometryMods: "Activer les options de modification de géométrie",
                    GeometryModsTitle:
                        "Active les options pour modifier la géométrie telle que : orthogonalisation, possibilité de faire pivoter ou de redimensionner la zone (redimensionnement)",
                    SimplifyFactor: "Facteur de simplification",
                    SimplifyFactorTitle: "Plus le facteur de simplification est grand, plus de nœuds seront supprimés",
                    PhotoViewer: "Activer la visionneuse photos",
                    PhotoViewerTitle: "",
                    HideShoppingServices: "Masquer les suggestions de sous-catégorie Shopping / Services",
                    HideSHoppingServicesTitle: "",
                    EnlargeGeoHandles: "Agrandir les points de géométrie",
                    EnlargeGeoHandlesTitle:
                        "Rend les points de géométrie des Lieux zone plus grand pour faciliter la sélection pour ajuster la taille",
                    hidePlaceNamesWhenPlacesHidden: "Cacher le nom des Lieux masqués",
                    hidePlaceNamesWhenPlacesHiddenTitle:
                        "Lorsque activé, tous les Lieux masqués (soit via le filtre ou soit via le raccourci pour masquer les Lieux) n’auront pas leur nom d’affiché sur la carte",
                },
                filter: {
                    PlaceFilterPanel: "Filtre des lieux",
                    filter: "Filtre",
                    Hide: "Masquer",
                    Show: "Montrer uniquement",
                },
                hoursParser: {
                    defaultText: "Coller les horaires ici",
                    AddHours: "Ajouter des horaires",
                    AddHoursTitle: "Ajouter les horaires collés à l'existant",
                    ReplaceHours: "Remplacer tous les horaires",
                    ReplaceHoursTitle: "Remplacer les horaires existants par les horaires collés",
                    errorSameOpenClose: "Même temps d'ouverture et de fermeture détectés",
                    errorOverlappingHours: "Chevauchement des horaires détecté",
                    errorCannotParse: "Impossible d'analyser les horaires fournis",
                },
                GLE: {
                    closedPlace:
                        "Google indique que cet endroit est définitivement fermé.  NVérifiez avec d'autres sources ou avec votre communauté d'éditeurs avant de le supprimer.",
                    multiLinked: "Déjà lié plus d'une fois. S'il vous plaît trouvez et supprimez plusieurs liens.",
                    linkedToThisPlace: "Déjà lié à ce Lieu",
                    linkedNearby: "Déjà lié à ce Lieu à proximité",
                    linkedToXPlaces: "Ceci est lié à {0} Lieux",
                    badLink: "Lien Google non valide. Veuillez l'enlever.",
                    tooFar: "Le Lieu lié à Google se trouve à plus de {0} mètres du lieu Waze. Veuillez vérifier que le lien est correct.",
                },
            },
        });
    }

    function setTranslations(translations) {
        I18n.translations[I18n.currentLocale()].pie = translations.en;
        for (let i = 0; i < Object.keys(translations).length; i++) {
            const locale = Object.keys(translations)[i];
            if (I18n.currentLocale() === locale) {
                I18n.translations[locale].pie = translations[locale];
                return;
            }
        }
    }

    function listPlaces() {
        let category = "";
        for (let i = 0; i < W.Config.venues.categories.length; i++) {
            category = W.Config.venues.categories[i];
            console.log(`${category} Main`);
            const subCategories = W.Config.venues.subcategories[category];
            for (let j = 0; j < subCategories.length; j++) console.log(subCategories[j]);
        }
    }

    //Obsoleted by WME update released 2017-10-24
    /*function ImageDialogEnhancement(){
        $('.venue-image-dialog .details').wrap("<div id='detailsWrap'></div>");
        $('#detailsWrap').append("<div style='position:absolute;right:12px; bottom:25px;'><i class='fa fa-trash-o fa-lg' id='DeleteFromImageDialog' style='cursor:pointer;' aria-hidden='true'></i></div>");
        var dataID = $('#detailsWrap').parent().find('img')[0].src;
        dataID = /_(.+)/g.exec(dataID)[1];
        $('#DeleteFromImageDialog').click(function(){
            $('div[data-id="' + dataID + '"] button.image-delete-button').click();
            $('.venue-image-dialog').find('.close').click();
        });

        //Image dialog navigation arrows
        if(WazeWrap.getSelectedFeatures()[0].attributes.repositoryObject.attributes.images.length > 1){
            let thisImageIndex;
            let PlaceImages = WazeWrap.getSelectedFeatures()[0].attributes.repositoryObject.attributes.images;
            for(let i=0; i<PlaceImages.length; i++){
                if(WazeWrap.getSelectedFeatures()[0].attributes.repositoryObject.attributes.images[i].id === dataID){
                    thisImageIndex = i;
                    break;
                }
            }
            $('.modal-body').addClass('imgcon');
            $('.modal-body').prepend((thisImageIndex + 1) + "/" + WazeWrap.getSelectedFeatures()[0].attributes.repositoryObject.attributes.images.length);
            $('.imgcon').append('<div class="imnav"><div class="prim control"></div><div class="zmim control"></div><div class="neim control"></div></div>');
            $('.prim').click(function(){
                let prevIndex;

                if(thisImageIndex == 0)
                    prevIndex = PlaceImages.length - 1;
                else
                    prevIndex = thisImageIndex - 1;
                dataID = PlaceImages[prevIndex].id;
                $('div[data-id="' + dataID +'"] img').click();
            });

            $('.neim').click(function(){
                let nextIndex;

                if(thisImageIndex == PlaceImages.length - 1)
                    nextIndex = 0;
                else
                    nextIndex = thisImageIndex + 1;
                dataID = PlaceImages[nextIndex].id;
                $('div[data-id="' + dataID +'"] img').click();
            });
        }
    }*/
}
