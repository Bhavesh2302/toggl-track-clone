import React, { useEffect } from "react";
import {
  BsBellFill,
  BsClockFill,
  BsBagDashFill,
  BsFillTagFill,
  BsFillCheckCircleFill,
  BsCurrencyDollar,
  BsFillPlayCircleFill,
} from "react-icons/bs";
import {
  AddIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  MinusIcon,
} from "@chakra-ui/icons";
import {
  RiFileList2Fill,
  RiFileUserFill,
  RiSettings5Fill,
} from "react-icons/ri";
import { GoPulse } from "react-icons/go";
import { IoIosFolder, IoIosHelpCircle } from "react-icons/io";
import { HiUsers } from "react-icons/hi";
import { FaFolderMinus, FaStopCircle } from "react-icons/fa";
import { GiPlug } from "react-icons/gi";
import { CgOrganisation } from "react-icons/cg";
import { AiFillPlusCircle } from "react-icons/ai";
import {
  Popover,
  PopoverTrigger,
  PopoverContent,
  PopoverHeader,
  PopoverBody,
  PopoverFooter,
  PopoverArrow,
  PopoverCloseButton,
  PopoverAnchor,
  Button,
} from "@chakra-ui/react";

import styles from "../Pages/TogglTrackPage/togglTrackPage.module.css";
import { useNavigate } from "react-router-dom";

const SideBar = () => {
  const navigate = useNavigate();
  const useremail = JSON.parse(localStorage.getItem("usermail"));

  const onLogout = () => {
    localStorage.removeItem("usermail");
    navigate("/");
  };

  return (
    <div className={styles.sideBar_container}>
      <div className={styles.sideBar_header}>
        <div className={styles.sideBar_header_title}>
          <span className={styles.sideBar_header_toggl}>toggl</span>
          <span className={styles.sideBar_header_track}>track</span>
        </div>
        {/* notifcation icon */}
        <BsBellFill />
      </div>

      <div className={styles.sideBar_Bars}>
        {/* track div */}

        <div className={styles.sideBar_track_div}>
          <div className={styles.sideBar_track_div_heading}>TRACK</div>
          <div
            className={styles.sideBar_track_div_inside_div}
            onClick={() => {
              navigate("/track/timer");
            }}
          >
            <BsClockFill className={styles.icon} />
            <div className={styles.sideBar_track_div_track_timer_title}>
              Timer
            </div>
          </div>
        </div>

        {/* analyze div */}

        <div className={styles.sideBar_analyze_div}>
          <div className={styles.sideBar_track_div_heading}>ANALYZE</div>
          <div className={styles.sideBar_track_div_inside_div}>
            <RiFileList2Fill className={styles.icon} />
            <div className={styles.sideBar_track_div_track_timer_title}>
              Reports
            </div>
          </div>
          <div className={styles.sideBar_track_div_inside_div}>
            <GoPulse className={styles.icon} />
            <div className={styles.sideBar_track_div_track_timer_title}>
              Insights
            </div>
          </div>
        </div>

        {/* manage div */}

        <div className={styles.sideBar_manage_div}>
          <div className={styles.sideBar_track_div_heading}>MANAGE</div>

          <div
            className={styles.sideBar_track_div_inside_div}
            onClick={() => {
              navigate("/projects");
            }}
          >
            <IoIosFolder className={styles.icon} />
            <div className={styles.sideBar_track_div_track_timer_title}>
              Projects
            </div>
          </div>
          <div className={styles.sideBar_track_div_inside_div}>
            <RiFileUserFill className={styles.icon} />
            <div className={styles.sideBar_track_div_track_timer_title}>
              Clients
            </div>
          </div>
          <div className={styles.sideBar_track_div_inside_div}>
            <HiUsers className={styles.icon} />
            <div className={styles.sideBar_track_div_track_timer_title}>
              Team
            </div>
          </div>

          <div className={styles.sideBar_track_div_inside_div}>
            <BsFillTagFill className={styles.icon} />
            <div className={styles.sideBar_track_div_track_timer_title}>
              Tags
            </div>
          </div>
          <div className={styles.sideBar_track_div_inside_div}>
            <IoIosHelpCircle className={styles.icon} />
            <div className={styles.sideBar_track_div_track_timer_title}>
              Help
            </div>
          </div>

          <div className={styles.sideBar_track_div_inside_div}>
            <FaFolderMinus className={styles.icon} />
            <div className={styles.sideBar_track_div_track_timer_title}>
              Subscription
            </div>
          </div>
          <div className={styles.sideBar_track_div_inside_div}>
            <GiPlug className={styles.icon} />
            <div className={styles.sideBar_track_div_track_timer_title}>
              Integration
            </div>
          </div>
        </div>

        {/* admin div */}
        <div className={styles.sideBar_admin_div}>
          <div className={styles.sideBar_track_div_heading}>ADMIN</div>
          <div className={styles.sideBar_track_div_inside_div}>
            <CgOrganisation className={styles.icon} />
            <div className={styles.sideBar_track_div_track_timer_title}>
              Organisations
            </div>
          </div>
          <div className={styles.sideBar_track_div_inside_div}>
            <RiSettings5Fill className={styles.icon} />
            <div className={styles.sideBar_track_div_track_timer_title}>
              Settings
            </div>
          </div>
        </div>
      </div>

      <div className={styles.sideBar_trial_div}>
        <div className={styles.sideBar_trial}>
          <div className={styles.sideBar_thirty}> Trial: 30 days left</div>
          <div className={styles.sideBar_upgrade}>Upgrade today</div>
        </div>
        <hr className={styles.hr} />

        <div className={styles.resume_onboarding}>
          <BsFillCheckCircleFill />
          <div>Resume </div>
        </div>
      </div>

      <div className={styles.workspace}>
        <div className={styles.sideBar_track_div_heading_workspace}>
          WORKSPACE
        </div>
        <div className={styles.sideBar_email_data}>
          <BsBagDashFill className={styles.bag_icon} />

          <div className={styles.email_id}>{useremail}</div>
          <ChevronDownIcon />
        </div>
      </div>

      {/* logout button*/}
      <div className={styles.sidebar_footer}>
        <div className={styles.footer_email} style={{ color: "#fff" }}>
          {useremail}
        </div>
        <div className={styles.emoji}>🙂</div>
      </div>
      <Button
        bg={"#dd6fd1"}
        display="block"
        m="auto"
        mt="5px"
        width="80%"
        size={"sm"}
        height="25px"
        color="white"
        onClick={onLogout}
      >
        logout
      </Button>
    </div>
  );
};

export default SideBar;
