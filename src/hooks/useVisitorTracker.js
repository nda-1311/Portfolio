import { useEffect, useState } from "react";
import {
  ref,
  onValue,
  set,
  onDisconnect,
  serverTimestamp,
} from "firebase/database";
import { database } from "../firebase/config";

export const useVisitorTracker = () => {
  const [totalVisits, setTotalVisits] = useState(0);
  const [onlineUsers, setOnlineUsers] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!database) {
      console.error("Firebase database not initialized");
      setTimeout(() => setLoading(false), 0);
      return;
    }

    try {
      // Generate unique visitor ID
      const getVisitorId = () => {
        let visitorId = sessionStorage.getItem("visitorId");
        if (!visitorId) {
          visitorId = `visitor_${Date.now()}_${Math.random()
            .toString(36)
            .substr(2, 9)}`;
          sessionStorage.setItem("visitorId", visitorId);
        }
        return visitorId;
      };

      const visitorId = getVisitorId();
      const visitorRef = ref(database, `visitors/${visitorId}`);
      const totalVisitsRef = ref(database, "stats/totalVisits");

      // Mark visitor as online
      set(visitorRef, {
        online: true,
        lastSeen: serverTimestamp(),
      });

      // Remove visitor when they disconnect
      onDisconnect(visitorRef).remove();

      // Listen to total visits
      const unsubscribeVisits = onValue(totalVisitsRef, (snapshot) => {
        const count = snapshot.val() || 0;
        setTotalVisits(count);
      });

      // Listen to online users count
      const unsubscribeOnline = onValue(
        ref(database, "visitors"),
        (snapshot) => {
          const visitors = snapshot.val() || {};
          const online = Object.keys(visitors).length;
          setOnlineUsers(online);
          setLoading(false);
        }
      );

      // Increment total visits (only once per session)
      const hasVisited = sessionStorage.getItem("hasVisited");
      if (!hasVisited) {
        onValue(
          totalVisitsRef,
          (snapshot) => {
            const currentCount = snapshot.val() || 0;
            set(totalVisitsRef, currentCount + 1);
          },
          { onlyOnce: true }
        );
        sessionStorage.setItem("hasVisited", "true");
      }

      // Cleanup on unmount
      return () => {
        set(visitorRef, null); // Remove visitor
        unsubscribeVisits();
        unsubscribeOnline();
      };
    } catch (error) {
      console.error("Error initializing visitor tracker:", error);
      setTimeout(() => setLoading(false), 0);
    }
  }, []);

  return { totalVisits, onlineUsers, loading };
};
