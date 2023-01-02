export interface ModalInterface {
    showModal: boolean;
    setShowModal: Function;
    modalData: {
        title: string,
        penalty: string | number,
        description: string,
    };
  }
  