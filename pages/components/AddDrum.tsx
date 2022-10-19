import "antd/dist/antd.css"
import React, { useState } from "react";
import { AddDrumWrapper, PlusIcon1, PlusIcon2 } from "../../styles/styles";
import { Col, Modal, Select } from "antd";
import { Initial, Sound } from "../types";
import { initials, soundKeys } from "../../helpers/sound-keys";
import { Option } from "antd/lib/mentions";

type Props = {
  setInitial: React.Dispatch<React.SetStateAction<Initial>>;
  setSound: React.Dispatch<React.SetStateAction<Sound>>;
  Sound:Sound;
  Initial:Initial;
  
};

const AddDrum = ({setSound, setInitial, Sound, Initial}: Props) => {
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
       setIsModalOpen(true);
     };
   
     const handleOk = () => {
       setIsModalOpen(false);
     };
   
     const handleCancel = () => {
       setIsModalOpen(false);
     };
  return (
    <Col lg={4}>
      <AddDrumWrapper onClick={showModal}>
        <PlusIcon1>
          <svg
            width="8"
            height="46"
            viewBox="0 0 8 46"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect y="0.371429" width="8" height="45.2571" rx="4" fill="white" />
          </svg>
        </PlusIcon1>
        <PlusIcon2>
          <svg
            width="46"
            height="10"
            viewBox="0 0 46 10"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="45.4999"
              y="0.977417"
              width="8.04572"
              height="45"
              rx="4.02286"
              transform="rotate(90 45.4999 0.977417)"
              fill="white"
            />
          </svg>
        </PlusIcon2>
      </AddDrumWrapper>
      <Modal title="Add Modal" open={isModalOpen} onOk={handleOk} onCancel={handleCancel} >
      <Select
      defaultValue={"crash"}
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
          defaultValue={"q"}
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

export default AddDrum;
