import React, { useEffect, useState } from 'react';
import type { Props } from '@theme/Root';
import TosUpdateModal from '../components/TosUpdateModal';

const STORAGE_KEY = 'collabland_tos_privacy_ack_v1';

export default function Root({ children }: Props): JSX.Element {
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') {
      return;
    }

    try {
      const hasAccepted = window.localStorage.getItem(STORAGE_KEY);
      if (!hasAccepted) {
        setShowModal(true);
      }
    } catch {
      // If localStorage is unavailable (e.g., privacy mode), still show the modal once.
      setShowModal(true);
    }
  }, []);

  const handleAccept = () => {
    if (typeof window !== 'undefined') {
      try {
        window.localStorage.setItem(STORAGE_KEY, new Date().toISOString());
      } catch {
        // Ignore write errors; just hide the modal for this page view.
      }
    }
    setShowModal(false);
  };

  return (
    <>
      {children}
      {showModal && <TosUpdateModal onAccept={handleAccept} />}
    </>
  );
}


