// ==UserScript==
// @name         WME Place Interface Enhancements
// @namespace    https://greasyfork.org/users/30701-justins83-waze
// @version      2026.06.19.01
// @description  Enhancements to various Place interfaces
// @include      https://www.waze.com/editor*
// @include      https://www.waze.com/*/editor*
// @include      https://beta.waze.com/editor*
// @include      https://beta.waze.com/*/editor*
// @exclude      https://www.waze.com/user/editor*
// @exclude      https://www.waze.com/dashboard/editor
// @icon         data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAEAAQADAREAAhEBAxEB/8QAHQABAAEFAQEBAAAAAAAAAAAAAAUBAwQGBwIICf/EAEAQAAICAQICBQgHBwQCAwAAAAABAgMEBREGMRIhQVFhBxMUIjJScYEXI0JUkZLBCBVVYpOhsRYzcoJEolPR4f/EABsBAQACAwEBAAAAAAAAAAAAAAADBAECBgUH/8QAMBEBAAIBAgUBCAEEAwEAAAAAAAECAwQRBRIhMVFBBhMiMmFxkdGBFCOhsVLB4fD/2gAMAwEAAhEDEQA/AP1TAAAAAAAAAAAAAAAAAAADwrFJtR9bbm+wyxu9mGQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAY+Vm04cd7JbPsiubNorNuzW1or3YONlW6tc0t6saPNJ9cvDckmsUj6o4tN5+iVjFQioxSSXJIhTKgAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH1PWnVJ1UNdJdUp93wJ6Y9+soL5NukIOc5WScpScpPm2WdtleZ37tg4elF4ckvaU+sq5e6zi7JQhTAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABj6hc6MK2cfaS6jasbzENbTtWZalzLyioBk4GdPBu6ceuL6pR70aWrzRs3rblls2LmVZkOlXLfvj2oqTWa91uLRbsvmrYAAAAAAAAAAAAAAAAAAAAAAAAAACzLKh53zUPXs7Yrs+Jtt03a7+i6k9ut7s1bKgWMyj0nFtrXOS6vibVnad2to3jZqMouLaa2a6mi8oqAAPVdkqpKUJOMl2oxMb92YnbsmcLX+UMlf90v8AKILYv+KeuXymK7YXQUoSUovtRBMbd08Tv2ezDIAAAAAAAAAAAAAAAAAAAAAB4uuhj1yssl0YrmzMRMztDEzERvKAzdctv3jT9VDv7WWa44jurWyTPSGfoEIrDc11zlJ9JkWT5tkmLskyJMAAInVtI8+3dSvrPtR94npfbpKC9N+sICUXCTUk01zTLKsoAAAX8bMtxJ9Kqbj3rsZrNYt3bRaa9k5ha3VkbRt+qn48mVrY5jssVyRPdJJ7kSZUAAAAAAAAAAAAAAAAAAAAEHxHZLemv7Ozl8yxijvKvlntCFLCuzdN1KWBN7rpVy5x/VEd6cySl+VseNl1ZcOlVNS712oqzWa91qLRbsvGrYAAYuZp1OavXjtLsmuZvW017NLVi3dA5ukXYm8kvOV+9Hs+JZreLK1qTVgkiMAAAM3C1W7D2SfTr92X6EdqRZJW81bBhahVnQ3g9pLnF80VrVmvdZraLdmSaNwAAAAAAAAAAAAAAAAAAYGr4DzKE4f7kOtLv8CSluWeqO9eaGstOLaa2a7GXFNQD3XbOmalCTjJdqMTG/dmJ27JjC1/faGSv+8V/lEFsXrCeuXyma7I2xUoSUovtRBtsnid+z0YZAAEdm6LVk7yr+qs8OTJa5JjuitjieyBysK7DltZHZdklyZZraLdlaazXusGzUAAe6bp0WRnCXRkuTMTET0lmJmJ3htWBmLNx42Lqlyku5lO1eWdl2tuaN2SaNgAAAAAAAAAAAAAAAAAAYWdpVObvJroWe+v1JK3mqO1IsgczTbsJ7yj0oe/HkWa3iytak1Yhu0AL+Lm24c+lXLZdsXyZrasW7totNezZcDPhnVdJerNe1HuKlqzWVutotDKNG4AA8zhGyLjOKlF80zO+x3Q+boClvPHez9x8vkT1y/8le2LwhrK5UzcJxcZLmmTxMT1hBMbd3gywATPDkn07o/Z2TK+X0WMXqnSusAAAAAAAAAAAAAAAAAAAAUaUk01un2MCLzdCru3lQ/Nz93sf/0TVyTHdDbHE9kHfj2Y1nQsi4y/yWYmJ6wrTEx0laMsM/RbZV6hBLlLdNEeSN6pMc7WbOU1wAAAAGDquDHLx5SS+tgt0/0JKW5ZR3rzQ1cuKaqW72XWwNl0fCeJjtzW1k+truRUyW5p6LeOvLHVIESUAAAAAAAAAAAAAAAAAAAAAAxNTxoZOJYpL1opyi+5m9J2lpeImGqpNvZLdl1STui6ZKiXn7V0ZbbRi+zxK2S+/SFnHTbrKYIE4AAAALOZfHHxrLJPkurxZtWN52a2naN2sYmBdmy+rj6vbJ8kW7WivdUrWbdk9g6RVh7Sf1lvvPs+BWtebLFccVZ5GlAAAAAAAAAAAAAAAAAAAAAAAGJmqzKrdNPUpdUrHyS7l3m9doneWlt56QYemU4STiulP35cxa82K0irLNG4AAAAKSkorv8ABAYtuH6XNSv9iPs1Ll8X3m8W5ezSa83dlRioRUYpRS5JGjfsqAAAAAAAAAAAAAAAAAAAAAAAAUa3At5GVTh1Oy+2uitc52SUUvmzW160je07Q2rWbTtWN2p6r5XuEdIco26zTbNfYx07X/6po8nLxfRYfmyRP26/6elj4Zq8vak/z0axmftI8NUNqjGz8nxVcYr+7PMv7R6Svy1mf/vu9CvAdTPzTEI2f7Tump+pomXJfzWxRWn2mxemOfzCxHs/l9ckfgh+07prfr6JlxX8tsWI9psXrjn8wT7P5fTJH4SWH+0jw1e0r8bPxvF1xkv7Ms09o9Jb5qzH/wB91e3AdTHyzEtn0ryvcI6u4xq1mmqb+xkJ1P8A9kkeni4vos3y5Ij79P8Abz8nDNXi70n+OrbMfKpzKlbRbXdW+U65KSfzR61b1vG9Z3h5tqzWdrRtK6bNQAAAAAAAAAAAAAAAAAAAAAAAA1ni3yjaDwXW/wB45sfSNt441Xr2y+XZ89jzNXxHTaKP7tuviO6/ptDn1c/269PPo4rxT+0dq+oudWi41emUPqVtm1lr/Rfgzi9V7R58nw6eOWPPef06zTcCw065p5p/EOX6vxDqevXO3Uc/IzJvtusckvguSOZzajNnnfLaZ+7ocWDFhjbHWIR5XTgAAAAASGkcQ6noNyt07PyMOa7abHFP4rkyxh1GbBPNitMfZBlwYs0bZKxLp/Cv7R2r6c4Va1jV6nQup217V2r9H+COm0vtHnx/DqI5o/E/pz2p4Fhv1wzyz+Ydr4S8o2g8aVr93ZsfSNt5YtvqWx+Xb8tztNJxHTa2P7Vuvie7lNToc+kn+5Xp59GzHpvPAAAAAAAAAAAAAAAAAAAAwtX1nC0HBszNQya8TGrW8rLHsvh4vwIc2bHgpOTLO0QlxYr5rRTHG8uA8f8A7QmZqbtwuHVLBxeuLzJr62a/lX2V/f4HA6/2gyZd8el+GPPr/wCO00XBKY9r6jrPj0/9cdvvtyrp23WSttm95Tm9234s4+1ptPNad5dRERWNojows3UqNPhvbNJ9kV1tm9Mdsnywxa0V7sbSNXlqlt/qKFcNuiu35kmXFGKIa0vz7pMrpQCM17UfQcNxi9rbOqPh3ssYMfPbr2hFktywaDqPp2Goye9tfVLx7mM+Pkt07SY7c0JMrpQCM1fV5aXbR6inXPfpLt+RYxYoyxKK9+SYZOFqVGoQ3qmm+2L6miO+O2P5obVtFuzNovtxboW02Sqtg94zg9mn4M0raazzVnaWZiLRtMdHYeAP2g8zTHXh8RKWdi8llwX1sF/MvtL+/wATsNB7QZMW2PVfFHn1/wDXL63glMm99P0nx6f+O/6RrOFr2BXm6fk15WNYt42VvdfB9z8DvsObHnpGTFO8S4vLivhtNMkbSzSZEAAAAAAAAAAAAAAAANO8oHlP0rgHEavksnUJrerDrfrPxl7qPH4hxPDoK/F1t6Q9TRcPy623w9K+svmHjLjrVuONQeTqN7daf1WPDqrrXgv15nzLWa7Nrr8+WftHpD6DpdHh0dOXHH8+stePPXkdrmpPTsROH+7N7R37PEsYcfvLdeyLJblhptls7puc5OcnzbZ68RERtClM790/wjzyf+v6lDV+ixh9WyHnrQBo+s5jzc+yTfqxfRivBHs4aclIhQvbmsaNmPCz65J+rJ9GS8GM1OekwUty2bweMvgGt8Xc8b/t+h6Gk9VXN6ICu2dM1OEnCS5NMvzETG0q8Tt2bloepPUcRuf+7B7S27fE8jNj93bp2Xcd+aEiV0rYODuOtW4Hz1k6be1CTXncefXXYu5r9eZ6Gj12bQ358U/ePSVHVaPFrKcuSP59YfT/AJPvKfpXH+KlRL0bUILe3DsfrLxj7yPpvD+J4dfX4elvWP8A7u+fa3h+XRW+LrX0luJ7DywAAAAAAAAAAAAKN7Ld8gOP+U7y7Y2hK3TdAnDL1DrjPK9qul+HvS/sjkOJ8drg3xabrbz6R+5dRw/g9s22XUdK+PWXzvnZ+RqeXblZd08jItl0p22PeUmfPL5LZbTe87zLuKUrjrFaRtELBo3AIfiTAszMWE605Sre/RXNotae8UttPqgy1m0dGp9CTl0dn0u7brPV3juptu4d0+eFiSlYujZY93F9i7DydRki9to7Qu468sdUsVkwBo+rafZg5dilF9CTbjLsaPZxZIvWFC9ZrJpOn2Z2XWoxfQi05S7EhlyRSslKzaW8HjL4BE8RafPNxIyrXSsre6iu1dpZ0+SKW2ntKHLXmjo1HoSUujs+l3bdZ628d1JtnDeBZh4s52JxlY9+i+aR5WovF7bR6LmKs1jqmCqnAL+Dn5GmZdWViXTx8iqXShbXLaUX8TemS2K0XpO0w0vSuSs1vG8S+iPJh5dsfXfNabr84YmodUa8r2a7n4+7L+zPofDOO1z7YdT0t59J/UuH4hwe2HfLp+tfHrDsCe63XI69y6oAAAAAAAAABEcR8V6VwnhPK1TMrxa9vVjJ7zn4RjzZU1Oqw6SnPmtss4NNl1NuXFXd87+Uby5ahxWrcHS1PTdLfVJp7W3L+ZrkvBHzziPHMur3x4fhp/mXcaDhGPTbZMvxW/xDlxzDogAAAAePNQ6XS6Eel37dZneezGz2YZAAFJRjNbSSku5ob7MEYxgtopRXckN9xUMgADx5qHS6XQj0u/brM7z2Y2ezDIAAAAOo+Tny5ajwoqsHVFPUtLXVFt/W0r+VvmvBnT8O45l0m2PN8VP8w57XcIx6ne+L4bf4l9EcOcV6VxZhRytLzK8qtr1op7Tg+6UeaPoem1eHV058Nt3DZ9Nl01uXLXZLltWAAAABonlb42v4Q0WmGE1DOzJOELGt/NxXtSXj1r8TlvaDid+H4IjF89u0+PMva4Xo66rLM3+WrgP+pNW9L9J/eWX6Rvv5zz0t9/xPk/8AW6nn957y2/neXbf0+Hl5eSNvs2fJ8tfFb0mOLRfjxvS2eU6t7Gv8b+Ox0VPabWxjjHaY387df086OEaT3nPMTt49HL9Y1DUNUzJ5OpX3ZORLnZdJyZ5l89tRbnvbml72LHjx15ccbQxK6Z2vaEXJ+BFNor3SzOzOo0hvZ2y2/lRVtn/4o5v4ZteFTWuqtPxfWV5yXn1RzaZXfNQ9yP4Gm8+WN5eJ4tVi9auL+RtF7R2lneYYl+kQkt65OL7n1onrnmPmbxefVH3YltD9aD271yLVb1t2lJExK0k29kt2btmXRpltvXJebj3vmQ2zVr26tJvEM+rTKa+a6b75FW2a0opvMshU1xXVCK+RFzTPq13kdNcl1wi/kOaY9TeWPbplNnJdB98SWua0NovMMC/TLauuK85HvRarmrbv0SxeJYjTT2a2ZN3brtOJbe/Vg9u98jS1617y1mYhIUaRCK3sk5PuXUirbPM/Kjm8+jLhi1Vr1a4r5EE3tPeWm8y9+ah7kfwNd58sbytWYVNi660vFdRvGS8erMWmGFfpDXXVLf8AlkWa5/8Akki/lgWUzqe04uL8UWYtFuySJ3Zmj6hqGl5kMnTb7sbIjyspk4slpntp7c9LcsosuPHkry5I3h0/G8tfFa0mWLffjyva2WUqtrIr/G/jsepf2m1vu5x1mN/O3X9PBnhGk95zxE7ePRrP+pNW9L9J/eWX6Rvv5zz0t9/xOc/rdTz+895O/neXo/0+Hl5eSNvs795JONr+L9FuhmtTzsOShOxLbzkX7Mn49T/A+sez/E78QwTGX56958+JcTxTR10uWJp8tm9nUvFAOc+WnhHK4j0XGy8Kt3ZGFKUnVHrcoNLfZdrWyOO9peH5NZgrkwxvNN+n0l73CNVTT5JpknaLf7fPcouEnGScZJ7NNdaPkcxMTtLuu/ZQA0nzW4FEkuS2AqAAbgAAACijFPqSXyG8ioAAAAAAKOMW+tJ/IbyKgAAAwBkAKNJ81uASS5LYCoFYxc5KMU5Sb2SS3bERMztBM7dZfQnkW4RyuHNFycvNrdORmyjJVS6nGCT23XY3uz657NcPyaPBbJmjab7dPpDheL6qmoyRTHO8V/26Mdi8EAAadxh5LtH4u6V0q/Q85/8Ak0JJv/kuT/yc7xHgel4hvaY5b+Y/78vV0nEs2l+GJ3r4lxPi7yY6xwlYnZCOZjTbULqOvf4rmmfO9Z7O67S7zWvPXzH67urwcV02bpM8s/X9tSnCVbalFxa7GtjmrUtSdrRtL1otFo3rO4k5PZJt+CMRWbdIjdmZiO6RwuHs/Pa6FEoQf27PVR72k4Fr9ZMcmOYjzPSHm5+JabTx8V958R1bLpvBeNj7SypPIn7q6o//AKfQNB7J6bBtbVTz28do/cuX1PHM2T4cMcsf5TkNOxa4dCONUo93QR1tNDpaV5a4q7faHh21Oe0803nf7o3UOE8DNTcK/R7Per6l+B4et9mtBq4maV5LeY/XZ6Wn4vqcHS080fX9tYz+Es7DbdcPSa++vn+B881vsxrtLMzjjnr9O/4dTp+MabN0tPLP1/aHsqnVLo2QlB90lscvfFkxTtkrMT9YezW9bxvWd3kibsjG0/KzJJU49lnio9X4l7T6DVaqdsOOZ/j/ALVsupw4Y3yXiGwadwRbZtPMsVcf/jr63+J2+g9kMl9r623LHiO/57f7c7qeO0r8Onjf6z2bLiaJg4UUqsavf3pLpN/NnfabhGh0kbYsUfeY3n8y5nNrtTnne95/0pmaJg5kGrMavfb2orotfNDU8I0OrjbJij7xG0/mDDrtTgnel5/255bhuLfQe67mcBr/AGRyU3vo7c0eJ7/ns6fTccpb4dRG31hYlCUOcWjidRoNVpZ2zY5j+P8At0OLU4c0b47xLyUVkSbeyW5LTFkyztSszP0hpa9aRvadl2GNOfNdFeJ1Gi9mddqpickclfr3/DxtRxfTYelZ5p+n7ZEMaEOa6T8T6DovZvQaSIm1ee3mf12cvqOLanPO0Tyx9P2uOuL+yvwPcvodLevJbFWY+0POrqc1Z5ovO/3WbMSL64+q+7sOS1/snps+9tLPJPjvH7h7mm43mx9M0c0f5Y86Jw5x38UcBq+B6/RzPPjmY8x1h0+DiOmz/LfafE9Hg8KazXpMbPRiYnsLrZtSlsk7Ujefoxa0Vje07Nq4J8neo8bXWeYcMbFqaVl9u+yb7Eu1nS6P2c12q2m9eSvmf13eRqOK6bD0rPNP0/buXCHkx0bhFRtrq9LzkuvJvSbX/FckfReH8E0vD9rVjmv5n/rw5TVcRzarpM7V8Q286B5YAAAAMDW9KhrOm2409lJreEvdl2M2rPLO7ExvDj2VhKq+dV9UfOQk4yUop7NE1sWPJ1vWJ+8I4venyzs8Qprr9muEf+MUhXDjp8tYj+GbZL2+aZl7JUYAAAAPMq4z9qKl8VuaWpW/S0btotavaXhYtKe6prT8IIijTYIneKR+IbzmyT3tP5XEtlsupFiIiOkIu6oACkvZfwA5zL2n8TVuoYmN+knZToruX4EE6fDPWaR+ISRlyR2tP5EkiWtK0+WNmk2m3eVTdgAAAAFHFPmkyK2LHf5qxP8ADeL3r8szC9hYVmdl042PX07rZqEIpc2xXHjx/JWI+0E3tf5p3fTXCXDtXC+hY2BXs5xXStmvtzfNkUzvO7MRsmTDIAAAAAADRPKDofQnHUqo9Uto2pd/Y/0J8dvRHaPVpRMjAAAAAAAAAAABSXsv4Ac5l7T+Jq3UAAAAAAAAAAOr+RXhLzltmu5MPVhvXjJrm/tS/T8SK8+jasOwkLcAAAAAAAAs5eLXm41tFselXZFxaMxO3Ucg1bTbNJ1C7Fs5wfU/eXYy3E7xugmNmIZYAAAAAAAAAACkvZfwA5zL2n8TVuoAAAAAAAAAk+G9Cu4k1rG0+hPpWy9aXuR7X8kYmdo3I6vpzTdPp0rAow8eHQopgoRXgitPVKyTAAAAAAAAAANW470P07BWZVHe6hettzlDt/Alpbadmlo3c4LCIAAAAAAAAAAKS9l/ADnMvafxNW6gAAAAAAAADunke4S/c+kPVMiG2XmL1E11wr7Px5/gQXnedm8Q6IRtgAAAAAAAAAApKKlFprdPqaYGj5nk5ssyrZ0ZVddMpNxhKL3S7ieMiPlWfo2yfvlX5WPeR4OQ+jbJ++VflY95Hg5D6Nsn75V+Vj3keDkPo2yfvlX5WPeR4OQ+jbJ++VflY95Hg5D6Nsn75V+Vj3keDkPo2yfvlX5WPeR4OQ+jbJ++VflY95Hg5D6Nsn75V+Vj3keDkUfk1yWmvTKvyse8jwcjWH5B89tv96Y39ORj3kM8qn0D5/8AFMb+nIe8g5T6B8/+KY39OQ95Byn0D5/8Uxv6ch7yDlPoHz/4pjf05D3kHKfQPn/xTG/pyHvIOU+gfP8A4pjf05D3kHKfQPn/AMUxv6ch7yDlZWmeQy6jUMezM1Cm7FhNSsrhBpyS7DE3OV1yEI1xUYpRjFbJLkkRN3oAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAP//Z
// @author       JustinS83
// @grant       GM_xmlhttpRequest
// @require      https://greasyfork.org/scripts/24851-wazewrap/code/WazeWrap.js
// @require      https://update.greasyfork.org/scripts/509664/WME%20Utils%20-%20Bootstrap.js
// @require      https://greasyfork.org/scripts/37486-wme-utils-hoursparser/code/WME%20Utils%20-%20HoursParser.js
// @require      https://greasyfork.org/scripts/38421-wme-utils-navigationpoint/code/WME%20Utils%20-%20NavigationPoint.js
// @require      https://greasyfork.org/scripts/569692/code/WME%20Utils%20-%20SDK%20Google%20Link%20Enhancer.js
// @require      https://greasyfork.org/scripts/375202-photo-viewer-db-interface/code/Photo%20Viewer%20DB%20Interface.js
// @require      https://cdn.jsdelivr.net/npm/@turf/turf@7/turf.min.js
// @connect     greasyfork.org
// @contributionURL https://github.com/WazeDev/Thank-The-Authors
// @license      GPLv3
// @downloadURL https://update.greasyfork.org/scripts/26340/WME%20Place%20Interface%20Enhancements.user.js
// @updateURL https://update.greasyfork.org/scripts/26340/WME%20Place%20Interface%20Enhancements.meta.js
// ==/UserScript==

/* global W */
/* global OpenLayers */
/* global turf */
/* ecmaVersion 2017 */
/* global $ */
/* global I18n */
/* global bootstrap */
/* global WazeWrap */
/* global SDKGoogleLinkEnhancer */
/* global HoursParser */
/* global require */
/* global idbPVKeyval */
/* eslint curly: ["warn", "multi-or-nest"] */

(async function () {
    'use strict';

    var settings = {};
    var resCategory = 'RESIDENTIAL';
    var wazePL;
    let hoursparser;
    let GLE;
    let navPointManager = null;
    var catalog = [];
    const updateMessage = 'Minor fix for default lock level of 1.';
    var lastSelectedFeature;
    const SCRIPT_VERSION = GM_info.script.version.toString();
    const SCRIPT_NAME = GM_info.script.name;
    const DOWNLOAD_URL = 'https://update.greasyfork.org/scripts/26340/WME%20Place%20Interface%20Enhancements.user.js';

    // SDK layer name constants — must be at IIFE scope so all functions can reach them
    const _PIE_SHOW_STOP_POINTS_LAYER = 'PIEShowStopPointsLayer';
    const _PIE_CLOSEST_SEGMENT_LAYER = 'PIEClosestSegment';

    // Place filter / hide-area state — controlled by predicates installed in init2 via addStyleRuleToLayer
    let pieFilterRegex = null;
    let pieFilterHideMode = true; // true = hide matching venues, false = show only matching
    let pieHideAreaEnabled = false;

    // WME DOM selectors — update here if WME changes panel structure
    const WME_DOM = {
        // Venue panel
        venueEditGeneral:       '#venue-edit-general',
        venueExternalProviders: '#venue-edit-general > .external-providers-control',
        venueNameInput:         '#venue-edit-general wz-text-input[name="name"]',
        venueAreaSize:          '#AreaSize',
        venueDescription:       'div.description-control',
        venueAliasActions:      '.alias-item-actions',
        // Map comment panel
        mcTypesSection:         '.form-group.map-comment-types',
        mcAttributesForm:       'form.attributes-form.side-panel-section',
        // Address edit
        addressEditView:        '.address-edit-view',
        addressEdit:            '.address-edit',
        addressFullAddress:     '.full-address',
        // Map / overlays
        map:                    '#map',
        wazeMap:                '#WazeMap',
        photoViewerResults:     '#showDiv',
        // Shadow DOM host elements
        houseNumber:            '.house-number',          // RPP address — input lives in shadow root
        sidebarAlert:           'wz-alert.sidebar-alert', // openPUR review button (shadow → shadow)
        searchAutocomplete:     '#search-autocomplete',   // WME search bar (shadow → shadow → input)
    };

    const layerNames = {
        closedPlaces: 'PIE - Highlight closed Places'
    };

    // Maps sdk shortcutId → settings key (needed because HideAreaPlacesShortcut uses ToggleAreaPlacesShortcut setting)
    const _shortcutIdToSettingsKey = {
        HideAreaPlacesShortcut: 'ToggleAreaPlacesShortcut',
    };

    // prettier-ignore
    const _KEYCODE_TO_CHAR = {
        // A-Z
        65:'A',66:'B',67:'C',68:'D',69:'E',70:'F',71:'G',72:'H',73:'I',74:'J',75:'K',76:'L',
        77:'M',78:'N',79:'O',80:'P',81:'Q',82:'R',83:'S',84:'T',85:'U',86:'V',87:'W',88:'X',
        89:'Y',90:'Z',
        // 0-9
        48:'0',49:'1',50:'2',51:'3',52:'4',53:'5',54:'6',55:'7',56:'8',57:'9',
        // Function keys
        112:'F1',113:'F2',114:'F3',115:'F4',116:'F5',117:'F6',
        118:'F7',119:'F8',120:'F9',121:'F10',122:'F11',123:'F12',
        // Special keys
        32:'Space',13:'Enter',9:'Tab',27:'Esc',8:'Backspace',46:'Delete',
        36:'Home',35:'End',33:'PageUp',34:'PageDown',45:'Insert',
        // Arrow keys
        37:'←',38:'↑',39:'→',40:'↓',
        // Common punctuation
        188:',',190:'.',191:'/',186:';',222:"'",219:'[',221:']',220:'\\',189:'-',187:'=',192:'`',
    };
    // Reverse map: display name (uppercased) → keycode, for _comboToRaw special-key parsing.
    // prettier-ignore
    const _CHAR_TO_KEYCODE = Object.fromEntries(Object.entries(_KEYCODE_TO_CHAR).map(([k, v]) => [v.toUpperCase(), Number(k)]));
    const _MOD_CHAR_TO_VAL = { C: 1, S: 2, A: 4 };

    /**
   * Converts any shortcut string to raw "modifier,keycode" format (e.g. "4,82").
   * Handles: raw "4,82", combo "A+R", hybrid "A+82", bare key "R", WazeWrap "0,-1"/"-1".
   * Returns null for empty / no-key values.
   *
   * WHY: The WME SDK is inconsistent — initial load returns combo format, after the user
   * edits a shortcut it returns raw format, on next reload it's combo again. Normalizing
   * everything to raw on save means we always have a stable, round-trippable value.
   */
    function _comboToRaw(str) {
        if (!str || str === '' || str === '-1' || str === 'None') return null;
        if (/^\d+,-?\d+$/.test(str)) {
            const kc = parseInt(str.split(',')[1], 10);
            return kc < 0 ? null : str;
        }
        const s = String(str).toUpperCase(); // normalize input case so "c+g", "C+G", "cs+space" all parse
        if (/^[A-Z0-9]$/.test(s)) return `0,${s.charCodeAt(0)}`; // bare alphanumeric key
        if (_CHAR_TO_KEYCODE[s] !== undefined) return `0,${_CHAR_TO_KEYCODE[s]}`; // bare special key e.g. "F5", "SPACE", "←"
        const mLetter = s.match(/^([ACS]+)\+([A-Z0-9])$/);
        if (mLetter) {
            const mod = mLetter[1].split('').reduce((a, c) => a | (_MOD_CHAR_TO_VAL[c] || 0), 0);
            return `${mod},${mLetter[2].charCodeAt(0)}`;
        }
        const mNumeric = s.match(/^([ACS]+)\+(\d+)$/); // hybrid "A+82"
        if (mNumeric) {
            const mod = mNumeric[1].split('').reduce((a, c) => a | (_MOD_CHAR_TO_VAL[c] || 0), 0);
            return `${mod},${mNumeric[2]}`;
        }
        const mSpecial = s.match(/^([ACS]+)\+(.+)$/); // modifier + special key e.g. "A+F5", "CS+SPACE", "A+←"
        if (mSpecial && _CHAR_TO_KEYCODE[mSpecial[2]] !== undefined) {
            const mod = mSpecial[1].split('').reduce((a, c) => a | (_MOD_CHAR_TO_VAL[c] || 0), 0);
            return `${mod},${_CHAR_TO_KEYCODE[mSpecial[2]]}`;
        }
        return null;
    }

    /** Converts any shortcut string to human-readable combo format (e.g. "A+R"). Returns null if no key. */
    function _rawToCombo(str) {
        const raw = _comboToRaw(str);
        if (!raw) return null;
        const [modStr, keyStr] = raw.split(',');
        const mod = parseInt(modStr, 10);
        const keyCode = parseInt(keyStr, 10);
        const keyChar = _KEYCODE_TO_CHAR[keyCode] || String(keyCode); // fall back to numeric string for unknown keycodes
        let mods = '';
        if (mod & 1) mods += 'C';
        if (mod & 2) mods += 'S';
        if (mod & 4) mods += 'A';
        return mods ? `${mods}+${keyChar}` : keyChar;
    }

    /**
   * Normalizes any shortcut value to a {raw, combo} pair for consistent storage.
   * Accepts: flat string (any format), existing {raw,combo} object, or null.
   */
    function _normalizeShortcut(val) {
        const src = val && typeof val === 'object' ? (val.raw ?? val.combo) : val;
        const raw = _comboToRaw(src);
        const combo = _rawToCombo(raw);
        return { raw, combo };
    }
    /** Returns the WME localized display name for a venue category or subcategory ID, or null. */
    function _getCategoryLocalizedName(catId) {
        if (!catId || catId === 'NONE') return null;
        const sub = sdk.DataModel.Venues.getVenueSubCategories().find((s) => s.subCategoryId === catId);
        if (sub) return sub.localizedName;
        return sdk.DataModel.Venues.getVenueMainCategories().find((m) => m.id === catId)?.localizedName ?? null;
    }

    /**
   * Re-registers a CreateItemN shortcut with a description reflecting the currently
   * selected category, preserving the user's existing key binding. Also updates the
   * key badge span in the Quick-Create Shortcuts UI.
   */
    function _refreshItemShortcut(itemNum) {
        const shortcutId = `CreateItem${itemNum}Shortcut`;
        const cat = settings.NewPlacesList[itemNum - 1];
        const catName = _getCategoryLocalizedName(cat);
        const description = catName ? `${I18n.t('pie.prefs.CreateShortcut')} ${catName}` : `${I18n.t('pie.prefs.CreateShortcut')} ${I18n.t('pie.prefs.Item')} ${itemNum}`;
        // Clear the key when no category is assigned; otherwise normalize whatever the SDK currently holds
        const sdkKey = sdk.Shortcuts.getAllShortcuts().find((s) => s.shortcutId === shortcutId)?.shortcutKeys;
        const normalized = !cat || cat === 'NONE' ? { raw: null, combo: null } : _normalizeShortcut(sdkKey);
        settings[shortcutId] = normalized;
        if (sdk.Shortcuts.isShortcutRegistered({ shortcutId })) sdk.Shortcuts.deleteShortcut({ shortcutId });
        try {
            sdk.Shortcuts.createShortcut({ shortcutId, description, callback: () => PlaceMenuShortcut(itemNum), shortcutKeys: normalized.combo });
        } catch (ex) {
            console.error(`PIE: Unable to re-register shortcut ${shortcutId}: ${ex}`);
        }
    }

    const _sdkStyleContext = {
        labelYOffset: (context) => context?.feature?.properties?.style?.labelYOffset,
        label: (context) => context?.feature?.properties?.style?.label,
        display: (context) => context?.feature?.properties?.style?.display,
        fontWeight: (context) => context?.feature?.properties?.style?.fontWeight,
        fontSize: (context) => context?.feature?.properties?.style?.fontSize,
        labelOutlineWidth: (context) => context?.feature?.properties?.style?.labelOutlineWidth,
        fontColor: (context) => context?.feature?.properties?.style?.fontColor,
        labelOutlineColor: (context) => context?.feature?.properties?.style?.labelOutlineColor,
        pointRadius: (context) => context?.feature?.properties?.style?.pointRadius,
    };
    const _sdkStyleRules = [
        {
            predicate: (p) => p.styleName === 'pointStyle',
            style: { pointRadius: 6, fillColor: 'white', fillOpacity: 1, strokeColor: '#00ece3', strokeWidth: '3', strokeLinecap: 'round' },
        },
        {
            predicate: (p) => p.styleName === 'lineStyleToNavPoint',
            style: { strokeWidth: 3, strokeColor: '#00ece3', strokeLinecap: 'round', strokeDashstyle: 'dash' },
        },
        {
            predicate: (p) => p.styleName === 'lineStyleToClosestSeg',
            style: { strokeWidth: 4, strokeColor: '#00ece3', strokeLinecap: 'round' },
        },
        {
            predicate: (p) => p.styleName === 'pointStyleNavPoint',
            style: {
                externalGraphic:
                'data:image/gif;base64,R0lGODlhFgAWAPZ/AD09PT8/Pj8/P0M9PUA/P1s9PUBAPz09Qz09Zz09c0M9SWc9bT9AQD1DT0FBQEJBQURDQkRDQ0JGRkZFRUlIRklIR0lISElJSVFPTFJPTlJQTVNQTlNRT1ZTT1lWUlhWU11ZVmFbSXNDW2FhT2diXUlDYUNJbVtDc1thYWBgYGFhYWxsbG1tbZE9PbZzPaRVVZFnSbZzQ7BtYbB/Z8J/Q7yFW4uRbZGLc8iLYdqkZ8iqeeCwZ+y8cz09iz09kT1Dlz1nlz1JpENbkUNztmGFvD2R1EOR1H+wyG2w4HO25nO27Hm88p2dnZ6enraXl7a2ts7Cl/jIi/LOkfjUkf/Ukf/Ul//gqv/mtoW22pe22pfCzovI8pfU+KTa/7zs/8LCwsLOzs7Ozs/Pz9rOzubUzuzazvLgyP/syP//1P/42v//2s7U5s744NTm+Nrs/87y/8j4/9T//+bm5v//4P//5v//7ODy/+b///Pz8/jy8v//8vL4////+Pj//////wAAACH5BAUAAH8ALAAAAAAWABYAAAf+gH+CgyQeFQ8AAAQTHiSDj48ZDAIAlJWVAhyQjw8CAitMYXh4YUwrlQ+bf54VX36vsK9fEwKpnAIgcrBpTll9sHIgDLZ/GQITurBUAD1xsXIWAhmCnq6wZjMACFhusV+VfxyfsHw5JjfaNiVcsSsCHRUATLA8Qm9WBUFxUydesEwAKhgQEOaVmhddYr3KYcTPrzC1KOFRIwOEAhRbYNXBEaIBCSR+8CRKhAdNi5FKNLoIEABAkZCJWobhQwbKAi3dYJXRAQRMGz8QIVQQMM+PHhpJ/NQZs6YPnRhL/gmo8AfAClhXRGCRwoxNjSF3YJ2iJsCanzMwMB0gEvbVE09GgsQhixVFQA84z6JdGERLRTI/VQb8cPZKjgoBECAROGY2zx5YT6IJUNXpU6hRpdzVUhXXk6VEngx44PwIxAQJiSRUAKEqEAA7',
                graphicWidth: 22,
                graphicHeight: 22,
            },
        },
        {
            predicate: (p) => p.styleName === 'placeNameLabel',
            style: {
                display: '${display}',
                label: '${label}',
                labelYOffset: '${labelYOffset}',
                fontWeight: '${fontWeight}',
                fontSize: '${fontSize}',
                labelOutlineWidth: '${labelOutlineWidth}',
                fontColor: '${fontColor}',
                labelOutlineColor: '${labelOutlineColor}',
                pointRadius: 0,
            },
        },
    ];

    const sdk = await bootstrap({
        scriptName: SCRIPT_NAME,
        scriptUpdateMonitor: {
            downloadUrl: DOWNLOAD_URL,
            scriptVersion: SCRIPT_VERSION,
        },
    });

    const areaHandlers = {};
    let _areaSizeRunId = 0;
    const _SKIP_ROAD_TYPES = new Set([
        10, // PEDESTRIAN_BOARDWALK
        16, // STAIRWAY
        18, // RAILROAD
        19, // RUNWAY_TAXIWAY
    ]);

    const eventHandlers = {}; // Store handlers for this feature
    let _extProviderObserver = null;

    await init(sdk);

    function safeGetSelection() {
        try {
            return sdk.Editing.getSelection();
        } catch (e) {
            // sdk.Editing.getSelection() throws WMEError for types it doesn't support
            // (e.g. 'googlePlace'). Treat as no-selection.
            return null;
        }
    }

    function getSelectedFeatures() {
        const sel = safeGetSelection();
        if (!sel || sel.objectType !== 'venue' || !sel.ids?.length) return [];
        return sel.ids.map((id) => sdk.DataModel.Venues.getById({ venueId: id })).filter(Boolean);
    }

    function hasPlaceSelected() {
        const sel = safeGetSelection();
        return !!(sel && sel.objectType === 'venue' && sel.ids?.length);
    }

    function getSelectedPlace() {
        const sel = safeGetSelection();
        if (!sel || sel.objectType !== 'venue' || !sel.ids?.length) return null;
        return sdk.DataModel.Venues.getById({ venueId: sel.ids[0] });
    }

    // SDK Venue Helper Functions (replace WazeWrap methods)
    function venueIsPoint(venue) {
        return venue && venue.geometry && venue.geometry.type === 'Point';
    }

    function venueIsParkingLot(venue) {
        return venue && venue.categories && venue.categories.includes('PARKING_LOT');
    }

    function isInMapExtent(geometry) {
        // Check if a GeoJSON geometry is within the current map extent
        if (!geometry || !geometry.coordinates) return false;

        const extent = sdk.Map.getMapExtent(); // [left, bottom, right, top]
        if (!extent || extent.length < 4) return false;

        const [left, bottom, right, top] = extent;

        if (geometry.type === 'Point') {
            const [lon, lat] = geometry.coordinates;
            return lon >= left && lon <= right && lat >= bottom && lat <= top;
        } else if (geometry.type === 'Polygon') {
            // Check if any point in the polygon is within extent
            for (const ring of geometry.coordinates) {
                for (const [lon, lat] of ring) {
                    if (lon >= left && lon <= right && lat >= bottom && lat <= top) {
                        return true;
                    }
                }
            }
            return false;
        } else if (geometry.type === 'LineString') {
            for (const [lon, lat] of geometry.coordinates) {
                if (lon >= left && lon <= right && lat >= bottom && lat <= top) {
                    return true;
                }
            }
            return false;
        }
    }

    /**
     * Find the closest road segment to a given point using Turf.js
     *
     * Searches all SDK segments and returns the one with minimum distance to the query point.
     * Optionally skips parking lot roads (type 20) and/or private roads (type 17).
     * All non-drivable road types are always skipped.
     *
     * Note: Made synchronous in PR #31 for better performance. Previously async but never
     * actually performed async operations - removed unnecessary await overhead.
     *
     * @param {Object} pointGeoJSON - WGS84 GeoJSON Point geometry {type:'Point', coordinates:[lon,lat]}
     * @param {boolean} [skipPLR=false] - If true, skip parking lot roads (roadType 20)
     * @param {boolean} [skipPrivate=false] - If true, skip private roads (roadType 17) with blank names
     * @param {Object} [sdkInstance=sdk] - SDK instance to use (defaults to global sdk, allows dependency injection for testing)
     * @returns {Object|null} { closestPoint: WGS84 GeoJSON Point geometry, segment: SDK Segment } or null if no segments found
     */
    function findClosestSegmentTurf(pointGeoJSON, skipPLR = false, skipPrivate = false, sdkInstance = sdk) {
        try {
            if (!pointGeoJSON || !pointGeoJSON.coordinates) return null;

            const searchPoint = turf.point(pointGeoJSON.coordinates);

            let minDistance = Infinity;
            let nearestPt = null;
            let closestSegment = null;

            for (const seg of sdkInstance.DataModel.Segments.getAll()) {
                if (!seg.geometry || seg.geometry.type !== 'LineString') continue;
                const rt = seg.roadType;
                if (_SKIP_ROAD_TYPES.has(rt)) continue; // always skip non-drivable
                if (skipPLR && rt === 20 /* PARKING_LOT_ROAD */) continue;
                if (skipPrivate && rt === 17 /* PRIVATE_ROAD */){

                    const segment = sdkInstance.DataModel.Segments.getById({ segmentId: seg.id });
                    const street  = sdkInstance.DataModel.Streets.getById({ streetId: segment.primaryStreetId });
                    if(street?.name === null || street?.name == "")
                        continue;
                }

                // Cheap pre-pass: skip if even the minimum line distance >= current best
                const approxDist = turf.pointToLineDistance(searchPoint, seg.geometry, { units: 'kilometers' });
                if (approxDist >= minDistance) continue;

                // Only run expensive nearestPointOnLine on segments that can beat the current best
                const nearest = turf.nearestPointOnLine(seg.geometry, searchPoint);
                if (nearest.properties.dist < minDistance) {
                    minDistance = nearest.properties.dist;
                    nearestPt = nearest;
                    closestSegment = seg;
                }
            }

            if (!closestSegment || !nearestPt) return null;

            return {
                closestPoint: { type: 'Point', coordinates: nearestPt.geometry.coordinates },
                segment: closestSegment,
                getAddress: function () {
                    return this.segment;
                },
            };
        } catch (err) {
            console.error('Error in findClosestSegmentTurf:', err);
            return null;
        }
    }

    async function init(sdk) {
        loadTranslations();

        GLE = new SDKGoogleLinkEnhancer(sdk, turf, { layerName: layerNames.closedPlaces });
        hoursparser = new HoursParser();

        var $section = $('<div>', { id: 'WMEPIESettings' });
        $section.html(
            [
                // Header
                `<div class="pie-header">`,
                `<div class="pie-header-title">${I18n.t('pie.prefs.title')}</div>`,
                `<div class="pie-header-version">${SCRIPT_VERSION}</div>`,
                `</div>`,

                // --- Section 1: Place Filter ---
                `<div class="pie-section" id="fieldPlaceFilter">`,
                `<div class="pie-section-header"><i class="fa fa-filter"></i><span class="pie-section-title">${I18n.t('pie.filter.PlaceFilterPanel')}</span><i class="fa fa-chevron-down pie-chevron"></i></div>`,
                `<div class="pie-section-body">`,
                `<div id="divPlaceFilter" class="pie-filter-row"><span class="pie-toggle-label">${I18n.t('pie.filter.filter')}</span><input type="text" name="txtPlaceFilter" id="piePlaceFilter" class="pie-text-input"></div>`,
                `<div id="divPlaceFilterOptions"><div class="pie-pill-group"><label class="pie-pill"><input type="radio" id="_rbHidePlaces" name="PlaceFilterToggle" checked><span>${I18n.t('pie.filter.Hide')}</span></label><label class="pie-pill"><input type="radio" id="_rbOnlyShowPlaces" name="PlaceFilterToggle"><span>${I18n.t('pie.filter.Show')}</span></label></div></div>`,
                `</div></div>`,

                // --- Section 2: Properties Panel ---
                `<div class="pie-section" id="fieldPlacePanel">`,
                `<div class="pie-section-header"><i class="fa fa-map-marker"></i><span class="pie-section-title">${I18n.t('pie.prefs.PropertiesPanel')}</span><i class="fa fa-chevron-down pie-chevron"></i></div>`,
                `<div class="pie-section-body" id="divAreaPlaceSizeControls">`,
                `<div id="divShowAreaPlaceSize" class="pie-toggle-row"><span class="pie-toggle-label">${I18n.t('pie.prefs.ShowAreaPlaceSize')}</span><label class="pie-toggle-switch"><input type="checkbox" id="_cbShowAreaPlaceSize" class="pieSettingsCheckbox"><span class="pie-slider"></span></label></div>`,
                `<div id="divShowAreaPlaceSizeImperial" class="pie-toggle-row pie-sub-row"><span class="pie-toggle-label">${I18n.t('pie.prefs.ShowImperial')}</span><label class="pie-toggle-switch"><input type="checkbox" id="_cbShowAreaPlaceSizeImperial" class="pieSettingsCheckbox" disabled><span class="pie-slider"></span></label></div>`,
                `<div id="divShowAreaPlaceSizeMetric" class="pie-toggle-row pie-sub-row"><span class="pie-toggle-label">${I18n.t('pie.prefs.ShowMetric')}</span><label class="pie-toggle-switch"><input type="checkbox" id="_cbShowAreaPlaceSizeMetric" class="pieSettingsCheckbox" disabled><span class="pie-slider"></span></label></div>`,
                `<div id="divShowPlaceLocatorCrosshair" class="pie-toggle-row" title="${I18n.t('pie.prefs.ShowPlaceLocatorCrosshairTitle')}"><span class="pie-toggle-label">${I18n.t('pie.prefs.ShowPlaceLocatorCrosshair')}</span><label class="pie-toggle-switch"><input type="checkbox" id="_cbShowPlaceLocatorCrosshair" class="pieSettingsCheckbox"><span class="pie-slider"></span></label></div>`,
                `<div class="pie-toggle-row pie-sub-row"><span class="pie-toggle-label">${I18n.t('pie.prefs.ProdPL')}</span><label class="pie-toggle-switch"><input type="checkbox" id="_cbPlaceLocatorCrosshairProdPL" class="pieSettingsCheckbox"><span class="pie-slider"></span></label></div>`,
                `<div class="pie-toggle-row pie-sub-row" title="${I18n.t('pie.prefs.ZoomTitle')}"><span class="pie-toggle-label">${I18n.t('pie.prefs.Zoom')}</span><select id="piePlaceZoom" class="pie-select"><option value="22">22</option><option value="21">21</option><option value="20">20</option><option value="19">19</option><option value="18">18</option><option value="17">17</option><option value="16">16</option><option value="15">15</option><option value="14">14</option><option value="13">13</option><option value="12">12</option></select></div>`,
                `<div id="divShowSearchButton" class="pie-toggle-row" title="${I18n.t('pie.prefs.ShowAddressSearchTitle')}"><span class="pie-toggle-label">${I18n.t('pie.prefs.ShowAddressSearch')}</span><label class="pie-toggle-switch"><input type="checkbox" id="_cbShowSearchButton" class="pieSettingsCheckbox"><span class="pie-slider"></span></label></div>`,
                `<div id="divShowCopyPlaceButton" class="pie-toggle-row" title="${I18n.t('pie.prefs.ShowCopyPlaceButtonTitle')}"><span class="pie-toggle-label">${I18n.t('pie.prefs.ShowCopyPlaceButton')}</span><label class="pie-toggle-switch"><input type="checkbox" id="_cbShowCopyPlaceButton" class="pieSettingsCheckbox"><span class="pie-slider"></span></label></div>`,
                `<div id="divShowExternalProviderTooltip" class="pie-toggle-row" title="${I18n.t('pie.prefs.ShowGPIDTooltipTitle')}"><span class="pie-toggle-label">${I18n.t('pie.prefs.ShowGPIDTooltip')}</span><label class="pie-toggle-switch"><input type="checkbox" id="_cbShowExternalProviderTooltip" class="pieSettingsCheckbox"><span class="pie-slider"></span></label></div>`,
                `<div id="divClearDescription" class="pie-toggle-row" title="${I18n.t('pie.prefs.ClearDescriptionTitle')}"><span class="pie-toggle-label">${I18n.t('pie.prefs.ClearDescription')}</span><label class="pie-toggle-switch"><input type="checkbox" id="_cbClearDescription" class="pieSettingsCheckbox"><span class="pie-slider"></span></label></div>`,
                `<div id="divGeometryMods" class="pie-toggle-row" title="${I18n.t('pie.prefs.GeometryModsTitle')}"><span class="pie-toggle-label">${I18n.t('pie.prefs.GeometryMods')}</span><label class="pie-toggle-switch"><input type="checkbox" id="_cbGeometryMods" class="pieSettingsCheckbox"><span class="pie-slider"></span></label></div>`,
                `<div id="divSimplifyFactor" class="pie-toggle-row pie-sub-row" title="${I18n.t('pie.prefs.SimplifyFactorTitle')}"><span class="pie-toggle-label">${I18n.t('pie.prefs.SimplifyFactor')}</span><input type="number" min="0" max="10" step=".5" class="pie-select" style="width:60px;" id="pieSimplifyFactor"></div>`,
                `</div></div>`,

                // --- Section 3: New Places ---
                `<div class="pie-section" id="fieldNewPlaces">`,
                `<div class="pie-section-header"><i class="fa fa-plus-circle"></i><span class="pie-section-title">${I18n.t('pie.prefs.NewPlaces')}</span><i class="fa fa-chevron-down pie-chevron"></i></div>`,
                `<div class="pie-section-body">`,
                `<div id="divEditRPPAfterCreated" class="pie-toggle-row" title="${I18n.t('pie.prefs.EditRPPAfterCreateTitle')}"><span class="pie-toggle-label">${I18n.t('pie.prefs.EditRPPAfterCreate')}</span><label class="pie-toggle-switch"><input type="checkbox" id="_cbEditRPPAfterCreated" class="pieSettingsCheckbox"><span class="pie-slider"></span></label></div>`,
                `<div id="divUseStreetFromClosestSeg" class="pie-toggle-row" title="${I18n.t('pie.prefs.UseStreetFromClosestSegmentTitle')}"><span class="pie-toggle-label">${I18n.t('pie.prefs.UseStreetFromClosestSegment')}</span><label class="pie-toggle-switch"><input type="checkbox" id="_cbUseStreetFromClosestSeg" class="pieSettingsCheckbox"><span class="pie-slider"></span></label></div>`,
                `<div id="divUseCityFromClosestSeg" class="pie-toggle-row" title="${I18n.t('pie.prefs.UseCityFromClosestSegmentTitle')}"><span class="pie-toggle-label">${I18n.t('pie.prefs.UseCityFromClosestSegment')}</span><label class="pie-toggle-switch"><input type="checkbox" id="_cbUseCityFromClosestSeg" class="pieSettingsCheckbox"><span class="pie-slider"></span></label></div>`,
                `<div id="divUseAltCity" class="pie-toggle-row pie-sub-row" title="${I18n.t('pie.prefs.ClosestSegmentAltCityTitle')}"><span class="pie-toggle-label">${I18n.t('pie.prefs.ClosestSegmentAltCity')}</span><label class="pie-toggle-switch"><input type="checkbox" id="_cbUseAltCity" class="pieSettingsCheckbox"><span class="pie-slider"></span></label></div>`,
                `<div id="divSkipPLR" class="pie-toggle-row" title="${I18n.t('pie.prefs.ClosestSegmentIgnorePLRUnnamedPRTitle')}"><span class="pie-toggle-label">${I18n.t('pie.prefs.ClosestSegmentIgnorePLRUnnamedPR')}</span><label class="pie-toggle-switch"><input type="checkbox" id="_cbSkipPLR" class="pieSettingsCheckbox"><span class="pie-slider"></span></label></div>`,
                `<div id="divDefaultLockLevel" class="pie-toggle-row" title="${I18n.t('pie.prefs.LockLevelTitle')}"><span class="pie-toggle-label">${I18n.t('pie.prefs.LockLevel')}</span><select id="pieDefaultLockLevel" class="pie-select">${buildLockLevelsList()}</select></div>`,
                `</div></div>`,

                // --- Section 4: Map Features ---
                `<div class="pie-section" id="fieldMapMods">`,
                `<div class="pie-section-header"><i class="fa fa-map"></i><span class="pie-section-title">${I18n.t('pie.prefs.MapChanges')}</span><i class="fa fa-chevron-down pie-chevron"></i></div>`,
                `<div class="pie-section-body">`,
                `<div id="divShowNames" class="pie-toggle-row" title="${I18n.t('pie.prefs.ShowPlaceNames')}"><span class="pie-toggle-label">${I18n.t('pie.prefs.ShowPlaceNames')}</span><label class="pie-toggle-switch"><input type="checkbox" id="_cbShowPlaceNames" class="pieSettingsCheckbox"><span class="pie-slider"></span></label></div>`,
                `<div id="divShowNamesPoint" class="pie-toggle-row pie-sub-row" title="${I18n.t('pie.prefs.ShowPointNamesTitle')}"><span class="pie-toggle-label">${I18n.t('pie.prefs.ShowPointNames')}</span><label class="pie-toggle-switch"><input type="checkbox" id="_cbShowPlaceNamesPoint" class="pieSettingsCheckbox" disabled><span class="pie-slider"></span></label></div>`,
                `<div id="divShowNamesArea" class="pie-toggle-row pie-sub-row" title="${I18n.t('pie.prefs.ShowAreaNamesTitle')}"><span class="pie-toggle-label">${I18n.t('pie.prefs.ShowAreaNames')}</span><label class="pie-toggle-switch"><input type="checkbox" id="_cbShowPlaceNamesArea" class="pieSettingsCheckbox" disabled><span class="pie-slider"></span></label></div>`,
                `<div id="divShowNamesPLA" class="pie-toggle-row pie-sub-row" title="${I18n.t('pie.prefs.ShowPLANameTitle')}"><span class="pie-toggle-label">${I18n.t('pie.prefs.ShowPLAName')}</span><label class="pie-toggle-switch"><input type="checkbox" id="_cbShowPlaceNamesPLA" class="pieSettingsCheckbox" disabled><span class="pie-slider"></span></label></div>`,
                `<div id="divShowNamesLock" class="pie-toggle-row pie-sub-row" title="${I18n.t('pie.prefs.ShowLockLevelTitle')}"><span class="pie-toggle-label">${I18n.t('pie.prefs.ShowLockLevel')}</span><label class="pie-toggle-switch"><input type="checkbox" id="_cbShowPlaceNamesLock" class="pieSettingsCheckbox" disabled><span class="pie-slider"></span></label></div>`,
                `<div id="divhidePlaceNamesWhenPlacesHidden" class="pie-toggle-row pie-sub-row" title="${I18n.t('pie.prefs.hidePlaceNamesWhenPlacesHiddenTitle')}"><span class="pie-toggle-label">${I18n.t('pie.prefs.hidePlaceNamesWhenPlacesHidden')}</span><label class="pie-toggle-switch"><input type="checkbox" id="_cbhidePlaceNamesWhenPlacesHidden" class="pieSettingsCheckbox" disabled><span class="pie-slider"></span></label></div>`,
                // Font customization sub-card
                `<div id="divPlaceNamesFontCustomization" class="pie-font-settings">`,
                `<div class="pie-font-row"><span>${I18n.t('pie.prefs.FontSize')}</span><span><input type="text" size="2" id="piePlaceNameFontSize" class="pie-select"> px</span></div>`,
                `<div class="pie-font-row"><span>${I18n.t('pie.prefs.FontColor')}</span><input type="color" id="colorPickerFont" style="width:30px;height:20px;padding:1px;cursor:pointer;border:1px solid #ccc;border-radius:3px;"></div>`,
                `<div class="pie-font-row"><span>${I18n.t('pie.prefs.Bold')}</span><label class="pie-toggle-switch"><input type="checkbox" id="_cbPlaceNameFontBold" class="pieSettingsCheckbox"><span class="pie-slider"></span></label></div>`,
                `<div class="pie-font-row"><span>${I18n.t('pie.prefs.FontOutlineColor')}</span><input type="color" id="colorPickerFontOutline" style="width:30px;height:20px;padding:1px;cursor:pointer;border:1px solid #ccc;border-radius:3px;"></div>`,
                `<div class="pie-font-row"><span>${I18n.t('pie.prefs.FontOutlineWidth')}</span><span><input type="text" size="2" id="piePlaceNameFontOutlineWidth" class="pie-select"> px</span></div>`,
                `<div class="pie-font-reset"><button id="_btnResetFontDefaults"><i class="fa fa-undo"></i> Reset to defaults</button></div>`,
                `</div>`,
                `<div id="divShowNavPointClosestSegmentOnHover" class="pie-toggle-row"><span class="pie-toggle-label">${I18n.t('pie.prefs.ShowNavPointClosestSegmentOnHover')}</span><label class="pie-toggle-switch"><input type="checkbox" id="_cbShowNavPointClosestSegmentOnHover" class="pieSettingsCheckbox"><span class="pie-slider"></span></label></div>`,
                `<div id="divShowClosestSegmentSelected" class="pie-toggle-row"><span class="pie-toggle-label">${I18n.t('pie.prefs.ShowClosestSegmentSelected')}</span><label class="pie-toggle-switch"><input type="checkbox" id="_cbShowClosestSegmentSelected" class="pieSettingsCheckbox"><span class="pie-slider"></span></label></div>`,
                `<div id="divEnableGLE" class="pie-toggle-row" title="${I18n.t('pie.prefs.EnableGLETitle')}"><span class="pie-toggle-label">${I18n.t('pie.prefs.EnableGLE')}</span><label class="pie-toggle-switch"><input type="checkbox" id="_cbEnableGLE" class="pieSettingsCheckbox"><span class="pie-slider"></span></label></div>`,
                `<div id="divGLEShowTempClosed" class="pie-toggle-row pie-sub-row"><span class="pie-toggle-label">${I18n.t('pie.prefs.GLEShowTempClosed')}</span><label class="pie-toggle-switch"><input type="checkbox" id="_cbGLEShowTempClosed" class="pieSettingsCheckbox" disabled><span class="pie-slider"></span></label></div>`,
                `<div id="divOpenPUR" class="pie-toggle-row" title="${I18n.t('pie.prefs.OpenPURTitle')}"><span class="pie-toggle-label">${I18n.t('pie.prefs.OpenPUR')}</span><label class="pie-toggle-switch"><input type="checkbox" id="_cbOpenPUR" class="pieSettingsCheckbox"><span class="pie-slider"></span></label></div>`,
                `<div id="divEnablePhotoViewer" class="pie-toggle-row" title="${I18n.t('pie.prefs.PhotoViewerTitle')}"><span class="pie-toggle-label">${I18n.t('pie.prefs.PhotoViewer')}</span><label class="pie-toggle-switch"><input type="checkbox" id="_cbEnablePhotoViewer" class="pieSettingsCheckbox"><span class="pie-slider"></span></label></div>`,
                `<div id="divEnlargeGeoHandles" class="pie-toggle-row" title="${I18n.t('pie.prefs.EnlargeGeoHandlesTitle')}"><span class="pie-toggle-label">${I18n.t('pie.prefs.EnlargeGeoHandles')}</span><label class="pie-toggle-switch"><input type="checkbox" id="_cbEnlargeGeoHandles" class="pieSettingsCheckbox"><span class="pie-slider"></span></label></div>`,
                `</div></div>`,

                // --- Section 5: Quick-Create Shortcuts ---
                `<div class="pie-section" id="divPlaceMenuCustomization">`,
                `<div class="pie-section-header"><i class="fa fa-th-list"></i><span class="pie-section-title">${I18n.t('pie.prefs.PlaceMenuCustomization')}</span><i class="fa fa-chevron-down pie-chevron"></i></div>`,
                `<div class="pie-section-body">`,
                `<div class="pie-section-subtitle">${I18n.t('pie.prefs.PlaceMenuCustomizationSubtitle')}</div>`,
                `<div class="pie-quick-create-list">`,
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
                `</div>`,
                `</div></div>`,
            ].join(''),
        );

        //Load settings
        await loadSettings();

        sdk.Map.addLayer({ layerName: 'PIEPlaceNameLayer', displayInLayerSwitcher: false, uniqueName: '__PIEPlaceNameLayer', styleRules: _sdkStyleRules, styleContext: _sdkStyleContext });
        sdk.Map.setLayerVisibility({ layerName: 'PIEPlaceNameLayer', visibility: true });

        sdk.Map.addLayer({ layerName: _PIE_SHOW_STOP_POINTS_LAYER, displayInLayerSwitcher: false, uniqueName: '__PIEShowStopPointsLayer', styleRules: _sdkStyleRules, styleContext: _sdkStyleContext });
        sdk.Map.addLayer({ layerName: _PIE_CLOSEST_SEGMENT_LAYER, displayInLayerSwitcher: false, uniqueName: '__PIEClosesetSegmentLayer', styleRules: _sdkStyleRules, styleContext: _sdkStyleContext });

        //***** Set Google Link Enhancer translations *****
        GLE.strings.permClosedPlace = I18n.t('pie.GLE.closedPlace');
        GLE.strings.tempClosedPlace = I18n.t('pie.GLE.tempClosedPlace');
        GLE.strings.multiLinked = I18n.t('pie.GLE.multiLinked');
        GLE.strings.linkedToThisPlace = I18n.t('pie.GLE.linkedToThisPlace');
        GLE.strings.linkedNearby = I18n.t('pie.GLE.linkedNearby');
        GLE.strings.linkedToXPlaces = I18n.t('pie.GLE.linkedToXPlaces');
        GLE.strings.badLink = I18n.t('pie.GLE.badLink');
        GLE.strings.tooFar = I18n.t('pie.GLE.tooFar');

        injectCss();
        const { tabLabel, tabPane } = await sdk.Sidebar.registerScriptTab();
        tabLabel.innerText = 'PIE';
        tabPane.classList.add('wme-pie-panel');
        tabPane.innerHTML = $section.html();
        init2();
    }

    function init2() {
        /**
         * NavPointManager - Caches venue navigation points to avoid expensive recalculation
         *
         * This manager significantly improves performance when moving venues by caching the
         * "on-segment" navigation points and only invalidating when venue/segment data changes.
         * Performance improvement: ~500% faster when moving venues in the Waze Editor.
         *
         * @class NavPointManager
         * @param {Object} wmeSdk - The WME SDK instance for accessing data models and events
         */
        navPointManager = new (class NavPointManager {
            /**
             * Initialize NavPointManager with SDK reference and empty caches
             * @param {Object} wmeSdk - The WME SDK instance
             */
            constructor(wmeSdk) {
                this.sdk = wmeSdk;
                /** @type {Map<string, Object>} Map of venue ID → cached navigation point */
                this.navPoints = new Map();
                /** @type {Set<Object>} Set of tracked event handlers for cleanup */
                this.trackedEvents = new Set();
            }

            /**
             * Generate a unique key for storing navigation points for a venue. Currently uses the venue ID, but can be extended to include other factors if needed.
             * @param {Object} venue - SDK Venue object
             * @returns {string} Unique key for the venue's navigation point
             */
            getNavPointKey(venue) {
                return String(venue.id);
            }

            /**
             * Register and track a data model event handler for later cleanup
             * @private
             * @param {string} eventName - WME SDK event name (e.g., 'wme-data-model-objects-changed')
             * @param {Function} handler - Event handler callback function
             */
            _applyEventTracking(eventName, handler) {
                const eventRecord = { eventName, eventHandler: handler };
                this.sdk.Events.on(eventRecord);
                this.trackedEvents.add(eventRecord);
            }

            /**
             * Unregister all tracked event handlers and clear tracking set
             * Called by stopTrackingChanges() to clean up event listeners
             * @private
             */
            _revertAllTrackedEvents() {
                for (const { eventName, eventHandler } of this.trackedEvents) {
                    this.sdk.Events.off({ eventName, eventHandler });
                }
                this.trackedEvents.clear();
            }

            /**
             * Start listening for venue and segment data model changes
             * Registers handlers to invalidate cached navigation points when data changes
             * Prevents duplicate handlers by calling stopTrackingChanges first
             * @public
             */
            startTrackingChanges() {
                this.stopTrackingChanges(); // ensure no duplicate handlers

                const invalidationHandler = ({ dataModelName }) => {
                    if (dataModelName !== 'venues' && dataModelName !== 'segments')
                        return;

                    this._invalidateAllNavPoints();
                };

                this._applyEventTracking('wme-data-model-object-state-deleted', invalidationHandler);
                this._applyEventTracking('wme-data-model-objects-added', invalidationHandler);
                this._applyEventTracking('wme-data-model-objects-changed', invalidationHandler);
                this._applyEventTracking('wme-data-model-objects-removed', invalidationHandler);
                this._applyEventTracking('wme-data-model-objects-saved', invalidationHandler);
                // The following SDK calls won't be reverted by stopTrackingChanges, since they are shared SDK events that may be used by other features
                this.sdk.Events.trackDataModelEvents({ dataModelName: 'venues' });
                this.sdk.Events.trackDataModelEvents({ dataModelName: 'segments' });
            }

            /**
             * Stop listening for data model changes and clear the navigation point cache
             * Unregisters all event handlers added by startTrackingChanges()
             * @public
             */
            stopTrackingChanges() {
                this._revertAllTrackedEvents();
                this._invalidateAllNavPoints();
            }

            /**
             * Invalidate all cached navigation points, forcing recalculation on next access.
             */
            _invalidateAllNavPoints() {
                this.navPoints.clear();
            }

            /**
             * Get the raw navigation point for a venue, which is either the explicitly defined navigation point, the centroid of the polygon geometry, or the point geometry itself.
             * @param {Object} venue
             * @returns {Object|null} WGS84 GeoJSON Point geometry or null if it cannot be determined
             */
            getVenueRawNavPoint(venue) {
                if (!venue || !venue.id || !venue.geometry) return null;
                if (venue.navigationPoints && venue.navigationPoints.length > 0) return venue.navigationPoints[0].point;
                if (venue.geometry.type === 'Polygon') return turf.centroid(venue.geometry).geometry;
                return venue.geometry; // assume Point
            }

            /**
             * Calculate the "on-segment" navigation point for a venue by finding the closest point on the nearest road segment to the venue's raw nav point.
             * Caches the result in this.navPoints for future retrieval.
             * @param {Object} venue - SDK Venue object
             * @return {Object|null} WGS84 GeoJSON Point geometry of the on-segment nav point, or null if it cannot be calculated
             */
            calculateVenueOnSegmentNavPoint(venue) {
                if (!venue || !venue.id || !venue.geometry) return null;

                const navPoint = this.getVenueRawNavPoint(venue);
                const closestSeg = findClosestSegmentTurf(navPoint, false, false, this.sdk);
                if (!closestSeg || !closestSeg.closestPoint) return null;

                this.navPoints.set(this.getNavPointKey(venue), closestSeg.closestPoint);
                return closestSeg.closestPoint;
            }

            /**
             * Get the navigation point for a venue, calculating and caching it if not already available.
             * @param {Object} venue - SDK Venue object
             * @returns {Object|null} WGS84 GeoJSON Point geometry or null if it cannot be determined
             */
            getVenueOnSegmentNavPoint(venue) {
                if (!venue || !venue.id) return null;
                const venueKey = this.getNavPointKey(venue);
                if (!this.navPoints.has(venueKey)) {
                    return this.calculateVenueOnSegmentNavPoint(venue);
                }

                return this.navPoints.get(venueKey);
            }
        })(sdk);
        navPointManager.startTrackingChanges();

        // Collapsible section headers — state persisted in localStorage
        const PIE_LS_SECTIONS = 'WME_PIE_sectionStates';
        // Sections collapsed by default (id → true means collapsed)
        const PIE_SECTION_DEFAULTS = { divPlaceMenuCustomization: true };

        function saveSectionStates() {
            const states = {};
            $('.wme-pie-panel .pie-section[id]').each(function () {
                states[this.id] = $(this).hasClass('pie-collapsed');
            });
            try { localStorage.setItem(PIE_LS_SECTIONS, JSON.stringify(states)); } catch (e) {}
        }

        function restoreSectionStates() {
            let stored = {};
            try { stored = JSON.parse(localStorage.getItem(PIE_LS_SECTIONS)) || {}; } catch (e) {}
            $('.wme-pie-panel .pie-section[id]').each(function () {
                const id = this.id;
                const collapsed = Object.prototype.hasOwnProperty.call(stored, id)
                ? stored[id]
                : PIE_SECTION_DEFAULTS[id] === true;
                $(this).toggleClass('pie-collapsed', collapsed);
            });
        }

        $(document).on('click', '.wme-pie-panel .pie-section-header', function () {
            $(this).closest('.pie-section').toggleClass('pie-collapsed');
            saveSectionStates();
        });

        restoreSectionStates();

        sdk.Events.trackDataModelEvents({ dataModelName: 'venues' });
        sdk.Events.trackLayerEvents({ layerName: 'venues' });

        // Place filter + hide-area-places — rules installed once, controlled by module flags + redrawLayer
        sdk.Map.addStyleRuleToLayer({
            layerName: 'venues',
            styleRules: [
                {
                    // Hide-area-places rule: hides polygon venues when pieHideAreaEnabled is true
                    predicate: (properties) => {
                        if (!pieHideAreaEnabled) return false;
                        if (!properties.id) return false;
                        const venue = sdk.DataModel.Venues.getById({ venueId: String(properties.id) });
                        return venue?.geometry.type === 'Polygon';
                    },
                    style: { display: 'none' },
                },
                {
                    // Place-name filter rule: hides venues matching/not-matching the filter regex
                    predicate: (properties) => {
                        if (!pieFilterRegex) return false;
                        if (!properties.id) return false;
                        const venue = sdk.DataModel.Venues.getById({ venueId: String(properties.id) });
                        if (!venue) return false;
                        const matches = pieFilterRegex.test(venue.name || '');
                        return pieFilterHideMode ? matches : !matches;
                    },
                    style: { display: 'none' },
                },
            ],
        });

        $('#cboPlaceNameFontWeight').select2({ placeholder: 'No font weight set', allowClear: true });
        $('#divPlaceNamesFontCustomization .select2-choices').css('font-size', '10px');

        initColorPicker();

        //Set up event handlers
        $('#_cbShowAreaPlaceSize').change(async function () {
            if (this.checked) {
                attachPlaceSizeHandlers();
                updatePlaceSizeDisplay();
                $('#_cbShowAreaPlaceSizeImperial')[0].disabled = false;
                $('#_cbShowAreaPlaceSizeMetric')[0].disabled = false;
            } else {
                removePlaceSizeHandlers();
                $(WME_DOM.venueAreaSize).remove();
                $('#_cbShowAreaPlaceSizeImperial')[0].disabled = true;
                $('#_cbShowAreaPlaceSizeMetric')[0].disabled = true;
            }
        });

        $('#_cbShowPlaceNames').change(async function () {
            sdk.Map.setLayerVisibility({ layerName: 'PIEPlaceNameLayer', visibility: this.checked });
            $('#_cbShowPlaceNamesPoint')[0].disabled = !this.checked;
            $('#_cbShowPlaceNamesArea')[0].disabled = !this.checked;
            $('#_cbShowPlaceNamesPLA')[0].disabled = !this.checked;
            $('#_cbShowPlaceNamesLock')[0].disabled = !this.checked;
            $('#_cbhidePlaceNamesWhenPlacesHidden')[0].disabled = !this.checked;

            DisplayPlaceNames();
        });

        $('[id^="_cbShowPlaceNames"]').change(async function () {
            DisplayPlaceNames();
        });

        $('#_cbhidePlaceNamesWhenPlacesHidden').change(async function () {
            DisplayPlaceNames();
        });

        $('#_cbShowExternalProviderTooltip').change(function () {
            if (this.checked) registerEvents(ShowExternalProviderTooltip);
            else unregisterEvents(ShowExternalProviderTooltip);
        });

        $('#_cbShowPlaceLocatorCrosshair').change(async function () {
            if (this.checked) registerEvents(ShowPlaceLocatorCrosshair);
            else unregisterEvents(ShowPlaceLocatorCrosshair);
        });

        $('#_cbShowCopyPlaceButton').change(async function () {
            if (this.checked) registerEvents(ShowCopyPlaceButton);
            else unregisterEvents(ShowCopyPlaceButton);
        });

        $('#_cbShowSearchButton').change(async function () {
            if (this.checked) registerEvents(ShowSearchButton);
            else unregisterEvents(ShowSearchButton);
        });

        $('#_cbClearDescription').change(async function () {
            if (this.checked) registerEvents(ShowClearDescription);
            else unregisterEvents(ShowClearDescription);
        });

        // Create wrapper handlers that track enable/disable state
        const navPointHandlers = {};
        const closestSegmentHandlers = {};
        const purHandlers = {};

        $('#_cbShowNavPointClosestSegmentOnHover').change(async function () {
            if (this.checked) {
                navPointHandlers.mouseenter = ({ featureId, layerName }) => {
                    if (layerName !== 'venues') return;
                    const venue = sdk.DataModel.Venues.getById({ venueId: featureId });
                    if (!venue) return;
                    sdk.Map.removeAllFeaturesFromLayer({ layerName: _PIE_SHOW_STOP_POINTS_LAYER });
                    drawNavPointClosestSegmentLines(venue);
                };
                navPointHandlers.mouseleave = ({ layerName }) => {
                    if (layerName !== 'venues') return;
                    sdk.Map.removeAllFeaturesFromLayer({ layerName: _PIE_SHOW_STOP_POINTS_LAYER });
                };
                sdk.Events.on({ eventName: 'wme-layer-feature-mouse-enter', eventHandler: navPointHandlers.mouseenter });
                sdk.Events.on({ eventName: 'wme-layer-feature-mouse-leave', eventHandler: navPointHandlers.mouseleave });
            } else {
                if (navPointHandlers.mouseenter) {
                    sdk.Events.off({ eventName: 'wme-layer-feature-mouse-enter', eventHandler: navPointHandlers.mouseenter });
                    delete navPointHandlers.mouseenter;
                }
                if (navPointHandlers.mouseleave) {
                    sdk.Events.off({ eventName: 'wme-layer-feature-mouse-leave', eventHandler: navPointHandlers.mouseleave });
                    delete navPointHandlers.mouseleave;
                }
                sdk.Map.removeAllFeaturesFromLayer({ layerName: _PIE_SHOW_STOP_POINTS_LAYER });
            }
        });

        $('#_cbShowClosestSegmentSelected').change(async function () {
            if (this.checked) {
                closestSegmentHandlers.undo = () => checkSelection();
                closestSegmentHandlers.afterEdit = () => checkSelection();
                closestSegmentHandlers.selection = () => checkSelection();

                sdk.Events.on({
                    eventName: 'wme-after-undo',
                    eventHandler: closestSegmentHandlers.undo,
                });
                sdk.Events.on({
                    eventName: 'wme-after-edit',
                    eventHandler: closestSegmentHandlers.afterEdit,
                });
                sdk.Events.on({
                    eventName: 'wme-selection-changed',
                    eventHandler: closestSegmentHandlers.selection,
                });
                sdk.Events.on({
                    eventName: 'wme-data-model-objects-changed',
                    eventHandler: ({ dataModelName, objectIds }) => {
                        if (dataModelName === 'venues') ObjectsChanged();
                    },
                });
            } else {
                if (closestSegmentHandlers.undo) {
                    sdk.Events.off({
                        eventName: 'wme-after-undo',
                        eventHandler: closestSegmentHandlers.undo,
                    });
                }
                if (closestSegmentHandlers.afterEdit) {
                    sdk.Events.off({
                        eventName: 'wme-after-edit',
                        eventHandler: closestSegmentHandlers.afterEdit,
                    });
                }
                if (closestSegmentHandlers.selection) {
                    sdk.Events.off({
                        eventName: 'wme-selection-changed',
                        eventHandler: closestSegmentHandlers.selection,
                    });
                }
                // Can't easily unregister data model event, so we filter in handler above
                delete closestSegmentHandlers.undo;
                delete closestSegmentHandlers.afterEdit;
                delete closestSegmentHandlers.selection;
            }
        });

        $('#_cbOpenPUR').change(async function () {
            if (this.checked) {
                purHandlers.selection = () => openPUR();
                sdk.Events.on({
                    eventName: 'wme-selection-changed',
                    eventHandler: purHandlers.selection,
                });
            } else if (purHandlers.selection) {
                sdk.Events.off({
                    eventName: 'wme-selection-changed',
                    eventHandler: purHandlers.selection,
                });
                delete purHandlers.selection;
            }
        });

        $('#_cbEnableGLE').change(async function () {
            if (this.checked) GLE.enable();
            else GLE.disable();
            $('#_cbGLEShowTempClosed')[0].disabled = !this.checked;
        });

        $('#_cbGLEShowTempClosed').change(async function () {
            const checked = this.checked;
            // Keep the "PIE - Highlight closed Places" Map Layers entry in sync.
            // The SDK has no setter for custom layer checkboxes, so remove+re-add is the workaround.
            //sdk.LayerSwitcher.removeLayerCheckbox({ name: layerNames.closedPlaces });
            //sdk.LayerSwitcher.addLayerCheckbox({ name: layerNames.closedPlaces, isChecked: checked });
            sdk.LayerSwitcher.setLayerCheckboxChecked({name: layerNames.closedPlaces, isChecked: checked});
            GLE.showTempClosedPOIs = checked;
        });

        // Keep the PIE "Highlight closed Places" checkbox in sync when the user
        // toggles the "PIE - Highlight closed Places" entry in WME's Map Layers panel directly.
        sdk.Events.on({
            eventName: 'wme-layer-checkbox-toggled',
            eventHandler: (payload) => {
                if (payload.name === layerNames.closedPlaces) {
                    setChecked('_cbGLEShowTempClosed', payload.checked); // .prop() only — no change event
                    settings.GLEShowTempClosed = payload.checked;
                    GLE.showTempClosedPOIs = payload.checked;
                }
            },
        });

        $('#_cbEnablePhotoViewer').change(async function () {
            if (this.checked) {
                $('#launchDiv').addClass('pv-visible');
            } else {
                hide_visio();
                $('#launchDiv').removeClass('pv-visible');
            }
        });

        $('#_cbEnlargeGeoHandles').change(async function () {
            if (this.checked) changeGeoHandleStyle(8);
            else changeGeoHandleStyle(6);
        });

        $('#_cbGeometryMods').change(async function () {
            if (this.checked) {
                registerEvents(InsertGeometryMods);
                InsertGeometryMods();
            } else {
                unregisterEvents(InsertGeometryMods);
                $('#pieGeometryMods').remove();
            }
        });

        //Load settings to interface
        setChecked('_cbShowAreaPlaceSize', settings.ShowAreaPlaceSize);
        setChecked('_cbShowAreaPlaceSizeImperial', settings.ShowAreaPlaceSizeImperial);
        setChecked('_cbShowAreaPlaceSizeMetric', settings.ShowAreaPlaceSizeMetric);
        setChecked('_cbShowLockButtonsRPP', settings.ShowLockButtonsRPP);
        setChecked('_cbEditRPPAfterCreated', settings.EditRPPAfterCreated);
        setChecked('_cbUseStreetFromClosestSeg', settings.UseStreetFromClosestSeg);
        setChecked('_cbUseCityFromClosestSeg', settings.UseCityFromClosestSeg);
        setChecked('_cbShowPlaceLocatorCrosshair', settings.ShowPlaceLocatorCrosshair);
        setChecked('_cbShowCopyPlaceButton', settings.ShowCopyPlaceButton);
        setChecked('_cbShowExternalProviderTooltip', settings.ShowExternalProviderTooltip);
        setChecked('_cbUseAltCity', settings.UseAltCity);
        setChecked('_cbShowSearchButton', settings.ShowSearchButton);
        setChecked('_cbSkipPLR', settings.SkipPLR);
        setChecked('_cbShowPlaceNames', settings.ShowPlaceNames);
        setChecked('_cbShowPlaceNamesPoint', settings.ShowPlaceNamesPoint);
        setChecked('_cbShowPlaceNamesArea', settings.ShowPlaceNamesArea);
        setChecked('_cbShowPlaceNamesPLA', settings.ShowPlaceNamesPLA);
        setChecked('_cbShowPlaceNamesLock', settings.ShowPlaceNamesLock);
        setChecked('_cbClearDescription', settings.ClearDescription);
        setChecked('_cbPlaceNameFontBold', settings.PlaceNameFontBold);
        setChecked('_cbPlaceLocatorCrosshairProdPL', settings.PlaceLocatorCrosshairProdPL);
        setChecked('_cbShowNavPointClosestSegmentOnHover', settings.ShowNavPointClosestSegmentOnHover);
        setChecked('_cbShowClosestSegmentSelected', settings.ShowClosestSegmentSelected);
        setChecked('_cbEnableGLE', settings.EnableGLE);
        setChecked('_cbOpenPUR', settings.OpenPUR);
        setChecked('_cbHidePaymentType', settings.HidePaymentType);
        setChecked('_cbGeometryMods', settings.GeometryMods);
        setChecked('_cbEnablePhotoViewer', settings.EnablePhotoViewer);
        setChecked('_cbEnlargeGeoHandles', settings.EnlargeGeoHandles);
        setChecked('_cbhidePlaceNamesWhenPlacesHidden', settings.hidePlaceNamesWhenPlacesHidden);
        setChecked('_cbGLEShowTempClosed', settings.GLEShowTempClosed);

        $('#_cbGLEShowTempClosed')[0].disabled = !settings.EnableGLE;
        if (settings.ShowPlaceNames) {
            $('#_cbShowPlaceNamesPoint')[0].disabled = false;
            $('#_cbShowPlaceNamesArea')[0].disabled = false;
            $('#_cbShowPlaceNamesPLA')[0].disabled = false;
            $('#_cbShowPlaceNamesLock')[0].disabled = false;
            $('#_cbhidePlaceNamesWhenPlacesHidden')[0].disabled = false;
        }
        if (settings.PlaceZoom < 12) settings.PlaceZoom = parseInt(settings.PlaceZoom) + 12;
        $('#piePlaceZoom')[0].value = settings.PlaceZoom;
        $('#pieDefaultLockLevel')[0].value = settings.DefaultLockLevel;
        $('#piePlaceNameFontSize')[0].value = settings.PlaceNameFontSize;
        $('#piePlaceNameFontOutlineWidth')[0].value = settings.PlaceNameFontOutlineWidth;
        $('#pieSimplifyFactor')[0].value = settings.SimplifyFactor;

        if (settings.ShowNavPointClosestSegmentOnHover) {
            navPointHandlers.mouseenter = ({ featureId, layerName }) => {
                if (layerName !== 'venues') return;
                const venue = sdk.DataModel.Venues.getById({ venueId: featureId });
                if (!venue) return;
                sdk.Map.removeAllFeaturesFromLayer({ layerName: _PIE_SHOW_STOP_POINTS_LAYER });
                drawNavPointClosestSegmentLines(venue);
            };
            navPointHandlers.mouseleave = ({ layerName }) => {
                if (layerName !== 'venues') return;
                sdk.Map.removeAllFeaturesFromLayer({ layerName: _PIE_SHOW_STOP_POINTS_LAYER });
            };
            sdk.Events.on({ eventName: 'wme-layer-feature-mouse-enter', eventHandler: navPointHandlers.mouseenter });
            sdk.Events.on({ eventName: 'wme-layer-feature-mouse-leave', eventHandler: navPointHandlers.mouseleave });
        }

        if (settings.ShowAreaPlaceSize) {
            $('#_cbShowAreaPlaceSizeImperial')[0].disabled = false;
            $('#_cbShowAreaPlaceSizeMetric')[0].disabled = false;
            attachPlaceSizeHandlers();
        }

        if (settings.ShowPlaceLocatorCrosshair) {
            registerEvents(ShowPlaceLocatorCrosshair);
        }

        // Override WME's entry-point recenter buttons to use PIE's PlaceZoom setting.
        // Delegation on document catches dynamically-rendered wz-button elements.
        $(document).on('click', '.navigation-point-action-focus', function () {
            if (!settings.ShowPlaceLocatorCrosshair) return;
            setTimeout(() => sdk.Map.setZoomLevel({ zoomLevel: settings.PlaceZoom }), 300);
        });

        if (settings.ShowCopyPlaceButton) {
            registerEvents(ShowCopyPlaceButton);
            ShowCopyPlaceButton();
        }

        if (settings.ShowExternalProviderTooltip) {
            registerEvents(ShowExternalProviderTooltip);
            ShowExternalProviderTooltip();
        }

        if (settings.ShowSearchButton) {
            registerEvents(ShowSearchButton);
            ShowSearchButton(); //in case the user opened a PL with a Place selected
        }

        if (settings.ClearDescription) {
            registerEvents(ShowClearDescription);
            ShowClearDescription();
        }

        if (settings.ShowClosestSegmentSelected) {
            closestSegmentHandlers.undo = () => checkSelection();
            closestSegmentHandlers.afterEdit = () => checkSelection();
            closestSegmentHandlers.selection = () => checkSelection();

            sdk.Events.on({
                eventName: 'wme-after-undo',
                eventHandler: closestSegmentHandlers.undo,
            });
            sdk.Events.on({
                eventName: 'wme-after-edit',
                eventHandler: closestSegmentHandlers.afterEdit,
            });
            sdk.Events.on({
                eventName: 'wme-selection-changed',
                eventHandler: closestSegmentHandlers.selection,
            });
            sdk.Events.on({
                eventName: 'wme-data-model-objects-changed',
                eventHandler: ({ dataModelName }) => {
                    if (dataModelName === 'venues') ObjectsChanged();
                },
            });
        }

        if (settings.OpenPUR) {
            purHandlers.selection = () => openPUR();
            sdk.Events.on({
                eventName: 'wme-selection-changed',
                eventHandler: purHandlers.selection,
            });
        }

        // Sync the Map Layers "PIE - Highlight closed Places" checkbox to the saved setting.
        // GLE's #initLayer() always defaults to isChecked:true, so we override it here on startup.
        //sdk.LayerSwitcher.removeLayerCheckbox({ name: 'PIE - Highlight closed Places' });
        //sdk.LayerSwitcher.addLayerCheckbox({ name: 'PIE - Highlight closed Places', isChecked: settings.GLEShowTempClosed });
        sdk.LayerSwitcher.setLayerCheckboxChecked({name: layerNames.closedPlaces, isChecked: settings.GLEShowTempClosed});
        GLE.showTempClosedPOIs = settings.GLEShowTempClosed;

        if (settings.EnableGLE) GLE.enable();

        SetupPhotoViewer();

        if (settings.EnlargeGeoHandles) {
            changeGeoHandleStyle(8);
        }

        if (settings.GeometryMods) {
            registerEvents(InsertGeometryMods);
            InsertGeometryMods();
        }

        $('.pieSettingsCheckbox').change(async function () {
            var settingName = $(this)[0].id.substr(3);
            settings[settingName] = this.checked;
            saveSettings();
        });

        $('#piePlaceZoom').change(async function () {
            var settingName = $(this)[0].id.substr(3);
            settings[settingName] = $(this)[0].value;
            saveSettings();
        });

        $('#pieDefaultLockLevel').change(async function () {
            settings[$(this)[0].id.substr(3)] = $(this)[0].value;
            saveSettings();
        });

        $('#_cbPlaceNameFontBold').change(async function () {
            DisplayPlaceNames();
        });

        $('#piePlaceNameFontSize').focusout(async function () {
            var fontSize = $(this)[0].value;
            if (fontSize == '' || fontSize == '0') $(this)[0].value = 12;
            settings[$(this)[0].id.substr(3)] = fontSize;
            saveSettings();
            DisplayPlaceNames();
        });

        $('#piePlaceNameFontOutlineWidth').focusout(async function () {
            var outlineWidth = $(this)[0].value;
            if (outlineWidth == '' || outlineWidth == '0') $(this)[0].value = 3;
            settings[$(this)[0].id.substr(3)] = outlineWidth;
            saveSettings();
            DisplayPlaceNames();
        });

        $('#piePlaceNameFontSize').keypress(function (event) {
            if (event.which < 48 || event.which > 57) event.preventDefault();
        });

        $('#piePlaceNameFontOutlineWidth').keypress(function (event) {
            if (event.which < 48 || event.which > 57) event.preventDefault();
        });

        $('#_btnResetFontDefaults').on('click', function () {
            settings.PlaceNameFontSize = '12';
            settings.PlaceNameFontOutlineWidth = 3;
            settings.PlaceNameFontBold = true;
            settings.PlaceNameFontColor = '#FFFFFF';
            settings.PlaceNameFontOutline = '#000000';
            $('#piePlaceNameFontSize')[0].value = settings.PlaceNameFontSize;
            $('#piePlaceNameFontOutlineWidth')[0].value = settings.PlaceNameFontOutlineWidth;
            setChecked('_cbPlaceNameFontBold', settings.PlaceNameFontBold);
            $('#colorPickerFont').val(settings.PlaceNameFontColor);
            $('#colorPickerFontOutline').val(settings.PlaceNameFontOutline);
            saveSettings();
            DisplayPlaceNames();
        });

        $('#pieSimplifyFactor').focusout(async function () {
            let factor = $(this)[0].value;
            if (factor == '') $(this)[0].value = 5;
            if (factor > 10) factor = 10;
            if (factor < 0) factor = 0;
            settings[$(this)[0].id.substr(3)] = factor;
        });

        //Whenever a Place item is changed, save and update the shortcut description + key badge
        $('[id^="pieItem"]').change(function () {
            const itemNum = parseInt(this.id.replace('pieItem', ''), 10);
            settings.NewPlacesList[itemNum - 1] = this.value;
            // When slot is cleared, also clear the saved key so it doesn't come back on reload
            if (!this.value || this.value === 'NONE') settings[`CreateItem${itemNum}Shortcut`] = { raw: null, combo: null };
            saveSettings();
            _refreshItemShortcut(itemNum);
        });

        //Load settings into Place Customization list options
        for (let i = 0; i < 12; i++) $('#pieItem' + (i + 1))[0].value = settings.NewPlacesList[i];

        /********* SHORTCUTS *********/
        const _shortcutDefs = [
            {
                id: 'CreateResidentialPlaceShortcut',
                desc: I18n.t('pie.prefs.CreateResidentialPlaceDesc'),
                settingsKey: 'CreateResidentialPlaceShortcut',
                cb: () => startPlacementMode(resCategory, true),
            },
            {
                id: 'CreateParkingLotShortcut',
                desc: I18n.t('pie.prefs.CreateParkingLotDesc'),
                settingsKey: 'CreateParkingLotShortcut',
                cb: () => startPlacementMode('PARKING_LOT', false),
            },
            { id: 'HideAreaPlacesShortcut', desc: I18n.t('pie.prefs.HideAreaPlacesDesc'), settingsKey: 'ToggleAreaPlacesShortcut', cb: ToggleHideAreaPlaces },
            { id: 'OrthogonalizeShortcut', desc: I18n.t('pie.prefs.OrthogonalizeDesc'), settingsKey: 'OrthogonalizeShortcut', cb: OrthogonalizePlace },
            { id: 'SimplifyPlaceShortcut', desc: I18n.t('pie.prefs.SimplifyPlaceDesc'), settingsKey: 'SimplifyPlaceShortcut', cb: SimplifyPlace },
            ...Array.from({ length: 12 }, (_, i) => {
                const n = i + 1;
                const catName = _getCategoryLocalizedName(settings.NewPlacesList[i]);
                return {
                    id: `CreateItem${n}Shortcut`,
                    desc: catName ? `${I18n.t('pie.prefs.CreateShortcut')} ${catName}` : `${I18n.t('pie.prefs.CreateShortcut')} ${I18n.t('pie.prefs.Item')} ${n}`,
                    settingsKey: `CreateItem${n}Shortcut`,
                    cb: () => PlaceMenuShortcut(n),
                };
            }),
        ];
        for (const sc of _shortcutDefs) {
            // On script reload, the previous registration still exists — delete it first.
            if (sdk.Shortcuts.isShortcutRegistered({ shortcutId: sc.id })) sdk.Shortcuts.deleteShortcut({ shortcutId: sc.id });
            // Normalize stored value to {raw, combo} — handles flat strings, hybrid "A+82",
            // WazeWrap "4,82"/"-1", and already-normalized {raw,combo} objects from previous saves.
            settings[sc.settingsKey] = _normalizeShortcut(settings[sc.settingsKey]);
            // Restore default if no key is assigned.
            if (settings[sc.settingsKey].combo == null && sc.defaultKey) settings[sc.settingsKey] = _normalizeShortcut(sc.defaultKey);
            // Register shortcut; handle key-already-in-use conflicts via SDK error (ZoomShortcuts pattern).
            // Using try/catch instead of areShortcutKeysInUse pre-check avoids false positives where
            // WME's own shortcuts share the same key combo and incorrectly clear user-assigned keys.
            try {
                sdk.Shortcuts.createShortcut({ shortcutId: sc.id, description: sc.desc, callback: sc.cb, shortcutKeys: settings[sc.settingsKey].combo });
            } catch (ex) {
                if (String(ex).includes('already in use')) {
                    settings[sc.settingsKey] = { raw: null, combo: null };
                    try {
                        sdk.Shortcuts.createShortcut({ shortcutId: sc.id, description: sc.desc, callback: sc.cb, shortcutKeys: null });
                    } catch (ex2) {
                        console.error(`PIE: Unable To Create Shortcut: ${sc.id}.  Exception: ${ex2}`);
                    }
                } else {
                    console.error(`PIE: Unable To Create Shortcut: ${sc.id}.  Exception: ${ex}`);
                }
            }
        }

        $('#piePlaceFilter').on('propertychange keyup paste input', UpdatePlaceFilter);
        $('input[type=radio][name=PlaceFilterToggle]').change(UpdatePlaceFilter);

        window.addEventListener(
            'beforeunload',
            function () {
                checkShortcutsChanged();
                //saveSettings();
            },
            false,
        );

        let extprovobserver = new MutationObserver(function (mutations) {
            mutations.forEach(function (mutation) {
                for (var i = 0; i < mutation.addedNodes.length; i++) {
                    var addedNode = mutation.addedNodes[i];
                    // Only fire up if it's a node
                    if (addedNode.nodeType === Node.ELEMENT_NODE && ($(addedNode).hasClass('address-edit-view') || $(addedNode).hasClass('conversation-view'))) {
                        updatePlaceSizeDisplay();
                        delayFire(250, AddHoursParserInterface);
                        AddMakePrimaryButtons();
                        if (settings.ShowPlaceLocatorCrosshair) ShowPlaceLocatorCrosshair();
                        if (settings.ShowSearchButton) ShowSearchButton();
                        if (settings.ShowCopyPlaceButton) ShowCopyPlaceButton();
                        if (settings.GeometryMods) InsertGeometryMods();
                    }
                }
            });
        });

        sdk.Events.on({
            eventName: 'wme-data-model-objects-changed',
            eventHandler: ({ dataModelName }) => {
                if (dataModelName !== 'venues') return;
            },
        });

        extprovobserver.observe(document.getElementById('edit-panel'), { childList: true, subtree: true });

        sdk.Events.on({
            eventName: 'wme-selection-changed',
            eventHandler: () => {
                lastSelectedFeature = safeGetSelection()?.objectType ?? lastSelectedFeature;
                if (hasPlaceSelected()) {
                    setTimeout(() => {
                        //Trim whitespace from start and end of house number field on Places
                        $('.form-control.house-number').focusout(async function () {
                            $('.form-control.house-number')[0].value = $('.form-control.house-number')[0].value.trim();
                        });

                        //Make Website label a clickable link to the set website
                        let placeURL = getSelectedFeatures()[0].url || '';

                        $('input[name="url"]').focusout(async function () {
                            placeURL = $('input[name="url"]')[0].value.trim();
                            if (placeURL == '') {
                                $('input[name="url"]').parent().parent().find('label').unwrap();
                                return;
                            }
                            if (!placeURL.startsWith('http')) placeURL = 'https://' + placeURL;
                            if ($('#websiteLink').length == 0)
                                $('input[name="url"]')
                                    .parent()
                                    .parent()
                                    .find('label')
                                    .wrap('<a href="' + placeURL + '" id="websiteLink" target="_blank" style="cursor:pointer;"></a>');
                            else $('#websiteLink').attr('href', placeURL);
                        });
                        if (placeURL != '') {
                            if (!placeURL.startsWith('http')) placeURL = 'https://' + placeURL;
                            $('input[name="url"]')
                                .parent()
                                .parent()
                                .find('label')
                                .wrap('<a href="' + placeURL + '" id="websiteLink" target="_blank" style="cursor:pointer;"></a>');
                            $('input[name="url"]').parent().parent().find('label').css('text-decoration', 'underline');
                            $('input[name="url"]').parent().parent().find('label').css('cursor', 'pointer');
                        }
                    }, 0);
                }
            },
        });

        sdk.Events.on({ eventName: 'wme-map-zoom-changed', eventHandler: DisplayPlaceNames });
        sdk.Events.on({ eventName: 'wme-map-layer-changed', eventHandler: DisplayPlaceNames });

        if (settings.ShowPlaceNames) DisplayPlaceNames();

        wazePL = document.querySelector('.WazeControlPermalink>a.fa-link');
        if (wazePL == null) wazePL = document.querySelector('.permalink');
        wazePL.id = 'wazePermalink';

        /******** Hours Parser ************/
        registerEvents(AddHoursParserInterface);
        delayFire(150, AddHoursParserInterface);
        registerEvents(AddMakePrimaryButtons);
        AddMakePrimaryButtons();

        WazeWrap.Interface.ShowScriptUpdate('WME Place Interface Enhancements', GM_info.script.version, updateMessage, '', 'https://www.waze.com/discuss/t/217315');
    }

    function SetupPhotoViewer() {
        //Black background
        let mainDiv = document.createElement('div');
        mainDiv.id = 'photoViewerMainDiv';
        $(mainDiv).css({
            float: 'right',
            position: 'absolute',
            left: '0px',
            top: '0px',
            width: '100%',
            height: '100%',
            'background-color': 'rgb(0, 0, 0, 0.85)',
            'z-index': '1005',
            'overflow-y': 'auto',
            display: 'none',
            'font-size': '13px',
            'background-color': 'rgba(0, 0, 0, 0.75)',
            'backdrop-filter': 'blur(10px)',
            '-webkit-backdrop-filter': 'blur(10px)',
        });
        $(WME_DOM.map).append(mainDiv);

        //Div options
        let optDiv = document.createElement('div');
        optDiv.id = 'options';
        $(optDiv).css({ position: 'absolute', top: '0', width: '100%', height: '100%', 'z-index': '1011', 'background-color': 'rgb(0, 0, 0, 0.85)', display: 'none' });
        /*optDiv.onclick = function(){
             $(optDiv).css('display', 'none');
        };*/
        $(WME_DOM.map).append(optDiv);

        let optDiv2 = document.createElement('div');
        optDiv2.className = 'photoViewerOptionsContainer';
        $(optDiv2).css({
            'text-align': 'center',
            width: '500px',
            position: 'relative',
            top: '30px',
            'background-color': 'black',
            color: 'white',
            margin: '0 auto',
            border: '1px solid white',
            'border-radius': '12px',
            padding: '10px',
            'background': 'rgba(20, 20, 20, 0.95)',
            'backdrop-filter': 'blur(15px)',
            'box-shadow': '0 8px 32px rgba(0, 0, 0, 0.5)',
        });
        optDiv2.innerHTML =
            '<div class="photoViewerOptionsOptionText"><div><span>Sort by</span></div><div><span>Sort order</span></div><div><span>Keep position after picture deletion</span></div><div><span>Show whitelisted Places</span></div></div>' +
            '<div class="photoViewerOptionsOptionSetting"><div><select id="sortBy"><option value="sortbyname">Name</option><option value="sortbylockRank">Lock level</option><option value="sortbyImageCount">Image count</option></select></div><div><select id="sortOrder"><option value="sortAsc">Ascending</option><option value="sortDesc">Descending</option></select></div><div><span><input type="checkbox" id="photoViewerPreserveLayout"></span></div><div><span><input type="checkbox" id="photoViewerShowHiddenPlaces"></span></div></div>' +
            '<div class="photoViewerOptionsFooter" style="margin-top:15px;"><button class="btn btn-primary" type="button" id="photoViewerSave">Save</button><button type="button" class="btn btn-default" id="photoViewerCancel">Cancel</button></div>';
        optDiv.appendChild(optDiv2);

        $('#photoViewerCancel').click(async function () {
            $(optDiv).css('display', 'none');
        });

        let topbar = document.createElement('div');
        $(topbar).css({ position: 'sticky', top: '0px', width: '100%', height: '23px' });
        mainDiv.appendChild(topbar);

        //Button to quit
        let quit = document.createElement('button');
        quit.innerHTML = I18n.translations[I18n.currentLocale()].merge_places.actions.cancel;
        $(quit).css({ float: 'right', height: '23px', 'line-height': '23px', margin: '3px', padding: '0 10px', 'background-color': '#26bae8', color: 'white', border: '0', 'border-radius': '13px' });
        quit.onclick = hide_visio;
        topbar.appendChild(quit);

        //Button for script options
        let param = document.createElement('button');
        param.innerHTML = '<i style="color:#ccc;" class="fa fa-gear"></i>';
        $(param).css({ float: 'right', height: '22px', 'line-height': '22px', margin: '3px', 'background-color': '#354148', color: 'white', border: '0', 'border-radius': '11px' });
        param.onclick = function () {
            $(optDiv).css('display', 'block');
        };
        topbar.appendChild(param);

        //Quantity
        let quantities = document.createElement('div');
        $(quantities).css({ float: 'right', height: '22px', 'line-height': '22px', margin: '3px', padding: '0 8px', 'background-color': '#354148', color: 'white', border: '0', 'border-radius': '11px' });
        let placeqty = document.createElement('div');
        $(placeqty).css({ color: 'white', display: 'inline-block', 'margin-right': '5px' });
        placeqty.innerHTML = '<i class="fa fa-map-marker" style="color:red;" title="Total Places found with images"></i> <span id="placessqty"></span>';
        quantities.appendChild(placeqty);
        let imageqty = document.createElement('div');
        $(imageqty).css({ display: 'inline-block' });
        imageqty.innerHTML = '<i class="fa fa-file-image-o" title="Total images found"></i> <span id="imagesqty"></span>';
        quantities.appendChild(imageqty);
        topbar.appendChild(quantities);

        //Refresh
        let refresh = document.createElement('div');
        refresh.innerHTML = '<i class="fa fa-refresh"></i>';
        $(refresh).css({
            float: 'right',
            height: '22px',
            'line-height': '22px',
            margin: '3px',
            padding: '0 8px',
            'background-color': '#354148',
            color: 'white',
            border: '0',
            'border-radius': '11px',
            cursor: 'pointer',
        });
        refresh.id = 'refreshScan';
        $(refresh).click(Photos_scan);
        topbar.appendChild(refresh);

        let showDiv = document.createElement('div');
        showDiv.id = 'showDiv';
        showDiv.style.padding = '5px';
        mainDiv.appendChild(showDiv);

        //Icon near chat
        let launchDiv = document.createElement('div');
        launchDiv.id = 'launchDiv';
        launchDiv.setAttribute('data-pie-tip', 'Photo Viewer\nPlace Interface Enhancements');

        // Use CSS class for visibility instead of inline display style (responsive design)
        if (settings.EnablePhotoViewer) {
            launchDiv.classList.add('pv-visible');
        }

        const launchButton = document.createElement('button');
        launchButton.id = 'photoViewerButton';
        launchButton.type = 'button';
        launchButton.innerHTML = '<i class="fa fa-picture-o"></i>';
        launchButton.onmouseenter = togglePhotoViewerMouseEvent;
        launchDiv.appendChild(launchButton);
        $(WME_DOM.map).append(launchDiv);

        // Drag-to-move
        let _pvDragging = false, _pvMoved = false, _pvOX = 0, _pvOY = 0;
        launchDiv.addEventListener('mousedown', function (e) {
            _pvDragging = true;
            _pvMoved = false;
            const r = launchDiv.getBoundingClientRect();
            _pvOX = e.clientX - r.left;
            _pvOY = e.clientY - r.top;
        });
        document.addEventListener('mousemove', function (e) {
            if (!_pvDragging) return;
            _pvMoved = true;
            launchDiv.style.cursor = 'grabbing';
            const mapEl = document.querySelector(WME_DOM.map);
            const mr = mapEl.getBoundingClientRect();
            const newLeft = Math.max(0, Math.min(e.clientX - mr.left - _pvOX, mr.width  - launchDiv.offsetWidth));
            const newTop  = Math.max(0, Math.min(e.clientY - mr.top  - _pvOY, mr.height - launchDiv.offsetHeight));
            launchDiv.style.left   = newLeft + 'px';
            launchDiv.style.top    = newTop  + 'px';
            launchDiv.style.bottom = 'auto';
        });
        document.addEventListener('mouseup', function () {
            if (!_pvDragging) return;
            _pvDragging = false;
            launchDiv.style.cursor = 'grab';
            if (_pvMoved) {
                try {
                    localStorage.setItem('WME_PIE_photoViewerPos',
                                         JSON.stringify({ top: launchDiv.style.top, left: launchDiv.style.left }));
                } catch (e) {}
            }
        });

        // Restore saved position
        try {
            const _pvSaved = JSON.parse(localStorage.getItem('WME_PIE_photoViewerPos'));
            if (_pvSaved?.top != null && _pvSaved?.left != null) {
                launchDiv.style.top    = _pvSaved.top;
                launchDiv.style.left   = _pvSaved.left;
                launchDiv.style.bottom = 'auto';
            }
        } catch (e) {}

        /**
         * Keep PhotoViewer button within map bounds when window resizes
         * Prevents button from disappearing off-screen on smaller viewports
         */
        window.addEventListener('resize', function () {
            const mapEl = document.querySelector(WME_DOM.map);
            if (!mapEl || !launchDiv) return;

            // Only constrain if button has explicit positioning (was dragged)
            if (launchDiv.style.top === '' || launchDiv.style.left === '') return;

            const mr = mapEl.getBoundingClientRect();
            const currentLeft = parseFloat(launchDiv.style.left) || 0;
            const currentTop = parseFloat(launchDiv.style.top) || 0;

            // Clamp position to map bounds with padding
            const padding = 10;
            const newLeft = Math.max(padding, Math.min(currentLeft, mr.width - launchDiv.offsetWidth - padding));
            const newTop = Math.max(padding, Math.min(currentTop, mr.height - launchDiv.offsetHeight - padding));

            launchDiv.style.left = newLeft + 'px';
            launchDiv.style.top = newTop + 'px';
        });

        $('#sortBy')[0].value = settings.sortBy;
        $('#sortOrder')[0].value = settings.sortOrder;
        setChecked('photoViewerPreserveLayout', settings.PhotoViewerPreserveLayout);
        setChecked('photoViewerShowHiddenPlaces', settings.PhotoViewerShowHiddenPlaces);

        $('#photoViewerSave').click(async function () {
            settings.sortBy = $('#sortBy')[0].value;
            settings.sortOrder = $('#sortOrder')[0].value;
            settings.PhotoViewerPreserveLayout = isChecked('photoViewerPreserveLayout');
            settings.PhotoViewerShowHiddenPlaces = isChecked('photoViewerShowHiddenPlaces');
            saveSettings();
            $(optDiv).css('display', 'none');
            Photos_scan();
        });
    }

    function togglePhotoViewerMouseEvent() {
        //if the Places category is not enabled or all of the Place options are not enabled, don't allow opening the viewer - nothing will display.
        if (
            !$('#layer-switcher-group_places').prop('checked') ||
            (!$('#layer-switcher-item_parking_places').prop('checked') && !$('#layer-switcher-item_residential_places').prop('checked') && !$('#layer-switcher-item_venues').prop('checked'))
        ) {
            $('#photoViewerButton').css('cursor', 'not-allowed');
            $('#photoViewerButton').attr('title', 'Enable the Places layers to use this tool');
            $('#launchDiv').addClass('pie-tip-off');
            $('#photoViewerButton').off();
        } else {
            $('#photoViewerButton').css('cursor', 'pointer');
            $('#photoViewerButton').attr('title', '');
            $('#launchDiv').removeClass('pie-tip-off');
            $('#photoViewerButton').unbind('click');
            $('#photoViewerButton').click(show_visio);
        }
    }

    function hide_visio() {
        $('#photoViewerMainDiv').css('display', 'none');
        $('#chat-overlay').css('display', 'block');
        $('#launchDiv').css('display', 'inline-block');
        $('#photoViewerZoom').remove();
    }
    function show_visio() {
        $('.save-popover-container').css('z-index', 1011);
        $('.changes-log-region').css('z-index', 1012);
        $('#photoViewerMainDiv').css('display', 'block');
        $('#chat-overlay').css('display', 'none');
        $('#launchDiv').css('display', 'none');
        Photos_scan();
    }

    function dynamicSort(property) {
        var sortOrder = 1;
        if (property[0] === '-') {
            sortOrder = -1;
            property = property.substr(1);
        }

        return function (a, b) {
            if (sortOrder == -1) {
                if (property === 'name') return (b.name ?? '').localeCompare(a.name ?? '');
                else if (property === 'ImageCount') return b.images.length - a.images.length;
                else return parseInt(b[property]) - parseInt(a[property]);
            } else {
                if (property === 'name') return (a.name ?? '').localeCompare(b.name ?? '');
                else if (property === 'ImageCount') return a.images.length - b.images.length;
                else return parseInt(a[property]) - parseInt(b[property]);
            }
        };
    }

    function Photos_scan() {
        catalog = [];
        const selectedIds = safeGetSelection()?.ids ?? [];
        const venues = sdk.DataModel.Venues.getAll();

        venues.sort(dynamicSort((settings.sortOrder === 'sortDesc' ? '-' : '') + settings.sortBy.substr(6)));
        for (let i = 0; i < venues.length; i++) {
            const venue = venues[i];
            if (!venue || venue.id === null || selectedIds.includes(venue.id)) continue;
            if (venue.images.length !== 0 && onScreen(venue)) catalog.push(venue.id);
        }
        Photos_show();
    }

    async function Photos_show() {
        $(WME_DOM.photoViewerResults).html('');
        let picCount = 0;
        let c = 0;
        for (let i = 0; catalog[i]; i++) {
            let venue = sdk.DataModel.Venues.getById({ venueId: catalog[i] });
            let myplace = await idbPVKeyval.get('Places', venue.id);
            let matchCount = 0;

            if (!settings.PhotoViewerShowHiddenPlaces) {
                if (typeof myplace !== 'undefined') {
                    for (let j = 0; j < venue.images.length; j++) {
                        if (myplace.placePicturesIDs.indexOf(venue.images[j].id) > -1) matchCount++;
                    }
                    if (matchCount === venue.images.length)
                        //if all images are in the "okayed" list, skip displaying this Place
                        continue;
                }
            }

            let venueDiv = document.createElement('div');
            $(venueDiv).css({
                float: 'left',
                'min-width': '200px',
                'min-height': '220px',  // instead of 'height': '220px'
                'height': 'auto',
                'overflow': 'hidden',
                margin: '0 10px 10px 0',
                padding: '5px',
                'border-radius': '10px',
                'background-color': 'black',
                color: 'white'
            });
            if (venue.approved) {
                venueDiv.style.border = '1px solid #26bae8';
                //venueDiv.title='This POI is approved';
            } else {
                venueDiv.style.border = '1px solid #f00';
                venueDiv.title = 'This POI is not approved';
            }
            if (venue.isAdLocked) {
                venueDiv.style.backgroundColor = '#600';
                venueDiv.title = I18n.translations[I18n.currentLocale()].objects.venue.fields.adLocked;
                //continue; Hide POI if it's adloacked (option)
            }
            $(WME_DOM.photoViewerResults).append(venueDiv);

            // POI's Name
            let venueName = document.createElement('span');
            venueName.style.float = 'left';
            venueName.innerHTML = venue.name;
            if (venue.categories[0] === 'RESIDENTIAL') {
                const address = sdk.DataModel.Venues.getAddress({ venueId: venue.id });
                venueName.innerHTML = `${address?.houseNumber ?? ''} ${address?.street?.name ?? ''}`.trim();
            }
            venueDiv.appendChild(venueName);

            if (venue.approved) {
                // Whitelist button
                let venueCheck = document.createElement('span');
                venueCheck.style.float = 'right';
                venueCheck.style.marginRight = '5px';
                venueCheck.style.cursor = 'pointer';
                venueCheck.innerHTML = '<i style="color:#fff;" class="fa fa-thumbs-up" title="Whitelist this Place\'s pictures"></i>';
                venueCheck.addEventListener(
                    'click',
                    (function (venue, venueDiv) {
                        return async function () {
                            await idbPVKeyval.set(`Places`, {
                                placeID: venue.id,
                                placeName: venue.name,
                                placePicturesIDs: venue.images.map(function (image) {
                                    if (image.isApproved) return image.id;
                                }),
                            });

                            if (!settings.PhotoViewerShowHiddenPlaces && ((matchCount > 0 && matchCount === venue.images.length) || matchCount == 0)) {
                                if (settings.PhotoViewerPreserveLayout) $(this).parent().css('visibility', 'hidden');
                                else $(this).parent().remove();
                                $('#placessqty').html($('#placessqty').html() - 1);
                                $('#imagesqty').html($('#imagesqty').html() - parseInt(venue.images.length));
                            } else if (settings.PhotoViewerShowHiddenPlaces) $(this).parent().find('.approvedImage.pvImage').css('border-color', '#fff'); //turn the border white on the images that are not in a PUR
                        };
                    })(venue, venueDiv),
                    false,
                );
                venueDiv.appendChild(venueCheck);
            } else {
                let purActions = document.createElement('span');
                purActions.style.float = 'right';
                purActions.style.marginRight = '5px';
                purActions.style.cursor = 'pointer';
                let purApprove = document.createElement('i');
                purApprove.className = 'fa fa-check';
                purApprove.title = 'Approve this PUR';
                purApprove.style.color = '#0f0';
                purApprove.venue = venue;
                purApprove.addEventListener(
                    'click',
                    function (evt) {
                        let ven = evt.target.venue;
                        sdk.DataModel.Venues.updateVenueUpdateRequest({ venueId: ven.id, venueUpdateRequestId: ven.venueUpdateRequests[0].id, isApproved: true });
                        $($(this).parent().parent()).css('border', '1px solid #0f0');
                        $($(this).parent().parent().find('img')).css('border', '1px solid #0f0');
                        $(this).parent().remove();
                    },
                    false,
                );
                purActions.appendChild(purApprove);

                let purReject = document.createElement('i');
                purReject.className = 'fa fa-times';
                purReject.title = 'Reject this PUR';
                purReject.style.color = '#f00';
                purReject.venue = venue;
                purReject.addEventListener(
                    'click',
                    function (evt) {
                        let ven = evt.target.venue;
                        sdk.DataModel.Venues.updateVenueUpdateRequest({ venueId: ven.id, venueUpdateRequestId: ven.venueUpdateRequests[0].id, isApproved: false });
                        $(this).parent().parent().remove();
                    },
                    false,
                );
                purActions.appendChild(purReject);

                venueDiv.appendChild(purActions);
            }

            // Check to localize POI
            let venuePos = document.createElement('span');
            venuePos.style.float = 'right';
            venuePos.style.margin = '0 5px';
            venuePos.style.cursor = 'pointer';
            venuePos.innerHTML = '<i style="color:#aaa;" class="fa fa-crosshairs" title="Geolocate and Select"></i>'; // title="'+ I18n.translations[I18n.currentLocale()].geolocation.focus-btn +'"
            venuePos.id = catalog[i];
            venuePos.addEventListener(
                'click',
                (function (geo, id) {
                    return function () {
                        hide_visio();
                        let venueList = [];
                        const v = sdk.DataModel.Venues.getById({ venueId: id });
                        if (v) venueList.push(v);

                        const center = turf.centroid(geo).geometry.coordinates;
                        sdk.Map.setMapCenter({ lonLat: { lon: center[0], lat: center[1] } });
                        sdk.Map.setZoomLevel({ zoomLevel: settings.PlaceZoom });
                        sdk.Editing.clearSelection();
                        sdk.Editing.setSelection({ selection: { ids: venueList.map((v) => v.id || v), objectType: 'venue' } });
                    };
                })(venue.geometry, catalog[i]),
                false,
            );
            venueDiv.appendChild(venuePos);
            let tmp = document.createElement('div');
            tmp.style.clear = 'both';
            venueDiv.appendChild(tmp);

            let venueLock = document.createElement('div');
            venueLock.innerHTML = `<span style="font-size:10px; color:#aaa;">${I18n.translations[I18n.currentLocale()].edit.segment.fields.lock}: ${venue.lockRank + 1}</span>`;
            venueDiv.appendChild(venueLock);
            //Show differents categories
            let venueCat = document.createElement('div');
            for (let j = 0; I18n.translations[I18n.currentLocale()].venues.categories[venue.categories[j]]; j++)
                venueCat.innerHTML += `<span style="font-size:10px;color:#aaa;">${I18n.translations[I18n.currentLocale()].venues.categories[venue.categories[j]]}${j < venue.categories.length - 1 ? ',' : ''} </span>`;

            venueCat.innerHTML += '<div style="clear:both;"></div>';
            venueDiv.appendChild(venueCat);

            //Show differents images
            for (let k = 0; venue.images[k]; k++) {
                const img = venue.images[k];
                let imgDIV = document.createElement('div');
                imgDIV.id = img.id;
                $(imgDIV).addClass('pvImage');
                $(imgDIV).css({ float: 'left', 'padding-right': '3px' });
                if (k > 0) $(imgDIV).css('margin-left', '5px');
                let venueImg = document.createElement('img');
                $(venueImg).css({ float: 'left', 'max-width': '180px', height: '140px', margin: '5px', cursor: 'pointer' });
                venueImg.src = 'https://venue-image.waze.com/thumbs/thumb347_' + img.id;
                if (img.isApproved === true) {
                    let picIsWhitelisted = typeof myplace !== 'undefined' && myplace.placePicturesIDs.indexOf(img.id) > -1;
                    imgDIV.style.border = `1px solid ${picIsWhitelisted ? '#fff' : '#0f0'}`;
                    imgDIV.style.borderRadius = '8px';
                    imgDIV.style.boxShadow = `0 0 10px ${picIsWhitelisted ? 'rgba(255,255,255,0.3)' : 'rgba(0,255,0,0.3)'}`;

                    $(imgDIV).addClass('approvedImage');
                    if (picIsWhitelisted) imgDIV.title = 'This image has been whitelisted';
                } else {
                    imgDIV.style.border = '1px solid #f00';
                    imgDIV.style.borderRadius = '8px';
                    imgDIV.style.boxShadow = '0 0 10px rgba(255,0,0,0.3)';
                    imgDIV.title = 'This image is not approved';
                }
                venueImg.addEventListener(
                    'click',
                    (function (imageid, venue, approved) {
                        return function () {
                            Photos_zoom(venue, imageid, approved);
                            sdk.Editing.clearSelection();
                            $('#venue-edit-photos').css('display', 'block');
                            $(WME_DOM.venueEditGeneral).css('display', 'none');
                        };
                    })(img.id, venue, img.isApproved),
                    false,
                );

                if (img.isApproved) {
                    //Add a trash can icon to delete a picture if the picture is approved on the Place (not a PUR)
                    let deleteImg = document.createElement('i');
                    $(deleteImg).addClass('fa fa-trash-o');
                    $(deleteImg).css({ float: 'right', cursor: 'pointer', title: 'Delete photo' });
                    $(deleteImg).prop({ 'data-id': venue.id, 'data-imageID': img.id });
                    $(deleteImg).click(async function () {
                        let imageID = $(this).prop('data-imageID');
                        DeleteImage(venue, imageID);
                    });
                    imgDIV.appendChild(deleteImg);
                } else {
                    if (venue.approved) {
                        let purActions = document.createElement('span');
                        purActions.style.float = 'right';
                        purActions.style.marginRight = '5px';
                        purActions.style.cursor = 'pointer';
                        let purApprove = document.createElement('i');
                        purApprove.className = 'fa fa-check';
                        purApprove.title = 'Approve this picture';
                        purApprove.style.color = '#0f0';
                        purApprove.venue = venue;
                        purApprove.currImage = img.id;
                        purApprove.addEventListener(
                            'click',
                            function (evt) {
                                processPlacePUR(evt, true);
                                $($(this).parent().parent()).css('border', '1px solid #0f0');
                                $(this).parent().remove();
                            },
                            false,
                        );
                        purActions.appendChild(purApprove);

                        var br = document.createElement('br');
                        purActions.appendChild(br);

                        let purReject = document.createElement('i');
                        purReject.className = 'fa fa-times';
                        purReject.title = 'Reject this picture';
                        purReject.style.color = '#f00';
                        purReject.venue = venue;
                        purReject.currImage = img.id;
                        purReject.addEventListener(
                            'click',
                            function (evt) {
                                processPlacePUR(evt, false);
                                $(this).parent().remove();
                            },
                            false,
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
        $('#placessqty').html(c);
        $('#imagesqty').html(picCount);
    }

    function processPlacePUR(evt, approve) {
        let ven = evt.target.venue;
        let currImage = evt.target.currImage;
        let pur;
        let venURs = ven.venueUpdateRequests;
        for (let i = 0; i < venURs.length; i++) {
            if (venURs[i].updateType === 'ADD_IMAGE') {
                if (venURs[i].id === currImage) {
                    pur = venURs[i];
                    break;
                }
            }
        }
        if (pur) sdk.DataModel.Venues.updateVenueUpdateRequest({ venueId: ven.id, venueUpdateRequestId: pur.id, isApproved: approve });
    }

    function DeleteImage(venue, imageID) {
        sdk.DataModel.Venues.deleteImage({ venueId: venue.id, imageId: imageID });
        const remainingCount = venue.images.length - 1;
        if (remainingCount > 0) {
            if (settings.PhotoViewerPreserveLayout) $(`#${imageID}`).css('visibility', 'hidden');
            else $(`#${imageID}`).remove();
            $('#imagesqty').html($('#imagesqty').html() - 1);
        } else {
            if (settings.PhotoViewerPreserveLayout) $(`#${imageID}`).parent().css('visibility', 'hidden');
            else $(`#${imageID}`).parent().remove();
            $('#placessqty').html($('#placessqty').html() - 1);
            $('#imagesqty').html($('#imagesqty').html() - 1);
        }
    }

    function onScreen(obj) {
        if (obj && obj.geometry) return isInMapExtent(obj.geometry);
        return false;
    }

    function Photos_zoom(venue, id, approved) {
        let zoom = document.createElement('div');
        let zoomPicIndex = null;
        let images = venue.images;
        for (let i = 0; i < images.length; i++) {
            if (images[i].id === id) {
                zoomPicIndex = i;
                break;
            }
        }
        zoom.id = 'photoViewerZoom';
        $(zoom).css({ position: 'absolute', top: '0', width: '100%', height: '100%', 'z-index': '1011', 'background-color': 'rgb(0, 0, 0, 0.85)' });
        let imageDIV = document.createElement('div');
        $(imageDIV).css({ 'text-align': 'center', position: 'relative', top: '30px' });
        imageDIV.innerHTML = `<img id="zoomImage" style="border-radius:12px; border:2px solid ${approved ? '#0f0' : '#f00'};" src="https://venue-image.waze.com/thumbs/thumb700_${id}" />${approved ? '<i id="zoomDelete" class="fa fa-trash-o fa-lg" style="cursor:pointer; color:white; position:absolute; top:0; margin-left:7px;"></i>' : ''}`;
        zoom.appendChild(imageDIV);

        let zoomDateDiv = document.createElement('div');
        zoomDateDiv.setAttribute('id', 'zoomDate');
        $(zoomDateDiv).css({ 'text-align': 'center', position: 'relative', top: '30px', color: 'white' });
        let d = new Date(images[zoomPicIndex].creationDate);
        zoomDateDiv.innerHTML = `${d.toLocaleString()}`;
        zoom.appendChild(zoomDateDiv);

        if (venue.images.length > 1) {
            let zoomNavDiv = document.createElement('div');
            $(zoomNavDiv).css({ 'text-align': 'center', position: 'relative', top: '30px' });
            zoomNavDiv.innerHTML =
                '<a href="#" id="zoomPrev" style="text-decoration: none; display: inline-block; background-color: #ddd; padding: 8px 16px; font-size:18px;">&#8249;</a><a href="#" id="zoomNext" style="text-decoration: none; display: inline-block; background-color: #ddd; padding: 8px 16px; font-size:18px;">&#8250;</a>';
            zoom.appendChild(zoomNavDiv);
        }

        zoom.onclick = function () {
            zoom.remove();
        };
        $(WME_DOM.map).append(zoom);
        $('#zoomDelete').click(async function () {
            DeleteImage(venue, id);
        });

        $('#zoomPrev').click(async function () {
            if (zoomPicIndex > 0) {
                zoomPicIndex--;
                $('#zoomImage').attr('src', `https://venue-image.waze.com/thumbs/thumb700_${images[zoomPicIndex].id}`);
                id = images[zoomPicIndex].id;
                let d = new Date(images[zoomPicIndex].creationDate);
                $('#zoomDate').text(d.toLocaleString());
            }
            event.stopPropagation();
        });

        $('#zoomNext').click(async function () {
            if (zoomPicIndex < images.length - 1) {
                zoomPicIndex++;
                $('#zoomImage').attr('src', `https://venue-image.waze.com/thumbs/thumb700_${images[zoomPicIndex].id}`);
                id = images[zoomPicIndex].id;
                let d = new Date(images[zoomPicIndex].creationDate);
                $('#zoomDate').text(d.toLocaleString());
            }
            event.stopPropagation();
        });
    }

    function PlaceMenuShortcut(itemNum) {
        const cat = settings.NewPlacesList[itemNum - 1];
        if (!cat || cat === 'NONE') return;
        // Parking lots and gas stations are always area; everything else defaults to point
        const isPoint = cat !== 'PARKING_LOT' && cat !== 'GAS_STATION';
        if (hasPlaceSelected()) {
            //add the category to the Place
            const selected = getSelectedFeatures()[0];
            const newCategories = [].concat(selected.categories);
            if (selected.categories.indexOf(cat) === -1) {
                //if the category isn't already on the Place, add it
                newCategories.push(cat);
                sdk.DataModel.Venues.updateVenue({ venueId: selected.id, categories: newCategories });
            }
        } else {
            //start new Place placement mode
            startPlacementMode(cat, isPoint);
        }
    }

    function AddHoursParserInterface() {
        if (hasPlaceSelected()) {
            var $PIEHoursParser = $('<div>', { style: 'min-height:20px' });
            if (!$('#PIEHoursParserDiv').length) {
                $PIEHoursParser.html(
                    '<div id="PIEHoursParserDiv" style="background:var(--surface_default);border-radius:8px;padding:var(--space-xs) var(--space-s);margin:var(--space-xs) 0;">' +
                    '<div style="font-size:10px;font-weight:600;letter-spacing:.8px;text-transform:uppercase;color:var(--content_p3);padding-bottom:var(--space-xxs);margin-bottom:var(--space-xs);border-bottom:1px solid var(--hairline);">Place Interface Enhancements \u2014 Hours Parser</div>' +
                    '<textarea id="PIE-hourspaste" placeholder="' +
                    I18n.t('pie.hoursParser.defaultText') +
                    '" wrap="off" autocomplete="off" style="display:block;width:100%;box-sizing:border-box;font-size:0.85em;height:28px;min-height:28px;max-height:300px;padding:4px 6px;color:var(--content_default);background:var(--surface_elevated);border:1px solid var(--hairline);border-radius:4px;resize:vertical;overflow:auto;margin-bottom:var(--space-xxs);"></textarea>' +
                    '<div style="display:flex;gap:4px;">' +
                    '<input class="btn btn-default btn-xs" id="PIEAppendHours" title="' +
                    I18n.t('pie.hoursParser.AddHoursTitle') +
                    '" type="button" value="' +
                    I18n.t('pie.hoursParser.AddHours') +
                    '" style="flex:1;">' +
                    '<input class="btn btn-default btn-xs" id="PIEReplaceHours" title="' +
                    I18n.t('pie.hoursParser.ReplaceHoursTitle') +
                    '" type="button" value="' +
                    I18n.t('pie.hoursParser.ReplaceHours') +
                    '" style="flex:1;">' +
                    '</div>' +
                    '<span id="PIEHoursParserError" style="display:block;color:var(--alarming);font-size:12px;margin-top:var(--space-xxs);"></span>' +
                    '</div>',
                );
                var appendDiv = function (attempt) {
                    attempt = attempt || 1;
                    var $target = $('wz-button.opening-hours-add');
                    if ($target.length === 0) {
                        if (attempt <= 10)
                            setTimeout(function () {
                                appendDiv(attempt + 1);
                            }, 100);
                        return;
                    }
                    $target.after($PIEHoursParser.html());
                    $('#PIEAppendHours').click(async function () {
                        addHours(false);
                    });
                    $('#PIEReplaceHours').click(async function () {
                        addHours(true);
                    });
                    // Enter = Add hours, shift || ctrl + Enter = new line
                    $('#PIE-hourspaste').keydown(function (event) {
                        if (event.keyCode === 13) {
                            if (event.ctrlKey) {
                                // Simulate a newline event (shift + enter)
                                var text = this.value;
                                var selStart = this.selectionStart;
                                this.value = text.substr(0, selStart) + '\n' + text.substr(this.selectionEnd, text.length - 1);
                                this.selectionStart = selStart + 1;
                                this.selectionEnd = selStart + 1;
                                return true;
                            } else if (!(event.shiftKey || event.ctrlKey) && $('#PIE-hourspaste').val() !== '') {
                                event.stopPropagation();
                                event.preventDefault();
                                event.returnValue = false;
                                event.cancelBubble = true;
                                addHours(false);
                                return false;
                            }
                        }
                    });
                };
                delayFire(300, appendDiv);
            }
        }
    }

    function addHours(replaceAll = false) {
        var pasteHours = $('#PIE-hourspaste').val();
        if (pasteHours.trim() === '') return;

        if (!I18n.translations[I18n.locale].date.day_names) {
            I18n.translations[I18n.locale].date.day_names = [];
            _.forOwn(I18n.translations[I18n.locale].date, (v, k) => {
                if (k.indexOf('day_names_') > -1) {
                    I18n.translations[I18n.locale].date.day_names.push(v);
                }
            });
        }

        var englishNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
        var lngDate = I18n.translations[I18n.locale].date.day_names.map(function (value) {
            return value.toLowerCase();
        });
        var lngFullDate = I18n.translations[I18n.locale].date.abbr_day_names.map(function (value) {
            return value.toLowerCase();
        });
        for (var i = 0; i < englishNames.length; i++) {
            pasteHours = pasteHours.replace(lngDate[i], englishNames[i]);
            pasteHours = pasteHours.replace(lngFullDate[i], englishNames[i]);
        }

        if (!replaceAll) pasteHours = pasteHours + ',' + getOpeningHours(getSelectedFeatures()[0]).join(',');
        var parserResult = hoursparser.parseHours(pasteHours);
        if (parserResult.hours && parserResult.overlappingHours === false && parserResult.sameOpenAndCloseTimes === false && parserResult.parseError === false) {
            sdk.DataModel.Venues.updateVenue({ venueId: getSelectedPlace().id, openingHours: parserResult.hours });
            $('#PIE-hourspaste').css({ 'border-color': '' });
            $('#PIEHoursParserError').empty();
        } else {
            $('#PIE-hourspaste').css({ 'border-color': 'var(--alarming)' });
            if (parserResult.overlappingHours) $('#PIEHoursParserError').text(I18n.t('pie.hoursParser.errorOverlappingHours'));
            else if (parserResult.sameOpenAndCloseTimes) $('#PIEHoursParserError').text(I18n.t('pie.hoursParser.errorSameOpenClose'));
            else $('#PIEHoursParserError').text(I18n.t('pie.hoursParser.errorCannotParse'));
        }
    }

    //******* Taken from WMEPH for hours parsing
    // Formats "hour object" into a string.
    function formatOpeningHour(hourEntry) {
        var dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        var hours = hourEntry.fromHour + '-' + hourEntry.toHour;
        return hourEntry.days.map((day) => dayNames[day] + ' ' + hours).join(', ');
    }

    // Pull natural text from opening hours
    function getOpeningHours(venue) {
        return venue && venue.openingHours && venue.openingHours.map(formatOpeningHour);
    }

    function changeGeoHandleStyle(radius) {
        // WME renders geometry editing handles as SVG <circle> elements with OL-prefixed IDs.
        // Inject a <style> to resize them via CSS instead of poking OL internals.
        $('#pieGeoHandleStyle').remove();
        if (radius > 6) {
            $('<style id="pieGeoHandleStyle">').text(`circle[id^="OpenLayers_Geometry_Point_"][fill="white"][r="6"] { r: ${radius}px !important; }`).appendTo('head');
        }
    }

    function UpdatePlaceFilter() {
        const filterText = $('#piePlaceFilter').val().trim();
        pieFilterRegex = filterText ? new RegExp(filterText, 'ig') : null;
        pieFilterHideMode = $('#_rbHidePlaces').prop('checked');
        sdk.Map.redrawLayer({ layerName: 'venues' });
        DisplayPlaceNames();
    }

    function ToggleHideAreaPlaces() {
        pieHideAreaEnabled = !pieHideAreaEnabled;
        sdk.Map.redrawLayer({ layerName: 'venues' });
        DisplayPlaceNames();
    }

    /**
     * Draw visual indicators connecting a venue's navigation point to the nearest road segment
     *
     * Uses NavPointManager for cached calculations (PR #31 optimization). Draws two sets of lines:
     * 1. From venue center to "raw" navigation point (if explicit nav point or polygon centroid)
     * 2. From raw nav point to on-segment nav point (closest point on nearest road)
     *
     * Only draws when map zoom level >= 16 to avoid clutter at lower zoom levels.
     * Returns silently if no nearby segments found (guard against null coordinates).
     *
     * Note: Made synchronous in PR #31 (removed unnecessary async/await).
     *
     * @param {Object} sdkVenue - SDK Venue object with geometry and navigationPoints properties
     */
    function drawNavPointClosestSegmentLines(sdkVenue) {
        try {
            if (sdk.Map.getZoomLevel() < 16) return;
            const isArea = sdkVenue.geometry.type === 'Polygon';

            const navPoint = navPointManager.getVenueRawNavPoint(sdkVenue);
            const targetNavPoint = navPointManager.getVenueOnSegmentNavPoint(sdkVenue);

            // Guard against null returns
            if (!navPoint || !targetNavPoint) return;

            sdk.Map.addFeaturesToLayer({
                layerName: _PIE_SHOW_STOP_POINTS_LAYER,
                features: [
                    turf.lineString([navPoint.coordinates, targetNavPoint.coordinates], { styleName: 'lineStyleToClosestSeg' }, { id: 'pie_hover_line_to_seg' }),
                    turf.point(targetNavPoint.coordinates, { styleName: 'pointStyle' }, { id: 'pie_hover_pt_seg' }),
                ],
            });

            //place center to nav point
            const startPt = isArea ? turf.centroid(sdkVenue.geometry).geometry : sdkVenue.geometry;
            if ((sdkVenue.navigationPoints && sdkVenue.navigationPoints.length > 0) || isArea) {
                sdk.Map.addFeaturesToLayer({
                    layerName: _PIE_SHOW_STOP_POINTS_LAYER,
                    features: [
                        turf.lineString([startPt.coordinates, navPoint.coordinates], { styleName: 'lineStyleToNavPoint' }, { id: 'pie_hover_line_to_nav' }),
                        turf.point(navPoint.coordinates, { styleName: 'pointStyleNavPoint' }, { id: 'pie_hover_pt_nav' }),
                    ],
                });
            }
        } catch (err) {
            console.error(err.message);
        }
    }

    function ObjectsChanged() {
        if (placeIsPoint && safeGetSelection()?.objectType === 'venue') {
            removeDragCallbacks();
            checkSelection();
        }
    }

    function clearClosesetSegmentLayerFeatures() {
        sdk.Map.removeAllFeaturesFromLayer({ layerName: _PIE_CLOSEST_SEGMENT_LAYER });
    }

    function checkConditions() {
        const sel = safeGetSelection();
        const a = sdk.Map.getZoomLevel() > 15,
              b = sdk.Map.isLayerVisible({ layerName: 'venues' }),
              c = sdk.Map.isLayerVisible({ layerName: _PIE_CLOSEST_SEGMENT_LAYER }),
              d = !$('#map-lightbox > div').is(':visible'),
              e = sel !== null && sel.objectType !== 'bigJunction';
        return a && b && c && d && e;
    }

    // start, end: WGS84 GeoJSON Point geometries; lStyle, pStyle: styleName strings
    function drawLine(start, end, lStyle, pStyle) {
        sdk.Map.addFeaturesToLayer({
            layerName: _PIE_CLOSEST_SEGMENT_LAYER,
            features: [
                turf.lineString([start.coordinates, end.coordinates], { styleName: lStyle }, { id: 'pie_closest_line' }),
                turf.point(end.coordinates, { styleName: pStyle }, { id: 'pie_closest_pt' }),
            ],
        });
    }

    /**
     * Draw a line from a navigation point to the nearest road segment
     *
     * Finds the closest segment to the provided point and draws a line + point marker
     * connecting them on the map's PIE_CLOSEST_SEGMENT_LAYER. Clears any previous features
     * before drawing the new line.
     *
     * Note: Made synchronous in PR #31 (removed unnecessary async/await).
     *
     * @param {Object} navPointGeoJSON - WGS84 GeoJSON Point geometry {type:'Point', coordinates:[lon,lat]}
     * @param {boolean} [ignorePLR=false] - If true, skip parking lot roads (roadType 20)
     * @param {boolean} [ignorePrivate=false] - If true, skip private roads (roadType 17)
     */
    function drawNearestLanding(navPointGeoJSON, ignorePLR = false, ignorePrivate = false) {
        const closestSegment = findClosestSegmentTurf(navPointGeoJSON, ignorePLR, ignorePrivate);
        if (!closestSegment) return;
        clearClosesetSegmentLayerFeatures();
        drawLine(navPointGeoJSON, closestSegment.closestPoint, 'lineStyleToClosestSeg', 'pointStyle');
    }

    var placeIsPoint = false;
    function checkSelection() {
        if (!checkConditions()) {
            removeDragCallbacks();
            return;
        }

        setTimeout(() => {
            const selected = safeGetSelection();
            if (selected === null) {
                removeDragCallbacks();
                clearClosesetSegmentLayerFeatures();
                return;
            }
            if (selected.objectType !== 'venue') {
                removeDragCallbacks();
                clearClosesetSegmentLayerFeatures();
                return;
            }

            const selectedVenue = sdk.DataModel.Venues.getById({ venueId: selected.ids[0] });
            if (!selectedVenue) return;

            placeIsPoint = selectedVenue.geometry.type === 'Point';
            if (placeIsPoint) {
                // WGS84 GeoJSON Point geometry — use nav point if available, else venue geometry
                let entryExitPoint = selectedVenue.geometry;
                if (selectedVenue.navigationPoints && selectedVenue.navigationPoints.length > 0) entryExitPoint = selectedVenue.navigationPoints[0].point;
                drawNearestLanding(entryExitPoint);
            } else {
                // Area place
                if (!selectedVenue.navigationPoints || selectedVenue.navigationPoints.length === 0) drawNearestLanding(turf.centroid(selectedVenue.geometry).geometry);
                else {
                    for (let i = 0; i < selectedVenue.navigationPoints.length; i++) drawNearestLanding(selectedVenue.navigationPoints[i].point);
                }
            }
        }, 0);
    }

    function removeDragCallbacks() {
        clearClosesetSegmentLayerFeatures();
    }

    function initColorPicker() {
        $('#colorPickerFont').val(settings.PlaceNameFontColor).on('change', colorPickerChanged);
        $('#colorPickerFontOutline').val(settings.PlaceNameFontOutline).on('change', colorPickerChanged);
    }

    function colorPickerChanged() {
        settings.PlaceNameFontColor = $('#colorPickerFont').val();
        settings.PlaceNameFontOutline = $('#colorPickerFontOutline').val();
        saveSettings();
        DisplayPlaceNames();
    }

    function registerEvents(handler) {
        eventHandlers.selection = () => handler();
        eventHandlers.undo = () => handler();
        eventHandlers.redoClear = () => handler();
        eventHandlers.afterEdit = () => handler();

        sdk.Events.on({
            eventName: 'wme-selection-changed',
            eventHandler: eventHandlers.selection,
        });
        sdk.Events.on({
            eventName: 'wme-after-undo',
            eventHandler: eventHandlers.undo,
        });
        sdk.Events.on({
            eventName: 'wme-after-redo-clear',
            eventHandler: eventHandlers.redoClear,
        });
        sdk.Events.on({
            eventName: 'wme-after-edit',
            eventHandler: eventHandlers.afterEdit,
        });
    }

    function unregisterEvents(handler) {
        if (eventHandlers.selection) {
            sdk.Events.off({
                eventName: 'wme-selection-changed',
                eventHandler: eventHandlers.selection,
            });
        }
        if (eventHandlers.undo) {
            sdk.Events.off({
                eventName: 'wme-after-undo',
                eventHandler: eventHandlers.undo,
            });
        }
        if (eventHandlers.redoClear) {
            sdk.Events.off({
                eventName: 'wme-after-redo-clear',
                eventHandler: eventHandlers.redoClear,
            });
        }
        if (eventHandlers.afterEdit) {
            sdk.Events.off({
                eventName: 'wme-after-edit',
                eventHandler: eventHandlers.afterEdit,
            });
        }

        delete eventHandlers.selection;
        delete eventHandlers.undo;
        delete eventHandlers.redoClear;
        delete eventHandlers.afterEdit;
    }

    function DisplayPlaceNames() {
        sdk.Map.removeAllFeaturesFromLayer({ layerName: 'PIEPlaceNameLayer' });
        const showNames = isChecked('_cbShowPlaceNames');
        const showPoint = isChecked('_cbShowPlaceNamesPoint');
        const showArea = isChecked('_cbShowPlaceNamesArea');
        const showLock = isChecked('_cbShowPlaceNamesLock');
        const showPLA = isChecked('_cbShowPlaceNamesPLA');

        if (showNames) {
            for (const venue of sdk.DataModel.Venues.getAll()) {
                const isPoint = venueIsPoint(venue);
                if ((isPoint && sdk.Map.getZoomLevel() >= 17) || (!isPoint && sdk.Map.getZoomLevel() >= 15)) {
                    if (isInMapExtent(venue.geometry)) {
                        if ((isPoint && showPoint) || (!isPoint && showArea && !venueIsParkingLot(venue)) || (!isPoint && showPLA && venueIsParkingLot(venue))) {
                            const placeFilter = $('#piePlaceFilter').val();
                            if (placeFilter.length > 0) {
                                const nameMatch = RegExp($('#piePlaceFilter').val(), 'ig').exec(venue.name || '');
                                if (nameMatch && $('#_rbHidePlaces').prop('checked')) continue;
                                if (!nameMatch && !$('#_rbHidePlaces').prop('checked')) continue;
                            }

                            const textLoc = isPoint ? venue.geometry : turf.centroid(venue.geometry).geometry;
                            const lockStr = showLock ? ' (L' + ((venue.lockRank ?? 0) + 1) + ')' : '';
                            let placeName = WordWrap((venue.name || '').trim() + lockStr);

                            if (venue.categories && venue.categories[0] === 'RESIDENTIAL') {
                                const houseNum = sdk.DataModel.Venues.getAddress({ venueId: venue.id })?.houseNumber || '';
                                placeName = houseNum + ((venue.name || '').trim() !== '' ? ' - ' + (venue.name || '') : '') + lockStr;
                            }
                            const placeNameLabel = turf.point(
                                textLoc.coordinates,
                                {
                                    styleName: 'placeNameLabel',
                                    style: {
                                        display: 'block',
                                        label: placeName.trim(),
                                        labelYOffset: isPoint ? -13 - placeName.split('\n').length * 5 : 0,
                                        fontWeight: settings.PlaceNameFontBold ? 'bold' : '',
                                        fontSize: Number.parseInt(settings.PlaceNameFontSize),
                                        labelOutlineWidth: settings.PlaceNameFontOutlineWidth,
                                        fontColor: settings.PlaceNameFontColor,
                                        labelOutlineColor: settings.PlaceNameFontOutline,
                                    },
                                },
                                { id: `placeNameLabelPoint_${placeName.trim()}` },
                            );
                            sdk.Map.addFeatureToLayer({ feature: placeNameLabel, layerName: 'PIEPlaceNameLayer' });
                        }
                    }
                }
            }
        }
    }

    function WordWrap(text) {
        var newName = '';

        if (text !== '') {
            var splitName = text.match(/(.{1,35})(?:\s|$)/g);
            for (var i = 0; i < splitName.length; i++) newName += splitName[i] + (i != splitName.length - 1 ? '\n' : '');
        }
        return newName;
    }

    var newPlaceCategory = '';
    async function startPlacementMode(category, isPoint) {
        if (category === 'PARKING_LOT') {
            if (!$('#layer-switcher-item_parking_places').prop('checked')) {
                if (!$('#layer-switcher-group_places').prop('checked')) $('#layer-switcher-group_places').trigger('click');
                $('#layer-switcher-item_parking_places').trigger('click');
            }
        } else if (category === resCategory) {
            if (!$('#layer-switcher-item_residential_places').prop('checked')) {
                if (!$('#layer-switcher-group_places').prop('checked')) $('#layer-switcher-group_places').trigger('click');
                $('#layer-switcher-item_residential_places').trigger('click');
            }
        }
        newPlaceCategory = category;
        if (isPoint) {
            const geo = await sdk.Map.drawPoint();
            endPlacementMode(geo, category, isPoint);
        } else {
            sdk.Map.drawPolygon().then((coordinates) => {
                doneHandler(coordinates);
            });
        }
        document.addEventListener('keyup', keyUpHandler, false);
    }

    function doneHandler(geom) {
        createPlace(geom, newPlaceCategory, false);
    }

    function keyUpHandler(e) {
        if (e.keyCode == 27) {
            disablePlacementMode();
        }
    }

    function disablePlacementMode() {
        document.removeEventListener('keyup', keyUpHandler);
    }

    function endPlacementMode(geometry, category, isPoint) {
        disablePlacementMode();
        createPlace(geometry, category, isPoint);
    }

    async function createPlace(geometry, category, _isPoint) {
        const sdkCategory = category;
        const newPlaceId = sdk.DataModel.Venues.addVenue({ category: sdkCategory, geometry }).toString();

        if (category === resCategory) {
            sdk.DataModel.Venues.replaceNavigationPoints({
                navigationPoints: [{ isEntry: true, isPrimary: true, point: geometry }],
                venueId: newPlaceId,
            });
        }
        try { // setting lock to value its already at causes error, so catch error here and ignore.
            sdk.DataModel.Venues.updateVenue({ venueId: newPlaceId, lockRank: Number(settings.DefaultLockLevel) });
        } catch (e) {}


        const searchPoint = turf.centroid(geometry).geometry;
        // The Skip PLR & Skip Unnamed PR settings were merged. Passing SkipPLR for both. I did not change the function in case they are split in the future.
        const closestSeg = findClosestSegmentTurf(searchPoint, settings.SkipPLR, settings.SkipPLR);

        if (closestSeg) {
            const sdkSeg = closestSeg.segment;
            if (settings.UseCityFromClosestSeg || settings.UseStreetFromClosestSeg) {
                let streetId = sdkSeg.primaryStreetId;

                // Only apply alt city logic if UseCityFromClosestSeg is ON
                if (settings.UseCityFromClosestSeg && settings.UseAltCity) {
                    const primaryStreet = sdk.DataModel.Streets.getById({ streetId });
                    const primaryCity = sdk.DataModel.Cities.getById({ cityId: primaryStreet.cityId });
                    if (primaryCity.name === '' && sdkSeg.alternateStreetIds.length > 0) {
                        for (const altId of sdkSeg.alternateStreetIds) {
                            const altStreet = sdk.DataModel.Streets.getById({ streetId: altId });
                            const altCity = sdk.DataModel.Cities.getById({ cityId: altStreet.cityId });
                            if (altCity.name) {
                                const streetMatch = sdk.DataModel.Streets.getStreet({ cityId: altStreet.cityId, streetName: primaryStreet.name })?.id;
                                if (streetMatch) {
                                    streetId = streetMatch;
                                }
                                else {
                                    streetId = sdk.DataModel.Streets.addStreet({ cityId: altStreet.cityId, streetName: primaryStreet.name }).id;
                                }
                                break;
                            }
                        }
                    }
                }

                // Only update street if UseStreetFromClosestSeg is ON
                if (settings.UseStreetFromClosestSeg) {
                    sdk.DataModel.Venues.updateAddress({
                        venueId: newPlaceId,
                        streetId: streetId,
                        houseNumber: '',
                    });
                }
            }
        } else {
            console.log('WMEPIE - No segment found; cannot set street or city name.');
        }

        // Always open newly created places in Edit Mode (not View Mode)
        await new Promise((r) => setTimeout(r, 20));
        sdk.Editing.setSelection({ selection: { objectType: 'venue', ids: [newPlaceId] } });

        // Only activate address editor if EditRPPAfterCreated setting is ON
        if (settings.EditRPPAfterCreated) {
            setTimeout(editRPPAddress, 50);
        }
    }

    async function delayFire(ms, func) {
        await new Promise((r) => setTimeout(r, ms));
        func();
    }

    async function editRPPAddress(rppTries = 1) {
        if ($(WME_DOM.addressFullAddress).length > 0) {
            $(WME_DOM.addressFullAddress).trigger('click');
            await new Promise((r) => setTimeout(r, 150));
            $('input', $(WME_DOM.houseNumber)[0].shadowRoot).focus();
        } else if (rppTries < 1000) {
            console.log('WMEPIE: waiting for .full-address');
            setTimeout(async function () {
                editRPPAddress(++rppTries);
            }, 200);
        }
    }

    function buildItemOption(itemNumber) {
        return [
            `<div style="display:flex; align-items:center; padding:2px 4px; gap:6px;">`,
            `<span style="min-width:14px; text-align:right; color:#888; font-size:0.85em; flex-shrink:0;">${itemNumber}</span>`,
            buildItemList(itemNumber),
            `</div>`,
        ].join('');
    }

    function buildLockLevelsList() {
        var $lockLevels = $('<div>');
        for (var i = 0; i < sdk.State.getUserInfo()?.rank + 1; i++) $lockLevels.append('<option value=' + i + '>' + (i + 1) + '</option>');

        return $lockLevels.html();
    }

    function attachPlaceSizeHandlers() {
        areaHandlers.selection = () => updatePlaceSizeDisplay();
        areaHandlers.afterEdit = () => updatePlaceSizeDisplay();
        areaHandlers.undo = () => updatePlaceSizeDisplay();
        areaHandlers.redoClear = () => updatePlaceSizeDisplay();
        areaHandlers.noEdits = () => noActions();

        sdk.Events.on({
            eventName: 'wme-selection-changed',
            eventHandler: areaHandlers.selection,
        });
        sdk.Events.on({
            eventName: 'wme-after-edit',
            eventHandler: areaHandlers.afterEdit,
        });
        sdk.Events.on({
            eventName: 'wme-after-undo',
            eventHandler: areaHandlers.undo,
        });
        sdk.Events.on({
            eventName: 'wme-after-redo-clear',
            eventHandler: areaHandlers.redoClear,
        });
        sdk.Events.on({
            eventName: 'wme-no-edits',
            eventHandler: areaHandlers.noEdits,
        });

        updatePlaceSizeDisplay();
    }

    function removePlaceSizeHandlers() {
        if (areaHandlers.selection) {
            sdk.Events.off({
                eventName: 'wme-selection-changed',
                eventHandler: areaHandlers.selection,
            });
        }
        if (areaHandlers.afterEdit) {
            sdk.Events.off({
                eventName: 'wme-after-edit',
                eventHandler: areaHandlers.afterEdit,
            });
        }
        if (areaHandlers.undo) {
            sdk.Events.off({
                eventName: 'wme-after-undo',
                eventHandler: areaHandlers.undo,
            });
        }
        if (areaHandlers.redoClear) {
            sdk.Events.off({
                eventName: 'wme-after-redo-clear',
                eventHandler: areaHandlers.redoClear,
            });
        }
        if (areaHandlers.noEdits) {
            sdk.Events.off({
                eventName: 'wme-no-edits',
                eventHandler: areaHandlers.noEdits,
            });
        }

        Object.keys(areaHandlers).forEach((key) => delete areaHandlers[key]);
    }
    function openPUR() {
        if (!hasPlaceSelected()) return;
        const venue = getSelectedPlace();
        if (!venue || venue.venueUpdateRequests.length === 0) return;
        // wme-selection-changed fires before WME finishes rendering the sidebar.
        // Defer until the next event loop tick so wz-alert.sidebar-alert exists in the DOM.
        setTimeout(() => {
            // The "Review requests" button lives inside wz-alert's shadow DOM as a wz-button,
            // which in turn wraps a native <button> in its own shadow DOM.
            const wzAlert = document.querySelector(WME_DOM.sidebarAlert);
            const wzBtn = wzAlert?.shadowRoot?.querySelector('wz-button');
            const btn = wzBtn?.shadowRoot?.querySelector('button') ?? wzBtn;
            if (btn) btn.click();
        }, 300);
    }

    // Orthogonalizes a GeoJSON polygon's coordinate rings in-place.
    // geometry: GeoJSON polygon coordinates array (array of rings, each ring = [[lon,lat],...])
    // Returns the outer ring coordinate array after orthogonalization.
    function GeoJSONOrthogonalizeGeometry(geometry, threshold = 12) {
        const nomthreshold = threshold,
              lowerThreshold = Math.cos(((90 - nomthreshold) * Math.PI) / 180),
              upperThreshold = Math.cos((nomthreshold * Math.PI) / 180);

        function Orthogonalize() {

            let nodes = structuredClone(geometry[0]),
                points = nodes.slice(0, -1).map((n) => {
                    const p = [...n];
                    p[1] = lat2latp(p[1]);
                    return p;
                }),
                corner = { i: 0, dotp: 1 },
                epsilon = 1e-4,
                i,
                j,
                score,
                motions;

            if (points.length === 3) {
                for (i = 0; i < 1000; i++) {
                    motions = points.map(calcMotion);
                    const tmp = addPoints(points[corner.i], motions[corner.i]);
                    points[corner.i][0] = tmp[0];
                    points[corner.i][1] = tmp[1];
                    score = corner.dotp;
                    if (score < epsilon) break;
                }
                const n = points[corner.i];
                n[1] = latp2lat(n[1]);
                const id = nodes[corner.i].toString();
                for (i = 0; i < nodes.length; i++) {
                    if (nodes[i].toString() !== id) continue;
                    nodes[i][0] = n[0];
                    nodes[i][1] = n[1];
                }
                return nodes;
            }

            const originalPoints = nodes.slice(0, -1).map((n) => {
                const p = [...n];
                p[1] = lat2latp(p[1]);
                return p;
            });
            score = Number.POSITIVE_INFINITY;
            for (i = 0; i < 1000 && !(score < epsilon); i++) {
                motions = points.map(calcMotion);
                for (j = 0; j < motions.length; j++) {
                    const tmp = addPoints(points[j], motions[j]);
                    points[j][0] = tmp[0];
                    points[j][1] = tmp[1];
                }
                const newScore = squareness(points);
                if (newScore < score) score = newScore;
            }
            for (i = 0; i < points.length; i++) {
                if (originalPoints[i][0] !== points[i][0] || originalPoints[i][1] !== points[i][1]) {
                    const n = points[i];
                    n[1] = latp2lat(n[1]);
                    const id = nodes[i].toString();
                    for (j = 0; j < nodes.length; j++) {
                        if (nodes[j].toString() !== id) continue;
                        nodes[j][0] = n[0];
                        nodes[j][1] = n[1];
                    }
                }
            }
            for (i = 0; i < points.length; i++) {
                const dotp = normalizedDotProduct(i, points);
                if (dotp < -1 + epsilon) {
                    const id = nodes[i].toString();
                    for (j = 0; j < nodes.length; j++) {
                        if (nodes[j].toString() !== id) continue;
                        nodes[j] = false;
                    }
                }
            }
            return nodes.filter((item) => item !== false);

            function calcMotion(b, i, array) {
                let a = array[(i - 1 + array.length) % array.length],
                    c = array[(i + 1) % array.length],
                    p = subtractPoints(a, b),
                    q = subtractPoints(c, b),
                    scale,
                    dotp;
                scale = 2 * Math.min(euclideanDistance(p, [0, 0]), euclideanDistance(q, [0, 0]));
                p = normalizePoint(p, 1.0);
                q = normalizePoint(q, 1.0);
                dotp = filterDotProduct(p[0] * q[0] + p[1] * q[1]);
                if (array.length > 3) {
                    if (dotp < -Math.SQRT1_2) dotp += 1.0;
                } else if (dotp && Math.abs(dotp) < corner.dotp) {
                    corner.i = i;
                    corner.dotp = Math.abs(dotp);
                }
                return normalizePoint(addPoints(p, q), 0.1 * dotp * scale);
            }
        }

        function lat2latp(lat) {
            return (180 / Math.PI) * Math.log(Math.tan(Math.PI / 4 + (lat * (Math.PI / 180)) / 2));
        }
        function latp2lat(a) {
            return (180 / Math.PI) * (2 * Math.atan(Math.exp((a * Math.PI) / 180)) - Math.PI / 2);
        }
        function squareness(points) {
            return points.reduce((sum, _val, i, array) => {
                let dotp = filterDotProduct(normalizedDotProduct(i, array));
                return sum + 2.0 * Math.min(Math.abs(dotp - 1.0), Math.min(Math.abs(dotp), Math.abs(dotp + 1)));
            }, 0);
        }
        function normalizedDotProduct(i, points) {
            let a = points[(i - 1 + points.length) % points.length],
                b = points[i],
                c = points[(i + 1) % points.length],
                p = normalizePoint(subtractPoints(a, b), 1.0),
                q = normalizePoint(subtractPoints(c, b), 1.0);
            return p[0] * q[0] + p[1] * q[1];
        }
        function subtractPoints(a, b) {
            return [a[0] - b[0], a[1] - b[1]];
        }
        function addPoints(a, b) {
            return [a[0] + b[0], a[1] + b[1]];
        }
        function euclideanDistance(a, b) {
            const x = a[0] - b[0],
                  y = a[1] - b[1];
            return Math.sqrt(x * x + y * y);
        }
        function normalizePoint(point, scale) {
            const vector = [0, 0],
                  length = Math.sqrt(point[0] * point[0] + point[1] * point[1]);
            if (length !== 0) {
                vector[0] = point[0] / length;
                vector[1] = point[1] / length;
            }
            return [vector[0] * scale, vector[1] * scale];
        }
        function filterDotProduct(dotp) {
            if (lowerThreshold > Math.abs(dotp) || Math.abs(dotp) > upperThreshold) return dotp;
            return 0;
        }
        return Orthogonalize();
    }

    function OrthogonalizePlace() {
        const selected = safeGetSelection();
        if (selected?.objectType === 'venue') {
            const selectedVenue = sdk.DataModel.Venues.getById({ venueId: selected.ids[0] });
            if (selectedVenue?.geometry?.type === 'Polygon') {
                const newGeom = GeoJSONOrthogonalizeGeometry(selectedVenue.geometry.coordinates);
                if (!GeomArraysEqual(selectedVenue.geometry.coordinates[0], newGeom)) sdk.DataModel.Venues.updateVenue({ venueId: selected.ids[0], geometry: turf.polygon([newGeom]).geometry });
            }
        }
    }

    // Compare two GeoJSON outer-ring coordinate arrays ([lon,lat] pairs)
    function GeomArraysEqual(geom1, geom2) {
        if (geom1.length !== geom2.length) return false;
        for (let i = 0; i < geom1.length; i++) {
            if (different(geom1[i][0], geom2[i][0], 1e-6) || different(geom1[i][1], geom2[i][1], 1e-6)) return false;
        }
        return true;
    }

    function different(num1, num2, deltaLimit) {
        return Math.abs(num1 - num2) > Math.abs(deltaLimit);
    }

    function round(val, decimals) {
        let multiplier = 1;
        for (let i = 0; i < decimals; i++) multiplier *= 10;
        return Math.round(val * multiplier) / multiplier;
    }

    function SimplifyPlace() {
        const selected = safeGetSelection();
        if (!selected) return;
        if (selected.objectType === 'venue') {
            const venue = sdk.DataModel.Venues.getById({ venueId: selected.ids[0] });
            if (!venue || venue.geometry.type === 'Point') return;
            // Convert SimplifyFactor (Mercator meters) to approximate degrees
            const toleranceDeg = Number.parseFloat(settings.SimplifyFactor) / 111320;
            const newGeometry = turf.simplify(venue.geometry, { tolerance: toleranceDeg });
            sdk.DataModel.Venues.updateVenue({ venueId: selected.ids[0], geometry: newGeometry });
        }
        if (selected.objectType === 'mapComment') {
            const mc = sdk.DataModel.MapComments.getById({ mapCommentId: selected.ids[0] });
            if (!mc || mc.geometry.type === 'Point') return;
            const toleranceDeg = Number.parseFloat(settings.SimplifyFactor) / 111320;
            const newGeometry = turf.simplify(mc.geometry, { tolerance: toleranceDeg });
            sdk.DataModel.MapComments.updateComment({ mapCommentId: selected.ids[0], geometry: newGeometry });
        }
    }

    function ViewEditPlaceGeom() {
        $('#pieViewEditGeom').remove();
        const isMapComment = safeGetSelection()?.objectType === 'mapComment';
        const applyBtn = (id) => !isMapComment ? `<button class="pie-geom-apply-btn" id="${id}">Apply</button>` : '';
        var $section = $('<div>');
        $section.html(
            [
                '<div id="pieViewEditGeom" class="pie-geom-modal">',
                '<div class="pie-geom-modal-header">',
                '<span class="pie-geom-modal-title"><i class="fa fa-pencil-square-o"></i> Edit Geometry</span>',
                '<i class="fa fa-times pie-geom-modal-close" id="pieGeomClose" title="Close"></i>',
                '</div>',
                '<div class="pie-geom-modal-body">',
                '<div class="pie-geom-col">',
                '<div class="pie-geom-col-label">Standard <span class="pie-geom-col-hint">lat, lon</span></div>',
                `<textarea id="piePlaceGeomStandard" class="pie-geom-textarea" rows="15" spellcheck="false"></textarea>`,
                applyBtn('pieBtnApplyStandardGeom'),
                '</div>',
                '<div class="pie-geom-col">',
                '<div class="pie-geom-col-label">Waze <span class="pie-geom-col-hint">lon lat</span></div>',
                `<textarea id="piePlaceGeomWaze" class="pie-geom-textarea" rows="15" spellcheck="false"></textarea>`,
                applyBtn('pieBtnApplyWazeGeom'),
                '</div>',
                '<div class="pie-geom-col">',
                '<div class="pie-geom-col-label">WKT</div>',
                `<textarea id="piePlaceGeomWKT" class="pie-geom-textarea" rows="15" spellcheck="false"></textarea>`,
                applyBtn('pieBtnApplyWKTGeom'),
                '</div>',
                '</div>',
                '</div>',
            ].join(''),
        );

        $(WME_DOM.wazeMap).append($section.html());

        updateGeometryInputs();

        $('#pieBtnApplyStandardGeom').click(function () {
            const lines = $('#piePlaceGeomStandard').val().split('\n');
            const polygonGeometry = [];

            for (let i = 0; i < lines.length; i++) {
                if (lines[i].trim().length === 0) continue;
                if (!/^(-?\d*(?:\.\d*)?),\s?(-?\d*(?:\.\d*))$/.test(lines[i].trim())) {
                    WazeWrap.Alerts.error(GM_info.script.name, 'Incorrectly formatted coordinates');
                    return;
                }
                const coords = lines[i].trim().match(/^(-?\d*(?:\.\d*)?),\s?(-?\d*(?:\.\d*))$/);
                // Standard format is "lat, lon" — coords[1]=lat, coords[2]=lon
                polygonGeometry.push([parseFloat(coords[2]), parseFloat(coords[1])]);
            }

            saveNewPlaceGeometry(polygonGeometry);
            updateGeometryInputs();
            const $btn = $(this);
            $btn.text('✓ Applied').prop('disabled', true);
            setTimeout(() => { $btn.text('Apply').prop('disabled', false); }, 1500);
        });

        $('#pieBtnApplyWazeGeom').click(function () {
            const lines = $('#piePlaceGeomWaze').val().split('\n');
            const polygonGeometry = [];

            for (let i = 0; i < lines.length; i++) {
                if (lines[i].length > 0) {
                    lines[i] = lines[i].replace(/\t/, ' ');
                    if (!/^(-?\d*(?:\.\d*)?)\s+(-?\d*(?:\.\d*))$/.test(lines[i])) {
                        WazeWrap.Alerts.error(GM_info.script.name, 'Incorrectly formatted coordinates');
                        return;
                    }
                    const coords = lines[i].match(/^(-?\d*(?:\.\d*)?)\s+(-?\d*(?:\.\d*))$/);
                    // Waze format is "lon lat" — coords[1]=lon, coords[2]=lat
                    polygonGeometry.push([parseFloat(coords[1]), parseFloat(coords[2])]);
                }
            }

            saveNewPlaceGeometry(polygonGeometry);
            updateGeometryInputs();
            const $btn = $(this);
            $btn.text('✓ Applied').prop('disabled', true);
            setTimeout(() => { $btn.text('Apply').prop('disabled', false); }, 1500);
        });

        $('#pieBtnApplyWKTGeom').click(function () {
            const raw = $('#piePlaceGeomWKT').val().replace(/\s+/g, ' ').trim();
            const match = raw.match(/POLYGON\s*\(\s*(.*?)\s*\)/i);
            if (!match) {
                WazeWrap.Alerts.error(GM_info.script.name, 'Invalid WKT format');
                return;
            }
            const lines = match[1].split(',');
            const polygonGeometry = [];

            for (let i = 0; i < lines.length; i++) {
                if (!/^(-?\d*(?:\.\d*)?)\s(-?\d*(?:\.\d*))$/.test(lines[i].trim())) {
                    WazeWrap.Alerts.error(GM_info.script.name, 'Incorrectly formatted coordinates');
                    return;
                }
                const coords = lines[i].trim().match(/^(-?\d*(?:\.\d*)?)\s(-?\d*(?:\.\d*))$/);
                // WKT format is "lon lat" — coords[1]=lon, coords[2]=lat
                polygonGeometry.push([parseFloat(coords[1]), parseFloat(coords[2])]);
            }

            // WKT rings include the closing point (first == last) — strip it so
            // saveNewPlaceGeometry() doesn't double-close the ring.
            const first = polygonGeometry[0];
            const last = polygonGeometry[polygonGeometry.length - 1];
            if (first && last && first[0] === last[0] && first[1] === last[1]) polygonGeometry.pop();

            saveNewPlaceGeometry(polygonGeometry);
            updateGeometryInputs();
            const $btn = $(this);
            $btn.text('✓ Applied').prop('disabled', true);
            setTimeout(() => { $btn.text('Apply').prop('disabled', false); }, 1500);
        });

        $('#pieGeomClose').click(async function () {
            $('#pieViewEditGeom').remove();
        });
    }

    function saveNewPlaceGeometry(polygonGeometry) {
        if (polygonGeometry.length < 1) {
            WazeWrap.Alerts.error(GM_info.script.name, 'Unable to Parse Coordinates');
            return;
        }
        let newGeom;
        if (polygonGeometry.length === 1) {
            newGeom = turf.point(polygonGeometry[0]).geometry;
        } else if (polygonGeometry.length < 4) {
            WazeWrap.Alerts.error(GM_info.script.name, 'Malformed Polygon Supplied.');
            return;
        } else {
            polygonGeometry.push(structuredClone(polygonGeometry[0]));
            newGeom = turf.polygon([polygonGeometry]).geometry;
        }
        const selected = safeGetSelection();
        if (selected?.objectType === 'venue') {
            const selectedVenue = sdk.DataModel.Venues.getById({ venueId: selected.ids[0] });
            if (!selectedVenue) return;
            sdk.DataModel.Venues.updateVenue({ geometry: newGeom, venueId: selectedVenue.id });
        } else if (selected?.objectType === 'mapComment') {
            const mc = sdk.DataModel.MapComments.getById({ mapCommentId: selected.ids[0] });
            if (!mc) return;
            sdk.DataModel.MapComments.updateComment({ geometry: newGeom, mapCommentId: mc.id });
        }
    }

    function updateGeometryInputs() {
        const selection = safeGetSelection();
        let currentGeom;
        if (selection?.objectType === 'venue') {
            const selectedVenue = sdk.DataModel.Venues.getById({ venueId: selection.ids[0] });
            if (!selectedVenue || selectedVenue.geometry.type === 'Point') {
                console.error('No polygon geometry available for selected venue');
                return;
            }
            currentGeom = selectedVenue.geometry.coordinates[0];
        } else if (selection?.objectType === 'mapComment') {
            const mc = sdk.DataModel.MapComments.getById({ mapCommentId: selection.ids[0] });
            if (!mc || mc.geometry.type === 'Point') {
                console.error('No polygon geometry available for selected map comment');
                return;
            }
            currentGeom = mc.geometry.coordinates[0];
        } else {
            console.error('No venue or map comment selected for editing geometry');
            return;
        }

        let standardGeom = '',
            WMEGeom = '',
            WKTGeom = '';
        WKTGeom = 'POLYGON(';

        let coord;
        for (let i = 0; i < currentGeom.length; i++) {
            if (i > 0) {
                WKTGeom += ', ';
                if (i < currentGeom.length - 1) {
                    standardGeom += '\n';
                    WMEGeom += '\n';
                }
            }
            coord = currentGeom[i];
            if (i < currentGeom.length - 1) {
                standardGeom += `${coord[1]}, ${coord[0]}`;
                WMEGeom += `${coord[0]} ${coord[1]}`;
            }
            WKTGeom += `${coord[0]} ${coord[1]}`;
        }
        WKTGeom += ')';
        $('#piePlaceGeomWKT').val(WKTGeom);
        $('#piePlaceGeomStandard').val(standardGeom);
        $('#piePlaceGeomWaze').val(WMEGeom);
    }

    async function InsertGeometryMods() {
        $('#pieGeometryMods').remove();
        $('#pieViewEditGeom').remove(); //remove the Place geometry window when the option is disabled or a Place is de-selected
        if (!settings.GeometryMods) return;

        const selected = safeGetSelection();
        let geometry;
        if (selected?.objectType === 'mapComment') {
            const mc = sdk.DataModel.MapComments.getById({ mapCommentId: selected.ids[0] });
            if (mc) geometry = mc.geometry;
        }
        if (selected?.objectType === 'venue') {
            const venue = sdk.DataModel.Venues.getById({ venueId: selected.ids[0] });
            if (venue) geometry = venue.geometry;
        }

        if (geometry) {
            const isPoint = geometry.type === 'Point';
            const isMapComment = safeGetSelection()?.objectType === 'mapComment';
            if (isPoint && !isMapComment) return; // Geometry section is only for area places
            await new Promise((r) => setTimeout(r, 150));
            $('#pieGeometryMods').remove(); // re-remove after delay to handle concurrent calls
            let $GeomMods = $(
                `<div class="form-group" id="pieGeometryMods"><label class="control-label">Geometry</label><div class="controls">${!isMapComment && !isPoint ? '<i id="pieorthogonalize" title="Orthogonalize" class="fa fa-plus-square-o fa-2x" aria-hidden="true" style="cursor:pointer;"></i> <i id="piesimplifyplace" title="Simplify" class="fa fa-magic fa-2x" aria-hidden="true" style="cursor:pointer;"></i>' : ''} ${!isPoint ? '<i id="pierotate" title="Allow rotating the Place" class="fa fa-repeat fa-2x" aria-hidden="true" style="cursor:pointer; color:' + (settings.Rotate ? 'rgb(0,180,0)' : 'black') + '"></i> <i id="pieresize" title="Allow resizing the Place. While enabled the geometry cannot be modified" class="fa fa-expand fa-2x" aria-hidden="true" style="cursor:pointer; color:' + (settings.Resize ? 'rgb(0,180,0)' : 'black') + '"></i>' : ''} <i id="pieEditGeom" class="fa fa-pencil-square-o fa-2x" aria-hidden="true" style="cursor:pointer;"></i> <i id="pieClearGeom" title="Clear geometry" class="fa fa-times fa-2x" aria-hidden="true" style="cursor:pointer; color:red;"></i></div></div>`,
            );
            if (safeGetSelection()?.objectType === 'mapComment') {
                $GeomMods.css({ background: 'var(--surface_default)', 'border-radius': '8px', padding: 'var(--space-xs) var(--space-s)', margin: 'var(--space-xs) 0' });
                $GeomMods.prepend(
                    '<div style="font-size:10px;font-weight:600;letter-spacing:.8px;text-transform:uppercase;color:var(--content_p3);padding-bottom:var(--space-xxs);margin-bottom:var(--space-xs);border-bottom:1px solid var(--hairline);">Place Interface Enhancements</div>',
                );
                const $anchor = $(WME_DOM.mcTypesSection);
                if ($anchor.length) $anchor.after($GeomMods);
                else $(WME_DOM.mcAttributesForm).append($GeomMods);
            }
            else if ($(WME_DOM.venueAreaSize).length) {
                $GeomMods.css({ 'border-top': '1px solid var(--hairline)', 'margin-top': 'var(--space-xs)', 'padding-top': 'var(--space-xs)', 'margin-bottom': '0' });
                $(WME_DOM.venueAreaSize).append($GeomMods);
            } else {
                $GeomMods.css({ background: 'var(--surface_default)', 'border-radius': '8px', padding: 'var(--space-xs) var(--space-s)', margin: 'var(--space-xs) 0' });
                $GeomMods.prepend(
                    '<div style="font-size:10px;font-weight:600;letter-spacing:.8px;text-transform:uppercase;color:var(--content_p3);padding-bottom:var(--space-xxs);margin-bottom:var(--space-xs);border-bottom:1px solid var(--hairline);">Place Interface Enhancements</div>',
                );
                $(WME_DOM.venueExternalProviders).after($GeomMods);
            }

            $('#pieorthogonalize').click(async function () {
                OrthogonalizePlace();
            });

            $('#piesimplifyplace').click(async function () {
                SimplifyPlace();
            });

            $('#pieEditGeom').click(async function () {
                ViewEditPlaceGeom();
            });

            $('#pieClearGeom').click(async function () {
                const sel = safeGetSelection();
                if (!sel) return;
                if (sel.objectType === 'venue') {
                    const selectedVenue = sdk.DataModel.Venues.getById({ venueId: sel.ids[0] });
                    if (!selectedVenue || selectedVenue.geometry.type === 'Point') return;
                    // Replace with a small square (~20m radius) centred on the venue
                    const center = turf.centroid(selectedVenue.geometry);
                    const smallSquare = turf.circle(center, 0.02, { steps: 4, units: 'kilometers' });
                    sdk.DataModel.Venues.updateVenue({ venueId: selectedVenue.id, geometry: smallSquare.geometry });
                } else if (sel.objectType === 'mapComment') {
                    const mc = sdk.DataModel.MapComments.getById({ mapCommentId: sel.ids[0] });
                    if (!mc || mc.geometry.type === 'Point') return;
                    const center = turf.centroid(mc.geometry);
                    const smallSquare = turf.circle(center, 0.02, { steps: 4, units: 'kilometers' });
                    sdk.DataModel.MapComments.updateComment({ mapCommentId: mc.id, geometry: smallSquare.geometry });
                }
            });

            $('#pierotate').click(function () {
                settings.Rotate = !settings.Rotate;
                $('#pierotate').css('color', settings.Rotate ? 'rgb(0,180,0)' : 'black');
                saveSettings();
                if (settings.Rotate) sdk.Map.enablePolygonRotation();
                else {
                    try {
                        sdk.Map.disablePolygonRotation();
                    } catch (_) {}
                }
            });

            $('#pieresize').click(function () {
                settings.Resize = !settings.Resize;
                $('#pieresize').css('color', settings.Resize ? 'rgb(0,180,0)' : 'black');
                saveSettings();
                if (settings.Resize) sdk.Map.enablePolygonResize();
                else {
                    try {
                        sdk.Map.disablePolygonResize();
                    } catch (_) {}
                }
            });

            //activate the changes when a Place is selected (polygon only)
            if (!isPoint) {
                if (settings.Rotate) sdk.Map.enablePolygonRotation();
                if (settings.Resize) sdk.Map.enablePolygonResize();
            }
        } else if (!(getSelectedFeatures().length > 0) && (lastSelectedFeature === 'venue' || lastSelectedFeature === 'mapComment')) {
            // SDK throws if rotation/resize was never enabled (e.g. last selected was a point place)
            try {
                sdk.Map.disablePolygonRotation();
            } catch (_) {}
            try {
                sdk.Map.disablePolygonResize();
            } catch (_) {}
        }
    }

    function getOrCreateNameButtonContainer() {
        if (!$('#pieNameButtonsContainer').length) {
            const $nameGroup = $(WME_DOM.venueNameInput).parent();
            $nameGroup.css('position', 'relative');
            $nameGroup.prepend('<div id="pieNameButtonsContainer" style="position:absolute; top:4px; right:4px; z-index:100; display:flex; gap:4px; align-items:center;"></div>');
        }
        return $('#pieNameButtonsContainer');
    }

    function getOrCreateAddressButtonContainer() {
        if (!$('#pieAddressButtonsContainer').length) {
            const $addressGroup = $(WME_DOM.addressEdit).closest('.form-group');
            $addressGroup.css('position', 'relative');
            $addressGroup.prepend('<div id="pieAddressButtonsContainer" style="position:absolute; top:4px; right:4px; z-index:100; display:flex; gap:4px; align-items:center;"></div>');
        }
        return $('#pieAddressButtonsContainer');
    }

    async function ShowPlaceLocatorCrosshair() {
        $('#pieCrosshairs').remove();
        await new Promise((r) => setTimeout(r, 100));
        $('#pieCrosshairs').remove(); // re-remove after delay to handle concurrent calls
        if (!getSelectedPlace()) return;
        const $crosshairs = $('<div style="cursor:pointer;" id="pieCrosshairs" title="Zoom and center on Place"><i class="fa fa-crosshairs fa-lg" id="placeCrosshair" aria-hidden="true"></i></div>');
        getOrCreateNameButtonContainer().append($crosshairs);
        $('#pieCrosshairs').click(async function () {
            CenterOnPlace(settings.PlaceZoom);
        });
        $('#pieCrosshairs').mouseenter(function () {
            window.addEventListener('keydown', copyPLHotkeyEvent, false);
        });
        $('#pieCrosshairs').mouseleave(function () {
            window.removeEventListener('keydown', copyPLHotkeyEvent);
        });
    }

    var copyPLHotkeyEvent = function (e) {
        if ((e.metaKey || e.ctrlKey) && e.which === 67) copyToClipboard(getPermalink(wazePL.getAttribute('href')));
    };

    function _applyExtProviderTitles() {
        // Skip items already processed by PIE
        $('.external-provider-content:not([data-pie-ext])').each(function () {
            const $content = $(this);
            const fullText = $content.text().trim();
            if (!fullText) return;
            const href = $content.closest('wz-list-item').find('a.url').attr('href') || '';
            const cidMatch = href.match(/cid=(\d+)/);
            // Mark as processed so MutationObserver reruns don't double-inject
            $content.attr('data-pie-ext', '1');
            // When GLE is enabled it owns the hover tooltip (closed/invalid/tooFar messages).
            // Setting a title here would race with GLE's async formatLinkElements and overwrite it.
            if (!settings.EnableGLE) {
                $content.attr('title', cidMatch ? `${fullText}\nCID: ${cidMatch[1]}` : fullText);
            }
            // Visible CID line below the provider name — always shown (independent of tooltip)
            if (cidMatch) $content.append(`<div style="font-size:10px;color:var(--content_p3);margin-top:2px;">CID: ${cidMatch[1]}</div>`);
        });
    }

    async function ShowExternalProviderTooltip() {
        // Tear down any previous observer from a prior selection
        if (_extProviderObserver) {
            _extProviderObserver.disconnect();
            _extProviderObserver = null;
        }
        if (!isChecked('_cbShowExternalProviderTooltip')) return;
        await new Promise((r) => setTimeout(r, 100));
        if (safeGetSelection()?.objectType !== 'venue') return;

        // Set titles on items already in the DOM
        _applyExtProviderTitles();

        // External provider data loads async — watch the list for items added after our delay
        const list = document.querySelector('.external-providers-list');
        if (list) {
            _extProviderObserver = new MutationObserver(_applyExtProviderTitles);
            _extProviderObserver.observe(list, { childList: true, subtree: true });
        } else {
            console.warn('[PIE] .external-providers-list not found');
        }
    }

    async function ShowCopyPlaceButton() {
        $('#pieCopyPlaceButton').remove();
        await new Promise((r) => setTimeout(r, 100));
        $('#pieCopyPlaceButton').remove(); // re-remove after delay to handle concurrent calls
        const venue = getSelectedPlace();
        if (venue && !venue.categories.includes('RESIDENTIAL')) {
            const $PlaceCopyButton = $('<div style="cursor:pointer;" id="pieCopyPlaceButton" title="Creates a copy of this Place"><i class="fa fa-files-o fa-lg" aria-hidden="true"></i></div>');
            getOrCreateNameButtonContainer().append($PlaceCopyButton);

            $('#pieCopyPlaceButton').click(function () {
                const oldPlace = getSelectedPlace();
                if (!oldPlace) return;

                // Offset geometry 5m east using Turf (0.005 km, bearing 90° = east)
                const translatedGeom = turf.transformTranslate(turf.feature(oldPlace.geometry), 0.005, 90).geometry;

                const newPlaceId = sdk.DataModel.Venues.addVenue({
                    category: oldPlace.categories[0],
                    geometry: translatedGeom,
                }).toString();

                sdk.DataModel.Venues.updateVenue({
                    venueId: newPlaceId,
                    name: (oldPlace.name ?? '') + ' (copy)',
                    phone: oldPlace.phone,
                    url: oldPlace.url,
                    categories: structuredClone(oldPlace.categories),
                    aliases: structuredClone(oldPlace.aliases ?? []),
                    description: oldPlace.description,
                    openingHours: oldPlace.openingHours,
                    services: oldPlace.services,
                });

                const oldAddress = sdk.DataModel.Venues.getAddress({ venueId: oldPlace.id });
                sdk.DataModel.Venues.updateAddress({
                    venueId: newPlaceId,
                    houseNumber: oldAddress?.houseNumber,
                    streetId: oldAddress?.street?.id,
                });
            });
        }
    }

    async function ShowSearchButton() {
        $('#pieSearchButton').remove();
        await new Promise((r) => setTimeout(r, 100));
        $('#pieSearchButton').remove(); // re-remove after delay to handle concurrent calls
        if (hasPlaceSelected()) {
            const $search = $('<i class="fa fa-search" id="pieSearchButton" title="Fills the search bar with the address" aria-hidden="true" style="cursor:pointer;"></i>');

            getOrCreateAddressButtonContainer().append($search);

            $('#pieSearchButton').click(function () {
                let address = $(WME_DOM.addressFullAddress)[0]?.innerHTML;
                if (!address) return;
                const noCity = I18n.translations[I18n.currentLocale()].edit.address.no_city;
                if (address === I18n.translations[I18n.currentLocale()].edit.venue.no_address) return;
                address = address.replace(noCity + ',', '').trim();

                // The search input is nested in two shadow roots:
                // #search-autocomplete (shadow) → wz-text-input (shadow) → <input>
                const autocomplete = document.querySelector(WME_DOM.searchAutocomplete);
                const textInputEl = autocomplete?.shadowRoot?.querySelector('wz-text-input');
                const searchEl = textInputEl?.shadowRoot?.querySelector('input');
                if (!searchEl) {
                    console.warn('[PIE] Search bar input not found inside #search-autocomplete shadow DOM');
                    return;
                }
                // Use native value setter so Lit/web-component framework detects the change
                Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set.call(searchEl, address);
                searchEl.dispatchEvent(new Event('input', { bubbles: true }));
                searchEl.dispatchEvent(new Event('change', { bubbles: true }));
            });
        }
    }

    function ShowClearDescription() {
        setTimeout(() => {
            $(WME_DOM.venueDescription).append('<i class="fa fa-times-circle clearButton" style="position:absolute; top:0; right:0;"></i>');
            $(WME_DOM.venueDescription).css('position', 'relative');
            $('.clearButton').click(async function () {
                sdk.DataModel.Venues.updateVenue({ venueId: getSelectedFeatures()[0].id, description: '' });
            });
        }, 0);
    }

    function AddMakePrimaryButtons(attempt) {
        if (!hasPlaceSelected()) return;
        attempt = attempt || 1;
        if ($('.alias-item').length === 0) {
            if (attempt <= 10)
                setTimeout(function () {
                    AddMakePrimaryButtons(attempt + 1);
                }, 100);
            return;
        }
        $('.alias-item').each(function () {
            var altItem = $(this);
            if (altItem.find('.makePrimary').length === 0) {
                var $button = $('<wz-button>', { class: 'makePrimary alias-item-action', color: 'text', size: 'sm', type: 'button', title: I18n.t('pie.aliases.makePrimaryTitle') })
                .text(I18n.t('pie.aliases.makePrimaryButton'))
                .click(function () {
                    var venue = getSelectedPlace();
                    if (!venue) return;
                    var toPrimary = altItem.find('.alias-item-content').text().trim();
                    var aliases = venue.aliases.filter(function (a) {
                        return a !== toPrimary;
                    });
                    aliases.push(venue.name);
                    sdk.DataModel.Venues.updateVenue({ venueId: venue.id, name: toPrimary, aliases: aliases });
                });
                altItem.find(WME_DOM.venueAliasActions).append($button);
            }
        });
    }

    function CenterOnPlace(zoom) {
        const selected = safeGetSelection();
        if (selected?.objectType !== 'venue') return;
        const venue = sdk.DataModel.Venues.getById({ venueId: selected.ids[0] });
        if (!venue) return;
        const centroid = venue.geometry.type === 'Point' ? venue.geometry : turf.centroid(venue.geometry).geometry;
        sdk.Map.centerMapOnGeometry({ geometry: centroid });
        sdk.Map.setZoomLevel({ zoomLevel: zoom });
    }

    function isChecked(checkboxId) {
        return $('#' + checkboxId).is(':checked');
    }

    function setChecked(checkboxId, checked) {
        $('#' + checkboxId).prop('checked', checked);
    }

    function noActions() {
        setTimeout(updatePlaceSizeDisplay, 100); //have to put in a delay for when the user uses undo to clear all actions - WME updates on top of my changes otherwise.
    }

    async function updatePlaceSizeDisplay() {
        const runId = ++_areaSizeRunId;

        // Wait for the venue panel DOM to finish rendering before inspecting or injecting.
        await new Promise((r) => setTimeout(r, 100));

        // If another call started during the delay, let it win — bail without injecting.
        if (runId !== _areaSizeRunId) return;
        
        $(WME_DOM.venueAreaSize).remove();

        const selected = safeGetSelection();
        if (selected?.objectType === 'venue') {
            const venue = sdk.DataModel.Venues.getById({ venueId: selected.ids[0] });
            if (venue && venue.geometry.type === 'Polygon') {
                const metersArea = turf.area(venue.geometry);
                if (metersArea > 0) {
                    const ftArea = metersArea * 10.76391;
                    const fmtM = metersArea.toLocaleString(undefined, { maximumFractionDigits: 0 });
                    const fmtFt = ftArea.toLocaleString(undefined, { maximumFractionDigits: 0 });

                    const parts = [];
                    if (isChecked('_cbShowAreaPlaceSizeMetric')) parts.push(`${fmtM} m²`);
                    if (isChecked('_cbShowAreaPlaceSizeImperial')) parts.push(`${fmtFt} ft²`);

                    if (parts.length) {
                        let warningHtml = '';
                        if (metersArea < 500) warningHtml = `<div style="color:var(--alarming);font-size:12px;margin-top:var(--space-xxs);">⚠ Below 500 m² — will not show in client</div>`;
                        else if (metersArea > 20000) warningHtml = `<div style="color:var(--alarming);font-size:12px;margin-top:var(--space-xxs);">⚠ Above 20,000 m² — always shows in client</div>`;

                        const $area = $(`<div id="AreaSize" style="background:var(--surface_default);border-radius:8px;padding:var(--space-xs) var(--space-s);margin:var(--space-xs) 0;">
              <div style="font-size:10px;font-weight:600;letter-spacing:.8px;text-transform:uppercase;color:var(--content_p3);padding-bottom:var(--space-xxs);margin-bottom:var(--space-xs);border-bottom:1px solid var(--hairline);">Place Interface Enhancements</div>
              <div style="font-size:12px;color:var(--content_p2);margin-bottom:2px;">Place Area</div>
              <div style="font-size:14px;color:var(--content_default);font-weight:500;">${parts.join(' · ')}</div>
              ${warningHtml}
            </div>`);
              $(WME_DOM.venueExternalProviders).after($area);
          }
        }
      }
    }

      if (settings.GeometryMods) InsertGeometryMods();
  }

    var getPermalink = function (currPl) {
        var adjustedPL = currPl.substr(currPl.lastIndexOf('editor')).replace(/&[^&]*Filter=[^&]*|&s=(\d+)/gi, '');
        var lon = adjustedPL.match(/lon=(-?\d+\.\d+)/)[1];
        var lat = adjustedPL.match(/lat=(-?\d+\.\d+)/)[1];
        var zoom = adjustedPL.match(/zoom[Levl]*=\d+/)[0];
        const venue = getSelectedPlace();
        if (!venue) return adjustedPL;
        // SDK venue geometry is WGS84 — no Mercator conversion needed.
        // GeoJSON coordinates are [longitude, latitude].
        const coords = venue.geometry.type === 'Point' ? venue.geometry.coordinates : turf.centroid(venue.geometry).geometry.coordinates;
        adjustedPL = adjustedPL.replace(lon, coords[0]);
        adjustedPL = adjustedPL.replace(lat, coords[1]);
        adjustedPL = adjustedPL.replace(zoom, 'zoomLevel=' + settings.PlaceZoom);
        if (settings.PlaceLocatorCrosshairProdPL) return 'https://www.waze.com/' + adjustedPL;
        else return location.origin + '/' + adjustedPL;
    };

    var copyToClipboard = function (str) {
        navigator.clipboard.writeText(str);
    };

    function buildItemList(itemNumber) {
        const $places = $('<div>');
        function _getCategorySubCategoryOptions() {
            const mainCategories = new Map();
            const res = [];
            for (const vc of sdk.DataModel.Venues.getVenueMainCategories()) {
                mainCategories.set(vc.id, { localizedName: vc.localizedName, processed: false });
            }
            for (const vsc of sdk.DataModel.Venues.getVenueSubCategories()) {
                const mc = mainCategories.get(vsc.categoryId);
                if (mc != null) {
                    if (!mc.processed) {
                        const icon = vsc.categoryId.toLowerCase().replaceAll('_', '-');
                        res.push(`<option value="${vsc.categoryId}" data-icon="${icon}" style="font-weight:bold;">${mc.localizedName}</option>`);
                        mc.processed = true;
                    }
                    const icon = vsc.categoryId.toLowerCase().replaceAll('_', '-');
                    res.push(`<option value="${vsc.subCategoryId}" data-icon="${icon}">${vsc.localizedName}</option>`);
                }
            }
            return res;
        }
        const htmlItems = [`<select id="pieItem${itemNumber}" style="flex:1; min-width:0;">`, `<option value="NONE">-- None --</option>`];
        htmlItems.push(..._getCategorySubCategoryOptions());
        htmlItems.push('</select>');
        $places.html(htmlItems.join(' '));
        return $places.html();
    }

    function injectCss() {
        var css = `
      /* ── Lock buttons (map overlay, unchanged) ─────────────────── */
      .btn-lh {cursor:pointer;padding:1px 6px;height:22px;border:solid 1px #c1c1c1;margin-right:3px;}
      .btn.btn-lh.btn-lh-selected {background-color:#6999ae;color:white}
      .btn.btn-lh.btn-lh-selected:hover {color:white}
      .btn.btn-lh.disabled {color:#909090;background-color:#f7f7f7;}
      .btn.btn-lh.btn-lh-selected.disabled {color:white;background-color:#6999ae;}
      /* ── Image dialog (unchanged) ──────────────────────────────── */
      .imgcon {position:relative; margin:0 auto;}
      .imnav {color:#fff; margin:0 auto; opacity:0.7; display:none; position:absolute; top:0; left:0; width:100%; height:89%;}
      .imgcon:hover .imnav {display:inline-block;}
      .control {float:left; height:100%; width:33%; opacity:0;}
      .control:hover {opacity:0.7;}
      .prim {width:15%; background:url("http://i59.tinypic.com/294s94i.gif") left center no-repeat;}
      .zmim {width:70%;}
      .neim {width:15%; background:url("http://i62.tinypic.com/2cqfqxf.gif") right center no-repeat;}
      /* ── PSE (unchanged) ───────────────────────────────────────── */
      .PSESelected {border:3px solid #ee9900;}
      /* ── Category icon sprites (unchanged) ─────────────────────── */
      .pie-car-services {background-image: url(//editor-assets.waze.com/beta/img/toolbar022c8e4d1f16c3825705364ff337bf1b.png); background-position: -29px -63px; width: 14px; height: 13px; } @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) { .pie-car-services {background-image: url(//editor-assets.waze.com/beta/img/toolbar@2xcd8b2ab08e978d00eeee7817e1a0edda.png); background-size: 99px 87px; } }
      .pie-transportation {background-image: url(//editor-assets.waze.com/beta/img/toolbar022c8e4d1f16c3825705364ff337bf1b.png); background-position: -56px -63px; width: 12px; height: 12px; } @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {.pie-transportation {background-image: url(//editor-assets.waze.com/beta/img/toolbar@2xcd8b2ab08e978d00eeee7817e1a0edda.png);background-size: 99px 87px; } }
      .pie-professional-and-public {background-image: url(//editor-assets.waze.com/beta/img/toolbar022c8e4d1f16c3825705364ff337bf1b.png); background-position: 0px -76px; width: 13px; height: 11px; } @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {.pie-professional-and-public {background-image:url(//editor-assets.waze.com/beta/img/toolbar@2xcd8b2ab08e978d00eeee7817e1a0edda.png); background-size: 99px 87px; } }
      .pie-shopping-and-services {background-image: url(//editor-assets.waze.com/beta/img/toolbar022c8e4d1f16c3825705364ff337bf1b.png); background-position: -88px 0px; width: 11px; height: 13px; } @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {.pie-shopping-and-services {background-image:url(//editor-assets.waze.com/beta/img/toolbar@2xcd8b2ab08e978d00eeee7817e1a0edda.png); background-size: 99px 87px; } }
      .pie-food-and-drink {background-image: url(//editor-assets.waze.com/beta/img/toolbar022c8e4d1f16c3825705364ff337bf1b.png); background-position: -65px 0px; width: 13px; height: 16px; } @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {.pie-food-and-drink {background-image:url(//editor-assets.waze.com/beta/img/toolbar@2xcd8b2ab08e978d00eeee7817e1a0edda.png); background-size: 99px 87px; } }
      .pie-culture-and-entertainement {background-image: url(//editor-assets.waze.com/beta/img/toolbar022c8e4d1f16c3825705364ff337bf1b.png); background-position: -30px -37px; width: 16px; height: 14px; } @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {.pie-culture-and-entertainement {background-image:url(//editor-assets.waze.com/beta/img/toolbar@2xcd8b2ab08e978d00eeee7817e1a0edda.png); background-size: 99px 87px; } }
      .pie-other {background-image: url(//editor-assets.waze.com/beta/img/toolbar022c8e4d1f16c3825705364ff337bf1b.png); background-position: 0px -63px; width: 15px; height: 13px; } @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {.pie-other {background-image:url(//editor-assets.waze.com/beta/img/toolbar@2xcd8b2ab08e978d00eeee7817e1a0edda.png); background-size: 99px 87px; } }
      .pie-lodging {background-image: url(//editor-assets.waze.com/beta/img/toolbar022c8e4d1f16c3825705364ff337bf1b.png); background-position: -20px -52px; width: 17px; height: 10px; } @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {.pie-lodging {background-image:url(//editor-assets.waze.com/beta/img/toolbar@2xcd8b2ab08e978d00eeee7817e1a0edda.png); background-size: 99px 87px; } }
      .pie-outdoors {background-image: url(//editor-assets.waze.com/beta/img/toolbar022c8e4d1f16c3825705364ff337bf1b.png); background-position: 0px -52px; width: 20px; height: 11px; } @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {.pie-outdoors {background-image:url(//editor-assets.waze.com/beta/img/toolbar@2xcd8b2ab08e978d00eeee7817e1a0edda.png); background-size: 99px 87px; } }
      .pie-natural-features {background-image: url(//editor-assets.waze.com/beta/img/toolbar022c8e4d1f16c3825705364ff337bf1b.png); background-position: -16px -21px; width: 17px; height: 15px; } @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {.pie-natural-features {background-image:url(//editor-assets.waze.com/beta/img/toolbar@2xcd8b2ab08e978d00eeee7817e1a0edda.png); background-size: 99px 87px; } }
      .pie-parking-lot {background-image: url(//editor-assets.waze.com/beta/img/toolbar022c8e4d1f16c3825705364ff337bf1b.png); background-position: -65px -48px; width: 13px; height: 13px; } @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {.pie-parking-lot {background-image:url(//editor-assets.waze.com/beta/img/toolbar@2xcd8b2ab08e978d00eeee7817e1a0edda.png); background-size: 99px 87px; } }
      .pie-residential {background-image: url(//editor-assets.waze.com/beta/img/toolbar022c8e4d1f16c3825705364ff337bf1b.png); background-position: -15px -37px; width: 15px; height: 14px; } @media (-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi) {.pie-residential {background-image:url(//editor-assets.waze.com/beta/img/toolbar@2xcd8b2ab08e978d00eeee7817e1a0edda.png); background-size: 99px 87px; } }
      /* ── Photo viewer dialog (unchanged) ───────────────────────── */
      .photoViewerOptionsContainer { display: grid; grid-template-columns: 1fr 1fr; grid-template-rows: auto; grid-template-areas: "header header" "optionText optionSetting" "footer footer"; }
      .photoViewerOptionsHeader { text-align: center; grid-area: header; }
      .photoViewerOptionsOptionSetting { grid-area: optionSetting; }
      .photoViewerOptionsOptionText { grid-area: optionText; }
      .photoViewerOptionsFooter { text-align: center; grid-area: footer; }
      .photoViewerOptionsOptionText div, .photoViewerOptionsOptionSetting div { height: 32px; }
      .photoViewerOptionsOptionText div span, .photoViewerOptionsOptionSetting div span { vertical-align: middle; line-height: 32px; }

      /* ════════════════════════════════════════════════════════════
         PIE SIDEBAR PANEL — Modern UI
         ════════════════════════════════════════════════════════════ */

      /* Panel wrapper */
      .wme-pie-panel { font-family: Arial, sans-serif; font-size: 12px; color: #333; padding: 8px 10px; box-sizing: border-box; }

      /* Header */
      .wme-pie-panel .pie-header { background: linear-gradient(135deg, #0066cc, #0052a3); color: #fff; border-radius: 8px; padding: 8px 10px; margin-bottom: 8px; display: flex; align-items: baseline; justify-content: space-between; }
      .wme-pie-panel .pie-header-title { font-size: 13px; font-weight: 700; }
      .wme-pie-panel .pie-header-version { font-size: 10px; opacity: 0.8; }

      /* Collapsible sections */
      .wme-pie-panel .pie-section { border: 1px solid #e0e0e0; border-radius: 6px; margin-bottom: 7px; background: #fafafa; overflow: hidden; }
      .wme-pie-panel .pie-section-header { display: flex; align-items: center; gap: 6px; padding: 7px 10px; cursor: pointer; background: linear-gradient(135deg, #f8f9fa, #f0f1f3); font-size: 11px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.03em; color: #333; user-select: none; }
      .wme-pie-panel .pie-section-header:hover { background: linear-gradient(135deg, #f0f1f3, #e8eaed); }
      .wme-pie-panel .pie-section-header .fa:first-child { color: #0066cc; width: 14px; text-align: center; font-size: 11px; }
      .wme-pie-panel .pie-section-title { flex: 1; }
      .wme-pie-panel .pie-chevron { color: #aaa; font-size: 10px; transition: transform 0.2s ease; }
      .wme-pie-panel .pie-section.pie-collapsed .pie-chevron { transform: rotate(-90deg); }
      .wme-pie-panel .pie-section-body { padding: 6px 10px 8px; background: #fff; }
      .wme-pie-panel .pie-section.pie-collapsed .pie-section-body { display: none; }
      .wme-pie-panel .pie-section-subtitle { font-size: 10px; color: #888; margin-bottom: 6px; }

      /* Toggle rows */
      .wme-pie-panel .pie-toggle-row { display: flex; align-items: center; justify-content: space-between; padding: 4px 0; min-height: 26px; }
      .wme-pie-panel .pie-toggle-row + .pie-toggle-row { border-top: 1px solid #f2f2f2; }
      .wme-pie-panel .pie-sub-row { padding-left: 14px; }
      .wme-pie-panel .pie-toggle-label { flex: 1; font-size: 11px; color: #333; padding-right: 8px; line-height: 1.3; }

      /* Toggle switch */
      .wme-pie-panel .pie-toggle-switch { position: relative; display: inline-block; width: 36px; height: 20px; flex-shrink: 0; }
      .wme-pie-panel .pie-toggle-switch input { opacity: 0; width: 0; height: 0; position: absolute; }
      .wme-pie-panel .pie-slider { position: absolute; cursor: pointer; inset: 0; background: #ccc; border-radius: 20px; transition: background 0.2s; }
      .wme-pie-panel .pie-slider:before { content: ""; position: absolute; height: 14px; width: 14px; left: 3px; bottom: 3px; background: #fff; border-radius: 50%; transition: transform 0.2s; box-shadow: 0 1px 3px rgba(0,0,0,.25); }
      .wme-pie-panel .pie-toggle-switch input:checked + .pie-slider { background: #0066cc; }
      .wme-pie-panel .pie-toggle-switch input:checked + .pie-slider:before { transform: translateX(16px); }
      .wme-pie-panel .pie-toggle-switch input:disabled + .pie-slider { opacity: 0.4; cursor: not-allowed; }

      /* Pill radio group (Place Filter) */
      .wme-pie-panel .pie-filter-row { display: flex; align-items: center; gap: 6px; margin-bottom: 6px; }
      .wme-pie-panel .pie-filter-row .pie-toggle-label { flex-shrink: 0; flex-grow: 0; }
      .wme-pie-panel .pie-pill-group { display: flex; background: #e9ecef; border-radius: 6px; padding: 2px; }
      .wme-pie-panel .pie-pill { flex: 1; }
      .wme-pie-panel .pie-pill input { display: none; }
      .wme-pie-panel .pie-pill span { display: block; text-align: center; padding: 3px 8px; font-size: 11px; border-radius: 4px; cursor: pointer; color: #666; white-space: nowrap; }
      .wme-pie-panel .pie-pill input:checked + span { background: #0066cc; color: #fff; font-weight: 600; box-shadow: 0 1px 3px rgba(0,102,204,.3); }
      .wme-pie-panel .pie-pill span:hover { color: #0066cc; }
      .wme-pie-panel .pie-pill input:checked + span:hover { color: #fff; }

      /* Form controls */
      .wme-pie-panel .pie-text-input { flex: 1; border: 1px solid #d0d0d0; border-radius: 4px; padding: 4px 6px; font-size: 11px; color: #333; min-width: 0; }
      .wme-pie-panel .pie-text-input:focus { border-color: #0066cc; outline: none; box-shadow: 0 0 0 2px rgba(0,102,204,.12); }
      .wme-pie-panel .pie-select { border: 1px solid #d0d0d0; border-radius: 4px; padding: 2px 5px; font-size: 11px; color: #333; background: #fff; }
      .wme-pie-panel .pie-select:focus { border-color: #0066cc; outline: none; }

      /* Font customization sub-card */
      .wme-pie-panel .pie-font-settings { background: #f5f7fa; border: 1px solid #e0e0e0; border-radius: 4px; padding: 5px 8px; margin: 4px 0 6px; }
      .wme-pie-panel .pie-font-row { display: flex; align-items: center; justify-content: space-between; padding: 3px 0; font-size: 11px; color: #333; }
      .wme-pie-panel .pie-font-row + .pie-font-row { border-top: 1px solid #ebebeb; }

      /* Font reset button */
      .wme-pie-panel .pie-font-reset { display: flex; justify-content: center; padding-top: 5px; margin-top: 3px; border-top: 1px solid #e0e0e0; }
      .wme-pie-panel .pie-font-reset button { background: none; border: none; color: #0066cc; font-size: 10px; cursor: pointer; padding: 2px 8px; border-radius: 3px; }
      .wme-pie-panel .pie-font-reset button:hover { background: #edf2f7; text-decoration: underline; }
      [wz-theme="dark"] .wme-pie-panel .pie-font-reset { border-top-color: #3c4043; }
      [wz-theme="dark"] .wme-pie-panel .pie-font-reset button { color: #33ccff; }
      [wz-theme="dark"] .wme-pie-panel .pie-font-reset button:hover { background: #3c4043; }

      /* Quick-create list */
      .wme-pie-panel .pie-quick-create-list { display: flex; flex-direction: column; gap: 3px; }
      .wme-pie-panel .pie-quick-create-list > div { padding: 2px 0; }
      .wme-pie-panel .pie-quick-create-list select { font-size: 11px; border: 1px solid #d0d0d0; border-radius: 3px; }

      /* ── Geometry editor modal ─────────────────────────────────── */
      #pieViewEditGeom.pie-geom-modal { position: fixed; z-index: 1000; top: 20%; left: 50%; transform: translateX(-50%); background: #fff; border-radius: 8px; box-shadow: 0 8px 32px rgba(0,0,0,.22), 0 2px 8px rgba(0,0,0,.12); font-family: Arial, sans-serif; font-size: 12px; min-width: 560px; max-width: 95vw; overflow: hidden; }
      .pie-geom-modal-header { display: flex; align-items: center; justify-content: space-between; background: linear-gradient(135deg, #0066cc, #0052a3); color: #fff; padding: 8px 12px; }
      .pie-geom-modal-title { font-size: 12px; font-weight: 700; letter-spacing: 0.02em; display: flex; align-items: center; gap: 6px; }
      .pie-geom-modal-close { cursor: pointer; font-size: 14px; opacity: 0.85; padding: 2px 4px; border-radius: 3px; }
      .pie-geom-modal-close:hover { opacity: 1; background: rgba(255,255,255,.2); }
      .pie-geom-modal-body { display: flex; gap: 10px; padding: 12px; overflow: auto; }
      .pie-geom-col { display: flex; flex-direction: column; gap: 5px; flex: 1; min-width: 140px; }
      .pie-geom-col-label { font-size: 11px; font-weight: 700; color: #333; text-transform: uppercase; letter-spacing: 0.04em; }
      .pie-geom-col-hint { font-size: 10px; font-weight: 400; color: #888; text-transform: none; letter-spacing: 0; }
      .pie-geom-textarea { width: 100%; box-sizing: border-box; border: 1px solid #d0d0d0; border-radius: 4px; padding: 5px 6px; font-family: 'Courier New', monospace; font-size: 11px; color: #222; background: #fafafa; resize: both; line-height: 1.5; min-height: 240px; max-height: 600px; max-width: 500px; }
      .pie-geom-textarea:focus { border-color: #0066cc; outline: none; box-shadow: 0 0 0 2px rgba(0,102,204,.12); background: #fff; }
      .pie-geom-apply-btn { width: 100%; padding: 4px 0; background: #0066cc; color: #fff; border: none; border-radius: 4px; font-size: 11px; font-weight: 600; cursor: pointer; letter-spacing: 0.02em; }
      .pie-geom-apply-btn:hover { background: #0052a3; }
      .pie-geom-apply-btn:active { background: #003d7a; }

      /* ── Dark mode ──────────────────────────────────────────────── */
      [wz-theme="dark"] .wme-pie-panel { color: #e8eaed; }
      [wz-theme="dark"] .wme-pie-panel .pie-header { background: linear-gradient(135deg, #0052a3, #003d7a); }
      [wz-theme="dark"] .wme-pie-panel .pie-section { border-color: #55595e; background: #2d2f33; }
      [wz-theme="dark"] .wme-pie-panel .pie-section-header { background: linear-gradient(135deg, #2a2c30, #202124); color: #e8eaed; }
      [wz-theme="dark"] .wme-pie-panel .pie-section-header:hover { background: linear-gradient(135deg, #333538, #2a2c30); }
      [wz-theme="dark"] .wme-pie-panel .pie-section-header .fa:first-child { color: #33ccff; }
      [wz-theme="dark"] .wme-pie-panel .pie-section-body { background: #28292c; }
      [wz-theme="dark"] .wme-pie-panel .pie-toggle-row + .pie-toggle-row { border-top-color: #3c4043; }
      [wz-theme="dark"] .wme-pie-panel .pie-toggle-label { color: #e8eaed; }
      [wz-theme="dark"] .wme-pie-panel .pie-slider { background: #555; }
      [wz-theme="dark"] .wme-pie-panel .pie-toggle-switch input:checked + .pie-slider { background: #0066cc; }
      [wz-theme="dark"] .wme-pie-panel .pie-pill-group { background: #3c4043; }
      [wz-theme="dark"] .wme-pie-panel .pie-pill span { color: #b7babf; }
      [wz-theme="dark"] .wme-pie-panel .pie-pill input:checked + span { background: #0066cc; color: #fff; }
      [wz-theme="dark"] .wme-pie-panel .pie-pill span:hover { color: #33ccff; }
      [wz-theme="dark"] .wme-pie-panel .pie-text-input { background: #3c4043; border-color: #55595e; color: #e8eaed; }
      [wz-theme="dark"] .wme-pie-panel .pie-text-input:focus { border-color: #33ccff; box-shadow: 0 0 0 2px rgba(51,204,255,.15); }
      [wz-theme="dark"] .wme-pie-panel .pie-select { background: #3c4043; border-color: #55595e; color: #e8eaed; }
      [wz-theme="dark"] .wme-pie-panel .pie-font-settings { background: #2d2f33; border-color: #55595e; }
      [wz-theme="dark"] .wme-pie-panel .pie-font-row { color: #e8eaed; }
      [wz-theme="dark"] .wme-pie-panel .pie-font-row + .pie-font-row { border-top-color: #3c4043; }
      [wz-theme="dark"] .wme-pie-panel .pie-section-subtitle { color: #90959c; }
      [wz-theme="dark"] .wme-pie-panel .pie-quick-create-list select { background: #3c4043; border-color: #55595e; color: #e8eaed; }
      [wz-theme="dark"] .wme-pie-panel .pie-chevron { color: #777; }

      /* ── Geometry modal dark mode ───────────────────────────────── */
      [wz-theme="dark"] #pieViewEditGeom.pie-geom-modal { background: #28292c; box-shadow: 0 8px 32px rgba(0,0,0,.5), 0 2px 8px rgba(0,0,0,.3); }
      [wz-theme="dark"] .pie-geom-modal-header { background: linear-gradient(135deg, #0052a3, #003d7a); }
      [wz-theme="dark"] .pie-geom-col-label { color: #e8eaed; }
      [wz-theme="dark"] .pie-geom-col-hint { color: #90959c; }
      [wz-theme="dark"] .pie-geom-textarea { background: #3c4043; border-color: #55595e; color: #e8eaed; }
      [wz-theme="dark"] .pie-geom-textarea:focus { border-color: #33ccff; box-shadow: 0 0 0 2px rgba(51,204,255,.15); background: #2d2f33; }
      [wz-theme="dark"] .pie-geom-apply-btn { background: #0066cc; }
      [wz-theme="dark"] .pie-geom-apply-btn:hover { background: #0052a3; }

      /* Photo Viewer launch button — matches WME overlay-button visual style */
      /* Positioned absolutely on map with responsive layout for different screen sizes */
      #launchDiv {
        position: absolute;
        cursor: grab;
        z-index: 10000;
        bottom: 20px;
        left: 190px;
        display: none;
      }

      /* Large screens (desktop) — default position near chat/sidebar */
      @media (min-width: 1400px) {
        #launchDiv { left: 190px; bottom: 20px; }
      }

      /* Medium screens — shift button closer to center */
      @media (min-width: 1024px) and (max-width: 1399px) {
        #launchDiv { left: 120px; bottom: 20px; }
      }

      /* Small screens (tablets/narrow) — move to bottom-left to avoid UI clutter */
      @media (max-width: 1023px) {
        #launchDiv { left: 60px; bottom: 20px; }
      }

      /* Extra small screens — ensure it stays visible */
      @media (max-width: 768px) {
        #launchDiv { left: 20px; bottom: 20px; }
      }

      /* Show/hide visibility control */
      #launchDiv.pv-visible { display: block; }

      /* Tooltip styling */
      #launchDiv[data-pie-tip]::after {
        content: attr(data-pie-tip);
        position: absolute;
        bottom: calc(100% + 8px);
        left: 50%;
        transform: translateX(-50%);
        background: #1a1a1a;
        color: #fff;
        font-family: Arial, sans-serif;
        font-size: 11px;
        line-height: 1.6;
        white-space: pre;
        text-align: center;
        padding: 5px 10px;
        border-radius: 6px;
        box-shadow: 0 2px 8px rgba(0,0,0,0.35);
        pointer-events: none;
        opacity: 0;
        transition: opacity 0.15s;
        z-index: 10001;
      }
      #launchDiv[data-pie-tip]:hover::after { opacity: 1; }
      #launchDiv.pie-tip-off::after { display: none; }

      /* Button styling */
      #photoViewerButton {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 40px;
        height: 40px;
        border: none;
        border-radius: 8px;
        background: var(--surface_default, #fff);
        color: var(--content_default, #1a1a1a);
        box-shadow: 0 1px 4px rgba(0,0,0,0.18);
        cursor: inherit;
        padding: 0;
        transition: background 0.12s, box-shadow 0.12s;
      }
      #photoViewerButton .fa { font-size: 18px; }
      #photoViewerButton:hover {
        background: var(--surface_hover, #f0f0f0);
        box-shadow: 0 2px 8px rgba(0,0,0,0.22);
      }
      #photoViewerButton:active {
        background: var(--surface_active, #e4e4e4);
        box-shadow: 0 1px 2px rgba(0,0,0,0.14);
      }
    `;
      $('<style type="text/css">' + css + '</style>').appendTo('head');
  }

    async function loadSettings() {
        var loadedSettings = $.parseJSON(localStorage.getItem('WMEPIE_Settings'));
        var defaultSettings = {
            ShowAreaPlaceSize: false,
            ShowAreaPlaceSizeImperial: false,
            ShowAreaPlaceSizeMetric: false,
            ShowLockButtonsRPP: true,
            NewPlacesList: sdk.DataModel.Venues.getVenueMainCategories().map((c) => c.id),
            EditRPPAfterCreated: false,
            UseStreetFromClosestSeg: false,
            UseCityFromClosestSeg: false,
            ShowPlaceLocatorCrosshair: false,
            PlaceZoom: 18,
            DefaultLockLevel: 0,
            CreateResidentialPlaceShortcut: null,
            CreateParkingLotShortcut: null,
            UseAltCity: false,
            ShowSearchButton: false,

            SkipPLR: false,
            ShowPlaceNames: false,
            ShowPlaceNamesPoint: false,
            ShowPlaceNamesArea: false,
            ShowPlaceNamesLock: false,
            ShowCopyPlaceButton: false,
            ShowExternalProviderTooltip: false,
            ShowPlaceNamesPLA: false,
            ClearDescription: true,
            PlaceNameFontSize: '12',
            PlaceNameFontOutlineWidth: 3,
            PlaceNameFontBold: true,
            PlaceNameFontColor: '#FFFFFF',
            PlaceNameFontOutline: '#000000',
            PlaceLocatorCrosshairProdPL: true,
            MoveAddress: false,
            ShowNavPointClosestSegmentOnHover: true,
            ShowClosestSegmentSelected: false,
            NavLink: false,
            ToggleAreaPlacesShortcut: null,
            EnableGLE: true,
            OpenPUR: true,
            HidePaymentType: false,
            GeometryMods: true,
            Rotate: false,
            Resize: false,
            OrthogonalizeShortcut: null,
            SimplifyFactor: 5,
            SimplifyPlaceShortcut: null,
            CreateItem1Shortcut: null,
            CreateItem2Shortcut: null,
            CreateItem3Shortcut: null,
            CreateItem4Shortcut: null,
            CreateItem5Shortcut: null,
            CreateItem6Shortcut: null,
            CreateItem7Shortcut: null,
            CreateItem8Shortcut: null,
            CreateItem9Shortcut: null,
            CreateItem10Shortcut: null,
            CreateItem11Shortcut: null,
            CreateItem12Shortcut: null,
            EnablePhotoViewer: true,
            sortBy: 'sortbyname',
            sortOrder: 'sortAsc',
            PhotoViewerPreserveLayout: false,
            HideShopAndServices: true,
            EnlargeGeoHandles: false,
            hidePlaceNamesWhenPlacesHidden: false,
            lastSaved: 0,
            GLEShowTempClosed: true,
        };
        settings = $.extend({}, defaultSettings, loadedSettings);
        if (settings.NewPlacesList.length < 12) settings.NewPlacesList.push('RESIDENTIAL');

        // Normalize all shortcut settings to {raw, combo} format.
        // Handles legacy flat strings ("A+R"), hybrid SDK format ("A+82"), WazeWrap raw ("4,82"),
        // WazeWrap no-key ("-1"), and already-normalized {raw,combo} objects from previous saves.
        const _shortcutSettingsKeys = [
            'CreateResidentialPlaceShortcut',
            'CreateParkingLotShortcut',
            'ToggleAreaPlacesShortcut',
            'OrthogonalizeShortcut',
            'SimplifyPlaceShortcut',
            ...Array.from({ length: 12 }, (_, i) => `CreateItem${i + 1}Shortcut`),
        ];
        for (const key of _shortcutSettingsKeys) settings[key] = _normalizeShortcut(settings[key]);

        if (settings.ShowAreaPlaceSizeImperial === false && settings.ShowAreaPlaceSizeMetric === false)
            if (sdk.Settings.getUserSettings().isImperial) settings.ShowAreaPlaceSizeImperial = true;
            else settings.ShowAreaPlaceSizeMetric = true;
    }

    function saveSettings() {
        if (localStorage) {
            var localsettings = {
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

                SkipPLR: settings.SkipPLR,
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

            localStorage.setItem('WMEPIE_Settings', JSON.stringify(localsettings));
            //WazeWrap.Remote.SaveSettings('WME_PIE', localsettings);
        }
    }

    function checkShortcutsChanged() {
        // getAllShortcuts() returns shortcutKeys in an inconsistent format depending on when it is
        // called (combo on load, raw after user edits, combo again on next reload). Normalize to
        // {raw, combo} before comparing so the comparison is format-independent.
        let triggerSave = false;
        const shortcuts = sdk.Shortcuts.getAllShortcuts();
        for (const shortcut of shortcuts) {
            const settingsKey = _shortcutIdToSettingsKey[shortcut.shortcutId] ?? shortcut.shortcutId;
            if (!(settingsKey in settings)) continue;
            const normalized = _normalizeShortcut(shortcut.shortcutKeys);
            if (settings[settingsKey]?.combo !== normalized.combo) {
                triggerSave = true;
                break;
            }
        }
        if (triggerSave) {
            for (const shortcut of shortcuts) {
                const settingsKey = _shortcutIdToSettingsKey[shortcut.shortcutId] ?? shortcut.shortcutId;
                if (settingsKey in settings) settings[settingsKey] = _normalizeShortcut(shortcut.shortcutKeys);
            }
            saveSettings();
        }
    }

    function loadTranslations() {
        setTranslations({
            en: {
                prefs: {
                    title: 'Place Interface Enhancements',
                    ShowAreaPlaceSize: 'Show area Place size',
                    ShowImperial: 'Show imperial',
                    ShowMetric: 'Show metric',
                    ShowRPPLockButtons: 'Show lock buttons for RPPs',
                    ShowRPPLockButtonsTitle: 'Displays lock level buttons for Residential Place Points',
                    ShowPlaceLocatorCrosshair: 'Place locator crosshair',
                    ShowPlaceLocatorCrosshairTitle: 'Centers the Place on screen and zooms to the defined level',
                    Zoom: 'Zoom',
                    ZoomTitle: 'The zoom level to use when centering on a Place',
                    ShowAddressSearch: 'Address search button',
                    ShowAddressSearchTitle: "Show a magnifying glass next to the Place's address.  Clicking this button will load the address into the search box",
                    ShowPlaceCategoryButtons: 'Add Place category buttons above the categories selection',
                    ShowPLAButton: 'Show parking lot button',
                    ShowPLAButtonTitle: "Starts creation mode for a Parking Lot Area Place and will set the name to match this Place\'s name when complete",
                    ShowCopyPlaceButton: 'Copy place button',
                    ShowCopyPlaceButtonTitle: 'Copies the selected Place to a new Place with identical settings',
                    ShowGPIDTooltip: 'External provider tooltip',
                    ShowGPIDTooltipTitle: 'Displays a tooltip with the external provider information',
                    NewPlaces: 'New Places',
                    EditRPPAfterCreate: 'Open address on create',
                    EditRPPAfterCreateTitle: 'Automatically opens the address editor for any new place and focuses on the House Number entry',
                    UseStreetFromClosestSegment: 'Street from closest segment',
                    UseStreetFromClosestSegmentTitle: "Pulls the street name from the closest visible segment and inserts into the new Place's address",
                    UseCityFromClosestSegment: 'City from closest segment',
                    UseCityFromClosestSegmentTitle: "Pulls the city name from the closest visible segment and inserts into the new Place's address",
                    ClosestSegmentAltCity: 'Use alt city when primary has none',
                    ClosestSegmentAltCityTitle: "When the primary is 'No city' try to find an alt street name with a city",
                    ClosestSegmentIgnorePLRUnnamedPR: 'Ignore PLRs & unnamed PR',
                    ClosestSegmentIgnorePLRUnnamedPRTitle: 'When looking for the closest segment, PLRs and unnamed PRs will be ignored',
                    LockLevel: 'Lock level',
                    LockLevelTitle: 'The lock level to set automatically when creating new Places',
                    MapChanges: 'Map Features',
                    ShowPlaceNames: 'Show Place names',
                    ShowPlaceNamesTitle: '',
                    ShowPointNames: 'Show point names',
                    ShowPointNamesTitle: "Will display the Place's name below the Place point",
                    ShowAreaNames: 'Show area names',
                    ShowAreaNamesTitle: "Will display the Place's name in the middle of the Place area",
                    ShowLockLevel: 'Show lock level',
                    ShowLockLevelTitle: "Will display the Place's lock level in the middle of the Place area",
                    ShowPLAName: 'Show PLA name',
                    ShowPLANameTitle: '',
                    Item: 'Item',
                    PlaceMenuCustomization: 'Quick-Create Place Shortcuts',
                    ClearDescription: 'Clear description button',
                    ClearDescriptionTitle: 'Adds a clear button to the top right of the description entry that when clicked will clear all text in the entry field',
                    PropertiesPanel: 'Properties Panel',
                    FontSize: 'Font size',
                    FontColor: 'Font color',
                    Bold: 'Bold',
                    FontOutlineColor: 'Font outline color',
                    FontOutlineWidth: 'Font outline width',
                    ProdPL: 'Use production permalink',
                    MoveAddress: 'Move address to top of panel',
                    MoveAddressTitle: 'Moves the address editor to the top of the properties panel',
                    ShowParkingSpaceEstimatorTool: 'Show Parking Space Estimator tool',
                    ShowParkingSpaceEstimatorToolTitle: 'Shows the button to launch the Parking Space Estimator tool',
                    PSEParkingSpaceEstimator: 'Parking Space Estimator',
                    PSELayoutType: 'Layout type',
                    PSE90degree: '90 degree',
                    PSEAngled: 'Angled',
                    PSEEstimatedNumOfSpots: 'Estimated # of spots: ',
                    PSESet: 'Set',
                    PSESpotWidth: 'Spot width (m)',
                    PSECal: 'Cal',
                    PSEDraw90DegreeTitle: 'Click to draw a line through an entire 90 degree parking space aisle.  Double click to finish drawing and measure the spaces.',
                    PSEDrawAngledTitle: 'Click to draw a line through an entire angled parking space aisle.  Double click to finish drawing and measure the spaces.',
                    PSEShowPSEButton: 'Show Parking Space Estimator tool button',
                    PSEShowPSEButtonTitle: 'Shows the button to launch the Parking Space Estimator tool',
                    PSEDisplayButtonTitle: 'Opens the Parking Space Estimator tool',
                    ShowNavPointClosestSegmentOnHover: 'Nav point & closest segment on hover',
                    ShowClosestSegmentSelected: 'Nav point to closest segment line',
                    EnableGLE: 'Enable Google Link Enhancer',
                    EnableGLETitle:
                    'Highlights closed Google links in red, linked Google POIs > 400m from the Waze Place in teal, invalid Google links in magenta, Google POIs linked multiple times in orange, already linked POI in gray (autocomplete menu)',
                    OpenPUR: 'Auto-open PUR',
                    OpenPURTitle: 'Automatically opens the PUR associated with the selected Place',
                    HidePaymentType: 'Hide payment type',
                    HidePaymentTypeTitle: 'Hide the Payment Type section when the cost is set to Free',
                    GeometryMods: 'Geometry tools',
                    GeometryModsTitle: 'Enables options for modifying the geometry such as: orthogonalization, ability to rotate or resize (scale up/down) area Places',
                    SimplifyFactor: 'Simplify factor',
                    SimplifyFactorTitle: 'The larger the simplification factor the more nodes will be removed',
                    PhotoViewer: 'Enable photo viewer',
                    PhotoViewerTitle: '',
                    HideShoppingServices: 'Hide Shopping / Services sub category suggestions',
                    HideSHoppingServicesTitle: '',
                    EnlargeGeoHandles: 'Enlarge geometry handles',
                    EnlargeGeoHandlesTitle: 'Makes the geometry handles on area Places larger so they are easier to grab to adjust the size',
                    hidePlaceNamesWhenPlacesHidden: 'Hide Place names for hidden Places',
                    hidePlaceNamesWhenPlacesHiddenTitle: 'When enabled, any Place that is hidden (either via the filter or hiding area Places shortcut) will not show their name on the map',
                    GLEShowTempClosed: 'Highlight closed places',
                    GLEShowTempClosedTitle: 'Shows/hides the PIE - Highlight closed Places layer (permanently and temporarily closed places)',
                    PlaceMenuCustomizationSubtitle: 'Select a category per slot. To assign keys, open WME Settings → Keyboard Shortcuts.',
                    CreateResidentialPlaceDesc: 'Creates a residential Place point',
                    CreateParkingLotDesc: 'Creates a parking lot Place',
                    HideAreaPlacesDesc: 'Toggle hiding area Places',
                    OrthogonalizeDesc: 'Orthogonalize Area Place',
                    SimplifyPlaceDesc: 'Simplify Area Place',
                    CreateShortcut: 'Create',
                },
                filter: {
                    PlaceFilterPanel: 'Place Filtering',
                    filter: 'Filter',
                    Hide: 'Hide',
                    Show: 'Show only',
                },
                hoursParser: {
                    defaultText: 'Paste Hours Here',
                    AddHours: 'Add hours',
                    AddHoursTitle: 'Add pasted hours to existing',
                    ReplaceHours: 'Replace all hours',
                    ReplaceHoursTitle: 'Replace existing hours with pasted hours',
                    errorSameOpenClose: 'Same open and close times detected',
                    errorOverlappingHours: 'Overlapping hours detected',
                    errorCannotParse: 'Unable to parse the provided hours',
                },
                aliases: {
                    makePrimaryButton: 'To Name',
                    makePrimaryTitle: 'Promote this alternate name to the primary name\n(WME Place Interface Enhancements)',
                },
                GLE: {
                    closedPlace: 'Google indicates this place is permanently closed.\nVerify with other sources or your editor community before deleting.',
                    tempClosedPlace: 'Google indicates this place is temporarily closed.',
                    multiLinked: 'Linked more than once already. Please find and remove multiple links.',
                    linkedToThisPlace: 'Already linked to this place',
                    linkedNearby: 'Already linked to a nearby place',
                    linkedToXPlaces: 'This is linked to {0} places',
                    badLink: 'Invalid Google link.  Please remove it.',
                    tooFar: 'The Google linked place is more than {0} meters from the Waze place.  Please verify the link is correct.',
                },
            },
            'es-419': {
                prefs: {
                    title: 'Place Interface Enhancements',
                    ShowAreaPlaceSize: 'Mostrar tamaño del área',
                    ShowImperial: 'Sistema Imperial',
                    ShowMetric: 'Sistema Métrico',
                    ShowRPPLockButtons: 'Mostrar botones de bloqueo para RPPs',
                    ShowRPPLockButtonsTitle: 'Muestra los botones de nivel de bloqueo para lugares residenciales',
                    ShowPlaceLocatorCrosshair: 'Retícula localizadora del lugar',
                    ShowPlaceLocatorCrosshairTitle: 'Centra el lugar en la pantalla y acercamiento al nivel definido',
                    Zoom: 'Acercamiento',
                    ZoomTitle: 'Nivel de acercamiento a utilizar cuando se centra en un lugar',
                    ShowAddressSearch: 'Botón de búsqueda de dirección',
                    ShowAddressSearchTitle: 'Muestra una lupa junto a la dirección del lugar. Al hacer clic en este botón, se cargará la dirección en la barra de búsqueda',
                    ShowPlaceCategoryButtons: 'Botones de categorías de lugares',
                    ShowPLAButton: 'Mostrar botón de PLAs',
                    ShowPLAButtonTitle:
                    'Inicia el modo de creación de un lugar del área de estacionamiento y establecerá el nombre del estacionamiento para que coincida con el nombre del lugar cuando se complete',
                    ShowCopyPlaceButton: 'Botón para copiar lugar',
                    ShowCopyPlaceButtonTitle: 'Copia el lugar seleccionado en un lugar nuevo con configuraciones idénticas',
                    ShowGPIDTooltip: 'Información del proveedor externo',
                    ShowGPIDTooltipTitle: 'Muestra un texto con la información del proveedor externo',
                    NewPlaces: 'Nuevos lugares',
                    EditRPPAfterCreate: 'Abrir dirección al crear',
                    EditRPPAfterCreateTitle: 'Abre automáticamente el editor de dirección para cualquier nuevo lugar y se enfoca en el campo de número de casa',
                    UseStreetFromClosestSegment: 'Calle del segmento más cercano',
                    UseStreetFromClosestSegmentTitle: 'Extrae el nombre de la calle del segmento visible más cercano y lo agrega en la dirección del nuevo lugar',
                    UseCityFromClosestSegment: 'Ciudad del segmento más cercano',
                    UseCityFromClosestSegmentTitle: 'Extrae el nombre de la ciudad del segmento visible más cercano y lo agrega en la dirección del nuevo lugar',
                    ClosestSegmentAltCity: "Buscar una ciudad alternativa cuando la ciudad principal sea 'Ninguno'",
                    ClosestSegmentAltCityTitle: 'Cuando la ciudad principal es "Ninguno" trata de encontrar un nombre de calle alternativo con una ciudad',
                    ClosestSegmentIgnorePLRUnnamedPR: 'Ignorar PLRs y PR sin nombre',
                    ClosestSegmentIgnorePLRUnnamedPRTitle: 'Ignorar segmentos de estacionamiento o privados al buscar el segmento mas cercano',
                    LockLevel: 'Nivel de bloqueo',
                    LockLevelTitle: 'El nivel de bloqueo para establecer automáticamente al crear nuevos lugares',
                    MapChanges: 'Cambios en el mapa',
                    ShowPlaceNames: 'Mostrar nombres de lugares',
                    ShowPlaceNamesTitle: '',
                    ShowPointNames: 'Mostrar nombres de punto',
                    ShowPointNamesTitle: 'Muestra el nombre de lugares definidos como punto',
                    ShowAreaNames: 'Mostrar nombres de área',
                    ShowAreaNamesTitle: 'Muestra el nombre de lugares definidos como área',
                    ShowLockLevel: 'Mostrar nivel de bloqueo',
                    ShowLockLevelTitle: 'Muestra el nivel de bloqueo en el centro del lugar',
                    ShowPLAName: 'Mostrar nombre de PLA',
                    ShowPLANameTitle: 'Muestra el nombre de áreas de estacionamiento (PLAs)',
                    Item: 'Opción',
                    PlaceMenuCustomization: 'Personalización del menú de lugares',
                    ClearDescription: 'Botón borrar descripción',
                    ClearDescriptionTitle: 'Añade un botón de borrado en la parte superior derecha del campo de descripción que deja vacíos todos los campos',
                    PropertiesPanel: 'Propiedades del panel',
                    FontSize: 'Tamaño de letra',
                    FontColor: 'Color de Letra',
                    Bold: 'Negrita',
                    FontOutlineColor: 'Color del contorno de la letra',
                    FontOutlineWidth: 'Ancho del contorno de la letra',
                    ProdPL: 'Forzar Permalink de producción',
                    MoveAddress: 'Mover la dirección al inicio del panel',
                    MoveAddressTitle: 'Mueve el editor de dirección al inicio del panel de propiedades',
                    ShowParkingSpaceEstimatorTool: 'Mostrar herramienta de estimación de espacios de estacionamiento',
                    ShowParkingSpaceEstimatorToolTitle: 'Muestra el botón para iniciar la herramienta de estimación de espacios de estacionamiento',
                    PSEParkingSpaceEstimator: 'Estimador de espacios de estacionamiento',
                    PSELayoutType: 'Tipo de disposición',
                    PSE90degree: '90 grados',
                    PSEAngled: 'En ángulo',
                    PSEEstimatedNumOfSpots: 'Número estimado de espacios: ',
                    PSESet: 'Establecer',
                    PSESpotWidth: 'Ancho del espacio (m)',
                    PSECal: 'Cal',
                    PSEDraw90DegreeTitle: 'Haga clic para trazar una línea a través de un pasillo de estacionamiento a 90 grados. Haga doble clic para terminar de trazar y medir los espacios.',
                    PSEDrawAngledTitle: 'Haga clic para trazar una línea a través de un pasillo de estacionamiento en ángulo. Haga doble clic para terminar de trazar y medir los espacios.',
                    PSEShowPSEButton: 'Mostrar botón del estimador de espacios de estacionamiento',
                    PSEShowPSEButtonTitle: 'Muestra el botón para iniciar el estimador de espacios de estacionamiento',
                    PSEDisplayButtonTitle: 'Abre el estimador de espacios de estacionamiento',
                    ShowNavPointClosestSegmentOnHover: 'Punto de nav y segmento más cercano (hover)',
                    ShowClosestSegmentSelected: 'Línea de punto nav al segmento más cercano',
                    EnableGLE: 'Habilitar mejoras en links de Google',
                    EnableGLETitle:
                    'Resalta los GPIDs a lugares cerrados en rojo, GPIDs a mas de 400m del lugar en Waze en verde azulado, GPIDs no válidos en magenta, GPIDs vinculados varias veces en naranja, GPIDs ya vinculados en gris (menú de autocompletar)',
                    OpenPUR: 'Abrir PUR automáticamente',
                    OpenPURTitle: 'Abre automáticamente el PUR asociado al lugar seleccionado',
                    HidePaymentType: 'Ocultar tipo de pago',
                    HidePaymentTypeTitle: 'Oculta la sección de tipo de pago cuando el costo está configurado como Gratuito',
                    GeometryMods: 'Herramientas de geometría',
                    GeometryModsTitle: 'Habilita opciones para modificar la geometría: ortogonalización, capacidad de rotar o redimensionar lugares de área',
                    SimplifyFactor: 'Factor de simplificación',
                    SimplifyFactorTitle: 'Cuanto mayor sea el factor de simplificación, más nodos serán eliminados',
                    PhotoViewer: 'Habilitar visor de fotos',
                    PhotoViewerTitle: '',
                    HideShoppingServices: 'Ocultar sugerencias de subcategoría Compras/Servicios',
                    HideSHoppingServicesTitle: '',
                    EnlargeGeoHandles: 'Agrandar los puntos de geometría',
                    EnlargeGeoHandlesTitle: 'Hace que los puntos de geometría en los lugares de área sean más grandes para facilitar su manipulación',
                    hidePlaceNamesWhenPlacesHidden: 'Ocultar nombres de lugares ocultos',
                    hidePlaceNamesWhenPlacesHiddenTitle: 'Cuando está habilitado, cualquier lugar oculto (mediante el filtro o el atajo de ocultar lugares de área) no mostrará su nombre en el mapa',
                    PlaceMenuCustomizationSubtitle: 'Seleccione una categoría por ranura. Para asignar teclas, abra Configuración de WME → Atajos de teclado.',
                    CreateResidentialPlaceDesc: 'Crea un punto de lugar residencial',
                    CreateParkingLotDesc: 'Crea un lugar de estacionamiento',
                    HideAreaPlacesDesc: 'Activar/desactivar la ocultación de lugares de área',
                    OrthogonalizeDesc: 'Ortogonalizar lugar de área',
                    SimplifyPlaceDesc: 'Simplificar lugar de área',
                    CreateShortcut: 'Crear',
                },
                filter: {
                    PlaceFilterPanel: 'Filtro de lugares',
                    filter: 'Filtro',
                    Hide: 'Ocultar',
                    Show: 'Mostrar solo',
                },
                hoursParser: {
                    defaultText: 'Pegar horarios aquí',
                    AddHours: 'Añadir horarios',
                    AddHoursTitle: 'Añadir los horarios pegados a los existentes',
                    ReplaceHours: 'Reemplazar todos los horarios',
                    ReplaceHoursTitle: 'Reemplazar los horarios existentes con los horarios pegados',
                    errorSameOpenClose: 'Se detectaron los mismos horarios de apertura y cierre',
                    errorOverlappingHours: 'Se detectaron horarios superpuestos',
                    errorCannotParse: 'No se pueden analizar los horarios proporcionados',
                },
                aliases: {
                    makePrimaryButton: 'A nombre',
                    makePrimaryTitle: 'Promover este nombre alternativo a nombre principal\n(WME Place Interface Enhancements)',
                },
                GLE: {
                    closedPlace: 'Google indica que este lugar está permanentemente cerrado. Verifica con otras fuentes o tu comunidad de edición antes de eliminar.',
                    tempClosedPlace: 'Google indica que este lugar está temporalmente cerrado.',
                    multiLinked: 'Vinculado más de una vez. Encuentra y elimina enlaces múltiples.',
                    linkedToThisPlace: 'Ya vinculado a este lugar',
                    linkedNearby: 'Ya vinculado a un lugar cercano',
                    linkedToXPlaces: 'Esto está vinculado a {0} lugares',
                    badLink: 'Enlace de Google no válido. Por favor elimínalo.',
                    tooFar: 'El lugar vinculado a Google está a más de {0} metros del lugar de Waze. Verifica que el enlace sea correcto.',
                },
            },
            fr: {
                prefs: {
                    title: 'Place Interface Enhancements',
                    ShowAreaPlaceSize: 'Afficher la taille de la place',
                    ShowImperial: 'Afficher en imperial',
                    ShowMetric: 'Afficher en métrique',
                    ShowRPPLockButtons: 'Afficher les boutons de lock pour les résidentiels',
                    ShowRPPLockButtonsTitle: 'Affiche des boutons pour le niveau de verrouillage des lieux résidentiels',
                    ShowPlaceLocatorCrosshair: 'Repère de localisation du lieu',
                    ShowPlaceLocatorCrosshairTitle: "Centre le lieu à l'écran et zoome au niveau défini",
                    Zoom: 'Zoom',
                    ZoomTitle: "Niveau de zoom utilisé lorsqu'on se centre sur un lieu",
                    ShowAddressSearch: "Icône de recherche d'adresse",
                    ShowAddressSearchTitle: "Affiche une loupe à côté de l'adresse du lieu. Cliquer ce bouton chargera l'adresse dans la barre de recherche",
                    ShowPlaceCategoryButtons: 'Ajouter des icônes de catégorie au dessus de la sélection de catégories',
                    ShowPLAButton: 'Afficher le bouton de création de parking',
                    ShowPLAButtonTitle: 'Démarre le mode création de parking pour tracer un parking qui aura le nom du lieu sélectionné',
                    ShowCopyPlaceButton: 'Bouton de clonage de lieu',
                    ShowCopyPlaceButtonTitle: 'Clone le lieu sélectionné en nouveau lieu avec les mêmes valeurs',
                    ShowGPIDTooltip: 'Infobulle fournisseur externe',
                    ShowGPIDTooltipTitle: 'Affiche une infobulle avec les informations du fournisseur externe',
                    NewPlaces: 'Nouveaux Lieux',
                    EditRPPAfterCreate: "Ouvrir l'adresse à la création",
                    EditRPPAfterCreateTitle: "Ouvre automatiquement l'éditeur d'adresse pour tout nouveau lieu et se positionne sur le champ de numéro de maison",
                    UseStreetFromClosestSegment: 'Rue du segment le plus proche',
                    UseStreetFromClosestSegmentTitle: "Prend le nom de rue du segment visible le plus proche et l'insère dans l'adresse du nouveau lieu",
                    UseCityFromClosestSegment: 'Ville du segment le plus proche',
                    UseCityFromClosestSegmentTitle: "Prend le nom de ville du segment visible le plus proche et l'insère dans l'adresse du nouveau lieu",
                    ClosestSegmentAltCity: 'Lorsque le nom principal est «Hors ville» regarder le nom en alt',
                    ClosestSegmentAltCityTitle: 'Lorsque le nom principal est «Hors ville» essayer de trouver un nom de rue alternatif avec une ville',
                    ClosestSegmentIgnorePLRUnnamedPR: 'Ignorer les parkings et voies privées non nommés',
                    ClosestSegmentIgnorePLRUnnamedPRTitle: 'Lorsque le script regarde le nom du segment visible le plus proche, les parkings et voies privées non nommées seront ignorés',
                    LockLevel: 'Verrouillage ',
                    LockLevelTitle: 'Le niveau de verrouillage est appliqué automatiquement à la création du lieu',
                    MapChanges: 'Changements de carte',
                    ShowPlaceNames: 'Afficher le nom des lieux',
                    ShowPlaceNamesTitle: '',
                    ShowPointNames: 'Afficher le nom des lieux point',
                    ShowPointNamesTitle: 'Affiche le nom du lieu sous le lieu point',
                    ShowAreaNames: 'Afficher le nom des lieux zone',
                    ShowAreaNamesTitle: 'Affiche le nom du lieu au milieu du lieu zone',
                    ShowLockLevel: 'Afficher le niveau de verrouillage',
                    ShowLockLevelTitle: 'Afficher le niveau de verrouillage du lieu au milieu du lieu zone',
                    ShowPLAName: 'Afficher le nom des parkings',
                    ShowPLANameTitle: 'Affiche le nom du parking au milieu du lieu zone',
                    Item: 'Option',
                    PlaceMenuCustomization: 'Personnalisation du menu Lieu',
                    ClearDescription: 'Bouton «Effacer description»',
                    ClearDescriptionTitle: "Ajoute un bouton «Effacer description» en haut à droite de l'entrée de description qui, lorsqu'il est cliqué, effacera tout le texte dans le champ de saisie",
                    PropertiesPanel: 'Panneau des propriétés',
                    FontSize: 'Taille de police',
                    FontColor: 'Couleur de police',
                    Bold: 'Gras',
                    FontOutlineColor: 'Couleur surlignage police',
                    FontOutlineWidth: 'Épaisseur surlignage police',
                    ProdPL: 'Utiliser le permalink de production',
                    MoveAddress: "Déplacer l'adresse en haut du panneau",
                    MoveAddressTitle: "Déplace l'édition d'adresse en haut du panneau de propritétés",
                    ShowParkingSpaceEstimatorTool: 'Afficher le simulateur de places de stationnement',
                    ShowParkingSpaceEstimatorToolTitle: 'Affiche un bouton pour lancer le simulateur de places de stationnement',
                    PSEParkingSpaceEstimator: 'Simulateur places de stationnement',
                    PSELayoutType: 'Emplacements:',
                    PSE90degree: 'A 90 degrés',
                    PSEAngled: 'Inclinés',
                    PSEEstimatedNumOfSpots: 'Nombre estimé de places: ',
                    PSESet: 'Set',
                    PSESpotWidth: 'Largeur place (m)',
                    PSECal: 'Cal',
                    PSEDraw90DegreeTitle: 'Cliquez pour dessiner une ligne passant à travers les emplacements de parking à 90°. Double-cliquez pour terminer le tracé et mesurer les espaces.',
                    PSEDrawAngledTitle: 'Cliquez pour dessiner une ligne passant à travers les emplacements de parking inclinés. Double-cliquez pour terminer le tracé et mesurer les espaces.',
                    PSEShowPSEButton: 'Afficher le simulateur de places de stationnement',
                    PSEShowPSEButtonTitle: 'Affiche un bouton pour lancer le simulateur de places de stationnement',
                    PSEDisplayButtonTitle: 'Ouvre le simulateur de places de stationnement',
                    ShowNavPointClosestSegmentOnHover: "Point d'entrée et segment le plus proche (hover)",
                    ShowClosestSegmentSelected: "Ligne du point d'entrée au segment le plus proche",
                    EnableGLE: 'Activer le lien Google amélioré',
                    EnableGLETitle:
                    "Met en évidence les liens Google fermés en rouge, les points d'intérêt Google liés se trouvant à plus de 400 m du Lieu Waze en bleu ciel, les liens Google non valides en magenta, les points d'intérêt Google liés plusieurs fois en orange, les points d'intérêt déjà liés en gris (menu de saisie semi-automatique)",
                    OpenPUR: 'Ouverture automatique des PUR',
                    OpenPURTitle: 'Ouvre automatiquement les PUR associés au lieu sélectionné',
                    HidePaymentType: 'Masquer les modes de paiement',
                    HidePaymentTypeTitle: 'Masque la section des modes de paiement lorsque le coût est défini comme gratuit',
                    GeometryMods: 'Outils de géométrie',
                    GeometryModsTitle: 'Active les options pour modifier la géométrie telle que : orthogonalisation, possibilité de faire pivoter ou de redimensionner la zone (redimensionnement)',
                    SimplifyFactor: 'Facteur de simplification',
                    SimplifyFactorTitle: 'Plus le facteur de simplification est grand, plus de nœuds seront supprimés',
                    PhotoViewer: 'Activer la visionneuse photos',
                    PhotoViewerTitle: '',
                    HideShoppingServices: 'Masquer les suggestions de sous-catégorie Shopping / Services',
                    HideSHoppingServicesTitle: '',
                    EnlargeGeoHandles: 'Agrandir les points de géométrie',
                    EnlargeGeoHandlesTitle: 'Rend les points de géométrie des Lieux zone plus grand pour faciliter la sélection pour ajuster la taille',
                    hidePlaceNamesWhenPlacesHidden: 'Cacher le nom des Lieux masqués',
                    PlaceMenuCustomizationSubtitle: 'Sélectionnez une catégorie par emplacement. Pour attribuer des touches, ouvrez WME Paramètres → Raccourcis clavier.',
                    CreateResidentialPlaceDesc: 'Crée un lieu résidentiel',
                    CreateParkingLotDesc: 'Crée un parking',
                    HideAreaPlacesDesc: 'Basculer le masquage des lieux de zone',
                    OrthogonalizeDesc: 'Orthogonaliser un lieu de zone',
                    SimplifyPlaceDesc: 'Simplifier un lieu de zone',
                    CreateShortcut: 'Créer',
                    hidePlaceNamesWhenPlacesHiddenTitle:
                    'Lorsque activé, tous les Lieux masqués (soit via le filtre ou soit via le raccourci pour masquer les Lieux) n’auront pas leur nom d’affiché sur la carte',
                },
                filter: {
                    PlaceFilterPanel: 'Filtre des lieux',
                    filter: 'Filtre',
                    Hide: 'Masquer',
                    Show: 'Montrer uniquement',
                },
                hoursParser: {
                    defaultText: 'Coller les horaires ici',
                    AddHours: 'Ajouter des horaires',
                    AddHoursTitle: "Ajouter les horaires collés à l'existant",
                    ReplaceHours: 'Remplacer tous les horaires',
                    ReplaceHoursTitle: 'Remplacer les horaires existants par les horaires collés',
                    errorSameOpenClose: "Même temps d'ouverture et de fermeture détectés",
                    errorOverlappingHours: 'Chevauchement des horaires détecté',
                    errorCannotParse: "Impossible d'analyser les horaires fournis",
                },
                aliases: {
                    makePrimaryButton: 'En nom',
                    makePrimaryTitle: 'Définir ce nom alternatif comme nom principal\n(WME Place Interface Enhancements)',
                },
                GLE: {
                    closedPlace: "Google indique que cet endroit est définitivement fermé. \ NVérifiez avec d'autres sources ou avec votre communauté d'éditeurs avant de le supprimer.",
                    tempClosedPlace: 'Google indique que cet endroit est temporairement fermé.',
                    multiLinked: "Déjà lié plus d'une fois. S'il vous plaît trouvez et supprimez plusieurs liens.",
                    linkedToThisPlace: 'Déjà lié à ce Lieu',
                    linkedNearby: 'Déjà lié à ce Lieu à proximité',
                    linkedToXPlaces: 'Ceci est lié à {0} Lieux',
                    badLink: "Lien Google non valide. Veuillez l'enlever.",
                    tooFar: 'Le Lieu lié à Google se trouve à plus de {0} mètres du lieu Waze. Veuillez vérifier que le lien est correct.',
                },
            },
        });
    }

    function setTranslations(translations) {
        const currentLocale = sdk.Settings.getLocale().localeCode;
        I18n.translations[currentLocale].pie = translations.en;
        // Match: key 'es-419' matches currentLocale 'es' because 'es-419'.startsWith('es')
        // Also match exact: 'fr'.startsWith('fr') = true
        for (var i = 0; i < Object.keys(translations).length; i++) {
            var locale = Object.keys(translations)[i];
            if (locale === currentLocale || locale.startsWith(currentLocale)) {
                I18n.translations[currentLocale].pie = translations[locale];
                return;
            }
        }
    }
})();
