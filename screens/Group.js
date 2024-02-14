import * as React from "react";
import { Image } from "expo-image";
import { StyleSheet, View, Text } from "react-native";
import { Color, FontSize, FontFamily, Border } from "../GlobalStyles";

const Group = () => {
  return (
    <View style={styles.group}>
      <View style={[styles.launchScreen, styles.signShadowBox]}>
        <View style={styles.container2}>
          <View style={[styles.image14, styles.imageLayout]}>
            <View style={[styles.group1, styles.groupPosition1]}>
              <View style={[styles.group2, styles.groupIconPosition]}>
                <Image
                  style={[styles.groupIcon, styles.groupIconPosition]}
                  contentFit="cover"
                  source={require("../assets/group.png")}
                />
                <Image
                  style={[styles.groupIcon1, styles.groupIconLayout]}
                  contentFit="cover"
                  source={require("../assets/group1.png")}
                />
              </View>
            </View>
          </View>
          <View style={[styles.image15, styles.imagePosition1]}>
            <View style={[styles.group3, styles.groupPosition1]}>
              <View style={[styles.group2, styles.groupIconPosition]}>
                <Image
                  style={[styles.groupIcon2, styles.groupIconPosition]}
                  contentFit="cover"
                  source={require("../assets/group2.png")}
                />
                <Image
                  style={[styles.groupIcon3, styles.groupIconLayout]}
                  contentFit="cover"
                  source={require("../assets/group1.png")}
                />
              </View>
            </View>
          </View>
        </View>
        <Image
          style={styles.image16Icon}
          contentFit="cover"
          source={require("../assets/image-16.png")}
        />
      </View>
      <View style={[styles.signIn, styles.signShadowBox]}>
        <View style={[styles.textbox1, styles.textboxLayout2]}>
          <Image
            style={styles.vectorIcon}
            contentFit="cover"
            source={require("../assets/vector.png")}
          />
          <Text
            style={[
              styles.enterEmailenrollmentNumber,
              styles.enterContainerLayout,
            ]}
          >
            Enter email/Enrollment Number
          </Text>
          <Image
            style={[styles.profileIcon, styles.profileIconLayout]}
            contentFit="cover"
            source={require("../assets/profile.png")}
          />
        </View>
        <Text style={[styles.welcome, styles.textTypo2]}>Welcome!</Text>
        <Text
          style={[styles.hiEnterYour, styles.reviewsTypo1]}
        >{`Hi, Enter your details to get sign in
to your account`}</Text>
        <View style={[styles.button1Parent, styles.parentLayout]}>
          <View style={[styles.button1, styles.buttonLayout3]}>
            <Text style={[styles.text, styles.emailLayout]} />
            <Image
              style={styles.googleIcon}
              contentFit="cover"
              source={require("../assets/google.png")}
            />
          </View>
          <View style={[styles.button2, styles.buttonLayout3]}>
            <Text style={[styles.text, styles.emailLayout]} />
            <Image
              style={styles.googleIcon}
              contentFit="cover"
              source={require("../assets/apple.png")}
            />
          </View>
          <View style={[styles.button3, styles.buttonLayout3]}>
            <Text style={[styles.text, styles.emailLayout]} />
            <Image
              style={styles.googleIcon}
              contentFit="cover"
              source={require("../assets/logo-facebook.png")}
            />
          </View>
          <Text style={[styles.orSignIn, styles.reviewsTypo1]}>
            Or Sign In via
          </Text>
        </View>
        <View style={styles.container2}>
          <View style={[styles.image14, styles.imageLayout]}>
            <View style={[styles.group1, styles.groupPosition1]}>
              <View style={[styles.group2, styles.groupIconPosition]}>
                <Image
                  style={[styles.groupIcon, styles.groupIconPosition]}
                  contentFit="cover"
                  source={require("../assets/group.png")}
                />
                <Image
                  style={[styles.groupIcon1, styles.groupIconLayout]}
                  contentFit="cover"
                  source={require("../assets/group1.png")}
                />
              </View>
            </View>
          </View>
          <View style={[styles.image15, styles.imagePosition1]}>
            <View style={[styles.group3, styles.groupPosition1]}>
              <View style={[styles.group2, styles.groupIconPosition]}>
                <Image
                  style={[styles.groupIcon2, styles.groupIconPosition]}
                  contentFit="cover"
                  source={require("../assets/group2.png")}
                />
                <Image
                  style={[styles.groupIcon3, styles.groupIconLayout]}
                  contentFit="cover"
                  source={require("../assets/group1.png")}
                />
              </View>
            </View>
          </View>
        </View>
        <Image
          style={[styles.image19Icon, styles.image19IconLayout]}
          contentFit="cover"
          source={require("../assets/image-19.png")}
        />
        <View style={[styles.dropdownButton1, styles.buttonBorder2]}>
          <Text
            style={[styles.selectYourUniversity, styles.enterContainerLayout]}
          >
            Select your University
          </Text>
          <Image
            style={[styles.chevronDownLarge, styles.searchIconPosition]}
            contentFit="cover"
            source={require("../assets/chevron-down-large.png")}
          />
        </View>
        <View style={[styles.button4Parent, styles.parentLayout]}>
          <View style={[styles.button4, styles.buttonLayout2]}>
            <Text style={[styles.login, styles.hr3Layout]}>Login</Text>
          </View>
          <View style={[styles.button41, styles.iconPosition9]}>
            <Text style={[styles.signUp, styles.signUpPosition]}>Sign Up</Text>
          </View>
        </View>
        <View style={[styles.textbox11, styles.textbox11Position]}>
          <Image
            style={styles.vectorIcon}
            contentFit="cover"
            source={require("../assets/vector.png")}
          />
          <Text
            style={[
              styles.enterEmailenrollmentNumber,
              styles.enterContainerLayout,
            ]}
          >
            Enter your Password
          </Text>
          <Image
            style={[styles.profileIcon, styles.profileIconLayout]}
            contentFit="cover"
            source={require("../assets/lock.png")}
          />
        </View>
      </View>
      <View style={[styles.homeServiceListing, styles.signShadowBox]}>
        <View style={[styles.container8, styles.containerShadowBox1]}>
          <Text style={[styles.upcomingEvents, styles.reviewsTypo]}>
            Upcoming Events
          </Text>
          <View style={[styles.container9, styles.containerBorder4]}>
            <Text style={[styles.abc, styles.reviewsTypo]}>ABC</Text>
            <Image
              style={styles.image23Icon}
              contentFit="cover"
              source={require("../assets/image-23.png")}
            />
          </View>
          <View style={[styles.container10, styles.containerBorder4]}>
            <Text style={[styles.abc, styles.reviewsTypo]}>DEF</Text>
            <Image
              style={styles.image23Icon}
              contentFit="cover"
              source={require("../assets/image-24.png")}
            />
          </View>
          <View style={[styles.container11, styles.containerLayout14]}>
            <Text style={[styles.abc, styles.reviewsTypo]}>JKL</Text>
            <Image
              style={styles.image23Icon}
              contentFit="cover"
              source={require("../assets/image-25.png")}
            />
          </View>
          <View style={[styles.container12, styles.containerLayout14]}>
            <Text style={[styles.abc, styles.reviewsTypo]}>GHI</Text>
            <Image
              style={styles.image23Icon}
              contentFit="cover"
              source={require("../assets/image-26.png")}
            />
          </View>
        </View>
        <View style={[styles.container13, styles.containerShadowBox]}>
          <Image
            style={[styles.image27Icon, styles.button21Position]}
            contentFit="cover"
            source={require("../assets/image-27.png")}
          />
          <Text style={[styles.findATasker, styles.reviewsTypo]}>
            Find a tasker at extremely preferential prices
          </Text>
          <View style={[styles.tag4, styles.tagLayout1]}>
            <View style={[styles.frame, styles.buttonBorder1]}>
              <Text style={[styles.findNow, styles.findNowPosition]}>
                Find Now
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.container14}>
          <View style={[styles.tabBarMenu1, styles.tabPosition]}>
            <View style={styles.frame1}>
              <Image
                style={[styles.houseIcon, styles.imagePosition]}
                contentFit="cover"
                source={require("../assets/house.png")}
              />
              <Text style={[styles.home, styles.homePosition]}>Home</Text>
            </View>
            <View style={styles.frame2}>
              <Image
                style={[styles.houseIcon, styles.imagePosition]}
                contentFit="cover"
                source={require("../assets/user.png")}
              />
              <Text style={[styles.externalEvents, styles.homePosition]}>
                External events
              </Text>
            </View>
            <View style={[styles.frame3, styles.frameLayout1]}>
              <Image
                style={[styles.houseIcon, styles.imagePosition]}
                contentFit="cover"
                source={require("../assets/receipt.png")}
              />
              <Text style={[styles.myEvents, styles.homePosition]}>
                My events
              </Text>
            </View>
          </View>
          <Image
            style={styles.container14Child}
            contentFit="cover"
            source={require("../assets/line-1.png")}
          />
        </View>
        <View style={styles.container15}>
          <Text style={[styles.goodMorning, styles.reviewsTypo1]}>
            Good morning!
          </Text>
          <Text style={[styles.akshatShah, styles.akshatShahPosition]}>
            Akshat Shah
          </Text>
          <Image
            style={[styles.bell1Icon, styles.iconPosition9]}
            contentFit="cover"
            source={require("../assets/bell-1.png")}
          />
          <Image
            style={[styles.avatar1Icon, styles.iconLayout7]}
            contentFit="cover"
            source={require("../assets/avatar-1.png")}
          />
          <View style={[styles.image28, styles.imageLayout]}>
            <View style={[styles.group1, styles.groupPosition1]}>
              <View style={[styles.group2, styles.groupIconPosition]}>
                <Image
                  style={[styles.groupIcon, styles.groupIconPosition]}
                  contentFit="cover"
                  source={require("../assets/group.png")}
                />
                <Image
                  style={[styles.groupIcon1, styles.groupIconLayout]}
                  contentFit="cover"
                  source={require("../assets/group1.png")}
                />
              </View>
            </View>
          </View>
          <View style={styles.image29}>
            <View style={[styles.group3, styles.groupPosition1]}>
              <View style={[styles.group2, styles.groupIconPosition]}>
                <Image
                  style={[styles.groupIcon2, styles.groupIconPosition]}
                  contentFit="cover"
                  source={require("../assets/group3.png")}
                />
                <Image
                  style={[styles.groupIcon3, styles.groupIconLayout]}
                  contentFit="cover"
                  source={require("../assets/group1.png")}
                />
              </View>
            </View>
          </View>
          <View style={[styles.container16, styles.containerLayout13]}>
            <View
              style={[styles.container16Child, styles.container120Border]}
            />
            <Text style={[styles.whichEventDo, styles.textLayout]}>
              Which event do you want to attend?
            </Text>
            <Image
              style={[styles.iconButton1, styles.iconPosition8]}
              contentFit="cover"
              source={require("../assets/icon-button-1.png")}
            />
          </View>
          <Image
            style={styles.container15Child}
            contentFit="cover"
            source={require("../assets/line-1.png")}
          />
          <Image
            style={[styles.image19Icon1, styles.image19IconLayout]}
            contentFit="cover"
            source={require("../assets/image-19.png")}
          />
        </View>
        <Image
          style={[styles.image27Icon1, styles.parentLayout]}
          contentFit="cover"
          source={require("../assets/image-271.png")}
        />
        <View style={[styles.tag41, styles.tagLayout1]}>
          <View style={[styles.frame, styles.buttonBorder1]}>
            <Text style={[styles.findNow, styles.findNowPosition]}>
              Find Now
            </Text>
          </View>
        </View>
      </View>
      <View style={[styles.bookingSelectTaskSchedule, styles.signShadowBox]}>
        <View style={[styles.overlay1, styles.overlayPosition]} />
        <View style={styles.container47}>
          <View style={[styles.image28, styles.imageLayout]}>
            <View style={[styles.group1, styles.groupPosition1]}>
              <View style={[styles.group2, styles.groupIconPosition]}>
                <Image
                  style={[styles.groupIcon, styles.groupIconPosition]}
                  contentFit="cover"
                  source={require("../assets/group.png")}
                />
                <Image
                  style={[styles.groupIcon1, styles.groupIconLayout]}
                  contentFit="cover"
                  source={require("../assets/group1.png")}
                />
              </View>
            </View>
          </View>
          <View style={styles.image29}>
            <View style={[styles.group3, styles.groupPosition1]}>
              <View style={[styles.group2, styles.groupIconPosition]}>
                <Image
                  style={[styles.groupIcon2, styles.groupIconPosition]}
                  contentFit="cover"
                  source={require("../assets/group3.png")}
                />
                <Image
                  style={[styles.groupIcon3, styles.groupIconLayout]}
                  contentFit="cover"
                  source={require("../assets/group1.png")}
                />
              </View>
            </View>
          </View>
          <Image
            style={styles.arrowRight5}
            contentFit="cover"
            source={require("../assets/arrow-right-5.png")}
          />
          <Text style={[styles.taskerProfile, styles.bookNowTypo]}>
            Tasker Profile
          </Text>
          <Image
            style={styles.container47Child}
            contentFit="cover"
            source={require("../assets/line-1.png")}
          />
          <Image
            style={styles.shareNetwork2}
            contentFit="cover"
            source={require("../assets/share-network-2.png")}
          />
        </View>
        <View style={[styles.container48, styles.containerBorder5]}>
          <Text style={[styles.ashleyRobinson, styles.reviewsTypo]}>
            Ashley Robinson
          </Text>
          <Image
            style={[styles.avatar11Icon, styles.avatar11IconLayout]}
            contentFit="cover"
            source={require("../assets/avatar-11.png")}
          />
          <Image
            style={[styles.cCheck5, styles.iconPosition7]}
            contentFit="cover"
            source={require("../assets/c-check-5.png")}
          />
          <Image
            style={[styles.container48Child, styles.container48Position]}
            contentFit="cover"
            source={require("../assets/line-23.png")}
          />
          <Text style={[styles.overallJobs32Container, styles.toolsnoTypo]}>
            <Text style={styles.overallJobs}>{`Overall jobs
`}</Text>
            <Text style={styles.text3}>
              <Text style={styles.carTypo}>32</Text>
              <Text style={styles.text5}>{` `}</Text>
            </Text>
          </Text>
          <Image
            style={[styles.delivery2Icon, styles.iconPosition7]}
            contentFit="cover"
            source={require("../assets/delivery-2.png")}
          />
          <Text style={[styles.vehiclescar, styles.unreadPosition]}>
            <Text style={styles.overallJobs}>{`Vehicles
`}</Text>
            <Text style={[styles.car, styles.carTypo]}>Car</Text>
          </Text>
          <Image
            style={[styles.container48Item, styles.container48Position]}
            contentFit="cover"
            source={require("../assets/line-23.png")}
          />
          <Image
            style={[styles.brush2Icon, styles.iconPosition7]}
            contentFit="cover"
            source={require("../assets/brush-2.png")}
          />
          <Text style={[styles.toolsno, styles.toolsnoTypo]}>
            <Text style={styles.overallJobs}>{`Tools
`}</Text>
            <Text style={[styles.car, styles.carTypo]}>No</Text>
          </Text>
          <View style={[styles.tag12, styles.tagLayout]}>
            <View style={[styles.frame5, styles.frameBg1]}>
              <Text style={[styles.reviews, styles.reviewsPosition]}>
                5.0 (42 reviews)
              </Text>
              <Image
                style={[styles.starIcon, styles.iconLayout6]}
                contentFit="cover"
                source={require("../assets/star.png")}
              />
            </View>
            <View style={[styles.frame6, styles.framePosition10]}>
              <Text style={[styles.eliteTasker, styles.taskInfoPosition]}>
                Elite tasker
              </Text>
            </View>
          </View>
          <Text style={[styles.workingAsA, styles.textLayout]}>
            Working as a driver demands a set of vital skills and experiences to
            guarantee both safety and efficiency in transportation.
          </Text>
        </View>
        <Text style={[styles.reviews1, styles.reviewsTypo]}>Reviews</Text>
        <View style={[styles.container49, styles.containerBorder2]}>
          <Text
            style={[styles.utExercitationOccaecat, styles.textLayout]}
          >{`Ut exercitation occaecat minim eu qui ipsum. Ad
occaecat velit sunt mollit magna `}</Text>
          <Image
            style={[styles.avatar12Icon, styles.iconLayout7]}
            contentFit="cover"
            source={require("../assets/avatar-12.png")}
          />
          <Text style={[styles.text6, styles.textLayout]}>02/04/2022</Text>
          <Text style={[styles.elizabethBailey, styles.reviewsTypo]}>
            Elizabeth Bailey
          </Text>
          <Image
            style={styles.rating11Icon}
            contentFit="cover"
            source={require("../assets/rating-11.png")}
          />
        </View>
        <View style={[styles.container50, styles.containerBorder3]}>
          <Text style={[styles.utExercitationOccaecat1, styles.textLayout]}>
            Ut exercitation occaecat minim eu qui ipsum.
          </Text>
          <Image
            style={[styles.avatar12Icon, styles.iconLayout7]}
            contentFit="cover"
            source={require("../assets/avatar-13.png")}
          />
          <Text style={[styles.text6, styles.textLayout]}>19/03/2021</Text>
          <Text style={[styles.elizabethBailey, styles.reviewsTypo]}>
            Anna Fernandez
          </Text>
          <Image
            style={styles.rating11Icon}
            contentFit="cover"
            source={require("../assets/rating-11.png")}
          />
        </View>
        <View style={[styles.container51, styles.containerBorder3]}>
          <Text
            style={[styles.doloreAuteAliqua, styles.doloreLayout]}
          >{`Dolore aute aliqua quis non do incididunt. Sunt cupidatat laboris commodo do occaecat irure id exercitation. Veniam culpa irure veniam Lorem ut
See more`}</Text>
          <Image
            style={[styles.avatar12Icon, styles.iconLayout7]}
            contentFit="cover"
            source={require("../assets/avatar-14.png")}
          />
          <Text style={[styles.text6, styles.textLayout]}>22/12/2020</Text>
          <Text style={[styles.elizabethBailey, styles.reviewsTypo]}>
            Matthew Brown
          </Text>
          <Image
            style={styles.rating11Icon}
            contentFit="cover"
            source={require("../assets/rating-11.png")}
          />
        </View>
        <View style={[styles.container52, styles.containerBorder2]}>
          <Text style={[styles.doloreAuteAliqua, styles.doloreLayout]}>
            Dolore aute aliqua quis non do incididunt. Sunt cupidatat laboris
            commodo
          </Text>
          <Image
            style={[styles.avatar12Icon, styles.iconLayout7]}
            contentFit="cover"
            source={require("../assets/avatar-15.png")}
          />
          <Text style={[styles.text6, styles.textLayout]}>08/05/2020</Text>
          <Text style={[styles.elizabethBailey, styles.reviewsTypo]}>
            Ashley Gonzalez
          </Text>
          <Image
            style={styles.rating11Icon}
            contentFit="cover"
            source={require("../assets/rating-11.png")}
          />
        </View>
        <View style={[styles.container53, styles.containerBorder3]}>
          <Text
            style={[styles.doloreAuteAliqua2, styles.doloreLayout]}
          >{`Dolore aute aliqua quis non do incididunt. Sunt cupidatat laboris commodo do occaecat irure id exercitation. `}</Text>
          <Image
            style={[styles.avatar12Icon, styles.iconLayout7]}
            contentFit="cover"
            source={require("../assets/avatar-16.png")}
          />
          <Text style={[styles.text6, styles.textLayout]}>22/10/2020</Text>
          <Text style={[styles.elizabethBailey, styles.reviewsTypo]}>
            Jennifer Edwards
          </Text>
          <Image
            style={styles.rating11Icon}
            contentFit="cover"
            source={require("../assets/rating-11.png")}
          />
        </View>
        <View style={[styles.button7, styles.buttonBorder]}>
          <Text style={[styles.readMore, styles.enterContainerLayout]}>
            Read more
          </Text>
        </View>
        <View style={[styles.container54, styles.containerShadowBox1]}>
          <View style={[styles.container55, styles.containerLayout12]}>
            <Text style={[styles.reviews2, styles.signUp2Position]}>
              32 reviews
            </Text>
            <Image
              style={[styles.rating16Icon, styles.iconPosition6]}
              contentFit="cover"
              source={require("../assets/rating-11.png")}
            />
          </View>
          <View style={[styles.container56, styles.containerLayout12]}>
            <Text style={[styles.reviews3, styles.reviews3Position]}>
              1 reviews
            </Text>
            <Image
              style={[styles.rating17Icon, styles.reviews3Position]}
              contentFit="cover"
              source={require("../assets/rating-17.png")}
            />
          </View>
          <View style={[styles.container57, styles.containerLayout12]}>
            <Text style={[styles.reviews4, styles.seeAllPosition]}>
              8 reviews
            </Text>
            <Image
              style={[styles.rating18Icon, styles.signUpPosition]}
              contentFit="cover"
              source={require("../assets/rating-18.png")}
            />
          </View>
          <View style={[styles.container58, styles.containerLayout12]}>
            <Text style={[styles.reviews3, styles.reviews3Position]}>
              1 reviews
            </Text>
            <Image
              style={styles.rating19Icon}
              contentFit="cover"
              source={require("../assets/rating-19.png")}
            />
          </View>
          <View style={[styles.container59, styles.containerLayout12]}>
            <Text style={[styles.reviews3, styles.reviews3Position]}>
              1 reviews
            </Text>
            <Image
              style={[styles.rating20Icon, styles.rating20IconPosition]}
              contentFit="cover"
              source={require("../assets/rating-20.png")}
            />
          </View>
        </View>
        <View style={[styles.container60, styles.containerPosition1]}>
          <View style={[styles.button8, styles.button8Layout]}>
            <Text style={[styles.selectSchedule, styles.cCheck6Position]}>
              Select Schedule
            </Text>
          </View>
          <Image
            style={styles.container14Child}
            contentFit="cover"
            source={require("../assets/line-1.png")}
          />
          <Text style={[styles.hr, styles.reviewsTypo]}>$15/hr</Text>
          <Text style={[styles.hireWith, styles.textLayout]}>Hire with:</Text>
        </View>
        <View style={[styles.container60, styles.containerPosition1]}>
          <View style={[styles.button9, styles.buttonPosition]}>
            <Text style={[styles.continue, styles.emailLayout]}>Continue</Text>
          </View>
          <Image
            style={styles.container14Child}
            contentFit="cover"
            source={require("../assets/line-1.png")}
          />
        </View>
        <View style={styles.container62}>
          <Image
            style={styles.container62Child}
            contentFit="cover"
            source={require("../assets/line-27.png")}
          />
          <Text style={[styles.bookNow, styles.bookNowTypo]}>Book Now</Text>
          <View style={styles.container62Item} />
          <View style={styles.container63}>
            <Text style={[styles.february2024, styles.reviewsTypo]}>
              February 2024
            </Text>
            <Image
              style={[styles.chevronLeftLarge1, styles.chevronPosition]}
              contentFit="cover"
              source={require("../assets/chevron-left-large-1.png")}
            />
            <Image
              style={[styles.chevronRightLarge1, styles.chevronPosition]}
              contentFit="cover"
              source={require("../assets/chevron-right-large-1.png")}
            />
            <View style={styles.table1}>
              <View style={styles.header}>
                <View style={[styles.frame7, styles.framePosition8]}>
                  <Text style={[styles.sat, styles.textPosition3]}>Sat</Text>
                </View>
                <View style={[styles.frame8, styles.framePosition7]}>
                  <Text style={[styles.sat, styles.textPosition3]}>Thu</Text>
                </View>
                <View style={[styles.frame9, styles.framePosition6]}>
                  <Text style={[styles.sat, styles.textPosition3]}>Wed</Text>
                </View>
                <View style={[styles.frame10, styles.framePosition5]}>
                  <Text style={[styles.sat, styles.textPosition3]}>Tue</Text>
                </View>
                <View style={[styles.frame11, styles.framePosition4]}>
                  <Text style={[styles.sat, styles.textPosition3]}>Mon</Text>
                </View>
                <View style={[styles.frame12, styles.framePosition3]}>
                  <Text style={[styles.sat, styles.textPosition3]}>Sun</Text>
                </View>
                <View style={[styles.frame13, styles.framePosition2]}>
                  <Text style={[styles.sat, styles.textPosition3]}>Fri</Text>
                </View>
              </View>
              <View style={[styles.row, styles.rowPosition]}>
                <View style={[styles.frame14, styles.framePosition5]}>
                  <Text style={[styles.text11, styles.textPosition3]}>30</Text>
                </View>
                <View style={[styles.frame15, styles.framePosition9]}>
                  <Text style={[styles.text12, styles.textPosition3]}>3</Text>
                </View>
                <View style={[styles.frame16, styles.framePosition7]}>
                  <Text style={[styles.text12, styles.textPosition3]}>1</Text>
                </View>
                <View style={[styles.frame17, styles.framePosition4]}>
                  <Text style={[styles.text11, styles.textPosition3]}>29</Text>
                </View>
                <View style={[styles.frame18, styles.framePosition6]}>
                  <Text style={[styles.text11, styles.textPosition3]}>31</Text>
                </View>
                <View style={[styles.frame19, styles.framePosition3]}>
                  <Text style={[styles.text12, styles.textPosition3]}>4</Text>
                </View>
                <View style={[styles.frame20, styles.framePosition2]}>
                  <Text style={[styles.text12, styles.textPosition3]}>2</Text>
                </View>
              </View>
              <View style={[styles.row1, styles.rowPosition]}>
                <View style={[styles.frame14, styles.framePosition5]}>
                  <Text style={[styles.text12, styles.textPosition3]}>6</Text>
                </View>
                <View style={[styles.frame15, styles.framePosition9]}>
                  <Text style={[styles.text12, styles.textPosition3]}>10</Text>
                </View>
                <View style={[styles.frame19, styles.framePosition3]}>
                  <Text style={[styles.text12, styles.textPosition3]}>11</Text>
                </View>
                <View style={[styles.frame18, styles.framePosition6]}>
                  <Text style={[styles.text12, styles.textPosition3]}>7</Text>
                </View>
                <View style={[styles.frame17, styles.framePosition4]}>
                  <Text style={[styles.text12, styles.textPosition3]}>5</Text>
                </View>
                <View style={[styles.frame16, styles.framePosition7]}>
                  <Text style={[styles.text23, styles.textPosition3]}>8</Text>
                </View>
                <View style={[styles.frame20, styles.framePosition2]}>
                  <Text style={[styles.text12, styles.textPosition3]}>9</Text>
                </View>
              </View>
              <View style={[styles.row2, styles.rowPosition]}>
                <View style={[styles.frame20, styles.framePosition2]}>
                  <Text style={[styles.text12, styles.textPosition3]}>16</Text>
                </View>
                <View style={[styles.frame14, styles.framePosition5]}>
                  <Text style={[styles.text12, styles.textPosition3]}>13</Text>
                </View>
                <View style={[styles.frame16, styles.framePosition7]}>
                  <Text style={[styles.text12, styles.textPosition3]}>15</Text>
                </View>
                <View style={[styles.frame18, styles.framePosition6]}>
                  <Text style={[styles.text12, styles.textPosition3]}>14</Text>
                </View>
                <View style={[styles.frame19, styles.framePosition3]}>
                  <Text style={[styles.text12, styles.textPosition3]}>18</Text>
                </View>
                <View style={[styles.frame15, styles.framePosition9]}>
                  <Text style={[styles.text12, styles.textPosition3]}>17</Text>
                </View>
                <View style={[styles.frame17, styles.framePosition4]}>
                  <Text style={[styles.text12, styles.textPosition3]}>12</Text>
                </View>
              </View>
              <View style={[styles.row3, styles.rowPosition]}>
                <View style={[styles.frame20, styles.framePosition2]}>
                  <Text style={[styles.text12, styles.textPosition3]}>23</Text>
                </View>
                <View style={[styles.frame14, styles.framePosition5]}>
                  <Text style={[styles.text12, styles.textPosition3]}>20</Text>
                </View>
                <View style={[styles.frame16, styles.framePosition7]}>
                  <Text style={[styles.text12, styles.textPosition3]}>22</Text>
                </View>
                <View style={[styles.frame19, styles.framePosition3]}>
                  <Text style={[styles.text12, styles.textPosition3]}>25</Text>
                </View>
                <View style={[styles.frame17, styles.framePosition4]}>
                  <Text style={[styles.text12, styles.textPosition3]}>19</Text>
                </View>
                <View style={[styles.frame18, styles.framePosition6]}>
                  <Text style={[styles.text12, styles.textPosition3]}>21</Text>
                </View>
                <View style={[styles.frame15, styles.framePosition9]}>
                  <Text style={[styles.text12, styles.textPosition3]}>24</Text>
                </View>
              </View>
              <View style={[styles.row4, styles.rowPosition]}>
                <View style={[styles.frame15, styles.framePosition9]}>
                  <Text style={[styles.text11, styles.textPosition3]}>3</Text>
                </View>
                <View style={[styles.frame17, styles.framePosition4]}>
                  <Text style={[styles.text12, styles.textPosition3]}>26</Text>
                </View>
                <View style={[styles.frame16, styles.framePosition7]}>
                  <Text style={[styles.text11, styles.textPosition3]}>1</Text>
                </View>
                <View style={[styles.frame14, styles.framePosition5]}>
                  <Text style={[styles.text12, styles.textPosition3]}>27</Text>
                </View>
                <View style={[styles.frame18, styles.framePosition6]}>
                  <Text style={[styles.text12, styles.textPosition3]}>28</Text>
                </View>
                <View style={[styles.frame19, styles.framePosition3]}>
                  <Text style={[styles.text11, styles.textPosition3]}>4</Text>
                </View>
                <View style={[styles.frame20, styles.framePosition2]}>
                  <Text style={[styles.text11, styles.textPosition3]}>2</Text>
                </View>
              </View>
              <Image
                style={styles.oval1Icon}
                contentFit="cover"
                source={require("../assets/oval-1.png")}
              />
            </View>
          </View>
          <Text style={[styles.selectDate, styles.akshatShahPosition]}>
            Select date
          </Text>
          <Text style={[styles.selectTime, styles.reviewsTypo]}>
            Select time
          </Text>
          <View style={[styles.textbox2, styles.textboxLayout1]}>
            <Text style={[styles.am, styles.emailLayout]}>09:00 AM</Text>
            <Image
              style={[styles.clockIcon, styles.hrsPosition]}
              contentFit="cover"
              source={require("../assets/clock.png")}
            />
          </View>
          <View style={[styles.textbox3, styles.textboxLayout1]}>
            <Text style={[styles.am, styles.emailLayout]}>11:00 AM</Text>
            <Image
              style={[styles.clockIcon, styles.hrsPosition]}
              contentFit="cover"
              source={require("../assets/clock.png")}
            />
          </View>
        </View>
        <View style={[styles.container60, styles.containerPosition1]}>
          <View style={[styles.button9, styles.buttonPosition]}>
            <Text style={[styles.continue, styles.emailLayout]}>Continue</Text>
          </View>
          <Image
            style={styles.container14Child}
            contentFit="cover"
            source={require("../assets/line-1.png")}
          />
        </View>
      </View>
      <View style={[styles.bookingReview, styles.signShadowBox]}>
        <View style={styles.container47}>
          <View style={[styles.image28, styles.imageLayout]}>
            <View style={[styles.group1, styles.groupPosition1]}>
              <View style={[styles.group2, styles.groupIconPosition]}>
                <Image
                  style={[styles.groupIcon, styles.groupIconPosition]}
                  contentFit="cover"
                  source={require("../assets/group.png")}
                />
                <Image
                  style={[styles.groupIcon1, styles.groupIconLayout]}
                  contentFit="cover"
                  source={require("../assets/group1.png")}
                />
              </View>
            </View>
          </View>
          <View style={styles.image29}>
            <View style={[styles.group3, styles.groupPosition1]}>
              <View style={[styles.group2, styles.groupIconPosition]}>
                <Image
                  style={[styles.groupIcon2, styles.groupIconPosition]}
                  contentFit="cover"
                  source={require("../assets/group3.png")}
                />
                <Image
                  style={[styles.groupIcon3, styles.groupIconLayout]}
                  contentFit="cover"
                  source={require("../assets/group1.png")}
                />
              </View>
            </View>
          </View>
          <Image
            style={styles.arrowRight5}
            contentFit="cover"
            source={require("../assets/arrow-right-5.png")}
          />
          <Text style={[styles.reviewAndConfirm, styles.bookNowTypo]}>
            Review and Confirm
          </Text>
          <Image
            style={styles.container47Child}
            contentFit="cover"
            source={require("../assets/line-1.png")}
          />
          <Image
            style={styles.shareNetwork2}
            contentFit="cover"
            source={require("../assets/share-network-2.png")}
          />
        </View>
        <View style={[styles.container66, styles.containerBorder5]}>
          <Image
            style={[styles.avatar12Icon, styles.iconLayout7]}
            contentFit="cover"
            source={require("../assets/avatar-17.png")}
          />
          <Text style={[styles.hackathon, styles.chevronPosition]}>
            Hackathon
          </Text>
          <Image
            style={[styles.container66Child, styles.childLayout]}
            contentFit="cover"
            source={require("../assets/line-30.png")}
          />
          <Image
            style={styles.calendar1Icon}
            contentFit="cover"
            source={require("../assets/calendar-1.png")}
          />
          <Text style={[styles.fridayDecember16, styles.reviewsTypo1]}>
            Friday, December 16, 2022
          </Text>
          <Image
            style={[styles.clock1Icon, styles.akshatShahPosition]}
            contentFit="cover"
            source={require("../assets/clock-1.png")}
          />
          <Text style={[styles.am1100, styles.reviewsTypo1]}>
            09:00 AM - 11:00 PM
          </Text>
          <Image
            style={styles.pin31}
            contentFit="cover"
            source={require("../assets/pin-3-1.png")}
          />
          <Text style={[styles.kingStreetDenver, styles.reviewsTypo1]}>
            848 King Street, Denver, CO 80204
          </Text>
        </View>
        <Text style={[styles.waitInLine, styles.reviewsTypo]}>
          Wait in Line
        </Text>
        <View style={[styles.container67, styles.containerBorder5]}>
          <Image
            style={styles.pen1Icon}
            contentFit="cover"
            source={require("../assets/pen-1.png")}
          />
          <Image
            style={styles.cardholder1Icon}
            contentFit="cover"
            source={require("../assets/cardholder-1.png")}
          />
          <View style={[styles.tag13, styles.tag13Layout]}>
            <View style={[styles.frame49, styles.tag13Layout]}>
              <Text style={[styles.digitalWallet, styles.reviewsPosition]}>
                DIGITAL WALLET
              </Text>
            </View>
          </View>
        </View>
        <Text style={[styles.payment, styles.reviewsTypo]}>Payment</Text>
        <Text style={[styles.priceDetails, styles.priceDetailsPosition]}>
          Price Details
        </Text>
        <View style={[styles.container68, styles.containerBorder5]}>
          <Image
            style={styles.pen1Icon}
            contentFit="cover"
            source={require("../assets/e-add-1.png")}
          />
          <Image
            style={styles.cardholder1Icon}
            contentFit="cover"
            source={require("../assets/ticket-1.png")}
          />
          <View style={[styles.tag14, styles.tag14Layout]}>
            <View style={[styles.frame50, styles.tag14Layout]}>
              <Text style={[styles.newmember, styles.newmemberPosition]}>
                #Newmember
              </Text>
            </View>
          </View>
        </View>
        <Text style={[styles.promos, styles.reviewsTypo]}>Promos</Text>
        <View style={[styles.container69, styles.containerBorder1]}>
          <Text style={[styles.eventPrice, styles.textLayout]}>
            Event Price
          </Text>
          <Text style={[styles.taxes, styles.textLayout]}>Taxes</Text>
          <Text style={[styles.promos1, styles.textLayout]}>Promos</Text>
          <Text style={[styles.hr1, styles.textLayout]}>$15/hr</Text>
          <Text style={[styles.hr2, styles.textLayout]}>2.0 hr</Text>
          <Text style={[styles.text46, styles.textLayout]}>-$2</Text>
          <Image
            style={[styles.container69Child, styles.childLayout]}
            contentFit="cover"
            source={require("../assets/line-30.png")}
          />
          <Text style={[styles.total, styles.enterContainerLayout]}>TOTAL</Text>
          <Text style={[styles.hr3, styles.reviewsTypo]}>$28.00/hr</Text>
          <Image
            style={styles.money131}
            contentFit="cover"
            source={require("../assets/money-13-1.png")}
          />
        </View>
        <View style={[styles.container60, styles.containerPosition1]}>
          <View style={[styles.button11, styles.buttonPosition]}>
            <Text style={[styles.confirm, styles.confirmPosition]}>
              Confirm
            </Text>
          </View>
          <Image
            style={styles.container14Child}
            contentFit="cover"
            source={require("../assets/line-1.png")}
          />
        </View>
      </View>
      <View style={[styles.myTaskTaskInfo, styles.signShadowBox]}>
        <View style={styles.container71}>
          <View style={[styles.image28, styles.imageLayout]}>
            <View style={[styles.group1, styles.groupPosition1]}>
              <View style={[styles.group2, styles.groupIconPosition]}>
                <Image
                  style={[styles.groupIcon, styles.groupIconPosition]}
                  contentFit="cover"
                  source={require("../assets/group.png")}
                />
                <Image
                  style={[styles.groupIcon1, styles.groupIconLayout]}
                  contentFit="cover"
                  source={require("../assets/group1.png")}
                />
              </View>
            </View>
          </View>
          <View style={styles.image29}>
            <View style={[styles.group3, styles.groupPosition1]}>
              <View style={[styles.group2, styles.groupIconPosition]}>
                <Image
                  style={[styles.groupIcon2, styles.groupIconPosition]}
                  contentFit="cover"
                  source={require("../assets/group3.png")}
                />
                <Image
                  style={[styles.groupIcon3, styles.groupIconLayout]}
                  contentFit="cover"
                  source={require("../assets/group1.png")}
                />
              </View>
            </View>
          </View>
          <Image
            style={styles.arrowRight5}
            contentFit="cover"
            source={require("../assets/arrow-right-5.png")}
          />
          <Text style={[styles.taskerProfile, styles.bookNowTypo]}>
            Event Details
          </Text>
          <Image
            style={styles.shareNetwork2}
            contentFit="cover"
            source={require("../assets/dots-three-vertical-1.png")}
          />
          <Image
            style={styles.container71Child}
            contentFit="cover"
            source={require("../assets/line-1.png")}
          />
          <View style={[styles.headerMenu1, styles.containerPosition1]}>
            <View style={[styles.frame51, styles.textboxLayout2]}>
              <View style={[styles.rectangle, styles.containerPosition1]} />
              <Text style={[styles.taskInfo, styles.taskInfoPosition]}>
                Task Info
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.container72, styles.containerBorder4]}>
          <Image
            style={[styles.avatar12Icon, styles.iconLayout7]}
            contentFit="cover"
            source={require("../assets/avatar-17.png")}
          />
          <Text style={[styles.hackathon, styles.chevronPosition]}>
            Hackathon
          </Text>
          <Image
            style={[styles.container66Child, styles.childLayout]}
            contentFit="cover"
            source={require("../assets/line-30.png")}
          />
          <Image
            style={styles.calendar1Icon}
            contentFit="cover"
            source={require("../assets/calendar-1.png")}
          />
          <Text style={[styles.fridayDecember16, styles.reviewsTypo1]}>
            Friday, December 16, 2022
          </Text>
          <Image
            style={styles.clock2Icon}
            contentFit="cover"
            source={require("../assets/clock-1.png")}
          />
          <Text style={[styles.am1624, styles.reviewsTypo1]}>
            09:51 AM - 16:24 PM
          </Text>
          <Image
            style={styles.pin32}
            contentFit="cover"
            source={require("../assets/pin-3-2.png")}
          />
          <Text style={[styles.kingStreetDenver1, styles.reviewsTypo1]}>
            848 King Street, Denver, CO 80204
          </Text>
        </View>
        <View style={[styles.button12, styles.buttonBorder2]}>
          <Text style={[styles.cancelTask, styles.newmemberPosition]}>
            Cancel Task
          </Text>
        </View>
        <View style={[styles.button13, styles.buttonBorder1]}>
          <Text style={[styles.findAnotherEvent, styles.signUpWith1Position]}>
            Find another Event
          </Text>
        </View>
        <View style={[styles.container73, styles.containerBorder1]}>
          <Text style={[styles.eventPrice, styles.textLayout]}>
            Event Price
          </Text>
          <Text style={[styles.taxes, styles.textLayout]}>Taxes</Text>
          <Text style={[styles.promos1, styles.textLayout]}>Promos</Text>
          <Text style={[styles.hr1, styles.textLayout]}>$15/hr</Text>
          <Text style={[styles.hrs, styles.hrsPosition]}>2.0 hrs</Text>
          <Text style={[styles.text46, styles.textLayout]}>-$2</Text>
          <Image
            style={[styles.container69Child, styles.childLayout]}
            contentFit="cover"
            source={require("../assets/line-30.png")}
          />
          <Text style={[styles.total, styles.enterContainerLayout]}>TOTAL</Text>
          <Text style={[styles.hr3, styles.reviewsTypo]}>$28.00/hr</Text>
          <Image
            style={styles.money131}
            contentFit="cover"
            source={require("../assets/money-13-1.png")}
          />
        </View>
      </View>
      <View style={[styles.completedTasks, styles.signShadowBox]}>
        <View style={styles.container47}>
          <View style={[styles.image28, styles.imageLayout]}>
            <View style={[styles.group1, styles.groupPosition1]}>
              <View style={[styles.group2, styles.groupIconPosition]}>
                <Image
                  style={[styles.groupIcon, styles.groupIconPosition]}
                  contentFit="cover"
                  source={require("../assets/group.png")}
                />
                <Image
                  style={[styles.groupIcon1, styles.groupIconLayout]}
                  contentFit="cover"
                  source={require("../assets/group1.png")}
                />
              </View>
            </View>
          </View>
          <View style={styles.image29}>
            <View style={[styles.group3, styles.groupPosition1]}>
              <View style={[styles.group2, styles.groupIconPosition]}>
                <Image
                  style={[styles.groupIcon2, styles.groupIconPosition]}
                  contentFit="cover"
                  source={require("../assets/group3.png")}
                />
                <Image
                  style={[styles.groupIcon3, styles.groupIconLayout]}
                  contentFit="cover"
                  source={require("../assets/group1.png")}
                />
              </View>
            </View>
          </View>
          <Image
            style={styles.container47Child}
            contentFit="cover"
            source={require("../assets/line-1.png")}
          />
          <View style={[styles.headerMenu3, styles.containerPosition1]}>
            <View style={[styles.frame52, styles.frameLayout]}>
              <View style={[styles.rectangle, styles.containerPosition1]} />
              <Text style={[styles.completed, styles.textTypo2]}>
                Completed
              </Text>
            </View>
            <View style={[styles.frame53, styles.frameLayout]}>
              <Text style={[styles.past, styles.pastPosition]}>Past</Text>
            </View>
          </View>
        </View>
        <View style={[styles.container81, styles.containerBorder]}>
          <Image
            style={[styles.avatar21Icon, styles.iconPosition9]}
            contentFit="cover"
            source={require("../assets/avatar-21.png")}
          />
          <Text style={[styles.hackathon2, styles.reviewsTypo]}>Hackathon</Text>
          <Image
            style={[styles.container69Child, styles.childLayout]}
            contentFit="cover"
            source={require("../assets/line-30.png")}
          />
          <Image
            style={[styles.clock3Icon, styles.textPosition2]}
            contentFit="cover"
            source={require("../assets/clock-1.png")}
          />
          <Text style={[styles.am16241, styles.reviewsTypo1]}>
            09:51 AM - 16:24 PM
          </Text>
          <Image
            style={styles.calendar3Icon}
            contentFit="cover"
            source={require("../assets/calendar-1.png")}
          />
          <Text style={[styles.fridayDecember162, styles.reviewsTypo1]}>
            Friday, December 16, 2023
          </Text>
          <Text style={[styles.ashleyRobinson1, styles.notifyMeOfPosition]}>
            Ashley Robinson
          </Text>
          <View style={styles.button14}>
            <Text style={[styles.rate, styles.pastPosition]}>Rate</Text>
          </View>
          <Image
            style={styles.feedback1Icon}
            contentFit="cover"
            source={require("../assets/feedback-1.png")}
          />
        </View>
        <View style={[styles.container82, styles.containerBorder]}>
          <Image
            style={[styles.avatar21Icon, styles.iconPosition9]}
            contentFit="cover"
            source={require("../assets/avatar-22.png")}
          />
          <Text style={[styles.hackathon2, styles.reviewsTypo]}>Garba</Text>
          <Image
            style={[styles.container69Child, styles.childLayout]}
            contentFit="cover"
            source={require("../assets/line-30.png")}
          />
          <Image
            style={[styles.clock3Icon, styles.textPosition2]}
            contentFit="cover"
            source={require("../assets/clock-1.png")}
          />
          <Text style={[styles.am16241, styles.reviewsTypo1]}>
            14:00 PM - 16:00 PM
          </Text>
          <Image
            style={styles.calendar3Icon}
            contentFit="cover"
            source={require("../assets/calendar-1.png")}
          />
          <Text style={[styles.fridayDecember162, styles.reviewsTypo1]}>
            Tuesday, January 21, 2023
          </Text>
          <View style={[styles.button15, styles.frameBg]}>
            <Text style={[styles.bookAgain, styles.enterContainerLayout]}>
              Book Again
            </Text>
          </View>
          <Image
            style={styles.feedback1Icon}
            contentFit="cover"
            source={require("../assets/feedback-1.png")}
          />
          <Text style={[styles.elizabethBailey1, styles.notifyMeOfPosition]}>
            Elizabeth Bailey
          </Text>
          <Image
            style={styles.rating21Icon}
            contentFit="cover"
            source={require("../assets/rating-21.png")}
          />
        </View>
        <View style={[styles.container83, styles.containerBorder]}>
          <Image
            style={[styles.avatar21Icon, styles.iconPosition9]}
            contentFit="cover"
            source={require("../assets/avatar-23.png")}
          />
          <Text style={[styles.hackathon2, styles.reviewsTypo]}>
            Cloud Computing
          </Text>
          <Image
            style={[styles.container69Child, styles.childLayout]}
            contentFit="cover"
            source={require("../assets/line-30.png")}
          />
          <Image
            style={[styles.clock3Icon, styles.textPosition2]}
            contentFit="cover"
            source={require("../assets/clock-1.png")}
          />
          <Text style={[styles.am16241, styles.reviewsTypo1]}>
            13:00 PM - 15:00 PM
          </Text>
          <Image
            style={styles.calendar3Icon}
            contentFit="cover"
            source={require("../assets/calendar-1.png")}
          />
          <Text style={[styles.fridayDecember162, styles.reviewsTypo1]}>
            Thursday, November 12, 2022
          </Text>
          <View style={[styles.button15, styles.frameBg]}>
            <Text style={[styles.bookAgain, styles.enterContainerLayout]}>
              Book Again
            </Text>
          </View>
          <Image
            style={styles.feedback1Icon}
            contentFit="cover"
            source={require("../assets/feedback-1.png")}
          />
          <Text style={[styles.elizabethBailey1, styles.notifyMeOfPosition]}>
            Sarah Johnson
          </Text>
          <Image
            style={styles.rating21Icon}
            contentFit="cover"
            source={require("../assets/rating-22.png")}
          />
        </View>
        <View style={[styles.container84, styles.containerPosition1]}>
          <View style={[styles.tabBarMenu2, styles.tabPosition]}>
            <View style={styles.frame54}>
              <Image
                style={[styles.houseIcon, styles.imagePosition]}
                contentFit="cover"
                source={require("../assets/user1.png")}
              />
              <Text style={[styles.profile, styles.homePosition]}>Profile</Text>
            </View>
            <View style={[styles.frame55, styles.frameLayout1]}>
              <Image
                style={[styles.houseIcon, styles.imagePosition]}
                contentFit="cover"
                source={require("../assets/house1.png")}
              />
              <Text style={[styles.home1, styles.homePosition]}>Home</Text>
            </View>
            <View style={[styles.frame56, styles.framePosition1]}>
              <Image
                style={[styles.houseIcon, styles.imagePosition]}
                contentFit="cover"
                source={require("../assets/receipt1.png")}
              />
              <Text style={[styles.home, styles.homePosition]}>Tasks</Text>
            </View>
          </View>
          <Image
            style={styles.container14Child}
            contentFit="cover"
            source={require("../assets/line-1.png")}
          />
        </View>
      </View>
      <View style={[styles.ratingAService, styles.signShadowBox]}>
        <View style={styles.container47}>
          <View style={[styles.image28, styles.imageLayout]}>
            <View style={[styles.group1, styles.groupPosition1]}>
              <View style={[styles.group2, styles.groupIconPosition]}>
                <Image
                  style={[styles.groupIcon, styles.groupIconPosition]}
                  contentFit="cover"
                  source={require("../assets/group.png")}
                />
                <Image
                  style={[styles.groupIcon1, styles.groupIconLayout]}
                  contentFit="cover"
                  source={require("../assets/group1.png")}
                />
              </View>
            </View>
          </View>
          <View style={styles.image29}>
            <View style={[styles.group3, styles.groupPosition1]}>
              <View style={[styles.group2, styles.groupIconPosition]}>
                <Image
                  style={[styles.groupIcon2, styles.groupIconPosition]}
                  contentFit="cover"
                  source={require("../assets/group2.png")}
                />
                <Image
                  style={[styles.groupIcon3, styles.groupIconLayout]}
                  contentFit="cover"
                  source={require("../assets/group1.png")}
                />
              </View>
            </View>
          </View>
          <Image
            style={styles.arrowRight5}
            contentFit="cover"
            source={require("../assets/arrow-right-5.png")}
          />
          <Text style={[styles.taskerProfile, styles.bookNowTypo]}>Rating</Text>
          <Image
            style={styles.container47Child}
            contentFit="cover"
            source={require("../assets/line-1.png")}
          />
        </View>
        <View style={[styles.container86, styles.containerBorder5]}>
          <Text style={[styles.hackathon3, styles.reviews9Position]}>
            Hackathon
          </Text>
          <Image
            style={[styles.container86Child, styles.childLayout]}
            contentFit="cover"
            source={require("../assets/line-30.png")}
          />
          <Image
            style={[styles.avatar24Icon, styles.iconPosition6]}
            contentFit="cover"
            source={require("../assets/avatar-24.png")}
          />
          <Text style={[styles.awesome, styles.reviewsTypo]}>Awesome!</Text>
          <Text
            style={[styles.shareYourExperience, styles.rating29IconPosition]}
          >
            Share your experience working together!
          </Text>
          <Image
            style={[styles.rating23Icon, styles.button8Layout]}
            contentFit="cover"
            source={require("../assets/rating-23.png")}
          />
        </View>
        <Text style={[styles.otherReviews, styles.reviewsTypo]}>
          Other Reviews
        </Text>
        <Text style={[styles.maximum3Choices, styles.reviewsTypo1]}>
          Maximum 3 choices
        </Text>
        <Text style={[styles.comments, styles.reviewsTypo]}>Comments</Text>
        <View style={[styles.textarea1, styles.containerLayout16]}>
          <Text style={[styles.goodGuy, styles.doloreLayout]}>Good guy!</Text>
          <Image
            style={[styles.resizingHandleIcon, styles.iconLayout5]}
            contentFit="cover"
            source={require("../assets/resizing-handle.png")}
          />
        </View>
        <View style={styles.tag18}>
          <View style={[styles.frame57, styles.buttonLayout3]}>
            <Text style={[styles.timeliness, styles.iconPosition6]}>
              Timeliness
            </Text>
          </View>
          <View style={[styles.frame58, styles.frameBg]}>
            <Text style={[styles.friendly, styles.confirmPosition]}>
              Friendly
            </Text>
          </View>
        </View>
        <View style={styles.tag19}>
          <View style={[styles.frame59, styles.frameBg]}>
            <Text style={[styles.cleanliness, styles.emailLayout]}>
              Cleanliness
            </Text>
          </View>
          <View style={styles.frame60}>
            <Text style={[styles.professionalism, styles.emailLayout]}>
              Professionalism
            </Text>
          </View>
        </View>
        <View style={[styles.container87, styles.containerBorder5]}>
          <Image
            style={[styles.image62Icon, styles.iconPosition5]}
            contentFit="cover"
            source={require("../assets/image-62.png")}
          />
          <Image
            style={[styles.image63Icon, styles.iconPosition5]}
            contentFit="cover"
            source={require("../assets/image-63.png")}
          />
          <View style={[styles.button17, styles.iconPosition5]}>
            <Text style={[styles.addPhoto, styles.findNowPosition]}>
              Add Photo
            </Text>
          </View>
        </View>
        <View style={[styles.container60, styles.containerPosition1]}>
          <View style={styles.button18}>
            <Text style={[styles.submit, styles.emailLayout]}>Submit</Text>
          </View>
          <Image
            style={styles.container14Child}
            contentFit="cover"
            source={require("../assets/line-1.png")}
          />
        </View>
      </View>
      <View style={[styles.thankYouMessage, styles.signShadowBox]}>
        <View style={styles.container47}>
          <View style={[styles.image28, styles.imageLayout]}>
            <View style={[styles.group1, styles.groupPosition1]}>
              <View style={[styles.group2, styles.groupIconPosition]}>
                <Image
                  style={[styles.groupIcon, styles.groupIconPosition]}
                  contentFit="cover"
                  source={require("../assets/group.png")}
                />
                <Image
                  style={[styles.groupIcon1, styles.groupIconLayout]}
                  contentFit="cover"
                  source={require("../assets/group1.png")}
                />
              </View>
            </View>
          </View>
          <View style={styles.image29}>
            <View style={[styles.group3, styles.groupPosition1]}>
              <View style={[styles.group2, styles.groupIconPosition]}>
                <Image
                  style={[styles.groupIcon2, styles.groupIconPosition]}
                  contentFit="cover"
                  source={require("../assets/group2.png")}
                />
                <Image
                  style={[styles.groupIcon3, styles.groupIconLayout]}
                  contentFit="cover"
                  source={require("../assets/group1.png")}
                />
              </View>
            </View>
          </View>
          <Image
            style={styles.arrowRight5}
            contentFit="cover"
            source={require("../assets/arrow-right-5.png")}
          />
          <Text style={[styles.taskerProfile, styles.bookNowTypo]}>Rating</Text>
          <Image
            style={styles.container47Child}
            contentFit="cover"
            source={require("../assets/line-1.png")}
          />
        </View>
        <View style={[styles.container86, styles.containerBorder5]}>
          <Text style={[styles.ashleyRobinson2, styles.reviews9Position]}>
            Ashley Robinson
          </Text>
          <Image
            style={[styles.container86Child, styles.childLayout]}
            contentFit="cover"
            source={require("../assets/line-30.png")}
          />
          <Image
            style={[styles.avatar24Icon, styles.iconPosition6]}
            contentFit="cover"
            source={require("../assets/avatar-24.png")}
          />
          <Text style={[styles.awesome, styles.reviewsTypo]}>Awesome!</Text>
          <Text
            style={[styles.shareYourExperience, styles.rating29IconPosition]}
          >
            Share your experience working together!
          </Text>
          <Image
            style={[styles.rating23Icon, styles.button8Layout]}
            contentFit="cover"
            source={require("../assets/rating-23.png")}
          />
        </View>
        <Text style={[styles.otherReviews, styles.reviewsTypo]}>
          Other Reviews
        </Text>
        <Text style={[styles.maximum3Choices, styles.reviewsTypo1]}>
          Maximum 3 choices
        </Text>
        <Text style={[styles.comments, styles.reviewsTypo]}>Comments</Text>
        <View style={[styles.textarea1, styles.containerLayout16]}>
          <Text style={[styles.goodGuy, styles.doloreLayout]}>Good guy!</Text>
          <Image
            style={[styles.resizingHandleIcon, styles.iconLayout5]}
            contentFit="cover"
            source={require("../assets/resizing-handle.png")}
          />
        </View>
        <View style={[styles.container87, styles.containerBorder5]}>
          <Image
            style={[styles.image62Icon, styles.iconPosition5]}
            contentFit="cover"
            source={require("../assets/image-62.png")}
          />
          <Image
            style={[styles.image63Icon, styles.iconPosition5]}
            contentFit="cover"
            source={require("../assets/image-67.png")}
          />
          <View style={[styles.button17, styles.iconPosition5]}>
            <Text style={[styles.addPhoto, styles.findNowPosition]}>
              Add Photo
            </Text>
          </View>
        </View>
        <View style={[styles.container60, styles.containerPosition1]}>
          <View style={styles.button18}>
            <Text style={[styles.submit, styles.emailLayout]}>Submit</Text>
          </View>
          <Image
            style={styles.container14Child}
            contentFit="cover"
            source={require("../assets/line-1.png")}
          />
        </View>
        <View style={styles.tag18}>
          <View style={[styles.frame58, styles.frameBg]}>
            <Text style={[styles.friendly, styles.confirmPosition]}>
              Friendly
            </Text>
          </View>
          <View style={[styles.frame57, styles.buttonLayout3]}>
            <Text style={[styles.timeliness, styles.iconPosition6]}>
              Timeliness
            </Text>
          </View>
        </View>
        <View style={styles.tag19}>
          <View style={styles.frame60}>
            <Text style={[styles.professionalism, styles.emailLayout]}>
              Professionalism
            </Text>
          </View>
          <View style={[styles.frame59, styles.frameBg]}>
            <Text style={[styles.cleanliness, styles.emailLayout]}>
              Cleanliness
            </Text>
          </View>
        </View>
        <View style={[styles.overlay2, styles.overlayPosition]} />
        <View style={[styles.container93, styles.containerShadowBox]}>
          <Image
            style={[styles.cCheck6, styles.cCheck6Layout]}
            contentFit="cover"
            source={require("../assets/c-check-6.png")}
          />
          <Text style={[styles.success, styles.bookNowTypo]}>Success!</Text>
          <Text style={[styles.thankYouFor, styles.enterContainerLayout]}>
            Thank you for your review.
          </Text>
          <View style={[styles.button21, styles.button21Position]}>
            <Text style={[styles.backToHome, styles.emailLayout]}>
              Back to Home
            </Text>
          </View>
        </View>
      </View>
      <View style={[styles.accountSettings, styles.signShadowBox]}>
        <View style={styles.container94}>
          <View style={[styles.image28, styles.imageLayout]}>
            <View style={[styles.group1, styles.groupPosition1]}>
              <View style={[styles.group2, styles.groupIconPosition]}>
                <Image
                  style={[styles.groupIcon, styles.groupIconPosition]}
                  contentFit="cover"
                  source={require("../assets/group.png")}
                />
                <Image
                  style={[styles.groupIcon1, styles.groupIconLayout]}
                  contentFit="cover"
                  source={require("../assets/group1.png")}
                />
              </View>
            </View>
          </View>
          <View style={styles.image29}>
            <View style={[styles.group3, styles.groupPosition1]}>
              <View style={[styles.group2, styles.groupIconPosition]}>
                <Image
                  style={[styles.groupIcon2, styles.groupIconPosition]}
                  contentFit="cover"
                  source={require("../assets/group2.png")}
                />
                <Image
                  style={[styles.groupIcon3, styles.groupIconLayout]}
                  contentFit="cover"
                  source={require("../assets/group1.png")}
                />
              </View>
            </View>
          </View>
          <Image
            style={styles.container94Child}
            contentFit="cover"
            source={require("../assets/line-1.png")}
          />
          <Image
            style={[styles.avatar26Icon, styles.slider5Position]}
            contentFit="cover"
            source={require("../assets/avatar-26.png")}
          />
          <View style={[styles.button22, styles.buttonBorder]}>
            <Text style={[styles.readMore, styles.enterContainerLayout]}>
              Edit Profile
            </Text>
          </View>
          <Text style={[styles.ashleyRobinson3, styles.reviewsTypo]}>
            Ashley Robinson
          </Text>
          <Text style={[styles.onlybrianwhiteyahoocom, styles.reviewsTypo1]}>
            onlybrianwhite@yahoo.com
          </Text>
          <Image
            style={[styles.container94Item, styles.parentLayout]}
            contentFit="cover"
            source={require("../assets/line-50.png")}
          />
          <Text style={[styles.nisiIpsumOfficia, styles.parentLayout]}>
            Nisi ipsum officia consequat ea in non eiusmod eu. Reprehenderit et
            exercitation dolore pariatur dolor id aliquip amet nisi laboris.
          </Text>
        </View>
        <View style={[styles.container95, styles.containerLayout13]}>
          <Text style={[styles.payments, styles.reviewsTypo]}>Payments</Text>
          <Image
            style={[styles.iconButton3, styles.iconPosition8]}
            contentFit="cover"
            source={require("../assets/icon-button-3.png")}
          />
          <Image
            style={styles.pen1Icon}
            contentFit="cover"
            source={require("../assets/chevron-right-large-1.png")}
          />
        </View>
        <View style={[styles.container96, styles.containerLayout13]}>
          <Text style={[styles.payments, styles.reviewsTypo]}>Your Promos</Text>
          <Image
            style={[styles.iconButton3, styles.iconPosition8]}
            contentFit="cover"
            source={require("../assets/icon-button-4.png")}
          />
          <Image
            style={styles.pen1Icon}
            contentFit="cover"
            source={require("../assets/chevron-right-large-1.png")}
          />
        </View>
        <View style={[styles.container97, styles.containerLayout13]}>
          <Text style={[styles.payments, styles.reviewsTypo]}>Settings</Text>
          <Image
            style={[styles.iconButton3, styles.iconPosition8]}
            contentFit="cover"
            source={require("../assets/icon-button-5.png")}
          />
          <Image
            style={styles.pen1Icon}
            contentFit="cover"
            source={require("../assets/chevron-right-large-1.png")}
          />
        </View>
        <View style={[styles.container98, styles.containerLayout13]}>
          <Text style={[styles.payments, styles.reviewsTypo]}>Support</Text>
          <Image
            style={[styles.iconButton3, styles.iconPosition8]}
            contentFit="cover"
            source={require("../assets/icon-button-6.png")}
          />
          <Image
            style={styles.pen1Icon}
            contentFit="cover"
            source={require("../assets/chevron-right-large-1.png")}
          />
        </View>
        <View style={[styles.container84, styles.containerPosition1]}>
          <View style={[styles.tabBarMenu2, styles.tabPosition]}>
            <View style={styles.frame65}>
              <Image
                style={[styles.houseIcon, styles.imagePosition]}
                contentFit="cover"
                source={require("../assets/user2.png")}
              />
              <Text style={[styles.profile1, styles.homePosition]}>
                Profile
              </Text>
            </View>
            <View style={[styles.frame66, styles.framePosition1]}>
              <Image
                style={[styles.houseIcon, styles.imagePosition]}
                contentFit="cover"
                source={require("../assets/receipt2.png")}
              />
              <Text style={[styles.tasks1, styles.homePosition]}>Tasks</Text>
            </View>
            <View style={[styles.frame55, styles.frameLayout1]}>
              <Image
                style={[styles.houseIcon, styles.imagePosition]}
                contentFit="cover"
                source={require("../assets/house1.png")}
              />
              <Text style={[styles.home1, styles.homePosition]}>Home</Text>
            </View>
          </View>
          <Image
            style={styles.container14Child}
            contentFit="cover"
            source={require("../assets/line-1.png")}
          />
          <View style={styles.container141}>
            <View style={[styles.tabBarMenu1, styles.tabPosition]}>
              <View style={styles.frame1}>
                <Image
                  style={[styles.houseIcon, styles.imagePosition]}
                  contentFit="cover"
                  source={require("../assets/house.png")}
                />
                <Text style={[styles.home, styles.homePosition]}>Home</Text>
              </View>
              <View style={[styles.frame3, styles.frameLayout1]}>
                <Image
                  style={[styles.houseIcon, styles.imagePosition]}
                  contentFit="cover"
                  source={require("../assets/receipt.png")}
                />
                <Text style={[styles.myEvents, styles.homePosition]}>
                  My events
                </Text>
              </View>
              <View style={styles.frame2}>
                <Image
                  style={[styles.houseIcon, styles.imagePosition]}
                  contentFit="cover"
                  source={require("../assets/user.png")}
                />
                <Text style={[styles.externalEvents, styles.homePosition]}>
                  External events
                </Text>
              </View>
            </View>
            <Image
              style={styles.container14Child}
              contentFit="cover"
              source={require("../assets/line-1.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.signUp1, styles.signShadowBox]}>
        <View style={[styles.textbox5, styles.textboxLayout]}>
          <Text style={[styles.enterEmail, styles.abc1Position]}>
            Enter email
          </Text>
          <Text style={[styles.email, styles.emailLayout]}>Email</Text>
          <Image
            style={styles.mailIcon}
            contentFit="cover"
            source={require("../assets/mail.png")}
          />
        </View>
        <View style={[styles.textbox6, styles.textboxLayout]}>
          <Text style={[styles.enterEmail, styles.abc1Position]}>
            Enter password
          </Text>
          <Text style={[styles.email, styles.emailLayout]}>Password</Text>
          <Image
            style={styles.hideIcon}
            contentFit="cover"
            source={require("../assets/hide.png")}
          />
          <Image
            style={styles.mailIcon}
            contentFit="cover"
            source={require("../assets/lock1.png")}
          />
        </View>
        <View style={[styles.button23, styles.buttonContainerLayout]}>
          <Text style={[styles.signUp2, styles.signUp2Position]}>Sign Up</Text>
        </View>
        <Text style={[styles.signUp3, styles.abc1Typo]}>Sign Up</Text>
        <Text style={[styles.createAnAccount, styles.reviewsLayout]}>
          Create an account
        </Text>
        <Text style={[styles.signIn1, styles.signIn1Position]}>Sign in</Text>
        <Text style={[styles.alreadyHaveAn, styles.signIn1Position]}>
          Already have an account?
        </Text>
        <Text style={[styles.or, styles.textLayout]}>OR</Text>
        <View style={[styles.button24, styles.buttonContainerLayout]}>
          <Text style={[styles.selectSchedule, styles.cCheck6Position]}>
            Sign up with Google
          </Text>
          <Image
            style={styles.googleIcon1}
            contentFit="cover"
            source={require("../assets/google1.png")}
          />
        </View>
        <View style={[styles.button25, styles.buttonContainerLayout]}>
          <Text style={[styles.signUpWith1, styles.signUpWith1Position]}>
            Sign up with Facebook
          </Text>
          <Image
            style={styles.logoFacebookIcon1}
            contentFit="cover"
            source={require("../assets/logo-facebook1.png")}
          />
        </View>
        <View style={[styles.checkbox1, styles.frame71Layout]}>
          <View style={[styles.frame71, styles.frame71Layout]}>
            <View style={[styles.rectangle2, styles.iconLayout6]} />
            <Image
              style={[styles.frameIcon, styles.iconLayout5]}
              contentFit="cover"
              source={require("../assets/frame.png")}
            />
            <Text style={[styles.text48, styles.enterContainerLayout]} />
          </View>
        </View>
        <Text style={[styles.iAgreeWithContainer, styles.enterContainerLayout]}>
          <Text style={styles.text3}>{`I agree with `}</Text>
          <Text style={styles.termsConditions}>{`Terms & Conditions`}</Text>
        </Text>
      </View>
      <View style={[styles.searchEvents, styles.signShadowBox]}>
        <View style={[styles.container100, styles.containerShadowBox1]}>
          <View style={styles.container101}>
            <View style={[styles.image70, styles.imagePosition]}>
              <View style={[styles.group41, styles.groupPosition]}>
                <View style={[styles.group2, styles.groupIconPosition]}>
                  <Image
                    style={[styles.groupIcon40, styles.groupIconPosition]}
                    contentFit="cover"
                    source={require("../assets/group4.png")}
                  />
                  <Image
                    style={[styles.groupIcon41, styles.groupIconLayout]}
                    contentFit="cover"
                    source={require("../assets/group1.png")}
                  />
                </View>
              </View>
            </View>
            <View style={[styles.image71, styles.imagePosition]}>
              <View style={[styles.group43, styles.groupPosition]}>
                <View style={[styles.group2, styles.groupIconPosition]}>
                  <Image
                    style={[styles.groupIcon42, styles.groupIconPosition]}
                    contentFit="cover"
                    source={require("../assets/group5.png")}
                  />
                  <Image
                    style={[styles.groupIcon43, styles.groupIconLayout]}
                    contentFit="cover"
                    source={require("../assets/group1.png")}
                  />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.textbox7}>
            <Text style={[styles.search, styles.searchPosition]}>Search</Text>
            <Image
              style={[styles.searchIcon, styles.iconLayout6]}
              contentFit="cover"
              source={require("../assets/search.png")}
            />
          </View>
          <Image
            style={styles.scan1Icon}
            contentFit="cover"
            source={require("../assets/scan-1.png")}
          />
          <Image
            style={styles.container100Child}
            contentFit="cover"
            source={require("../assets/line-52.png")}
          />
        </View>
        <Text style={[styles.recentSearches, styles.recentSearchesTypo]}>
          Recent searches
        </Text>
        <Image
          style={[styles.searchEventsChild, styles.textbox11Position]}
          contentFit="cover"
          source={require("../assets/line-1.png")}
        />
        <Text style={[styles.eventsToAttend, styles.recentSearchesTypo]}>
          Events to attend
        </Text>
        <View style={[styles.container103, styles.containerLayout11]}>
          <Image
            style={[styles.image72Icon, styles.containerPosition1]}
            contentFit="cover"
            source={require("../assets/image-72.png")}
          />
          <Text style={[styles.hackathon4, styles.textLayout]}>Hackathon</Text>
        </View>
        <Text style={[styles.recommendedForYou, styles.recentSearchesTypo]}>
          Recommended for you
        </Text>
        <View style={[styles.container104, styles.containerLayout11]}>
          <Image
            style={[styles.image72Icon, styles.containerPosition1]}
            contentFit="cover"
            source={require("../assets/image-73.png")}
          />
          <Text style={[styles.hackathon4, styles.textLayout]}>Art</Text>
        </View>
        <View style={[styles.container105, styles.containerLayout10]}>
          <Image
            style={[styles.image72Icon, styles.containerPosition1]}
            contentFit="cover"
            source={require("../assets/image-74.png")}
          />
          <Text style={[styles.hackathon4, styles.textLayout]}>Garba</Text>
        </View>
        <View style={[styles.container106, styles.containerLayout10]}>
          <Image
            style={[styles.image72Icon, styles.containerPosition1]}
            contentFit="cover"
            source={require("../assets/image-75.png")}
          />
          <Text style={[styles.hackathon4, styles.textLayout]}>Standup</Text>
        </View>
        <View style={[styles.tag22, styles.tagLayout]}>
          <View style={[styles.frame72, styles.framePosition]}>
            <Text style={[styles.garbaNight, styles.textLayout]}>
              Garba Night
            </Text>
          </View>
          <View style={[styles.frame73, styles.framePosition]}>
            <Text style={[styles.holi, styles.textLayout]}>Holi</Text>
          </View>
          <View style={[styles.frame74, styles.framePosition]}>
            <Text style={[styles.edSheeran, styles.textLayout]}>
              Ed Sheeran
            </Text>
          </View>
        </View>
        <View style={styles.tag23}>
          <View style={[styles.frame75, styles.framePosition]}>
            <Text style={[styles.hackathon5, styles.textLayout]}>
              Hackathon
            </Text>
          </View>
          <View style={[styles.frame76, styles.framePosition]}>
            <Text style={[styles.resin, styles.textLayout]}>Resin</Text>
          </View>
          <View style={[styles.frame77, styles.frame77Layout]}>
            <Text style={[styles.art1, styles.textLayout]}>Art</Text>
          </View>
        </View>
        <Image
          style={styles.trash1Icon}
          contentFit="cover"
          source={require("../assets/trash-1.png")}
        />
        <View style={[styles.container107, styles.containerLayout8]}>
          <Text style={[styles.toyAndGame, styles.enterContainerLayout]}>
            Toy and Game
          </Text>
          <Image
            style={[styles.image76Icon, styles.iconPosition4]}
            contentFit="cover"
            source={require("../assets/image-76.png")}
          />
        </View>
        <View style={[styles.container108, styles.containerLayout8]}>
          <Text style={[styles.books, styles.booksPosition]}>Books</Text>
          <Image
            style={styles.image77Icon}
            contentFit="cover"
            source={require("../assets/image-77.png")}
          />
        </View>
        <View style={[styles.container109, styles.containerLayout7]}>
          <Text style={[styles.toyAndGame, styles.enterContainerLayout]}>
            Electronics
          </Text>
          <Image
            style={[styles.image78Icon, styles.iconPosition4]}
            contentFit="cover"
            source={require("../assets/image-78.png")}
          />
        </View>
        <View style={[styles.container110, styles.containerLayout7]}>
          <Text style={[styles.petSupplies, styles.booksPosition]}>
            Pet Supplies
          </Text>
          <Image
            style={styles.image79Icon}
            contentFit="cover"
            source={require("../assets/image-79.png")}
          />
        </View>
        <View style={[styles.container111, styles.containerLayout6]}>
          <Text style={[styles.toyAndGame, styles.enterContainerLayout]}>
            Baby
          </Text>
          <Image
            style={styles.image80Icon}
            contentFit="cover"
            source={require("../assets/image-80.png")}
          />
        </View>
        <View style={[styles.container112, styles.containerLayout6]}>
          <Text style={[styles.petSupplies, styles.booksPosition]}>
            Health care
          </Text>
          <Image
            style={styles.image81Icon}
            contentFit="cover"
            source={require("../assets/image-81.png")}
          />
        </View>
        <View style={[styles.container113, styles.containerLayout8]}>
          <Text style={[styles.toyAndGame, styles.enterContainerLayout]}>
            Fashion
          </Text>
          <Image
            style={styles.image82Icon}
            contentFit="cover"
            source={require("../assets/image-82.png")}
          />
        </View>
        <View style={[styles.container114, styles.containerLayout8]}>
          <Text
            style={[styles.books, styles.booksPosition]}
          >{`Home & Kitchen`}</Text>
          <Image
            style={styles.image83Icon}
            contentFit="cover"
            source={require("../assets/image-83.png")}
          />
        </View>
        <View style={[styles.container115, styles.containerLayout5]}>
          <Text style={[styles.toyAndGame, styles.enterContainerLayout]}>
            Sports
          </Text>
          <Image
            style={[styles.image78Icon, styles.iconPosition4]}
            contentFit="cover"
            source={require("../assets/image-84.png")}
          />
        </View>
        <View style={[styles.container116, styles.containerLayout5]}>
          <Text
            style={[styles.petSupplies, styles.booksPosition]}
          >{`Tool & Home`}</Text>
          <Image
            style={styles.image85Icon}
            contentFit="cover"
            source={require("../assets/image-85.png")}
          />
        </View>
        <View style={styles.container841}>
          <View style={[styles.tabBarMenu2, styles.tabPosition]}>
            <View style={[styles.frame55, styles.frameLayout1]}>
              <Image
                style={[styles.houseIcon, styles.imagePosition]}
                contentFit="cover"
                source={require("../assets/house1.png")}
              />
              <Text style={[styles.home1, styles.homePosition]}>Home</Text>
            </View>
            <View style={[styles.frame56, styles.framePosition1]}>
              <Image
                style={[styles.houseIcon, styles.imagePosition]}
                contentFit="cover"
                source={require("../assets/receipt1.png")}
              />
              <Text style={[styles.home, styles.homePosition]}>Tasks</Text>
            </View>
            <View style={styles.frame54}>
              <Image
                style={[styles.houseIcon, styles.imagePosition]}
                contentFit="cover"
                source={require("../assets/user3.png")}
              />
              <Text style={[styles.profile, styles.homePosition]}>Profile</Text>
            </View>
          </View>
          <Image
            style={styles.container14Child}
            contentFit="cover"
            source={require("../assets/line-1.png")}
          />
          <View style={styles.container141}>
            <View style={[styles.tabBarMenu1, styles.tabPosition]}>
              <View style={styles.frame1}>
                <Image
                  style={[styles.houseIcon, styles.imagePosition]}
                  contentFit="cover"
                  source={require("../assets/house.png")}
                />
                <Text style={[styles.home, styles.homePosition]}>Home</Text>
              </View>
              <View style={[styles.frame3, styles.frameLayout1]}>
                <Image
                  style={[styles.houseIcon, styles.imagePosition]}
                  contentFit="cover"
                  source={require("../assets/receipt.png")}
                />
                <Text style={[styles.myEvents, styles.homePosition]}>
                  My events
                </Text>
              </View>
              <View style={styles.frame2}>
                <Image
                  style={[styles.houseIcon, styles.imagePosition]}
                  contentFit="cover"
                  source={require("../assets/user.png")}
                />
                <Text style={[styles.externalEvents, styles.homePosition]}>
                  External events
                </Text>
              </View>
            </View>
            <Image
              style={styles.container14Child}
              contentFit="cover"
              source={require("../assets/line-1.png")}
            />
          </View>
        </View>
      </View>
      <View style={[styles.productDetails, styles.signShadowBox]}>
        <View style={[styles.container118, styles.containerShadowBox1]}>
          <View style={[styles.button26, styles.containerLayout4]}>
            <Text style={[styles.buyTickets, styles.enterContainerLayout]}>
              Buy Tickets
            </Text>
          </View>
          <View style={[styles.button27, styles.buttonBorder1]}>
            <Text style={[styles.text49, styles.textPosition1]} />
            <Image
              style={[styles.addShoppingCart, styles.rating20IconPosition]}
              contentFit="cover"
              source={require("../assets/add-shopping-cart.png")}
            />
          </View>
        </View>
        <Text
          style={[styles.deseruntMinimIncididunt, styles.jevonRaynorPosition]}
        >
          Deserunt minim incididunt cillum
        </Text>
        <Text style={[styles.daysAgo, styles.textLayout]}>3 days ago</Text>
        <Text style={[styles.magnaPariaturSit, styles.jasonDPosition]}>
          Magna pariatur sit et ullamco paria
        </Text>
        <Text style={[styles.jevonRaynor, styles.aDayAgoPosition]}>
          Jevon Raynor
        </Text>
        <Image
          style={[styles.avatar27Icon, styles.aDayAgoPosition]}
          contentFit="cover"
          source={require("../assets/avatar-27.png")}
        />
        <Text style={[styles.jasonD, styles.jasonDPosition]}>Jason D.</Text>
        <Image
          style={styles.avatar28Icon}
          contentFit="cover"
          source={require("../assets/avatar-28.png")}
        />
        <Text style={[styles.aDayAgo, styles.aDayAgoPosition]}>A day ago</Text>
        <Text style={[styles.relevantEvents, styles.abc1Typo]}>
          Relevant Events
        </Text>
        <View style={[styles.button28, styles.buttonLayout]}>
          <Text style={[styles.seeAll, styles.seeAllPosition]}>See all</Text>
          <Image
            style={[styles.chevronRightLarge, styles.iconLayout5]}
            contentFit="cover"
            source={require("../assets/chevron-right-large.png")}
          />
        </View>
        <View style={[styles.container119, styles.containerLayout2]}>
          <Text style={[styles.text50, styles.textPosition2]}>4.5</Text>
          <Text style={[styles.text51, styles.textTypo1]}>$99</Text>
          <Image
            style={[styles.rating25Icon, styles.iconPosition3]}
            contentFit="cover"
            source={require("../assets/rating-25.png")}
          />
          <Image
            style={[styles.image86Icon, styles.iconLayout4]}
            contentFit="cover"
            source={require("../assets/image-86.png")}
          />
          <Text style={[styles.productTitle, styles.productTypo]}>
            Product title
          </Text>
        </View>
        <View style={[styles.container120, styles.buttonContainerLayout]}>
          <Image
            style={[styles.switch1Icon, styles.iconLayout3]}
            contentFit="cover"
            source={require("../assets/switch-1.png")}
          />
          <Text style={[styles.notifyMeOf, styles.notifyMeOfPosition]}>
            Notify me of promotions
          </Text>
          <Image
            style={[styles.container121Icon, styles.iconLayout3]}
            contentFit="cover"
            source={require("../assets/container-121.png")}
          />
        </View>
        <Image
          style={[styles.productDetailsChild, styles.productChildLayout]}
          contentFit="cover"
          source={require("../assets/line-54.png")}
        />
        <Image
          style={[styles.productDetailsItem, styles.productChildLayout]}
          contentFit="cover"
          source={require("../assets/line-54.png")}
        />
        <View style={[styles.container122, styles.buttonContainerLayout]}>
          <Image
            style={[styles.image87Icon, styles.buttonContainerLayout]}
            contentFit="cover"
            source={require("../assets/image-87.png")}
          />
          <Image
            style={styles.rating26Icon}
            contentFit="cover"
            source={require("../assets/rating-26.png")}
          />
          <Text style={[styles.text52, styles.text52Position]}>4.5</Text>
          <Text style={[styles.text53, styles.abc1Typo]}>$2,999</Text>
          <Image
            style={[styles.oval2Icon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/oval-2.png")}
          />
          <Image
            style={[styles.oval3Icon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/oval-2.png")}
          />
          <Image
            style={[styles.oval4Icon, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/oval-2.png")}
          />
          <View style={[styles.container122Child, styles.iconLayout1]} />
          <Text style={[styles.reviews7, styles.text52Position]}>
            (99 reviews)
          </Text>
        </View>
        <Text style={[styles.reviews8, styles.abc1Typo]}>Reviews</Text>
        <View style={[styles.button29, styles.buttonLayout]}>
          <Text style={[styles.seeAll, styles.seeAllPosition]}>See all</Text>
          <Image
            style={[styles.chevronRightLarge, styles.iconLayout5]}
            contentFit="cover"
            source={require("../assets/chevron-right-large.png")}
          />
        </View>
        <Image
          style={[styles.productDetailsInner, styles.productChildLayout]}
          contentFit="cover"
          source={require("../assets/line-54.png")}
        />
        <View style={[styles.container123, styles.containerLayout2]}>
          <Text style={[styles.text51, styles.textTypo1]}>$99</Text>
          <Text style={[styles.text55, styles.textPosition2]}>4.5</Text>
          <Image
            style={[styles.rating25Icon, styles.iconPosition3]}
            contentFit="cover"
            source={require("../assets/rating-25.png")}
          />
          <Image
            style={[styles.image86Icon, styles.iconLayout4]}
            contentFit="cover"
            source={require("../assets/image-88.png")}
          />
          <Text style={[styles.productTitle, styles.productTypo]}>
            Product title
          </Text>
        </View>
        <View style={[styles.container124, styles.containerLayout2]}>
          <Text style={[styles.text56, styles.textTypo1]}>$99</Text>
          <Text style={[styles.text50, styles.textPosition2]}>4.5</Text>
          <Image
            style={[styles.rating25Icon, styles.iconPosition3]}
            contentFit="cover"
            source={require("../assets/rating-25.png")}
          />
          <Image
            style={[styles.image89Icon, styles.image89IconPosition]}
            contentFit="cover"
            source={require("../assets/image-89.png")}
          />
          <Text style={[styles.productTitle2, styles.image89IconPosition]}>
            Product title
          </Text>
        </View>
        <Text style={[styles.description, styles.abc1Typo]}>Description</Text>
        <Text style={[styles.quisOccaecatMagna, styles.buttonContainerLayout]}>
          Quis occaecat magna elit magna do nisi ipsum amet excepteur tempor
          nisi exercitation qui...
        </Text>
        <Image
          style={[styles.reply1Icon, styles.iconPosition2]}
          contentFit="cover"
          source={require("../assets/reply-1.png")}
        />
        <Text style={[styles.exercitationI, styles.enterContainerLayout]}>
          Exercitation i
        </Text>
        <Text style={[styles.temporAmet, styles.containerLayout11]}>
          Tempor amet
        </Text>
        <Image
          style={[styles.delivery3Icon, styles.iconPosition2]}
          contentFit="cover"
          source={require("../assets/delivery-3.png")}
        />
        <Text style={[styles.exercitation, styles.dolorVeniamTypo]}>
          Exercitation
        </Text>
        <Image
          style={[styles.award1Icon, styles.iconPosition1]}
          contentFit="cover"
          source={require("../assets/award-1.png")}
        />
        <Text style={[styles.dolorVeniam, styles.dolorVeniamTypo]}>
          Dolor veniam
        </Text>
        <Image
          style={[styles.globe1Icon, styles.iconPosition1]}
          contentFit="cover"
          source={require("../assets/globe-1.png")}
        />
        <View style={[styles.container125, styles.avatar11IconLayout]}>
          <Text style={[styles.abc1, styles.abc1Typo]}>ABC</Text>
          <View style={[styles.button31, styles.button31Position]}>
            <Text style={[styles.text58, styles.textPosition1]} />
            <Image
              style={[styles.addShoppingCart, styles.rating20IconPosition]}
              contentFit="cover"
              source={require("../assets/chevron-left-large.png")}
            />
          </View>
          <View style={styles.container126}>
            <View style={styles.image90}>
              <View style={[styles.group43, styles.groupPosition]}>
                <View style={[styles.group2, styles.groupIconPosition]}>
                  <Image
                    style={[styles.groupIcon42, styles.groupIconPosition]}
                    contentFit="cover"
                    source={require("../assets/group6.png")}
                  />
                  <Image
                    style={[styles.groupIcon43, styles.groupIconLayout]}
                    contentFit="cover"
                    source={require("../assets/group1.png")}
                  />
                </View>
              </View>
            </View>
            <View style={[styles.image91, styles.imageLayout]}>
              <View style={[styles.group41, styles.groupPosition]}>
                <View style={[styles.group2, styles.groupIconPosition]}>
                  <Image
                    style={[styles.groupIcon40, styles.groupIconPosition]}
                    contentFit="cover"
                    source={require("../assets/group7.png")}
                  />
                  <Image
                    style={[styles.groupIcon41, styles.groupIconLayout]}
                    contentFit="cover"
                    source={require("../assets/group1.png")}
                  />
                </View>
              </View>
            </View>
          </View>
          <Image
            style={[styles.avatar1Icon1, styles.button31Position]}
            contentFit="cover"
            source={require("../assets/avatar-1.png")}
          />
        </View>
        <View style={[styles.container127, styles.buttonContainerLayout]}>
          <Text style={[styles.text59, styles.reviewsLayout]}>4.5/5</Text>
          <Image
            style={[styles.rating29Icon, styles.rating29IconPosition]}
            contentFit="cover"
            source={require("../assets/rating-29.png")}
          />
          <Text style={[styles.reviews9, styles.reviews9Position]}>
            (99 reviews)
          </Text>
          <Text style={[styles.text60, styles.textTypo]}>5</Text>
          <Text style={[styles.text61, styles.textTypo]}>4</Text>
          <Text style={[styles.text62, styles.textTypo]}>3</Text>
          <Text style={[styles.text63, styles.textTypo]}>2</Text>
          <Text style={[styles.text64, styles.textTypo]}>1</Text>
          <View style={[styles.slider1, styles.sliderLayout1]}>
            <View style={[styles.frame84, styles.iconLayout1]}>
              <View style={[styles.rectangle3, styles.rectanglePosition]} />
            </View>
          </View>
          <View style={[styles.slider2, styles.sliderLayout]}>
            <View style={[styles.frame84, styles.iconLayout1]}>
              <View style={[styles.rectangle4, styles.rectanglePosition]} />
            </View>
          </View>
          <View style={[styles.slider3, styles.sliderLayout]}>
            <View style={[styles.frame84, styles.iconLayout1]}>
              <View style={[styles.rectangle5, styles.rectanglePosition]} />
            </View>
          </View>
          <View style={[styles.slider4, styles.sliderLayout1]}>
            <View style={[styles.frame84, styles.iconLayout1]}>
              <View style={[styles.rectangle6, styles.rectanglePosition]} />
            </View>
          </View>
          <View style={[styles.slider5, styles.sliderPosition]}>
            <View style={[styles.frame84, styles.iconLayout1]}>
              <View style={[styles.rectangle7, styles.rectanglePosition]} />
            </View>
          </View>
        </View>
      </View>
      <View style={[styles.notifications, styles.signShadowBox]}>
        <View style={[styles.container128, styles.containerLayout1]}>
          <Text style={[styles.yesterday, styles.textLayout]}>Yesterday</Text>
          <Text
            style={[
              styles.jenaNguyenTaggedContainer,
              styles.laborumDoMollitPosition,
            ]}
          >
            <Text style={styles.textTypo2}>{`Jena Nguyen `}</Text>
            <Text style={styles.text5}>tagged you in a photo</Text>
          </Text>
          <Text
            style={[styles.laborumDoMollit, styles.laborumDoMollitPosition]}
          >
            Laborum do mollit mollit ...
          </Text>
          <Image
            style={[styles.avatar30Icon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/avatar-30.png")}
          />
        </View>
        <View style={[styles.container129, styles.containerLayout1]}>
          <Text style={[styles.text65, styles.textLayout]}>10/02/2022</Text>
          <Text
            style={[
              styles.anjaOconnorMentionedContainer,
              styles.jevonRaynorPosition,
            ]}
          >
            <Text style={styles.textTypo2}>{`Anja O'Connor `}</Text>
            <Text style={styles.text5}>mentioned you in a comment</Text>
          </Text>
          <Text style={[styles.laborumDoNostrud, styles.jevonRaynorPosition]}>
            Laborum do nostrud mollit ...
          </Text>
          <View style={[styles.avatar31, styles.iconPosition]}>
            <Text style={[styles.a, styles.homePosition]}>A</Text>
          </View>
        </View>
        <Image
          style={[styles.notificationsChild, styles.productChildLayout]}
          contentFit="cover"
          source={require("../assets/line-54.png")}
        />
        <View style={[styles.container130, styles.containerLayout1]}>
          <Text style={[styles.mAgo, styles.agoTypo]}>10m ago</Text>
          <Text
            style={[
              styles.kristinWatsonLikedContainer,
              styles.containerPosition,
            ]}
          >
            <Text style={styles.textTypo2}>{`Kristin Watson `}</Text>
            <Text style={styles.text5}>liked your post</Text>
          </Text>
          <Text style={[styles.laborumDoMollit1, styles.containerPosition]}>
            Laborum do mollit nostrud ...
          </Text>
          <Image
            style={[styles.avatar32Icon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/avatar-32.png")}
          />
        </View>
        <View style={[styles.container131, styles.containerLayout4]}>
          <Text style={[styles.recently, styles.iconPosition]}>RECENTLY</Text>
        </View>
        <View style={[styles.container132, styles.containerLayout4]}>
          <Text style={[styles.recently, styles.iconPosition]}>OLDER</Text>
        </View>
        <View style={styles.container126}>
          <View style={[styles.image91, styles.imageLayout]}>
            <View style={[styles.group41, styles.groupPosition]}>
              <View style={[styles.group2, styles.groupIconPosition]}>
                <Image
                  style={[styles.groupIcon40, styles.groupIconPosition]}
                  contentFit="cover"
                  source={require("../assets/group7.png")}
                />
                <Image
                  style={[styles.groupIcon41, styles.groupIconLayout]}
                  contentFit="cover"
                  source={require("../assets/group1.png")}
                />
              </View>
            </View>
          </View>
          <View style={styles.image90}>
            <View style={[styles.group43, styles.groupPosition]}>
              <View style={[styles.group2, styles.groupIconPosition]}>
                <Image
                  style={[styles.groupIcon42, styles.groupIconPosition]}
                  contentFit="cover"
                  source={require("../assets/group6.png")}
                />
                <Image
                  style={[styles.groupIcon43, styles.groupIconLayout]}
                  contentFit="cover"
                  source={require("../assets/group1.png")}
                />
              </View>
            </View>
          </View>
        </View>
        <Text style={[styles.notifications1, styles.hr3Layout]}>
          Notifications
        </Text>
        <View style={[styles.headerMenu4, styles.iconPosition]}>
          <View style={[styles.frame89, styles.framePosition]}>
            <Text style={[styles.all, styles.textTypo2]}>All</Text>
          </View>
          <View style={[styles.frame90, styles.sliderLayout1]}>
            <Text style={[styles.unread, styles.unreadPosition]}>Unread</Text>
          </View>
        </View>
        <View style={[styles.container134, styles.containerLayout]}>
          <Text style={[styles.mAgo1, styles.agoTypo]}>10m ago</Text>
          <Text
            style={[
              styles.kristinWatsonLikedContainer,
              styles.containerPosition,
            ]}
          >
            <Text style={styles.textTypo2}>{`Jennie Ponce `}</Text>
            <Text style={styles.text5}>liked your video</Text>
          </Text>
          <Text style={[styles.laborumAliquaDo, styles.laborumAliquaDoTypo]}>
            Laborum aliqua do nostrud ...
          </Text>
          <Image
            style={[styles.oval5Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/oval-5.png")}
          />
          <Image
            style={[styles.avatar32Icon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/avatar-33.png")}
          />
        </View>
        <View style={[styles.container135, styles.containerLayout]}>
          <Text style={[styles.mAgo1, styles.agoTypo]}>10m ago</Text>
          <Text
            style={[styles.sallyRooneyAddedContainer, styles.containerPosition]}
          >
            <Text style={styles.textTypo2}>{`Sally Rooney `}</Text>
            <Text style={styles.text5}>added a photo</Text>
          </Text>
          <Text style={[styles.laborumAliquaDo, styles.laborumAliquaDoTypo]}>
            In pariatur laborum adipisi ...
          </Text>
          <Image
            style={[styles.oval5Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/oval-5.png")}
          />
          <Image
            style={[styles.avatar32Icon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/avatar-34.png")}
          />
        </View>
        <View style={[styles.container136, styles.containerLayout1]}>
          <Text style={[styles.mAgo3, styles.textLayout]}>20m ago</Text>
          <Text
            style={[
              styles.liamPhamCommentedContainer,
              styles.containerPosition,
            ]}
          >
            <Text style={styles.textTypo2}>{`Liam Pham `}</Text>
            <Text style={styles.text5}>commented on your post</Text>
          </Text>
          <Text style={[styles.cillumLoremAliquip, styles.laborumAliquaDoTypo]}>
            Cillum Lorem aliquip laboris ...
          </Text>
          <Image
            style={[styles.oval7Icon, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/oval-5.png")}
          />
          <Image
            style={[styles.avatar32Icon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/avatar-35.png")}
          />
        </View>
        <View style={[styles.container137, styles.containerLayout1]}>
          <Text style={[styles.mAgo, styles.agoTypo]}>10m ago</Text>
          <Text
            style={[
              styles.kristinWatsonLikedContainer,
              styles.containerPosition,
            ]}
          >
            <Text style={styles.textTypo2}>{`Kristin Watson `}</Text>
            <Text style={styles.text5}>liked your post</Text>
          </Text>
          <Text style={[styles.laborumDoMollit1, styles.containerPosition]}>
            Cillum Lorem aliquip laboris ...
          </Text>
          <Image
            style={[styles.avatar32Icon, styles.iconPosition]}
            contentFit="cover"
            source={require("../assets/avatar-32.png")}
          />
        </View>
        <View style={styles.container991}>
          <View style={[styles.tabBarMenu2, styles.tabPosition]}>
            <View style={[styles.frame55, styles.frameLayout1]}>
              <Image
                style={[styles.houseIcon, styles.imagePosition]}
                contentFit="cover"
                source={require("../assets/house1.png")}
              />
              <Text style={[styles.home1, styles.homePosition]}>Home</Text>
            </View>
            <View style={[styles.frame66, styles.framePosition1]}>
              <Image
                style={[styles.houseIcon, styles.imagePosition]}
                contentFit="cover"
                source={require("../assets/receipt3.png")}
              />
              <Text style={[styles.tasks1, styles.homePosition]}>Tasks</Text>
            </View>
            <View style={styles.frame65}>
              <Image
                style={[styles.houseIcon, styles.imagePosition]}
                contentFit="cover"
                source={require("../assets/user4.png")}
              />
              <Text style={[styles.profile1, styles.homePosition]}>
                Profile
              </Text>
            </View>
          </View>
          <Image
            style={styles.container14Child}
            contentFit="cover"
            source={require("../assets/line-1.png")}
          />
          <View style={styles.container141}>
            <View style={[styles.tabBarMenu1, styles.tabPosition]}>
              <View style={styles.frame1}>
                <Image
                  style={[styles.houseIcon, styles.imagePosition]}
                  contentFit="cover"
                  source={require("../assets/house.png")}
                />
                <Text style={[styles.home, styles.homePosition]}>Home</Text>
              </View>
              <View style={[styles.frame3, styles.frameLayout1]}>
                <Image
                  style={[styles.houseIcon, styles.imagePosition]}
                  contentFit="cover"
                  source={require("../assets/receipt.png")}
                />
                <Text style={[styles.myEvents, styles.homePosition]}>
                  My events
                </Text>
              </View>
              <View style={styles.frame2}>
                <Image
                  style={[styles.houseIcon, styles.imagePosition]}
                  contentFit="cover"
                  source={require("../assets/user5.png")}
                />
                <Text style={[styles.externalEvents, styles.homePosition]}>
                  External events
                </Text>
              </View>
            </View>
            <Image
              style={styles.container14Child}
              contentFit="cover"
              source={require("../assets/line-1.png")}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  signShadowBox: {
    shadowOpacity: 1,
    elevation: 6,
    shadowRadius: 6,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowColor: "rgba(18, 15, 40, 0.12)",
    overflow: "hidden",
    top: 0,
    position: "absolute",
  },
  imageLayout: {
    width: 72,
    left: 0,
  },
  groupPosition1: {
    bottom: "-14.77%",
    position: "absolute",
  },
  groupIconPosition: {
    left: "0%",
    right: "0%",
    top: "0%",
    position: "absolute",
    width: "100%",
  },
  groupIconLayout: {
    height: 0,
    width: 0,
    top: "100%",
    position: "absolute",
  },
  imagePosition1: {
    marginTop: -22,
    top: "50%",
    height: 44,
    overflow: "hidden",
    position: "absolute",
  },
  textboxLayout2: {
    height: 52,
    backgroundColor: Color.colorGray_400,
  },
  enterContainerLayout: {
    lineHeight: 22,
    fontSize: FontSize.size_sm,
  },
  profileIconLayout: {
    height: 14,
    width: 14,
  },
  textTypo2: {
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
  },
  reviewsTypo1: {
    fontFamily: FontFamily.manropeLight,
    fontWeight: "300",
  },
  parentLayout: {
    width: 350,
    left: 20,
  },
  buttonLayout3: {
    width: 112,
    borderRadius: Border.br_3xl,
    height: 44,
    overflow: "hidden",
    position: "absolute",
  },
  emailLayout: {
    lineHeight: 26,
    fontSize: FontSize.size_base,
  },
  image19IconLayout: {
    height: 56,
    position: "absolute",
  },
  buttonBorder2: {
    borderWidth: 1,
    borderStyle: "solid",
  },
  searchIconPosition: {
    marginTop: -7.5,
    top: "50%",
    overflow: "hidden",
    position: "absolute",
  },
  buttonLayout2: {
    borderRadius: Border.br_7xl,
    backgroundColor: Color.colorBlueviolet,
    width: 350,
    height: 52,
    left: 0,
  },
  hr3Layout: {
    lineHeight: 28,
    fontSize: FontSize.size_lg,
  },
  iconPosition9: {
    top: 60,
    overflow: "hidden",
    position: "absolute",
  },
  signUpPosition: {
    marginLeft: -32,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  textbox11Position: {
    top: 396,
    position: "absolute",
  },
  containerShadowBox1: {
    elevation: 2,
    shadowRadius: 2,
    shadowColor: "rgba(23, 26, 31, 0.12)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 3,
    },
  },
  reviewsTypo: {
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
  },
  containerBorder4: {
    height: 202,
    borderColor: Color.colorWhitesmoke_200,
    borderRadius: Border.br_base,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  containerLayout14: {
    top: 276,
    height: 202,
    width: 172,
    borderColor: Color.colorWhitesmoke_200,
    borderRadius: Border.br_base,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  containerShadowBox: {
    height: 364,
    elevation: 2,
    shadowRadius: 2,
    shadowColor: "rgba(23, 26, 31, 0.12)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    position: "absolute",
  },
  button21Position: {
    bottom: 24,
    overflow: "hidden",
    position: "absolute",
  },
  tagLayout1: {
    width: 99,
    height: 44,
    position: "absolute",
  },
  buttonBorder1: {
    borderColor: Color.colorBlueviolet,
    borderWidth: 1,
    borderStyle: "solid",
  },
  findNowPosition: {
    marginLeft: -33.5,
    color: Color.colorBlueviolet,
    textAlign: "left",
    fontFamily: FontFamily.manropeRegular,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  tabPosition: {
    top: 20,
    backgroundColor: Color.colorGray_400,
    height: 44,
    left: 0,
    position: "absolute",
  },
  imagePosition: {
    marginTop: -20,
    top: "50%",
    overflow: "hidden",
    position: "absolute",
  },
  homePosition: {
    lineHeight: 16,
    textAlign: "left",
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  frameLayout1: {
    width: 127,
    backgroundColor: Color.colorGray_400,
    height: 44,
    overflow: "hidden",
    top: 0,
    position: "absolute",
  },
  akshatShahPosition: {
    top: 122,
    position: "absolute",
  },
  iconLayout7: {
    width: 44,
    borderRadius: Border.br_3xl,
    height: 44,
    overflow: "hidden",
    position: "absolute",
  },
  containerLayout13: {
    height: 68,
    position: "absolute",
  },
  container120Border: {
    borderColor: Color.colorGainsboro,
    borderWidth: 1,
    borderStyle: "solid",
    left: 20,
  },
  textLayout: {
    lineHeight: 20,
    fontSize: FontSize.size_xs,
  },
  iconPosition8: {
    marginTop: -18,
    height: 36,
    width: 36,
    borderRadius: Border.br_lg,
    top: "50%",
    overflow: "hidden",
    position: "absolute",
  },
  overlayPosition: {
    backgroundColor: Color.colorGray_200,
    width: 390,
    left: 0,
    top: 0,
    position: "absolute",
  },
  bookNowTypo: {
    lineHeight: 34,
    fontSize: FontSize.size_3xl,
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
    color: Color.colorGray_100,
    position: "absolute",
  },
  containerBorder5: {
    borderColor: Color.colorWhitesmoke_200,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
  },
  avatar11IconLayout: {
    height: 96,
    position: "absolute",
  },
  iconPosition7: {
    height: 32,
    marginTop: 56,
    width: 32,
    left: "50%",
    top: "50%",
    overflow: "hidden",
    position: "absolute",
  },
  container48Position: {
    top: 208,
    height: 72,
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  toolsnoTypo: {
    marginTop: 88,
    textAlign: "center",
    lineHeight: 20,
    fontSize: FontSize.size_xs,
  },
  unreadPosition: {
    marginLeft: -24,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  carTypo: {
    fontFamily: FontFamily.poppinsMedium,
    fontWeight: "500",
  },
  tagLayout: {
    width: 207,
    height: 28,
    backgroundColor: Color.colorGray_400,
    position: "absolute",
  },
  frameBg1: {
    backgroundColor: Color.colorAliceblue,
    borderRadius: Border.br_sm,
    overflow: "hidden",
    top: 0,
  },
  reviewsPosition: {
    color: Color.colorDeepskyblue,
    lineHeight: 20,
    fontSize: FontSize.size_xs,
    marginTop: -10,
    textAlign: "left",
    fontFamily: FontFamily.manropeRegular,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  iconLayout6: {
    width: 16,
    height: 16,
  },
  framePosition10: {
    borderRadius: Border.br_sm,
    overflow: "hidden",
    left: 0,
    top: 0,
  },
  taskInfoPosition: {
    marginLeft: -31,
    textAlign: "left",
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  containerBorder2: {
    height: 132,
    right: 12,
    borderColor: Color.colorWhitesmoke_200,
    borderRadius: Border.br_base,
    borderWidth: 1,
    borderStyle: "solid",
    left: 20,
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  containerBorder3: {
    right: 12,
    borderColor: Color.colorWhitesmoke_200,
    borderRadius: Border.br_base,
    borderWidth: 1,
    borderStyle: "solid",
    left: 20,
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  doloreLayout: {
    width: 326,
    textAlign: "left",
    position: "absolute",
  },
  buttonBorder: {
    borderColor: Color.colorGray_100,
    height: 36,
    borderWidth: 1,
    borderStyle: "solid",
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  containerLayout12: {
    width: 140,
    marginTop: -36,
    borderRadius: Border.br_xs,
    height: 72,
    top: "50%",
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  signUp2Position: {
    marginLeft: -28,
    fontFamily: FontFamily.manropeRegular,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  iconPosition6: {
    marginLeft: -40,
    left: "50%",
  },
  reviews3Position: {
    marginLeft: -23,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  seeAllPosition: {
    marginLeft: -26,
    lineHeight: 20,
    fontSize: FontSize.size_xs,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  rating20IconPosition: {
    marginLeft: -8,
    height: 16,
    width: 16,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  containerPosition1: {
    bottom: 0,
    position: "absolute",
  },
  button8Layout: {
    width: 180,
    position: "absolute",
  },
  cCheck6Position: {
    marginLeft: -60,
    left: "50%",
    position: "absolute",
  },
  buttonPosition: {
    bottom: 30,
    backgroundColor: Color.colorBlueviolet,
    borderRadius: Border.br_3xl,
    height: 44,
    overflow: "hidden",
    position: "absolute",
  },
  chevronPosition: {
    top: 25,
    position: "absolute",
  },
  framePosition8: {
    borderBottomWidth: 1,
    borderTopWidth: 1,
    bottom: "-0.98%",
    top: "-0.98%",
    height: "101.96%",
    borderColor: Color.colorWhite,
    borderStyle: "solid",
  },
  textPosition3: {
    width: 42,
    marginLeft: -21,
    textAlign: "center",
    lineHeight: 22,
    fontSize: FontSize.size_sm,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  framePosition7: {
    left: "42.86%",
    right: "42.86%",
    width: "14.29%",
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  framePosition6: {
    left: "28.57%",
    right: "57.14%",
    width: "14.29%",
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  framePosition5: {
    left: "14.29%",
    right: "71.43%",
    width: "14.29%",
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  framePosition4: {
    right: "85.71%",
    width: "14.29%",
    left: "0%",
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  framePosition3: {
    left: "85.71%",
    width: "14.29%",
    right: "0%",
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  framePosition2: {
    left: "57.14%",
    right: "28.57%",
    width: "14.29%",
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  rowPosition: {
    height: "15.79%",
    right: "0.28%",
    width: "99.72%",
    backgroundColor: Color.colorGray_400,
    left: "0%",
    position: "absolute",
  },
  framePosition9: {
    left: "71.43%",
    right: "14.29%",
    width: "14.29%",
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  textboxLayout1: {
    height: 45,
    width: 170,
    top: 561,
    borderWidth: 1,
    borderColor: Color.colorLightslategray,
    borderStyle: "solid",
    borderRadius: Border.br_3xl,
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  hrsPosition: {
    right: 17,
    position: "absolute",
  },
  childLayout: {
    width: 318,
    left: 16,
    maxHeight: "100%",
    position: "absolute",
  },
  tag13Layout: {
    width: 107,
    height: 28,
    position: "absolute",
  },
  priceDetailsPosition: {
    top: 622,
    left: 20,
  },
  tag14Layout: {
    width: 98,
    height: 28,
    position: "absolute",
  },
  newmemberPosition: {
    color: Color.colorCrimson,
    textAlign: "left",
    fontFamily: FontFamily.manropeRegular,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  containerBorder1: {
    height: 168,
    borderColor: Color.colorWhitesmoke_200,
    borderRadius: Border.br_base,
    borderWidth: 1,
    borderStyle: "solid",
    left: 20,
    right: 20,
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  confirmPosition: {
    marginLeft: -29.5,
    lineHeight: 26,
    fontSize: FontSize.size_base,
    marginTop: -13,
    textAlign: "left",
    fontFamily: FontFamily.manropeRegular,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  signUpWith1Position: {
    marginLeft: -69.5,
    lineHeight: 26,
    fontSize: FontSize.size_base,
    marginTop: -13,
    textAlign: "left",
    fontFamily: FontFamily.manropeRegular,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  frameLayout: {
    width: 190,
    height: 52,
    backgroundColor: Color.colorGray_400,
    overflow: "hidden",
    top: 0,
    position: "absolute",
  },
  pastPosition: {
    marginLeft: -15,
    textAlign: "left",
    fontFamily: FontFamily.manropeRegular,
    lineHeight: 22,
    fontSize: FontSize.size_sm,
    marginTop: -11,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  containerBorder: {
    height: 251,
    borderColor: Color.colorWhitesmoke_200,
    borderRadius: Border.br_base,
    borderWidth: 1,
    borderStyle: "solid",
    left: 20,
    right: 20,
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  textPosition2: {
    top: 152,
    position: "absolute",
  },
  notifyMeOfPosition: {
    left: 64,
    textAlign: "left",
    position: "absolute",
  },
  frameBg: {
    backgroundColor: Color.colorGhostwhite,
    overflow: "hidden",
    position: "absolute",
  },
  framePosition1: {
    left: 127,
    overflow: "hidden",
  },
  reviews9Position: {
    top: 48,
    position: "absolute",
  },
  rating29IconPosition: {
    top: 78,
    position: "absolute",
  },
  containerLayout16: {
    borderRadius: Border.br_base,
    right: 20,
  },
  iconLayout5: {
    width: 12,
    height: 12,
    overflow: "hidden",
    position: "absolute",
  },
  iconPosition5: {
    height: 104,
    width: 104,
    marginTop: -52,
    borderRadius: Border.br_5xs,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  cCheck6Layout: {
    height: 120,
    width: 120,
    overflow: "hidden",
  },
  slider5Position: {
    top: 88,
    position: "absolute",
  },
  textboxLayout: {
    height: 55,
    width: 334,
    backgroundColor: Color.colorWhitesmoke_200,
    left: 35,
    borderRadius: Border.br_9xs,
    position: "absolute",
  },
  abc1Position: {
    left: 44,
    textAlign: "left",
  },
  buttonContainerLayout: {
    width: 335,
    position: "absolute",
  },
  abc1Typo: {
    fontFamily: FontFamily.lexendBold,
    fontWeight: "700",
    position: "absolute",
  },
  reviewsLayout: {
    lineHeight: 30,
    fontSize: FontSize.size_xl,
  },
  signIn1Position: {
    top: 704,
    lineHeight: 22,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  frame71Layout: {
    height: 22,
    width: 42,
    backgroundColor: Color.colorGray_400,
    position: "absolute",
  },
  groupPosition: {
    bottom: "-26.25%",
    position: "absolute",
  },
  searchPosition: {
    marginTop: -10.5,
    top: "50%",
  },
  recentSearchesTypo: {
    fontFamily: FontFamily.lexendSemiBold,
    fontWeight: "600",
    lineHeight: 26,
    fontSize: FontSize.size_base,
    color: Color.colorDimgray,
    textAlign: "left",
    left: 20,
    position: "absolute",
  },
  containerLayout11: {
    width: 169,
    position: "absolute",
  },
  containerLayout10: {
    left: 201,
    width: 169,
    height: 36,
    borderColor: Color.colorWhitesmoke_200,
    borderRadius: Border.br_9xs,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  framePosition: {
    backgroundColor: Color.colorWhitesmoke_200,
    top: 0,
    position: "absolute",
  },
  frame77Layout: {
    width: 33,
    overflow: "hidden",
  },
  containerLayout8: {
    height: 54,
    width: 163,
    borderColor: Color.colorWhitesmoke_200,
    borderRadius: Border.br_9xs,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  iconPosition4: {
    left: 17,
    top: "50%",
    overflow: "hidden",
    position: "absolute",
  },
  booksPosition: {
    left: 56,
    color: Color.colorGray_100,
    textAlign: "left",
    fontFamily: FontFamily.manropeRegular,
    lineHeight: 22,
    fontSize: FontSize.size_sm,
    top: "50%",
    position: "absolute",
  },
  containerLayout7: {
    top: 540,
    height: 54,
    width: 163,
    borderColor: Color.colorWhitesmoke_200,
    borderRadius: Border.br_9xs,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  containerLayout6: {
    top: 610,
    height: 54,
    width: 163,
    borderColor: Color.colorWhitesmoke_200,
    borderRadius: Border.br_9xs,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  containerLayout5: {
    top: 750,
    height: 54,
    width: 163,
    borderColor: Color.colorWhitesmoke_200,
    borderRadius: Border.br_9xs,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  containerLayout4: {
    height: 42,
    position: "absolute",
  },
  textPosition1: {
    marginLeft: 8,
    textAlign: "left",
    fontFamily: FontFamily.manropeRegular,
    lineHeight: 22,
    fontSize: FontSize.size_sm,
    marginTop: -11,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  jevonRaynorPosition: {
    left: 75,
    textAlign: "left",
  },
  jasonDPosition: {
    left: 73,
    textAlign: "left",
    fontFamily: FontFamily.manropeRegular,
    position: "absolute",
  },
  aDayAgoPosition: {
    top: 768,
    position: "absolute",
  },
  buttonLayout: {
    width: 68,
    left: 286,
    borderRadius: Border.br_10xs,
    height: 32,
    backgroundColor: Color.colorGray_400,
    overflow: "hidden",
    position: "absolute",
  },
  containerLayout2: {
    height: 181,
    top: 957,
    backgroundColor: Color.colorWhitesmoke_100,
    borderRadius: Border.br_9xs,
    position: "absolute",
  },
  textTypo1: {
    top: 151,
    fontFamily: FontFamily.lexendBold,
    color: Color.colorGray_100,
    fontWeight: "700",
    textAlign: "left",
    lineHeight: 22,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  iconPosition3: {
    left: 8,
    position: "absolute",
  },
  iconLayout4: {
    height: 101,
    borderRadius: Border.br_10xs,
    top: 12,
  },
  productTypo: {
    height: 26,
    top: 119,
    color: Color.colorDarkslategray_200,
    lineHeight: 20,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.manropeRegular,
  },
  iconLayout3: {
    width: 40,
    position: "absolute",
  },
  productChildLayout: {
    height: 1,
    width: 375,
    left: 0,
    position: "absolute",
  },
  text52Position: {
    top: 207,
    textAlign: "left",
    lineHeight: 22,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  iconLayout1: {
    height: 6,
    position: "absolute",
  },
  image89IconPosition: {
    width: 123,
    left: 8,
    position: "absolute",
  },
  iconPosition2: {
    top: 484,
    height: 16,
    width: 16,
    overflow: "hidden",
    position: "absolute",
  },
  dolorVeniamTypo: {
    top: 519,
    color: Color.colorLightslategray,
    textAlign: "left",
    fontFamily: FontFamily.manropeRegular,
    lineHeight: 22,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  iconPosition1: {
    top: 522,
    height: 16,
    width: 16,
    overflow: "hidden",
    position: "absolute",
  },
  button31Position: {
    top: 50,
    width: 44,
    overflow: "hidden",
    position: "absolute",
  },
  textTypo: {
    lineHeight: 18,
    fontSize: FontSize.size_2xs,
    textAlign: "right",
    color: Color.colorDimgray,
    fontFamily: FontFamily.manropeRegular,
    position: "absolute",
  },
  sliderLayout1: {
    width: 90,
    backgroundColor: Color.colorGray_400,
    position: "absolute",
  },
  rectanglePosition: {
    backgroundColor: Color.colorGoldenrod,
    left: "0%",
    bottom: "0%",
    top: "0%",
    height: "100%",
    position: "absolute",
  },
  sliderLayout: {
    width: 89,
    left: 214,
    height: 22,
    backgroundColor: Color.colorGray_400,
    position: "absolute",
  },
  sliderPosition: {
    left: 214,
    height: 22,
  },
  containerLayout1: {
    height: 106,
    width: 375,
    left: 0,
    position: "absolute",
  },
  laborumDoMollitPosition: {
    left: 83,
    textAlign: "left",
    position: "absolute",
  },
  iconPosition: {
    left: 24,
    position: "absolute",
  },
  agoTypo: {
    left: 300,
    lineHeight: 20,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.manropeRegular,
    position: "absolute",
  },
  containerPosition: {
    left: 77,
    textAlign: "left",
    position: "absolute",
  },
  containerLayout: {
    height: 84,
    width: 375,
    backgroundColor: Color.colorCornsilk,
    left: 0,
    position: "absolute",
  },
  laborumAliquaDoTypo: {
    width: 266,
    left: 77,
    color: Color.colorDarkslategray_200,
    lineHeight: 20,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.manropeRegular,
    position: "absolute",
  },
  iconLayout: {
    width: 8,
    left: 343,
    height: 8,
    position: "absolute",
  },
  groupIcon: {
    height: "36.88%",
    bottom: "63.13%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  groupIcon1: {
    left: "68.11%",
  },
  group2: {
    bottom: "0%",
    height: "100%",
    left: "0%",
    right: "0%",
  },
  group1: {
    height: "72.73%",
    width: "41.81%",
    top: "42.05%",
    right: "16.53%",
    left: "41.67%",
  },
  image14: {
    top: "50%",
    marginTop: -22,
    height: 44,
    overflow: "hidden",
    position: "absolute",
  },
  groupIcon2: {
    height: "36.02%",
    bottom: "63.98%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  groupIcon3: {
    left: "56.97%",
  },
  group3: {
    height: "73.18%",
    width: "75.52%",
    top: "41.59%",
    right: "14.9%",
    left: "9.58%",
  },
  image15: {
    width: 96,
    top: "50%",
    right: 0,
  },
  container2: {
    height: 44,
    backgroundColor: Color.colorGray_300,
    right: 0,
    overflow: "hidden",
    left: 0,
    top: 0,
    position: "absolute",
  },
  image16Icon: {
    marginTop: -151,
    marginLeft: -148,
    width: 286,
    height: 166,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  launchScreen: {
    overflow: "hidden",
    height: 844,
    width: 390,
    backgroundColor: Color.colorWhite,
    left: 0,
  },
  vectorIcon: {
    bottom: -1,
    maxHeight: "100%",
    maxWidth: "100%",
    right: 0,
    overflow: "hidden",
    left: 0,
    position: "absolute",
  },
  enterEmailenrollmentNumber: {
    textAlign: "left",
    color: Color.colorSilver,
    fontFamily: FontFamily.manropeRegular,
    left: 22,
    marginTop: -11,
    top: "50%",
    position: "absolute",
  },
  profileIcon: {
    marginTop: -7,
    top: "50%",
    overflow: "hidden",
    left: 0,
    position: "absolute",
  },
  textbox1: {
    top: 332,
    borderTopRightRadius: Border.br_7xl,
    borderTopLeftRadius: Border.br_7xl,
    height: 52,
    left: 20,
    right: 20,
    position: "absolute",
  },
  welcome: {
    top: 212,
    color: Color.colorGray_100,
    lineHeight: 48,
    fontSize: FontSize.size_13xl,
    textAlign: "left",
    left: 20,
    position: "absolute",
  },
  hiEnterYour: {
    top: 268,
    color: Color.colorDimgray,
    textAlign: "left",
    lineHeight: 22,
    fontSize: FontSize.size_sm,
    left: 20,
    position: "absolute",
  },
  text: {
    marginLeft: 10,
    color: Color.colorLightslategray,
    marginTop: -13,
    textAlign: "left",
    fontFamily: FontFamily.manropeRegular,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  googleIcon: {
    marginLeft: -10,
    height: 20,
    width: 20,
    marginTop: -10,
    left: "50%",
    top: "50%",
    overflow: "hidden",
    position: "absolute",
  },
  button1: {
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: Color.colorLightslategray,
    top: 34,
    backgroundColor: Color.colorGray_400,
    left: 0,
  },
  button2: {
    left: 119,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: Color.colorLightslategray,
    top: 34,
    backgroundColor: Color.colorGray_400,
  },
  button3: {
    left: 238,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: Color.colorLightslategray,
    top: 34,
    backgroundColor: Color.colorGray_400,
  },
  orSignIn: {
    color: Color.colorGray_100,
    textAlign: "left",
    lineHeight: 22,
    fontSize: FontSize.size_sm,
    left: 0,
    top: 0,
    position: "absolute",
  },
  button1Parent: {
    top: 626,
    height: 78,
    position: "absolute",
  },
  image19Icon: {
    top: 64,
    width: 46,
    borderRadius: Border.br_4xl,
    height: 56,
    left: 26,
  },
  selectYourUniversity: {
    left: 12,
    marginTop: -11.5,
    color: Color.colorGray_100,
    textAlign: "left",
    fontFamily: FontFamily.manropeRegular,
    top: "50%",
    position: "absolute",
  },
  chevronDownLarge: {
    right: 13,
    height: 14,
    width: 14,
  },
  dropdownButton1: {
    top: 147,
    width: 310,
    height: 37,
    borderRadius: Border.br_9xs,
    left: 48,
    borderColor: Color.colorLightslategray,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  login: {
    marginLeft: -22.5,
    color: Color.colorWhite,
    marginTop: -14,
    textAlign: "left",
    fontFamily: FontFamily.manropeRegular,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  button4: {
    backgroundColor: Color.colorBlueviolet,
    overflow: "hidden",
    top: 0,
    position: "absolute",
  },
  signUp: {
    color: Color.colorWhite,
    lineHeight: 28,
    fontSize: FontSize.size_lg,
    marginTop: -14,
    textAlign: "left",
    fontFamily: FontFamily.manropeRegular,
  },
  button41: {
    backgroundColor: Color.colorBlueviolet,
    borderRadius: Border.br_7xl,
    width: 350,
    height: 52,
    left: 0,
  },
  button4Parent: {
    height: 112,
    top: 481,
    position: "absolute",
  },
  textbox11: {
    width: 350,
    left: 20,
    height: 52,
    backgroundColor: Color.colorGray_400,
    borderTopRightRadius: Border.br_7xl,
    borderTopLeftRadius: Border.br_7xl,
  },
  signIn: {
    left: 409,
    overflow: "hidden",
    height: 844,
    width: 390,
    backgroundColor: Color.colorWhite,
  },
  upcomingEvents: {
    lineHeight: 30,
    fontSize: FontSize.size_xl,
    top: 24,
    color: Color.colorGray_100,
    textAlign: "left",
    left: 20,
    position: "absolute",
  },
  abc: {
    left: 16,
    top: 16,
    color: Color.colorGray_100,
    textAlign: "left",
    lineHeight: 22,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  image23Icon: {
    borderRadius: Border.br_5xs,
    bottom: 16,
    right: 16,
    top: 46,
    left: 16,
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  container9: {
    width: 172,
    height: 202,
    top: 66,
    left: 20,
  },
  container10: {
    left: 198,
    width: 172,
    height: 202,
    top: 66,
  },
  container11: {
    left: 198,
  },
  container12: {
    left: 20,
  },
  container8: {
    top: 269,
    height: 502,
    borderRadius: Border.br_9xs,
    backgroundColor: Color.colorGray_300,
    right: 0,
    left: 0,
    position: "absolute",
  },
  image27Icon: {
    top: 92,
    borderRadius: Border.br_5xs,
    left: 20,
    right: 20,
    maxHeight: "100%",
    maxWidth: "100%",
  },
  findATasker: {
    lineHeight: 30,
    fontSize: FontSize.size_xl,
    top: 24,
    width: 350,
    left: 20,
    color: Color.colorGray_100,
    textAlign: "left",
    position: "absolute",
  },
  findNow: {
    color: Color.colorBlueviolet,
    lineHeight: 26,
    fontSize: FontSize.size_base,
    marginTop: -13,
  },
  frame: {
    width: 99,
    height: 44,
    position: "absolute",
    borderRadius: Border.br_3xl,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
    left: 0,
    top: 0,
  },
  tag4: {
    right: 37,
    bottom: 36,
    backgroundColor: Color.colorGray_400,
  },
  container13: {
    top: 771,
    borderRadius: Border.br_9xs,
    backgroundColor: Color.colorGray_300,
    right: 0,
    left: 0,
  },
  houseIcon: {
    marginLeft: -11.95,
    height: 24,
    width: 24,
    left: "50%",
  },
  home: {
    marginLeft: -14.45,
    fontSize: FontSize.size_3xs,
    lineHeight: 16,
    marginTop: 4,
    color: Color.colorBlueviolet,
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
  },
  frame1: {
    width: 108,
    backgroundColor: Color.colorGray_400,
    height: 44,
    overflow: "hidden",
    left: 0,
    top: 0,
    position: "absolute",
  },
  externalEvents: {
    marginLeft: -36.45,
    fontSize: FontSize.size_3xs,
    lineHeight: 16,
    marginTop: 4,
    color: Color.colorDimgray,
    fontFamily: FontFamily.manropeRegular,
  },
  frame2: {
    left: 236,
    width: 152,
    backgroundColor: Color.colorGray_400,
    height: 44,
    overflow: "hidden",
    top: 0,
    position: "absolute",
  },
  myEvents: {
    marginLeft: -23.95,
    fontSize: FontSize.size_3xs,
    lineHeight: 16,
    marginTop: 4,
    color: Color.colorDimgray,
    fontFamily: FontFamily.manropeRegular,
  },
  frame3: {
    left: 108,
  },
  tabBarMenu1: {
    right: 2,
  },
  container14Child: {
    maxHeight: "100%",
    width: 390,
    left: 0,
    top: 0,
    position: "absolute",
  },
  container14: {
    bottom: -8,
    height: 92,
    right: 0,
    backgroundColor: Color.colorWhite,
    left: 0,
    position: "absolute",
  },
  goodMorning: {
    top: 100,
    color: Color.colorDimgray,
    textAlign: "left",
    lineHeight: 22,
    fontSize: FontSize.size_sm,
    left: 20,
    position: "absolute",
  },
  akshatShah: {
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
    lineHeight: 26,
    fontSize: FontSize.size_base,
    color: Color.colorGray_100,
    textAlign: "left",
    left: 20,
  },
  bell1Icon: {
    height: 24,
    width: 24,
    right: 20,
  },
  avatar1Icon: {
    top: 102,
    right: 20,
  },
  image28: {
    height: 44,
    overflow: "hidden",
    top: 0,
    position: "absolute",
  },
  image29: {
    width: 96,
    height: 44,
    right: 0,
    overflow: "hidden",
    top: 0,
    position: "absolute",
  },
  container16Child: {
    top: 4,
    borderRadius: 30,
    backgroundColor: "rgba(243, 244, 246, 0)",
    height: 60,
    right: 20,
    position: "absolute",
  },
  whichEventDo: {
    left: 80,
    width: 204,
    height: 21,
    color: Color.colorSlategray,
    marginTop: -10,
    fontFamily: FontFamily.manropeLight,
    fontWeight: "300",
    textAlign: "left",
    top: "50%",
    position: "absolute",
  },
  iconButton1: {
    left: 32,
    height: 36,
    width: 36,
    borderRadius: Border.br_lg,
  },
  container16: {
    bottom: 20,
    elevation: 2,
    shadowRadius: 2,
    shadowColor: "rgba(23, 26, 31, 0.12)",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 3,
    },
    borderRadius: Border.br_9xs,
    backgroundColor: Color.colorGray_300,
    right: 0,
    left: 0,
  },
  container15Child: {
    top: 260,
    maxHeight: "100%",
    width: 390,
    left: 0,
    position: "absolute",
  },
  image19Icon1: {
    top: 44,
    width: 46,
    borderRadius: Border.br_4xl,
    height: 56,
    left: 22,
  },
  container15: {
    height: 260,
    top: 9,
    right: 0,
    backgroundColor: Color.colorWhite,
    left: 0,
    position: "absolute",
  },
  image27Icon1: {
    top: 1183,
    height: 248,
    borderRadius: Border.br_5xs,
    position: "absolute",
  },
  tag41: {
    top: 1375,
    left: 271,
    backgroundColor: Color.colorGray_400,
  },
  homeServiceListing: {
    left: 1376,
    backgroundColor: Color.colorWhitesmoke_100,
    overflow: "hidden",
    width: 390,
    height: 1595,
  },
  overlay1: {
    height: 962,
  },
  arrowRight5: {
    top: 61,
    height: 24,
    width: 24,
    left: 20,
    overflow: "hidden",
    position: "absolute",
  },
  taskerProfile: {
    left: 60,
    top: 56,
    textAlign: "left",
  },
  container47Child: {
    top: 102,
    maxHeight: "100%",
    width: 390,
    left: 0,
    position: "absolute",
  },
  shareNetwork2: {
    top: 61,
    height: 24,
    width: 24,
    right: 20,
    overflow: "hidden",
    position: "absolute",
  },
  container47: {
    height: 102,
    right: 0,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
    left: 0,
    top: 0,
    position: "absolute",
  },
  ashleyRobinson: {
    left: 132,
    top: 68,
    lineHeight: 28,
    fontSize: FontSize.size_lg,
    color: Color.colorGray_100,
    textAlign: "left",
    position: "absolute",
  },
  avatar11Icon: {
    borderRadius: 48,
    top: 16,
    left: 20,
    width: 96,
    overflow: "hidden",
  },
  cCheck5: {
    marginLeft: -135,
  },
  container48Child: {
    left: 134,
    height: 72,
  },
  overallJobs: {
    color: Color.colorDimgray,
    fontFamily: FontFamily.manropeRegular,
  },
  text5: {
    fontFamily: FontFamily.manropeRegular,
  },
  text3: {
    color: Color.colorGray_100,
  },
  overallJobs32Container: {
    marginLeft: -151,
    textAlign: "center",
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  delivery2Icon: {
    marginLeft: -17,
  },
  car: {
    color: Color.colorGray_100,
  },
  vehiclescar: {
    textAlign: "center",
    marginTop: 88,
    lineHeight: 20,
    fontSize: FontSize.size_xs,
  },
  container48Item: {
    left: 253,
    height: 72,
  },
  brush2Icon: {
    marginLeft: 102,
  },
  toolsno: {
    marginLeft: 103,
    textAlign: "center",
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  reviews: {
    marginLeft: -34.5,
  },
  starIcon: {
    marginLeft: -54.5,
    height: 16,
    marginTop: -8,
    left: "50%",
    top: "50%",
    overflow: "hidden",
    position: "absolute",
  },
  frame5: {
    left: 82,
    width: 125,
    height: 28,
    position: "absolute",
  },
  eliteTasker: {
    color: "#7d6600",
    lineHeight: 20,
    fontSize: FontSize.size_xs,
    marginTop: -10,
    fontFamily: FontFamily.manropeRegular,
  },
  frame6: {
    width: 78,
    backgroundColor: Color.colorCornsilk,
    height: 28,
    position: "absolute",
  },
  tag12: {
    top: 32,
    height: 28,
    left: 132,
  },
  workingAsA: {
    top: 124,
    height: 60,
    width: 350,
    left: 20,
    color: Color.colorDimgray,
    fontFamily: FontFamily.manropeLight,
    fontWeight: "300",
    textAlign: "left",
    position: "absolute",
  },
  container48: {
    height: 304,
    top: 102,
    right: 0,
    left: 0,
    position: "absolute",
  },
  reviews1: {
    top: 422,
    lineHeight: 30,
    fontSize: FontSize.size_xl,
    color: Color.colorGray_100,
    textAlign: "left",
    left: 20,
    position: "absolute",
  },
  utExercitationOccaecat: {
    width: 289,
    top: 76,
    left: 16,
    color: Color.colorDimgray,
    fontFamily: FontFamily.manropeLight,
    fontWeight: "300",
    textAlign: "left",
    position: "absolute",
  },
  avatar12Icon: {
    left: 16,
    top: 16,
  },
  text6: {
    textAlign: "right",
    top: 19,
    right: 16,
    color: Color.colorLightslategray,
    fontFamily: FontFamily.manropeLight,
    fontWeight: "300",
    position: "absolute",
  },
  elizabethBailey: {
    top: 17,
    left: 68,
    color: Color.colorGray_100,
    textAlign: "left",
    lineHeight: 22,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  rating11Icon: {
    top: 43,
    width: 80,
    left: 68,
    height: 16,
    position: "absolute",
  },
  container49: {
    top: 552,
  },
  utExercitationOccaecat1: {
    width: 270,
    top: 76,
    left: 16,
    color: Color.colorDimgray,
    fontFamily: FontFamily.manropeLight,
    fontWeight: "300",
    textAlign: "left",
    position: "absolute",
  },
  container50: {
    top: 692,
    height: 112,
  },
  doloreAuteAliqua: {
    top: 76,
    lineHeight: 20,
    fontSize: FontSize.size_xs,
    left: 16,
    color: Color.colorDimgray,
    fontFamily: FontFamily.manropeLight,
    fontWeight: "300",
  },
  container51: {
    top: 812,
    height: 172,
  },
  container52: {
    top: 992,
  },
  doloreAuteAliqua2: {
    top: 76,
    lineHeight: 20,
    fontSize: FontSize.size_xs,
    height: 60,
    left: 16,
    color: Color.colorDimgray,
    fontFamily: FontFamily.manropeLight,
    fontWeight: "300",
  },
  container53: {
    top: 1132,
    height: 152,
  },
  readMore: {
    marginLeft: -34.5,
    color: Color.colorGray_100,
    textAlign: "left",
    fontFamily: FontFamily.manropeRegular,
    marginTop: -11,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  button7: {
    marginLeft: -76,
    top: 1292,
    width: 160,
    borderRadius: Border.br_lg,
    left: "50%",
  },
  reviews2: {
    textAlign: "center",
    lineHeight: 20,
    fontSize: FontSize.size_xs,
    marginTop: 4,
    color: Color.colorGray_100,
  },
  rating16Icon: {
    marginTop: -24,
    width: 80,
    height: 16,
    top: "50%",
    position: "absolute",
  },
  container55: {
    left: -1,
    borderColor: Color.colorBlueviolet,
    borderWidth: 1,
    borderStyle: "solid",
  },
  reviews3: {
    textAlign: "center",
    lineHeight: 20,
    fontSize: FontSize.size_xs,
    marginTop: 4,
    color: Color.colorDimgray,
    fontFamily: FontFamily.manropeLight,
    fontWeight: "300",
  },
  rating17Icon: {
    width: 48,
    marginTop: -24,
    height: 16,
  },
  container56: {
    left: 295,
  },
  reviews4: {
    textAlign: "center",
    marginTop: 4,
    color: Color.colorDimgray,
    fontFamily: FontFamily.manropeLight,
    fontWeight: "300",
  },
  rating18Icon: {
    width: 64,
    marginTop: -24,
    height: 16,
  },
  container57: {
    left: 147,
  },
  rating19Icon: {
    marginLeft: -16,
    marginTop: -24,
    height: 16,
    width: 32,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  container58: {
    left: 443,
  },
  rating20Icon: {
    marginTop: -24,
  },
  container59: {
    left: 591,
  },
  container54: {
    top: 464,
    width: 731,
    height: 72,
    borderRadius: Border.br_9xs,
    left: 20,
    backgroundColor: Color.colorGray_300,
    position: "absolute",
  },
  selectSchedule: {
    color: Color.colorWhite,
    lineHeight: 26,
    fontSize: FontSize.size_base,
    marginTop: -13,
    textAlign: "left",
    fontFamily: FontFamily.manropeRegular,
    top: "50%",
  },
  button8: {
    marginTop: -23,
    backgroundColor: Color.colorBlueviolet,
    borderRadius: Border.br_3xl,
    right: 20,
    top: "50%",
    height: 44,
    overflow: "hidden",
  },
  hr: {
    marginTop: -9,
    lineHeight: 30,
    fontSize: FontSize.size_xl,
    color: Color.colorGray_100,
    textAlign: "left",
    left: 20,
    top: "50%",
    position: "absolute",
  },
  hireWith: {
    marginTop: -29,
    color: Color.colorLightslategray,
    fontFamily: FontFamily.manropeLight,
    fontWeight: "300",
    textAlign: "left",
    left: 20,
    top: "50%",
    position: "absolute",
  },
  container60: {
    height: 90,
    right: 0,
    backgroundColor: Color.colorWhite,
    left: 0,
  },
  continue: {
    marginLeft: -34.5,
    color: Color.colorWhite,
    marginTop: -13,
    textAlign: "left",
    fontFamily: FontFamily.manropeRegular,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  button9: {
    right: 16,
    left: 16,
  },
  container62Child: {
    top: 106,
    maxHeight: "100%",
    width: 390,
    left: 0,
    position: "absolute",
  },
  bookNow: {
    marginLeft: -50,
    textAlign: "center",
    top: 56,
    left: "50%",
  },
  container62Item: {
    backgroundColor: Color.colorGainsboro,
    width: 52,
    height: 8,
    marginLeft: -26,
    top: 16,
    borderRadius: Border.br_9xs,
    left: "50%",
    position: "absolute",
  },
  february2024: {
    top: 24,
    lineHeight: 26,
    fontSize: FontSize.size_base,
    color: Color.colorGray_100,
    textAlign: "left",
    left: 20,
    position: "absolute",
  },
  chevronLeftLarge1: {
    right: 52,
    height: 24,
    width: 24,
    overflow: "hidden",
  },
  chevronRightLarge1: {
    height: 24,
    width: 24,
    right: 20,
    overflow: "hidden",
  },
  sat: {
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
    marginTop: -11.5,
    color: Color.colorSilver,
  },
  frame7: {
    left: "71.43%",
    right: "14.29%",
    width: "14.29%",
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  frame8: {
    borderBottomWidth: 1,
    borderTopWidth: 1,
    bottom: "-0.98%",
    top: "-0.98%",
    height: "101.96%",
    borderColor: Color.colorWhite,
    borderStyle: "solid",
  },
  frame9: {
    borderBottomWidth: 1,
    borderTopWidth: 1,
    bottom: "-0.98%",
    top: "-0.98%",
    height: "101.96%",
    borderColor: Color.colorWhite,
    borderStyle: "solid",
  },
  frame10: {
    borderBottomWidth: 1,
    borderTopWidth: 1,
    bottom: "-0.98%",
    top: "-0.98%",
    height: "101.96%",
    borderColor: Color.colorWhite,
    borderStyle: "solid",
  },
  frame11: {
    borderBottomWidth: 1,
    borderTopWidth: 1,
    bottom: "-0.98%",
    top: "-0.98%",
    height: "101.96%",
    borderColor: Color.colorWhite,
    borderStyle: "solid",
  },
  frame12: {
    borderBottomWidth: 1,
    borderTopWidth: 1,
    bottom: "-0.98%",
    top: "-0.98%",
    height: "101.96%",
    borderColor: Color.colorWhite,
    borderStyle: "solid",
  },
  frame13: {
    borderBottomWidth: 1,
    borderTopWidth: 1,
    bottom: "-0.98%",
    top: "-0.98%",
    height: "101.96%",
    borderColor: Color.colorWhite,
    borderStyle: "solid",
  },
  header: {
    height: "20.65%",
    bottom: "79.35%",
    right: "0.28%",
    width: "99.72%",
    backgroundColor: Color.colorGray_400,
    left: "0%",
    top: "0%",
    position: "absolute",
  },
  text11: {
    color: Color.colorLightslategray,
    fontFamily: FontFamily.manropeRegular,
    marginTop: -11,
  },
  frame14: {
    bottom: "0%",
    height: "100%",
    top: "0%",
  },
  text12: {
    color: Color.colorGray_100,
    fontFamily: FontFamily.manropeRegular,
    marginTop: -11,
  },
  frame15: {
    bottom: "0%",
    height: "100%",
    top: "0%",
  },
  frame16: {
    bottom: "0%",
    height: "100%",
    top: "0%",
  },
  frame17: {
    bottom: "0%",
    height: "100%",
    top: "0%",
  },
  frame18: {
    bottom: "0%",
    height: "100%",
    top: "0%",
  },
  frame19: {
    bottom: "0%",
    height: "100%",
    top: "0%",
  },
  frame20: {
    bottom: "0%",
    height: "100%",
    top: "0%",
  },
  row: {
    top: "20.65%",
    bottom: "63.56%",
  },
  text23: {
    color: Color.colorBlueviolet,
    fontFamily: FontFamily.manropeRegular,
    marginTop: -11,
  },
  row1: {
    top: "36.44%",
    bottom: "47.77%",
  },
  row2: {
    top: "52.23%",
    bottom: "31.98%",
  },
  row3: {
    top: "68.02%",
    bottom: "16.19%",
  },
  row4: {
    top: "83.81%",
    bottom: "0.4%",
  },
  oval1Icon: {
    marginTop: -32.5,
    marginLeft: -18.5,
    height: 36,
    width: 36,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  table1: {
    borderColor: Color.colorWhite,
    top: 70,
    bottom: 24,
    borderRadius: Border.br_9xs,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.colorGray_400,
    left: 20,
    right: 20,
    overflow: "hidden",
    position: "absolute",
  },
  container63: {
    top: 156,
    height: 340,
    borderRadius: Border.br_5xs,
    right: 0,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
    left: 0,
    position: "absolute",
  },
  selectDate: {
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
    lineHeight: 30,
    fontSize: FontSize.size_xl,
    color: Color.colorGray_100,
    textAlign: "left",
    left: 20,
  },
  selectTime: {
    top: 520,
    lineHeight: 30,
    fontSize: FontSize.size_xl,
    color: Color.colorGray_100,
    textAlign: "left",
    left: 20,
    position: "absolute",
  },
  am: {
    marginTop: -13.5,
    left: 16,
    color: Color.colorGray_100,
    textAlign: "left",
    fontFamily: FontFamily.manropeRegular,
    top: "50%",
    position: "absolute",
  },
  clockIcon: {
    marginTop: -10.5,
    top: "50%",
    height: 20,
    width: 20,
    overflow: "hidden",
  },
  textbox2: {
    left: 19,
  },
  textbox3: {
    left: 200,
  },
  container62: {
    bottom: 90,
    borderTopLeftRadius: Border.br_base,
    borderTopRightRadius: Border.br_base,
    height: 632,
    right: 0,
    backgroundColor: Color.colorWhite,
    left: 0,
    position: "absolute",
  },
  bookingSelectTaskSchedule: {
    left: 3394,
    height: 962,
    backgroundColor: Color.colorWhitesmoke_100,
    overflow: "hidden",
    width: 390,
  },
  reviewAndConfirm: {
    left: 70,
    textAlign: "center",
    top: 56,
  },
  hackathon: {
    left: 68,
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
    lineHeight: 26,
    fontSize: FontSize.size_base,
    color: Color.colorGray_100,
    textAlign: "left",
  },
  container66Child: {
    top: 76,
  },
  calendar1Icon: {
    top: 90,
    height: 24,
    width: 24,
    left: 16,
    overflow: "hidden",
    position: "absolute",
  },
  fridayDecember16: {
    top: 91,
    left: 48,
    color: Color.colorGray_100,
    textAlign: "left",
    lineHeight: 22,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  clock1Icon: {
    height: 24,
    width: 24,
    left: 16,
    overflow: "hidden",
  },
  am1100: {
    top: 123,
    left: 48,
    color: Color.colorGray_100,
    textAlign: "left",
    lineHeight: 22,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  pin31: {
    top: 154,
    height: 24,
    width: 24,
    left: 16,
    overflow: "hidden",
    position: "absolute",
  },
  kingStreetDenver: {
    top: 155,
    left: 48,
    color: Color.colorGray_100,
    textAlign: "left",
    lineHeight: 22,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  container66: {
    top: 160,
    height: 194,
    borderRadius: Border.br_base,
    right: 20,
    left: 20,
    position: "absolute",
  },
  waitInLine: {
    top: 118,
    lineHeight: 30,
    fontSize: FontSize.size_xl,
    color: Color.colorGray_100,
    textAlign: "left",
    left: 20,
    position: "absolute",
  },
  pen1Icon: {
    marginTop: -12,
    height: 24,
    width: 24,
    right: 16,
    top: "50%",
    overflow: "hidden",
    position: "absolute",
  },
  cardholder1Icon: {
    marginTop: -12,
    height: 24,
    width: 24,
    left: 16,
    top: "50%",
    overflow: "hidden",
    position: "absolute",
  },
  digitalWallet: {
    marginLeft: -45.5,
  },
  frame49: {
    backgroundColor: Color.colorAliceblue,
    borderRadius: Border.br_sm,
    overflow: "hidden",
    top: 0,
    left: 0,
  },
  tag13: {
    marginTop: -14,
    left: 48,
    backgroundColor: Color.colorGray_400,
    top: "50%",
  },
  container67: {
    top: 420,
    borderRadius: Border.br_base,
    right: 20,
    height: 56,
    position: "absolute",
    left: 20,
  },
  payment: {
    top: 378,
    lineHeight: 30,
    fontSize: FontSize.size_xl,
    color: Color.colorGray_100,
    textAlign: "left",
    left: 20,
    position: "absolute",
  },
  priceDetails: {
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
    lineHeight: 30,
    fontSize: FontSize.size_xl,
    color: Color.colorGray_100,
    textAlign: "left",
    position: "absolute",
  },
  newmember: {
    marginLeft: -41,
    lineHeight: 20,
    fontSize: FontSize.size_xs,
    marginTop: -10,
  },
  frame50: {
    backgroundColor: "#fdf2f2",
    borderRadius: Border.br_sm,
    overflow: "hidden",
    left: 0,
    top: 0,
  },
  tag14: {
    marginTop: -14,
    left: 48,
    backgroundColor: Color.colorGray_400,
    top: "50%",
  },
  container68: {
    top: 542,
    borderRadius: Border.br_base,
    right: 20,
    height: 56,
    position: "absolute",
    left: 20,
  },
  promos: {
    top: 500,
    lineHeight: 30,
    fontSize: FontSize.size_xl,
    color: Color.colorGray_100,
    textAlign: "left",
    left: 20,
    position: "absolute",
  },
  eventPrice: {
    left: 16,
    top: 16,
    fontFamily: FontFamily.manropeLight,
    fontWeight: "300",
    color: Color.colorGray_100,
    textAlign: "left",
    position: "absolute",
  },
  taxes: {
    top: 44,
    left: 16,
    fontFamily: FontFamily.manropeLight,
    fontWeight: "300",
    color: Color.colorGray_100,
    textAlign: "left",
    position: "absolute",
  },
  promos1: {
    top: 72,
    left: 16,
    fontFamily: FontFamily.manropeLight,
    fontWeight: "300",
    color: Color.colorGray_100,
    textAlign: "left",
    position: "absolute",
  },
  hr1: {
    textAlign: "right",
    right: 16,
    top: 16,
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
    color: Color.colorGray_100,
    position: "absolute",
  },
  hr2: {
    textAlign: "right",
    top: 44,
    right: 16,
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
    color: Color.colorGray_100,
    position: "absolute",
  },
  text46: {
    top: 72,
    textAlign: "right",
    right: 16,
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
    color: Color.colorGray_100,
    position: "absolute",
  },
  container69Child: {
    top: 108,
  },
  total: {
    bottom: 19,
    left: 48,
    color: Color.colorGray_100,
    textAlign: "left",
    fontFamily: FontFamily.manropeRegular,
    position: "absolute",
  },
  hr3: {
    textAlign: "right",
    bottom: 16,
    right: 16,
    lineHeight: 28,
    fontSize: FontSize.size_lg,
    color: Color.colorGray_100,
    position: "absolute",
  },
  money131: {
    bottom: 18,
    height: 24,
    width: 24,
    left: 16,
    overflow: "hidden",
    position: "absolute",
  },
  container69: {
    top: 664,
  },
  confirm: {
    color: Color.colorWhite,
  },
  button11: {
    left: 20,
    right: 20,
  },
  bookingReview: {
    left: 3868,
    height: 948,
    backgroundColor: Color.colorWhitesmoke_100,
    overflow: "hidden",
    width: 390,
  },
  container71Child: {
    top: 154,
    maxHeight: "100%",
    width: 390,
    left: 0,
    position: "absolute",
  },
  rectangle: {
    height: 4,
    backgroundColor: Color.colorBlueviolet,
    right: 0,
    left: 0,
  },
  taskInfo: {
    color: Color.colorBlueviolet,
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
    lineHeight: 22,
    fontSize: FontSize.size_sm,
    marginTop: -11,
  },
  frame51: {
    overflow: "hidden",
    width: 390,
    left: 0,
    top: 0,
    position: "absolute",
  },
  headerMenu1: {
    height: 52,
    backgroundColor: Color.colorGray_400,
    right: 0,
    left: 0,
  },
  container71: {
    height: 154,
    right: 0,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
    left: 0,
    top: 0,
    position: "absolute",
  },
  clock2Icon: {
    top: 126,
    height: 24,
    width: 24,
    left: 16,
    overflow: "hidden",
    position: "absolute",
  },
  am1624: {
    top: 127,
    left: 48,
    color: Color.colorGray_100,
    textAlign: "left",
    lineHeight: 22,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  pin32: {
    top: 162,
    height: 24,
    width: 24,
    left: 16,
    overflow: "hidden",
    position: "absolute",
  },
  kingStreetDenver1: {
    top: 163,
    left: 48,
    color: Color.colorGray_100,
    textAlign: "left",
    lineHeight: 22,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  container72: {
    top: 170,
    left: 20,
    right: 20,
  },
  cancelTask: {
    marginLeft: -45,
    lineHeight: 26,
    fontSize: FontSize.size_base,
    marginTop: -13,
  },
  button12: {
    borderColor: Color.colorCrimson,
    bottom: 20,
    borderWidth: 1,
    borderStyle: "solid",
    borderRadius: Border.br_3xl,
    left: 20,
    right: 20,
    height: 44,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  findAnotherEvent: {
    color: Color.colorBlueviolet,
  },
  button13: {
    bottom: 76,
    borderRadius: Border.br_3xl,
    left: 20,
    right: 20,
    height: 44,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  hrs: {
    textAlign: "right",
    top: 44,
    lineHeight: 20,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
    color: Color.colorGray_100,
  },
  container73: {
    top: 384,
  },
  myTaskTaskInfo: {
    left: 4352,
    backgroundColor: Color.colorWhitesmoke_100,
    overflow: "hidden",
    height: 844,
    width: 390,
  },
  completed: {
    marginLeft: -38,
    color: Color.colorBlueviolet,
    textAlign: "left",
    lineHeight: 22,
    fontSize: FontSize.size_sm,
    marginTop: -11,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  frame52: {
    left: 190,
  },
  past: {
    color: Color.colorDimgray,
  },
  frame53: {
    left: 0,
  },
  headerMenu3: {
    right: 10,
    height: 52,
    backgroundColor: Color.colorGray_400,
    left: 0,
  },
  avatar21Icon: {
    height: 36,
    width: 36,
    borderRadius: Border.br_lg,
    left: 16,
  },
  hackathon2: {
    left: 16,
    top: 16,
    lineHeight: 28,
    fontSize: FontSize.size_lg,
    color: Color.colorGray_100,
    textAlign: "left",
    position: "absolute",
  },
  clock3Icon: {
    height: 24,
    width: 24,
    left: 16,
    overflow: "hidden",
  },
  am16241: {
    top: 153,
    left: 48,
    color: Color.colorGray_100,
    textAlign: "left",
    lineHeight: 22,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  calendar3Icon: {
    top: 120,
    height: 24,
    width: 24,
    left: 16,
    overflow: "hidden",
    position: "absolute",
  },
  fridayDecember162: {
    top: 121,
    left: 48,
    color: Color.colorGray_100,
    textAlign: "left",
    lineHeight: 22,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  ashleyRobinson1: {
    top: 67,
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
    color: Color.colorGray_100,
    lineHeight: 22,
    fontSize: FontSize.size_sm,
  },
  rate: {
    color: Color.colorWhite,
  },
  button14: {
    height: 36,
    borderRadius: Border.br_lg,
    bottom: 16,
    right: 16,
    left: 16,
    backgroundColor: Color.colorBlueviolet,
    overflow: "hidden",
    position: "absolute",
  },
  feedback1Icon: {
    height: 24,
    width: 24,
    right: 16,
    top: 66,
    overflow: "hidden",
    position: "absolute",
  },
  container81: {
    top: 118,
  },
  bookAgain: {
    marginLeft: -35.5,
    color: Color.colorBlueviolet,
    textAlign: "left",
    fontFamily: FontFamily.manropeRegular,
    marginTop: -11,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  button15: {
    height: 36,
    borderRadius: Border.br_lg,
    bottom: 16,
    right: 16,
    left: 16,
  },
  elizabethBailey1: {
    top: 61,
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
    color: Color.colorGray_100,
    lineHeight: 22,
    fontSize: FontSize.size_sm,
  },
  rating21Icon: {
    top: 83,
    height: 12,
    width: 60,
    left: 64,
    position: "absolute",
  },
  container82: {
    top: 377,
  },
  container83: {
    top: 636,
  },
  profile: {
    marginLeft: -14.95,
    fontSize: FontSize.size_3xs,
    lineHeight: 16,
    marginTop: 4,
    color: Color.colorDimgray,
    fontFamily: FontFamily.manropeRegular,
  },
  frame54: {
    left: 256,
    width: 129,
    backgroundColor: Color.colorGray_400,
    height: 44,
    overflow: "hidden",
    top: 0,
    position: "absolute",
  },
  home1: {
    marginLeft: -13.95,
    fontSize: FontSize.size_3xs,
    lineHeight: 16,
    marginTop: 4,
    color: Color.colorDimgray,
    fontFamily: FontFamily.manropeRegular,
  },
  frame55: {
    left: 0,
  },
  frame56: {
    width: 128,
    backgroundColor: Color.colorGray_400,
    height: 44,
    top: 0,
    position: "absolute",
  },
  tabBarMenu2: {
    right: 5,
  },
  container84: {
    height: 92,
    right: 0,
    backgroundColor: Color.colorWhite,
    left: 0,
  },
  completedTasks: {
    left: 4793,
    height: 1000,
    backgroundColor: Color.colorWhitesmoke_100,
    overflow: "hidden",
    width: 390,
  },
  hackathon3: {
    marginLeft: -40,
    left: "50%",
    textAlign: "center",
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
    lineHeight: 26,
    fontSize: FontSize.size_base,
    color: Color.colorGray_100,
  },
  container86Child: {
    top: 116,
  },
  avatar24Icon: {
    top: -40,
    borderRadius: Border.br_21xl,
    height: 80,
    width: 80,
    overflow: "hidden",
    position: "absolute",
  },
  awesome: {
    marginLeft: -49,
    textAlign: "center",
    bottom: 16,
    lineHeight: 30,
    fontSize: FontSize.size_xl,
    color: Color.colorGray_100,
    left: "50%",
    position: "absolute",
  },
  shareYourExperience: {
    marginLeft: -129,
    textAlign: "center",
    color: Color.colorLightslategray,
    fontFamily: FontFamily.manropeLight,
    fontWeight: "300",
    lineHeight: 22,
    fontSize: FontSize.size_sm,
    left: "50%",
  },
  rating23Icon: {
    marginLeft: -90,
    bottom: 66,
    height: 36,
    left: "50%",
  },
  container86: {
    top: 158,
    height: 234,
    borderRadius: Border.br_base,
    right: 20,
    left: 20,
    position: "absolute",
  },
  otherReviews: {
    top: 416,
    lineHeight: 30,
    fontSize: FontSize.size_xl,
    color: Color.colorGray_100,
    textAlign: "left",
    left: 20,
    position: "absolute",
  },
  maximum3Choices: {
    top: 446,
    color: Color.colorDimgray,
    textAlign: "left",
    lineHeight: 22,
    fontSize: FontSize.size_sm,
    left: 20,
    position: "absolute",
  },
  comments: {
    top: 600,
    lineHeight: 30,
    fontSize: FontSize.size_xl,
    color: Color.colorGray_100,
    textAlign: "left",
    left: 20,
    position: "absolute",
  },
  goodGuy: {
    top: 9,
    left: 12,
    lineHeight: 26,
    fontSize: FontSize.size_base,
    color: Color.colorGray_100,
    fontFamily: FontFamily.manropeRegular,
  },
  resizingHandleIcon: {
    right: 9,
    bottom: 9,
  },
  textarea1: {
    top: 641,
    height: 141,
    left: 19,
    borderWidth: 1,
    borderStyle: "solid",
    borderColor: Color.colorLightslategray,
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  timeliness: {
    color: Color.colorDarkslategray_200,
    lineHeight: 26,
    fontSize: FontSize.size_base,
    marginTop: -13,
    textAlign: "left",
    fontFamily: FontFamily.manropeRegular,
    top: "50%",
    position: "absolute",
  },
  frame57: {
    left: 103,
    backgroundColor: Color.colorWhite,
    top: 0,
  },
  friendly: {
    color: Color.colorBlueviolet,
  },
  frame58: {
    width: 91,
    borderRadius: Border.br_3xl,
    height: 44,
    left: 0,
    top: 0,
  },
  tag18: {
    top: 480,
    width: 215,
    backgroundColor: Color.colorGray_400,
    left: 20,
    height: 44,
    position: "absolute",
  },
  cleanliness: {
    marginLeft: -43.5,
    color: Color.colorBlueviolet,
    marginTop: -13,
    textAlign: "left",
    fontFamily: FontFamily.manropeRegular,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  frame59: {
    width: 119,
    left: 164,
    borderRadius: Border.br_3xl,
    height: 44,
    top: 0,
  },
  professionalism: {
    marginLeft: -59,
    color: Color.colorDarkslategray_200,
    marginTop: -13,
    textAlign: "left",
    fontFamily: FontFamily.manropeRegular,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  frame60: {
    width: 150,
    borderRadius: Border.br_3xl,
    height: 44,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
    left: 0,
    top: 0,
    position: "absolute",
  },
  tag19: {
    top: 532,
    width: 283,
    backgroundColor: Color.colorGray_400,
    left: 20,
    height: 44,
    position: "absolute",
  },
  image62Icon: {
    marginLeft: -163,
  },
  image63Icon: {
    marginLeft: -52,
  },
  addPhoto: {
    color: Color.colorBlueviolet,
    lineHeight: 22,
    fontSize: FontSize.size_sm,
    marginTop: -11,
  },
  button17: {
    marginLeft: 59,
    borderColor: Color.colorBlueviolet,
    borderWidth: 1,
    borderStyle: "solid",
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  container87: {
    top: 790,
    height: 128,
    borderRadius: Border.br_5xs,
    left: 20,
    right: 20,
    position: "absolute",
  },
  submit: {
    marginLeft: -26.5,
    color: Color.colorWhite,
    marginTop: -13,
    textAlign: "left",
    fontFamily: FontFamily.manropeRegular,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  button18: {
    top: 16,
    backgroundColor: Color.colorBlueviolet,
    borderRadius: Border.br_3xl,
    left: 20,
    right: 20,
    height: 44,
    overflow: "hidden",
    position: "absolute",
  },
  ratingAService: {
    left: 5249,
    height: 1032,
    backgroundColor: Color.colorWhitesmoke_100,
    overflow: "hidden",
    width: 390,
  },
  ashleyRobinson2: {
    marginLeft: -61,
    textAlign: "center",
    fontFamily: FontFamily.manropeMedium,
    fontWeight: "500",
    lineHeight: 26,
    fontSize: FontSize.size_base,
    color: Color.colorGray_100,
    left: "50%",
  },
  overlay2: {
    height: 844,
  },
  cCheck6: {
    top: 40,
    marginLeft: -60,
    left: "50%",
    position: "absolute",
  },
  success: {
    marginLeft: -47,
    top: 176,
    textAlign: "center",
    left: "50%",
  },
  thankYouFor: {
    marginLeft: -84,
    top: 218,
    textAlign: "center",
    color: Color.colorLightslategray,
    fontFamily: FontFamily.manropeRegular,
    left: "50%",
    position: "absolute",
  },
  backToHome: {
    marginLeft: -50.5,
    color: Color.colorWhite,
    marginTop: -13,
    textAlign: "left",
    fontFamily: FontFamily.manropeRegular,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  button21: {
    right: 40,
    left: 40,
    backgroundColor: Color.colorBlueviolet,
    borderRadius: Border.br_3xl,
    height: 44,
  },
  container93: {
    top: 240,
    borderRadius: Border.br_base,
    right: 20,
    left: 20,
    backgroundColor: Color.colorWhite,
  },
  thankYouMessage: {
    left: 5754,
    backgroundColor: Color.colorWhitesmoke_100,
    overflow: "hidden",
    height: 844,
    width: 390,
  },
  container94Child: {
    top: 394,
    maxHeight: "100%",
    width: 390,
    left: 0,
    position: "absolute",
  },
  avatar26Icon: {
    borderRadius: 60,
    height: 120,
    width: 120,
    overflow: "hidden",
    left: 20,
  },
  button22: {
    top: 230,
    right: 22,
    width: 93,
    borderRadius: Border.br_9xs,
  },
  ashleyRobinson3: {
    top: 220,
    lineHeight: 30,
    fontSize: FontSize.size_xl,
    color: Color.colorGray_100,
    textAlign: "left",
    left: 20,
    position: "absolute",
  },
  onlybrianwhiteyahoocom: {
    top: 254,
    color: Color.colorDimgray,
    textAlign: "left",
    lineHeight: 22,
    fontSize: FontSize.size_sm,
    left: 20,
    position: "absolute",
  },
  container94Item: {
    top: 292,
    maxHeight: "100%",
    position: "absolute",
  },
  nisiIpsumOfficia: {
    bottom: 20,
    color: Color.colorDimgray,
    fontFamily: FontFamily.manropeLight,
    fontWeight: "300",
    textAlign: "left",
    lineHeight: 22,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  container94: {
    height: 394,
    right: 0,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
    left: 0,
    top: 0,
    position: "absolute",
  },
  payments: {
    left: 68,
    lineHeight: 26,
    fontSize: FontSize.size_base,
    marginTop: -13,
    color: Color.colorGray_100,
    textAlign: "left",
    top: "50%",
    position: "absolute",
  },
  iconButton3: {
    height: 36,
    width: 36,
    borderRadius: Border.br_lg,
    left: 16,
  },
  container95: {
    top: 410,
    borderColor: Color.colorWhitesmoke_200,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_base,
    right: 20,
    left: 20,
  },
  container96: {
    top: 486,
    borderColor: Color.colorWhitesmoke_200,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_base,
    right: 20,
    left: 20,
  },
  container97: {
    top: 562,
    borderColor: Color.colorWhitesmoke_200,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_base,
    right: 20,
    left: 20,
  },
  container98: {
    top: 638,
    borderColor: Color.colorWhitesmoke_200,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_base,
    right: 20,
    left: 20,
  },
  profile1: {
    marginLeft: -15.95,
    fontSize: FontSize.size_3xs,
    lineHeight: 16,
    marginTop: 4,
    color: Color.colorBlueviolet,
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
  },
  frame65: {
    left: 254,
    width: 131,
    backgroundColor: Color.colorGray_400,
    height: 44,
    overflow: "hidden",
    top: 0,
    position: "absolute",
  },
  tasks1: {
    marginLeft: -13.45,
    fontSize: FontSize.size_3xs,
    lineHeight: 16,
    marginTop: 4,
    color: Color.colorDimgray,
    fontFamily: FontFamily.manropeRegular,
  },
  frame66: {
    width: 126,
    backgroundColor: Color.colorGray_400,
    height: 44,
    top: 0,
    position: "absolute",
  },
  container141: {
    height: 92,
    width: 390,
    backgroundColor: Color.colorWhite,
    left: 0,
    top: 0,
    position: "absolute",
  },
  accountSettings: {
    left: 6260,
    backgroundColor: Color.colorWhitesmoke_100,
    overflow: "hidden",
    height: 844,
    width: 390,
  },
  enterEmail: {
    marginTop: 1,
    lineHeight: 26,
    fontSize: FontSize.size_base,
    color: Color.colorSilver,
    fontFamily: FontFamily.manropeRegular,
    top: "50%",
    position: "absolute",
  },
  email: {
    marginTop: -26,
    color: Color.colorDarkslategray_100,
    left: 16,
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
    textAlign: "left",
    top: "50%",
    position: "absolute",
  },
  mailIcon: {
    marginTop: 4,
    left: 16,
    height: 20,
    width: 20,
    top: "50%",
    overflow: "hidden",
    position: "absolute",
  },
  textbox5: {
    top: 236,
  },
  hideIcon: {
    right: 15,
    marginTop: 4,
    height: 20,
    width: 20,
    top: "50%",
    overflow: "hidden",
    position: "absolute",
  },
  textbox6: {
    top: 321,
  },
  signUp2: {
    color: Color.colorWhite,
    lineHeight: 26,
    fontSize: FontSize.size_base,
    marginTop: -13,
    textAlign: "left",
  },
  button23: {
    top: 444,
    left: 35,
    width: 335,
    borderRadius: Border.br_9xs,
    height: 44,
    overflow: "hidden",
    backgroundColor: Color.colorBlueviolet,
  },
  signUp3: {
    top: 130,
    left: 144,
    textAlign: "center",
    color: Color.colorGray_100,
    lineHeight: 48,
    fontSize: FontSize.size_13xl,
  },
  createAnAccount: {
    top: 178,
    left: 117,
    fontFamily: FontFamily.lexendRegular,
    textAlign: "center",
    color: Color.colorDimgray,
    position: "absolute",
  },
  signIn1: {
    left: 267,
    color: Color.colorBlueviolet,
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
    textAlign: "left",
  },
  alreadyHaveAn: {
    left: 92,
    textAlign: "right",
    color: Color.colorGray_100,
    fontFamily: FontFamily.manropeRegular,
  },
  or: {
    top: 508,
    left: 194,
    textTransform: "uppercase",
    textAlign: "center",
    color: Color.colorSlategray,
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
    position: "absolute",
  },
  googleIcon1: {
    marginLeft: -86,
    height: 20,
    width: 20,
    marginTop: -10,
    left: "50%",
    top: "50%",
    overflow: "hidden",
    position: "absolute",
  },
  button24: {
    top: 548,
    backgroundColor: "#db4437",
    left: 35,
    width: 335,
    borderRadius: Border.br_9xs,
    height: 44,
    overflow: "hidden",
  },
  signUpWith1: {
    color: Color.colorWhite,
  },
  logoFacebookIcon1: {
    marginLeft: -95.5,
    height: 20,
    width: 20,
    marginTop: -10,
    left: "50%",
    top: "50%",
    overflow: "hidden",
    position: "absolute",
  },
  button25: {
    top: 604,
    backgroundColor: "#4267b2",
    left: 35,
    width: 335,
    borderRadius: Border.br_9xs,
    height: 44,
    overflow: "hidden",
  },
  rectangle2: {
    top: 3,
    borderRadius: 2,
    height: 16,
    borderColor: Color.colorBlueviolet,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.colorGray_400,
    left: 0,
    position: "absolute",
  },
  frameIcon: {
    top: 5,
    left: 2,
  },
  text48: {
    width: 20,
    color: Color.colorGray_100,
    textAlign: "left",
    fontFamily: FontFamily.manropeRegular,
    left: 22,
    top: 0,
    position: "absolute",
  },
  frame71: {
    left: 0,
    top: 0,
  },
  checkbox1: {
    left: 37,
    top: 400,
  },
  termsConditions: {
    color: Color.colorBlueviolet,
  },
  iAgreeWithContainer: {
    left: 59,
    top: 400,
    textAlign: "left",
    fontFamily: FontFamily.manropeRegular,
    position: "absolute",
  },
  signUp1: {
    left: 864,
    overflow: "hidden",
    height: 844,
    width: 390,
    backgroundColor: Color.colorWhite,
  },
  groupIcon40: {
    height: "31.75%",
    bottom: "68.25%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  groupIcon41: {
    left: "75.09%",
  },
  group41: {
    height: "84.25%",
    width: "37.92%",
    top: "42%",
    right: "20.42%",
    left: "41.67%",
  },
  image70: {
    height: 40,
    width: 72,
    left: 0,
  },
  groupIcon42: {
    height: "31.36%",
    bottom: "68.64%",
    maxHeight: "100%",
    maxWidth: "100%",
    overflow: "hidden",
  },
  groupIcon43: {
    left: "58.42%",
  },
  group43: {
    height: "84.5%",
    width: "68.65%",
    top: "41.75%",
    right: "18.85%",
    left: "12.5%",
  },
  image71: {
    height: 40,
    width: 96,
    right: 0,
  },
  container101: {
    marginTop: -46,
    height: 40,
    top: "50%",
    backgroundColor: Color.colorGray_300,
    right: 0,
    overflow: "hidden",
    left: 0,
    position: "absolute",
  },
  search: {
    left: 34,
    color: "#eaecf0",
    textAlign: "left",
    fontFamily: FontFamily.manropeRegular,
    lineHeight: 22,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  searchIcon: {
    height: 16,
    marginTop: -7.5,
    top: "50%",
    overflow: "hidden",
    position: "absolute",
    left: 12,
  },
  textbox7: {
    marginTop: 2,
    right: 11,
    height: 35,
    borderRadius: Border.br_9xs,
    left: 20,
    top: "50%",
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  scan1Icon: {
    marginTop: 8,
    right: 74,
    height: 24,
    width: 24,
    top: "50%",
    overflow: "hidden",
    position: "absolute",
  },
  container100Child: {
    top: 58,
    left: 54,
    height: 16,
    maxWidth: "100%",
    overflow: "hidden",
    position: "absolute",
  },
  container100: {
    height: 92,
    backgroundColor: Color.colorBlueviolet,
    right: 0,
    left: 0,
    top: 0,
    position: "absolute",
  },
  recentSearches: {
    top: 108,
  },
  searchEventsChild: {
    maxHeight: "100%",
    width: 390,
    left: 0,
  },
  eventsToAttend: {
    top: 428,
  },
  image72Icon: {
    borderTopLeftRadius: Border.br_9xs,
    borderBottomLeftRadius: Border.br_9xs,
    left: -1,
    width: 36,
    maxHeight: "100%",
    top: 0,
  },
  hackathon4: {
    left: 43,
    marginTop: -10,
    color: Color.colorGray_100,
    textAlign: "left",
    fontFamily: FontFamily.manropeRegular,
    top: "50%",
    position: "absolute",
  },
  container103: {
    top: 284,
    height: 36,
    borderColor: Color.colorWhitesmoke_200,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_9xs,
    left: 20,
  },
  recommendedForYou: {
    top: 246,
  },
  container104: {
    top: 328,
    height: 36,
    borderColor: Color.colorWhitesmoke_200,
    borderWidth: 1,
    borderStyle: "solid",
    backgroundColor: Color.colorWhite,
    borderRadius: Border.br_9xs,
    left: 20,
  },
  container105: {
    top: 284,
  },
  container106: {
    top: 328,
  },
  garbaNight: {
    marginLeft: -33,
    color: Color.colorDarkslategray_200,
    marginTop: -10,
    textAlign: "left",
    fontFamily: FontFamily.manropeRegular,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  frame72: {
    width: 82,
    height: 28,
    borderRadius: Border.br_9xs,
    overflow: "hidden",
    left: 0,
  },
  holi: {
    marginLeft: -10.5,
    color: Color.colorDarkslategray_200,
    marginTop: -10,
    textAlign: "left",
    fontFamily: FontFamily.manropeRegular,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  frame73: {
    left: 86,
    width: 37,
    height: 28,
    borderRadius: Border.br_9xs,
    overflow: "hidden",
  },
  edSheeran: {
    color: Color.colorDarkslategray_200,
    marginLeft: -32,
    left: "50%",
    top: "50%",
    position: "absolute",
    marginTop: -10,
    textAlign: "left",
    fontFamily: FontFamily.manropeRegular,
  },
  frame74: {
    left: 127,
    overflow: "hidden",
    width: 80,
    height: 28,
    borderRadius: Border.br_9xs,
  },
  tag22: {
    top: 146,
    height: 28,
    left: 20,
  },
  hackathon5: {
    marginLeft: -30.5,
    color: Color.colorDarkslategray_200,
    marginTop: -10,
    textAlign: "left",
    fontFamily: FontFamily.manropeRegular,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  frame75: {
    width: 77,
    height: 28,
    borderRadius: Border.br_9xs,
    overflow: "hidden",
    left: 0,
  },
  resin: {
    marginLeft: -15.5,
    color: Color.colorDarkslategray_200,
    marginTop: -10,
    textAlign: "left",
    fontFamily: FontFamily.manropeRegular,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  frame76: {
    left: 81,
    width: 47,
    height: 28,
    borderRadius: Border.br_9xs,
    overflow: "hidden",
  },
  art1: {
    marginLeft: -8.5,
    color: Color.colorDarkslategray_200,
    marginTop: -10,
    textAlign: "left",
    fontFamily: FontFamily.manropeRegular,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  frame77: {
    backgroundColor: Color.colorWhitesmoke_200,
    top: 0,
    position: "absolute",
    height: 28,
    left: 132,
    borderRadius: Border.br_9xs,
  },
  tag23: {
    top: 186,
    width: 165,
    height: 28,
    backgroundColor: Color.colorGray_400,
    left: 20,
    position: "absolute",
  },
  trash1Icon: {
    top: 112,
    width: 18,
    height: 18,
    right: 20,
    overflow: "hidden",
    position: "absolute",
  },
  toyAndGame: {
    left: 53,
    color: Color.colorGray_100,
    textAlign: "left",
    fontFamily: FontFamily.manropeRegular,
    marginTop: -11,
    top: "50%",
    position: "absolute",
  },
  image76Icon: {
    width: 25,
    height: 18,
    marginTop: -9,
  },
  container107: {
    top: 470,
    height: 54,
    width: 163,
    left: 20,
  },
  books: {
    marginTop: -11,
  },
  image77Icon: {
    height: 23,
    width: 24,
    marginTop: -11,
    left: 20,
    top: "50%",
    overflow: "hidden",
    position: "absolute",
  },
  container108: {
    left: 207,
    top: 470,
    height: 54,
    width: 163,
  },
  image78Icon: {
    marginTop: -12,
    height: 24,
    width: 24,
  },
  container109: {
    left: 20,
  },
  petSupplies: {
    marginTop: -10,
  },
  image79Icon: {
    height: 25,
    marginTop: -12,
    width: 24,
    left: 20,
    top: "50%",
    overflow: "hidden",
    position: "absolute",
  },
  container110: {
    left: 207,
  },
  image80Icon: {
    width: 26,
    marginTop: -12,
    height: 24,
    left: 16,
    top: "50%",
    overflow: "hidden",
    position: "absolute",
  },
  container111: {
    left: 20,
  },
  image81Icon: {
    height: 24,
    width: 24,
    marginTop: -13,
    left: 20,
    top: "50%",
    overflow: "hidden",
    position: "absolute",
  },
  container112: {
    left: 207,
  },
  image82Icon: {
    width: 19,
    height: 24,
    marginTop: -11,
    left: 20,
    top: "50%",
    overflow: "hidden",
    position: "absolute",
  },
  container113: {
    top: 683,
    left: 20,
  },
  image83Icon: {
    width: 31,
    marginTop: -12,
    height: 24,
    left: 16,
    top: "50%",
    overflow: "hidden",
    position: "absolute",
  },
  container114: {
    top: 680,
    left: 207,
  },
  container115: {
    left: 20,
  },
  image85Icon: {
    left: 21,
    width: 22,
    marginTop: -12,
    height: 24,
    top: "50%",
    overflow: "hidden",
    position: "absolute",
  },
  container116: {
    left: 207,
  },
  container841: {
    top: 804,
    height: 92,
    width: 390,
    backgroundColor: Color.colorWhite,
    left: 0,
    position: "absolute",
  },
  searchEvents: {
    left: 1833,
    height: 888,
    overflow: "hidden",
    width: 390,
    backgroundColor: Color.colorWhite,
  },
  buyTickets: {
    marginLeft: -37.5,
    color: Color.colorWhite,
    textAlign: "left",
    fontFamily: FontFamily.manropeRegular,
    marginTop: -11,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  button26: {
    width: 287,
    top: 12,
    height: 42,
    left: 68,
    backgroundColor: Color.colorBlueviolet,
    borderRadius: Border.br_9xs,
    overflow: "hidden",
  },
  text49: {
    color: Color.colorBlueviolet,
  },
  addShoppingCart: {
    marginTop: -8,
    overflow: "hidden",
  },
  button27: {
    top: 15,
    height: 36,
    width: 36,
    borderRadius: Border.br_9xs,
    backgroundColor: Color.colorGray_400,
    left: 20,
    overflow: "hidden",
    position: "absolute",
  },
  container118: {
    top: 1246,
    height: 66,
    width: 375,
    backgroundColor: Color.colorWhite,
    left: 0,
    position: "absolute",
  },
  deseruntMinimIncididunt: {
    top: 792,
    lineHeight: 20,
    fontSize: FontSize.size_xs,
    color: Color.colorLightslategray,
    fontFamily: FontFamily.manropeRegular,
    position: "absolute",
  },
  daysAgo: {
    left: 296,
    top: 832,
    textAlign: "right",
    color: Color.colorLightslategray,
    fontFamily: FontFamily.manropeRegular,
    position: "absolute",
  },
  magnaPariaturSit: {
    top: 856,
    lineHeight: 20,
    fontSize: FontSize.size_xs,
    color: Color.colorLightslategray,
  },
  jevonRaynor: {
    left: 75,
    textAlign: "left",
    color: Color.colorDarkslategray_200,
    fontFamily: FontFamily.manropeRegular,
    lineHeight: 22,
    fontSize: FontSize.size_sm,
  },
  avatar27Icon: {
    height: 36,
    width: 36,
    borderRadius: Border.br_lg,
    left: 20,
    overflow: "hidden",
  },
  jasonD: {
    top: 832,
    color: Color.colorDarkslategray_200,
    lineHeight: 22,
    fontSize: FontSize.size_sm,
  },
  avatar28Icon: {
    top: 832,
    height: 36,
    width: 36,
    borderRadius: Border.br_lg,
    left: 20,
    overflow: "hidden",
    position: "absolute",
  },
  aDayAgo: {
    left: 302,
    textAlign: "right",
    lineHeight: 20,
    fontSize: FontSize.size_xs,
    color: Color.colorLightslategray,
    fontFamily: FontFamily.manropeRegular,
  },
  relevantEvents: {
    top: 920,
    color: Color.colorDarkslategray_200,
    lineHeight: 26,
    fontSize: FontSize.size_base,
    textAlign: "left",
    left: 20,
  },
  seeAll: {
    marginTop: -10,
    color: Color.colorLightslategray,
    textAlign: "left",
    fontFamily: FontFamily.manropeRegular,
  },
  chevronRightLarge: {
    marginTop: -6,
    marginLeft: 14,
    left: "50%",
    top: "50%",
  },
  button28: {
    top: 917,
  },
  text50: {
    lineHeight: 20,
    fontSize: FontSize.size_xs,
    left: 26,
    color: Color.colorGray_100,
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
    textAlign: "left",
  },
  text51: {
    left: 101,
  },
  rating25Icon: {
    top: 154,
    height: 16,
    width: 16,
  },
  image86Icon: {
    left: 8,
    position: "absolute",
    width: 120,
  },
  productTitle: {
    left: 8,
    position: "absolute",
    width: 120,
  },
  container119: {
    left: 168,
    width: 136,
    height: 181,
    top: 957,
  },
  switch1Icon: {
    left: 283,
    borderRadius: Border.br_xs,
    height: 24,
    top: 24,
  },
  notifyMeOf: {
    top: 26,
    color: Color.colorDarkslategray_200,
    lineHeight: 20,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.manropeRegular,
  },
  container121Icon: {
    height: 40,
    top: 16,
    left: 12,
    borderRadius: Border.br_9xs,
    overflow: "hidden",
  },
  container120: {
    top: 1154,
    borderRadius: 6,
    height: 72,
    borderColor: Color.colorGainsboro,
    borderWidth: 1,
    borderStyle: "solid",
    left: 20,
    backgroundColor: Color.colorWhite,
  },
  productDetailsChild: {
    top: 348,
  },
  productDetailsItem: {
    top: 896,
  },
  image87Icon: {
    height: 178,
    borderRadius: Border.br_9xs,
    left: 0,
    top: 0,
  },
  rating26Icon: {
    top: 210,
    left: 209,
    height: 16,
    width: 20,
    position: "absolute",
  },
  text52: {
    left: 229,
    color: "#222730",
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
  },
  text53: {
    top: 204,
    lineHeight: 28,
    fontSize: FontSize.size_lg,
    color: Color.colorGray_100,
    textAlign: "left",
    left: 0,
  },
  oval2Icon: {
    left: 176,
    width: 6,
    height: 6,
    top: 184,
  },
  oval3Icon: {
    left: 188,
    width: 6,
    height: 6,
    top: 184,
  },
  oval4Icon: {
    width: 6,
    height: 6,
    top: 184,
    left: 164,
  },
  container122Child: {
    left: 142,
    top: 184,
    height: 6,
    borderRadius: Border.br_10xs,
    width: 16,
    backgroundColor: Color.colorBlueviolet,
  },
  reviews7: {
    left: 252,
    color: Color.colorLightslategray,
    fontFamily: FontFamily.manropeRegular,
  },
  container122: {
    top: 96,
    height: 232,
    left: 20,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  reviews8: {
    top: 585,
    color: Color.colorDarkslategray_200,
    lineHeight: 26,
    fontSize: FontSize.size_base,
    textAlign: "left",
    left: 20,
  },
  button29: {
    top: 582,
  },
  productDetailsInner: {
    top: 561,
    height: 1,
  },
  text55: {
    width: 61,
    lineHeight: 20,
    fontSize: FontSize.size_xs,
    left: 26,
    color: Color.colorGray_100,
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
    textAlign: "left",
  },
  container123: {
    width: 136,
    height: 181,
    top: 957,
    left: 20,
  },
  text56: {
    left: 104,
  },
  image89Icon: {
    height: 101,
    borderRadius: Border.br_10xs,
    top: 12,
  },
  productTitle2: {
    height: 26,
    top: 119,
    color: Color.colorDarkslategray_200,
    lineHeight: 20,
    fontSize: FontSize.size_xs,
    textAlign: "left",
    fontFamily: FontFamily.manropeRegular,
  },
  container124: {
    left: 316,
    width: 139,
    height: 181,
    top: 957,
  },
  description: {
    top: 369,
    color: Color.colorDarkslategray_200,
    lineHeight: 26,
    fontSize: FontSize.size_base,
    textAlign: "left",
    left: 20,
  },
  quisOccaecatMagna: {
    top: 403,
    height: 50,
    color: Color.colorLightslategray,
    textAlign: "left",
    fontFamily: FontFamily.manropeRegular,
    lineHeight: 22,
    fontSize: FontSize.size_sm,
    left: 20,
  },
  reply1Icon: {
    left: 164,
  },
  exercitationI: {
    left: 42,
    top: 481,
    color: Color.colorLightslategray,
    textAlign: "left",
    fontFamily: FontFamily.manropeRegular,
    position: "absolute",
  },
  temporAmet: {
    left: 186,
    top: 481,
    color: Color.colorLightslategray,
    textAlign: "left",
    fontFamily: FontFamily.manropeRegular,
    lineHeight: 22,
    fontSize: FontSize.size_sm,
  },
  delivery3Icon: {
    left: 20,
  },
  exercitation: {
    left: 43,
  },
  award1Icon: {
    left: 164,
  },
  dolorVeniam: {
    left: 186,
  },
  globe1Icon: {
    left: 20,
  },
  abc1: {
    top: 54,
    left: 44,
    textAlign: "left",
    lineHeight: 28,
    fontSize: FontSize.size_lg,
    color: Color.colorGray_100,
  },
  text58: {
    color: Color.colorLightslategray,
  },
  button31: {
    height: 36,
    borderRadius: Border.br_9xs,
    backgroundColor: Color.colorGray_400,
    left: 0,
  },
  image90: {
    left: 279,
    height: 40,
    width: 96,
    overflow: "hidden",
    top: 0,
    position: "absolute",
  },
  image91: {
    height: 40,
    overflow: "hidden",
    top: 0,
    position: "absolute",
  },
  container126: {
    width: 375,
    height: 40,
    backgroundColor: Color.colorGray_300,
    left: 0,
    top: 0,
    position: "absolute",
  },
  avatar1Icon1: {
    left: 320,
    borderRadius: Border.br_3xl,
    height: 44,
  },
  container125: {
    width: 375,
    backgroundColor: Color.colorWhite,
    left: 0,
    top: 0,
  },
  text59: {
    left: 16,
    top: 16,
    color: Color.colorGray_100,
    textAlign: "left",
    fontFamily: FontFamily.manropeRegular,
    position: "absolute",
  },
  rating29Icon: {
    width: 100,
    left: 16,
    height: 20,
  },
  reviews9: {
    lineHeight: 20,
    fontSize: FontSize.size_xs,
    left: 16,
    color: Color.colorDimgray,
    textAlign: "left",
    fontFamily: FontFamily.manropeRegular,
  },
  text60: {
    left: 312,
    lineHeight: 18,
    fontSize: FontSize.size_2xs,
    top: 18,
  },
  text61: {
    top: 36,
    left: 312,
    lineHeight: 18,
    fontSize: FontSize.size_2xs,
  },
  text62: {
    left: 312,
    lineHeight: 18,
    fontSize: FontSize.size_2xs,
    top: 54,
  },
  text63: {
    left: 312,
    lineHeight: 18,
    fontSize: FontSize.size_2xs,
    top: 72,
  },
  text64: {
    left: 314,
    top: 90,
  },
  rectangle3: {
    width: "74%",
    right: "26%",
  },
  frame84: {
    marginTop: -3,
    backgroundColor: Color.colorLightgray,
    height: 6,
    borderRadius: Border.br_10xs,
    top: "50%",
    right: 0,
    overflow: "hidden",
    left: 0,
  },
  slider1: {
    left: 214,
    height: 22,
    top: 16,
  },
  rectangle4: {
    width: "55.73%",
    right: "44.27%",
  },
  slider2: {
    top: 34,
  },
  rectangle5: {
    width: "23.6%",
    right: "76.4%",
  },
  slider3: {
    top: 52,
  },
  rectangle6: {
    width: "14.56%",
    right: "85.44%",
  },
  slider4: {
    left: 214,
    height: 22,
    top: 70,
    width: 90,
  },
  rectangle7: {
    width: "3.3%",
    right: "96.7%",
  },
  slider5: {
    top: 88,
    position: "absolute",
    width: 91,
    backgroundColor: Color.colorGray_400,
  },
  container127: {
    height: 126,
    top: 622,
    left: 20,
    backgroundColor: Color.colorWhitesmoke_100,
    borderRadius: Border.br_9xs,
  },
  productDetails: {
    left: 2921,
    height: 1312,
    width: 375,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  yesterday: {
    left: 291,
    top: 18,
    color: Color.colorLightslategray,
    textAlign: "left",
    fontFamily: FontFamily.manropeRegular,
    position: "absolute",
  },
  jenaNguyenTaggedContainer: {
    width: 198,
    top: 18,
    color: Color.colorGray_100,
    lineHeight: 22,
    fontSize: FontSize.size_sm,
  },
  laborumDoMollit: {
    width: 268,
    color: Color.colorDarkslategray_200,
    top: 68,
    lineHeight: 20,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.manropeRegular,
  },
  avatar30Icon: {
    borderRadius: 21,
    width: 41,
    height: 41,
    top: 18,
    overflow: "hidden",
  },
  container128: {
    top: 617,
    backgroundColor: Color.colorWhite,
  },
  text65: {
    left: 285,
    top: 18,
    color: Color.colorLightslategray,
    textAlign: "left",
    fontFamily: FontFamily.manropeRegular,
    position: "absolute",
  },
  anjaOconnorMentionedContainer: {
    width: 196,
    top: 18,
    color: Color.colorGray_100,
    lineHeight: 22,
    fontSize: FontSize.size_sm,
    position: "absolute",
  },
  laborumDoNostrud: {
    width: 276,
    color: Color.colorDarkslategray_200,
    top: 68,
    lineHeight: 20,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.manropeRegular,
    position: "absolute",
  },
  a: {
    marginLeft: -5,
    marginTop: -8,
    color: Color.colorWhite,
    lineHeight: 16,
    fontSize: FontSize.size_base,
    fontFamily: FontFamily.manropeRegular,
  },
  avatar31: {
    borderRadius: 17,
    backgroundColor: Color.colorLightslategray,
    height: 33,
    top: 18,
    width: 33,
    overflow: "hidden",
  },
  container129: {
    top: 723,
    backgroundColor: Color.colorWhite,
  },
  notificationsChild: {
    top: 100,
  },
  mAgo: {
    top: 18,
    color: Color.colorLightslategray,
  },
  kristinWatsonLikedContainer: {
    width: 209,
    top: 18,
    color: Color.colorGray_100,
    lineHeight: 22,
    fontSize: FontSize.size_sm,
  },
  laborumDoMollit1: {
    width: 274,
    color: Color.colorDarkslategray_200,
    top: 68,
    lineHeight: 20,
    fontSize: FontSize.size_xs,
    fontFamily: FontFamily.manropeRegular,
  },
  avatar32Icon: {
    width: 35,
    top: 18,
    height: 35,
    borderRadius: Border.br_lg,
    overflow: "hidden",
  },
  container130: {
    top: 829,
    backgroundColor: Color.colorWhite,
  },
  recently: {
    top: 10,
    color: Color.colorDarkslategray_100,
    textAlign: "left",
    fontFamily: FontFamily.manropeRegular,
    lineHeight: 22,
    fontSize: FontSize.size_sm,
  },
  container131: {
    width: 375,
    top: 153,
    backgroundColor: Color.colorWhitesmoke_100,
    left: 0,
  },
  container132: {
    top: 575,
    width: 375,
    backgroundColor: Color.colorWhitesmoke_100,
    left: 0,
  },
  notifications1: {
    left: 131,
    color: Color.colorDarkslategray_200,
    textAlign: "center",
    top: 56,
    fontFamily: FontFamily.manropeBold,
    fontWeight: "700",
    position: "absolute",
  },
  all: {
    marginLeft: -9,
    color: Color.colorGray_100,
    textAlign: "left",
    lineHeight: 22,
    fontSize: FontSize.size_sm,
    marginTop: -11,
    left: "50%",
    top: "50%",
    position: "absolute",
  },
  frame89: {
    width: 60,
    backgroundColor: Color.colorWhitesmoke_200,
    borderRadius: Border.br_xs,
    height: 24,
    overflow: "hidden",
    left: 0,
  },
  unread: {
    color: Color.colorSlategray,
    textAlign: "left",
    fontFamily: FontFamily.manropeRegular,
    lineHeight: 22,
    fontSize: FontSize.size_sm,
    marginTop: -11,
  },
  frame90: {
    borderRadius: Border.br_xs,
    height: 24,
    left: 60,
    overflow: "hidden",
    top: 0,
  },
  headerMenu4: {
    top: 115,
    width: 150,
    height: 24,
    backgroundColor: Color.colorGray_400,
  },
  mAgo1: {
    color: Color.colorDarkslategray_100,
    top: 19,
  },
  laborumAliquaDo: {
    top: 46,
  },
  oval5Icon: {
    top: 52,
  },
  container134: {
    top: 195,
  },
  sallyRooneyAddedContainer: {
    top: 18,
    width: 215,
    color: Color.colorGray_100,
    lineHeight: 22,
    fontSize: FontSize.size_sm,
  },
  container135: {
    top: 279,
  },
  mAgo3: {
    left: 297,
    top: 18,
    color: Color.colorDarkslategray_100,
    textAlign: "left",
    fontFamily: FontFamily.manropeRegular,
    position: "absolute",
  },
  liamPhamCommentedContainer: {
    width: 206,
    top: 18,
    color: Color.colorGray_100,
    lineHeight: 22,
    fontSize: FontSize.size_sm,
  },
  cillumLoremAliquip: {
    top: 68,
  },
  oval7Icon: {
    top: 74,
  },
  container136: {
    top: 363,
    backgroundColor: Color.colorCornsilk,
  },
  container137: {
    top: 469,
    backgroundColor: Color.colorWhite,
  },
  container991: {
    top: 935,
    left: -7,
    height: 92,
    width: 390,
    backgroundColor: Color.colorWhite,
    position: "absolute",
  },
  notifications: {
    left: 2373,
    height: 1019,
    width: 375,
    overflow: "hidden",
    backgroundColor: Color.colorWhite,
  },
  group: {
    flex: 1,
    height: 1595,
    width: "100%",
  },
});

export default Group;
