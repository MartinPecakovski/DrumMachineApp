import "antd/dist/antd.css";
import React, { useEffect, useState } from "react";
import { Col, Modal, Select } from "antd";
import {
  DrumEdit,
  DrumInitial,
  DrumWrapper,
  Icon1,
  Icon2,
} from "../../styles/styles";
import AddDrum from "./AddDrum";
import { Option } from "antd/lib/mentions";
import { initials, soundKeys } from "../../helpers/sound-keys";
import useSound from "use-sound";
import { Initial, Sound } from "../types";

type Props = {
  initial?: string | undefined;
};

const Drum = ({ initial }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [Sound, setSound] = useState<Sound>();

  const [Initial, setInitial] = useState<Initial>();

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const [play] = useSound(Sound?.sound ? `./sounds/${Sound?.sound}.mp3` : "./sounds/crash.mp3");

const  onKeyup = (e : KeyboardEvent) => {
  console.log(e.key)
  
}
  
  useEffect(() => {
    document.body.addEventListener("keyup", onKeyup)
  
    return () => {
      document.body.removeEventListener
    }
  }, [])
  

  
  if (Initial === undefined || Initial.key === " " || Initial.key === "" || Sound?.sound === undefined )
  return <AddDrum setInitial={setInitial} setSound={setSound} Sound={Sound} Initial={Initial} />;
  
  return (
    <Col lg={4}>
      <DrumWrapper onClick={() => play()} >
        <DrumInitial >{Initial?.key}</DrumInitial>
        <DrumEdit onClick={showModal}>
          <Icon1>
            <svg
              width="18"
              height="17"
              viewBox="0 0 18 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M16.6133 10.3075C16.3657 10.3075 16.165 10.5082 16.165 10.7558V14.7362C16.1641 15.4786 15.5626 16.0803 14.8201 16.081H2.24147C1.49898 16.0803 0.897462 15.4786 0.896587 14.7362V3.05409C0.897462 2.31178 1.49898 1.71008 2.24147 1.70921H6.22182C6.46943 1.70921 6.67011 1.50853 6.67011 1.26092C6.67011 1.01348 6.46943 0.812622 6.22182 0.812622H2.24147C1.00411 0.814023 0.00140092 1.81673 0 3.05409V14.7363C0.00140092 15.9737 1.00411 16.9764 2.24147 16.9778H14.8201C16.0575 16.9764 17.0602 15.9737 17.0616 14.7363V10.7558C17.0616 10.5082 16.8609 10.3075 16.6133 10.3075Z"
                fill="black"
              />
            </svg>
          </Icon1>
          <Icon2>
            <svg
              width="14"
              height="14"
              viewBox="0 0 14 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12.884 0.659118C12.0962 -0.128723 10.8189 -0.128723 10.0311 0.659118L2.03324 8.65695C1.97843 8.71176 1.93886 8.77971 1.91819 8.8543L0.866456 12.6513C0.823203 12.807 0.867157 12.9737 0.981331 13.088C1.09568 13.2022 1.26239 13.2462 1.41807 13.2031L5.21508 12.1512C5.28968 12.1305 5.35762 12.0909 5.41243 12.0361L13.4101 4.03813C14.1967 3.24976 14.1967 1.97353 13.4101 1.18516L12.884 0.659118ZM3.01003 8.94834L9.55564 2.40256L11.6666 4.51356L5.12087 11.0593L3.01003 8.94834ZM2.58836 9.79449L4.27489 11.4812L1.94201 12.1275L2.58836 9.79449ZM12.7762 3.40421L12.3007 3.87965L10.1896 1.76847L10.6652 1.29303C11.1028 0.855421 11.8123 0.855421 12.25 1.29303L12.7762 1.81908C13.2131 2.25721 13.2131 2.96625 12.7762 3.40421V3.40421Z"
                fill="black"
              />
            </svg>
          </Icon2>
        </DrumEdit>
      </DrumWrapper>
      <Modal
        title="Edit Modal"
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Select
          defaultValue={soundKeys[0].sound}
          value={Sound?.sound}
          style={{ width: 120 }}
          onChange={(e) =>
            setSound(soundKeys.find((sound) => sound.id.toString() === e))
          }
        >
          {soundKeys.map((key) => (
            <Option key={key.id.toString()}>{key.sound}</Option>
          ))}
        </Select>

        <Select
          defaultValue={initials[0].key}
          value={Initial?.key}
          style={{ width: 120 }}
          onChange={(e) =>
            setInitial(initials.find((sound) => sound.id.toString() === e))
          }
        >
          {initials.map((key) => (
            <Option key={key.id.toString()}>{key.key}</Option>
          ))}
        </Select>
      </Modal>
    </Col>
  );
};

export default Drum;
