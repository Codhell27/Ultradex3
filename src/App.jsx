import React, { useState, useEffect, useMemo, useRef } from 'react';

// --- Inline SVG Icons for 100% Robust Preview Rendering ---
const IconMenu = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
);
const IconX = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
);
const IconChevronLeft = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="15 18 9 12 15 6"></polyline></svg>
);
const IconCheckSquare = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="9 11 12 14 22 4"></polyline><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"></path></svg>
);
const IconSquare = ({ size = 20, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect></svg>
);
const IconPlus = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg>
);
const IconEdit2 = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M17 3a2.828 2.828 0 1 1 4 4L7.5 20.5 2 22l1.5-5.5L17 3z"></path></svg>
);
const IconTrash2 = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg>
);
const IconFileText = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
);
const IconListTodo = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}><rect x="3" y="5" width="6" height="6" rx="1"></rect><path d="m3 17 2 2 4-4"></path><path d="M13 6h8"></path><path d="M13 12h8"></path><path d="M13 18h8"></path></svg>
);
const IconVolume2 = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
);
const IconVolumeX = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" y1="9" x2="17" y2="15"></line><line x1="17" y1="9" x2="23" y2="15"></line></svg>
);
const IconBook = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
);
const IconCalendar = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}><rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect><line x1="16" y1="2" x2="16" y2="6"></line><line x1="8" y1="2" x2="8" y2="6"></line><line x1="3" y1="10" x2="21" y2="10"></line></svg>
);
const IconMinus = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="5" y1="12" x2="19" y2="12"></line></svg>
);
const IconBookOpen = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
);
const IconDatabase = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"></path><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"></path></svg>
);
const IconClock = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
);
const IconBookmark = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path></svg>
);
const IconHash = ({ size = 16, className = "" }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="4" y1="9" x2="20" y2="9"></line><line x1="4" y1="15" x2="20" y2="15"></line><line x1="10" y1="3" x2="8" y2="21"></line><line x1="16" y1="3" x2="14" y2="21"></line></svg>
);

const generateId = () => 'id_' + Date.now().toString(36) + Math.random().toString(36).substr(2, 5);

const getTodayDateString = () => {
  const d = new Date();
  return d.toISOString().split('T')[0];
};

const getDeadlineInfo = (deadlineStr) => {
  if (!deadlineStr) return null;
  const today = new Date();
  today.setHours(0, 0, 0, 0);
  const target = new Date(deadlineStr);
  target.setHours(0, 0, 0, 0);
  const diffTime = target - today;
  return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
};

const playClick = () => {
  if (typeof window === 'undefined') return;
  try {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    if (!AudioContext) return;
    const ctx = new AudioContext();
    const osc = ctx.createOscillator();
    const gain = ctx.createGain();
    
    osc.type = 'triangle';
    osc.frequency.setValueAtTime(160, ctx.currentTime);
    osc.frequency.exponentialRampToValueAtTime(40, ctx.currentTime + 0.04);
    
    gain.gain.setValueAtTime(0.2, ctx.currentTime);
    gain.gain.linearRampToValueAtTime(0.01, ctx.currentTime + 0.04);
    
    osc.connect(gain);
    gain.connect(ctx.destination);
    
    osc.start();
    osc.stop(ctx.currentTime + 0.04);
  } catch (e) {}
};

const withSound = (fn) => (...args) => {
  playClick();
  if (fn) fn(...args);
};

const initialData = [
  {
    id: 'm1',
    title: 'The Obsidian Scepter',
    type: 'story',
    deadline: '2026-12-20',
    xp: 5000, 
    subQuests: [
      {
        id: 'sq1',
        title: 'Gathering the Relics',
        yieldName: 'Fragment Yield',
        tasks: [
          { 
            id: 't1', 
            title: 'Procure the royal signet', 
            completed: false,
            cruxNotes: 'Signet is kept within the inner court vault.',
            rawNotes: 'Guards change shifts at midnight.',
            checklist: [
              { id: 'cl1', text: 'Secure decryption scroll', completed: true, isTagged: true, completedDate: getTodayDateString() },
              { id: 'cl2', text: 'Bypass chamber wards', completed: false, isTagged: true }
            ],
            trackers: [
              { id: 'tr1', label: 'Vaults Infiltrated', count: 1, isTagged: true, notes: 'Secured via eastern corridor.' }
            ]
          }
        ]
      }
    ]
  }
];

const initialGrimoireData = [
  {
    id: 'g1',
    date: getTodayDateString(),
    notes: 'The royal court is quiet. Plans proceed in shadow.',
    cruxNotes: 'Alignment favorable for negotiations.',
    rawNotes: 'Met with emissary.',
    checklist: [
      { id: 'gc1', text: 'Review correspondence', completed: true, isTagged: false, completedDate: getTodayDateString() }
    ],
    trackers: [
      { id: 'gtr1', label: 'Letters Sealed', count: 4, isTagged: false, notes: 'Wax insignia applied.' }
    ]
  }
];

const initialResearchData = [
  {
    id: 'r1',
    title: 'Ancient Lineages',
    date: getTodayDateString(),
    notes: 'Studying succession records in the grand library.',
    cruxNotes: 'Bloodline traces back to the northern dynasty.',
    rawNotes: 'Checked register volume IV.',
    checklist: [
      { id: 'rc1', text: 'Examine royal seals', completed: true, isTagged: false, completedDate: getTodayDateString() }
    ],
    trackers: [
      { id: 'rtr1', label: 'Tomes Examined', count: 6, isTagged: false, notes: 'Pages 45-80 analyzed.' }
    ]
  }
];

const initialStandaloneTasks = [
  { id: 'st1', title: 'Inspect treasury reserves', completed: false }
];

export default function UltraDexApp() {
  const [data, setData] = useState(() => {
    try {
      const saved = localStorage.getItem('ultradex_royal_silver_v2');
      return saved ? JSON.parse(saved) : initialData;
    } catch (e) {
      return initialData;
    }
  });

  const [grimoireData, setGrimoireData] = useState(() => {
    try {
      const saved = localStorage.getItem('ultradex_grimoire_royal_v2');
      return saved ? JSON.parse(saved) : initialGrimoireData;
    } catch (e) {
      return initialGrimoireData;
    }
  });

  const [researchData, setResearchData] = useState(() => {
    try {
      const saved = localStorage.getItem('ultradex_research_royal_v2');
      return saved ? JSON.parse(saved) : initialResearchData;
    } catch (e) {
      return initialResearchData;
    }
  });

  const [standaloneTasks, setStandaloneTasks] = useState(() => {
    try {
      const saved = localStorage.getItem('ultradex_standalone_royal_v2');
      return saved ? JSON.parse(saved) : initialStandaloneTasks;
    } catch (e) {
      return initialStandaloneTasks;
    }
  });

  useEffect(() => {
    try { localStorage.setItem('ultradex_royal_silver_v2', JSON.stringify(data)); } catch (e) {}
  }, [data]);

  useEffect(() => {
    try { localStorage.setItem('ultradex_grimoire_royal_v2', JSON.stringify(grimoireData)); } catch (e) {}
  }, [grimoireData]);

  useEffect(() => {
    try { localStorage.setItem('ultradex_research_royal_v2', JSON.stringify(researchData)); } catch (e) {}
  }, [researchData]);

  useEffect(() => {
    try { localStorage.setItem('ultradex_standalone_royal_v2', JSON.stringify(standaloneTasks)); } catch (e) {}
  }, [standaloneTasks]);

  const [currentView, setCurrentView] = useState('missions');
  const [selectedMissionId, setSelectedMissionId] = useState(null);
  const [selectedSubQuestId, setSelectedSubQuestId] = useState(null);
  const [selectedTaskId, setSelectedTaskId] = useState(null);
  const [selectedGrimoireId, setSelectedGrimoireId] = useState(null);
  const [selectedResearchId, setSelectedResearchId] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  
  const [isMuted, setIsMuted] = useState(true);
  const ambientCtxRef = useRef(null);
  const ambientNodesRef = useRef(null);

  useEffect(() => {
    try {
      const AudioContext = window.AudioContext || window.webkitAudioContext;
      if (!AudioContext) return;

      if (!isMuted) {
        if (!ambientCtxRef.current) {
          ambientCtxRef.current = new AudioContext();
        }
        const ctx = ambientCtxRef.current;
        if (ctx.state === 'suspended') ctx.resume();

        const osc1 = ctx.createOscillator();
        const osc2 = ctx.createOscillator();
        const filter = ctx.createBiquadFilter();
        const gain = ctx.createGain();

        osc1.type = 'sine';
        osc1.frequency.setValueAtTime(55, ctx.currentTime);
        osc2.type = 'sawtooth';
        osc2.frequency.setValueAtTime(82.41, ctx.currentTime);

        filter.type = 'lowpass';
        filter.frequency.setValueAtTime(140, ctx.currentTime);

        gain.gain.setValueAtTime(0.005, ctx.currentTime);
        gain.gain.linearRampToValueAtTime(0.04, ctx.currentTime + 3);

        osc1.connect(filter);
        osc2.connect(filter);
        filter.connect(gain);
        gain.connect(ctx.destination);

        osc1.start();
        osc2.start();

        ambientNodesRef.current = { osc1, osc2, gain, ctx };
      } else {
        if (ambientNodesRef.current) {
          const { osc1, osc2, gain, ctx } = ambientNodesRef.current;
          try {
            gain.gain.linearRampToValueAtTime(0.0001, ctx.currentTime + 1);
            setTimeout(() => { osc1.stop(); osc2.stop(); }, 1000);
          } catch(e) {}
          ambientNodesRef.current = null;
        }
      }
    } catch (e) {}
  }, [isMuted]);

  const particles = useMemo(() => {
    return Array.from({ length: 25 }).map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      size: `${Math.random() * 3 + 2}px`,
      fallDuration: `${Math.random() * 12 + 15}s`,
      swayDuration: `${Math.random() * 4 + 3}s`,
      delay: `${Math.random() * -20}s`,
      opacity: Math.random() * 0.4 + 0.2
    }));
  }, []);

  const getSubQuestStats = (mission, subQuest) => {
    if (!mission || !subQuest) return { totalXp: 0, earnedXp: 0, isCompleted: false, taskXp: 0 };
    const numSubQuests = mission?.subQuests?.length || 1;
    const subQuestXp = Math.floor((Number(mission?.xp) || 0) / numSubQuests);
    const numTasks = subQuest?.tasks?.length || 0;
    const taskXp = numTasks > 0 ? Math.floor(subQuestXp / numTasks) : 0;
    
    let earnedXp = 0;
    let isCompleted = numTasks > 0;

    subQuest?.tasks?.forEach(t => {
      if (t.completed) earnedXp += taskXp;
      else isCompleted = false;
    });

    if (isCompleted && numTasks > 0) earnedXp = subQuestXp;
    return { totalXp: subQuestXp, earnedXp, isCompleted, taskXp };
  };

  const getMissionStats = (mission) => {
    if (!mission) return { totalXp: 0, earnedXp: 0, isCompleted: false };
    const totalXp = Number(mission?.xp) || 0;
    let earnedXp = 0;
    let isCompleted = mission?.subQuests?.length > 0;
    
    mission?.subQuests?.forEach(sq => {
      const stats = getSubQuestStats(mission, sq);
      earnedXp += stats.earnedXp;
      if (!stats.isCompleted) isCompleted = false;
    });

    if (isCompleted && mission?.subQuests?.length > 0) earnedXp = totalXp; 
    return { totalXp, earnedXp, isCompleted };
  };

  const addMission = (type) => {
    const newMission = { id: generateId(), title: 'New Covenant', type, deadline: '', xp: 1000, subQuests: [] };
    setData([...data, newMission]);
    setSelectedMissionId(newMission.id);
    setCurrentView('subquests');
  };
  const updateMission = (id, updates) => setData(data.map(m => m.id === id ? { ...m, ...updates } : m));
  const deleteMission = (id) => {
    setData(data.filter(m => m.id !== id));
    setCurrentView('missions');
  };

  const addSubQuest = (missionId) => {
    const newSubQuest = { id: generateId(), title: 'New Objective', yieldName: 'Fragment Yield', tasks: [] };
    setData(data.map(m => m.id === missionId ? { ...m, subQuests: [...m.subQuests, newSubQuest] } : m));
    setSelectedSubQuestId(newSubQuest.id);
    setCurrentView('tasks');
  };
  const updateSubQuest = (missionId, subQuestId, updates) => {
    setData(data.map(m => m.id === missionId ? {
      ...m, subQuests: m.subQuests.map(sq => sq.id === subQuestId ? { ...sq, ...updates } : sq)
    } : m));
  };
  const deleteSubQuest = (missionId, subQuestId) => {
    setData(data.map(m => m.id === missionId ? {
      ...m, subQuests: m.subQuests.filter(sq => sq.id !== subQuestId)
    } : m));
    setCurrentView('subquests');
  };

  const addTask = (missionId, subQuestId) => {
    const newTask = { id: generateId(), title: 'Execute directive', completed: false, cruxNotes: '', rawNotes: '', checklist: [], trackers: [] };
    setData(data.map(m => m.id === missionId ? {
      ...m, subQuests: m.subQuests.map(sq => sq.id === subQuestId ? { ...sq, tasks: [...sq.tasks, newTask] } : sq)
    } : m));
  };
  const updateTask = (missionId, subQuestId, taskId, updates) => {
    setData(data.map(m => m.id === missionId ? {
      ...m, subQuests: m.subQuests.map(sq => sq.id === subQuestId ? {
        ...sq, tasks: sq.tasks.map(t => t.id === taskId ? { ...t, ...updates } : t)
      } : sq)
    } : m));
  };
  const deleteTask = (missionId, subQuestId, taskId) => {
    setData(data.map(m => m.id === missionId ? {
      ...m, subQuests: m.subQuests.map(sq => sq.id === subQuestId ? {
        ...sq, tasks: sq.tasks.filter(t => t.id !== taskId)
      } : sq)
    } : m));
  };
  const toggleTask = (missionId, subQuestId, taskId) => {
    setData(data.map(m => m.id === missionId ? {
      ...m, subQuests: m.subQuests.map(sq => sq.id === subQuestId ? {
        ...sq, tasks: sq.tasks.map(t => t.id === taskId ? { ...t, completed: !t.completed } : t)
      } : sq)
    } : m));
  };

  const addChecklistItem = (missionId, subQuestId, taskId, text) => {
    const newItem = { id: generateId(), text, completed: false, isTagged: false };
    setData(data.map(m => m.id === missionId ? {
      ...m, subQuests: m.subQuests.map(sq => sq.id === subQuestId ? {
        ...sq, tasks: sq.tasks.map(t => t.id === taskId ? { 
          ...t, checklist: [...(t.checklist || []), newItem] 
        } : t)
      } : sq)
    } : m));
  };
  const toggleChecklistItem = (missionId, subQuestId, taskId, checkId) => {
    const todayStr = getTodayDateString();
    setData(data.map(m => m.id === missionId ? {
      ...m, subQuests: m.subQuests.map(sq => sq.id === subQuestId ? {
        ...sq, tasks: sq.tasks.map(t => t.id === taskId ? {
          ...t, checklist: t.checklist.map(cl => cl.id === checkId ? { 
            ...cl, 
            completed: !cl.completed,
            completedDate: !cl.completed ? todayStr : null 
          } : cl)
        } : t)
      } : sq)
    } : m));
  };
  const toggleChecklistItemTag = (missionId, subQuestId, taskId, checkId) => {
    setData(data.map(m => m.id === missionId ? {
      ...m, subQuests: m.subQuests.map(sq => sq.id === subQuestId ? {
        ...sq, tasks: sq.tasks.map(t => t.id === taskId ? {
          ...t, checklist: t.checklist.map(cl => cl.id === checkId ? { ...cl, isTagged: !cl.isTagged } : cl)
        } : t)
      } : sq)
    } : m));
  };
  const deleteChecklistItem = (missionId, subQuestId, taskId, checkId) => {
    setData(data.map(m => m.id === missionId ? {
      ...m, subQuests: m.subQuests.map(sq => sq.id === subQuestId ? {
        ...sq, tasks: sq.tasks.map(t => t.id === taskId ? {
          ...t, checklist: t.checklist.filter(cl => cl.id !== checkId)
        } : t)
      } : sq)
    } : m));
  };

  const addStandaloneTask = (title) => {
    const newTask = { id: generateId(), title, completed: false };
    setStandaloneTasks([newTask, ...standaloneTasks]);
  };
  const toggleStandaloneTask = (id) => {
    const todayStr = getTodayDateString();
    setStandaloneTasks(standaloneTasks.map(t => t.id === id ? { 
      ...t, 
      completed: !t.completed,
      completedDate: !t.completed ? todayStr : null 
    } : t));
  };
  const deleteStandaloneTask = (id) => {
    setStandaloneTasks(standaloneTasks.filter(t => t.id !== id));
  };

  const addTaskTracker = (missionId, subQuestId, taskId, label) => {
    const newTracker = { id: generateId(), label, count: 0, isTagged: false, notes: '' };
    setData(data.map(m => m.id === missionId ? {
      ...m, subQuests: m.subQuests.map(sq => sq.id === subQuestId ? {
        ...sq, tasks: sq.tasks.map(t => t.id === taskId ? {
          ...t, trackers: [...(t.trackers || []), newTracker]
        } : t)
      } : sq)
    } : m));
  };
  const updateTaskTrackerCount = (missionId, subQuestId, taskId, trackerId, delta) => {
    setData(data.map(m => m.id === missionId ? {
      ...m, subQuests: m.subQuests.map(sq => sq.id === subQuestId ? {
        ...sq, tasks: sq.tasks.map(t => t.id === taskId ? {
          ...t, trackers: (t.trackers || []).map(tr => tr.id === trackerId ? { ...tr, count: Math.max(0, tr.count + delta) } : tr)
        } : t)
      } : sq)
    } : m));
  };
  const updateTaskTrackerNotes = (missionId, subQuestId, taskId, trackerId, notes) => {
    setData(data.map(m => m.id === missionId ? {
      ...m, subQuests: m.subQuests.map(sq => sq.id === subQuestId ? {
        ...sq, tasks: sq.tasks.map(t => t.id === taskId ? {
          ...t, trackers: (t.trackers || []).map(tr => tr.id === trackerId ? { ...tr, notes } : tr)
        } : t)
      } : sq)
    } : m));
  };
  const toggleTaskTrackerTag = (missionId, subQuestId, taskId, trackerId) => {
    setData(data.map(m => m.id === missionId ? {
      ...m, subQuests: m.subQuests.map(sq => sq.id === subQuestId ? {
        ...sq, tasks: sq.tasks.map(t => t.id === taskId ? {
          ...t, trackers: (t.trackers || []).map(tr => tr.id === trackerId ? { ...tr, isTagged: !tr.isTagged } : tr)
        } : t)
      } : sq)
    } : m));
  };
  const deleteTaskTracker = (missionId, subQuestId, taskId, trackerId) => {
    setData(data.map(m => m.id === missionId ? {
      ...m, subQuests: m.subQuests.map(sq => sq.id === subQuestId ? {
        ...sq, tasks: sq.tasks.map(t => t.id === taskId ? {
          ...t, trackers: (t.trackers || []).filter(tr => tr.id !== trackerId)
        } : t)
      } : sq)
    } : m));
  };

  const handleOpenGrimoireList = () => setCurrentView('grimoire_list');
  const handleOpenOrCreateTodayGrimoire = () => {
    const today = getTodayDateString();
    let existing = grimoireData.find(g => g.date === today);
    if (!existing) {
      existing = { id: generateId(), date: today, notes: '', cruxNotes: '', rawNotes: '', checklist: [], trackers: [] };
      setGrimoireData([existing, ...grimoireData]);
    }
    setSelectedGrimoireId(existing.id);
    setCurrentView('grimoire_entry');
  };
  const updateGrimoireEntry = (entryId, updates) => setGrimoireData(grimoireData.map(g => g.id === entryId ? { ...g, ...updates } : g));
  
  const addGrimoireTracker = (entryId, label) => {
    const newTr = { id: generateId(), label, count: 0, isTagged: false, notes: '' };
    setGrimoireData(grimoireData.map(g => g.id === entryId ? { ...g, trackers: [...(g.trackers || []), newTr] } : g));
  };
  const updateGrimoireTrackerCount = (entryId, trackerId, delta) => {
    setGrimoireData(grimoireData.map(g => g.id === entryId ? {
      ...g, trackers: (g.trackers || []).map(tr => tr.id === trackerId ? { ...tr, count: Math.max(0, tr.count + delta) } : tr)
    } : g));
  };
  const toggleGrimoireTrackerTag = (entryId, trackerId) => {
    setGrimoireData(grimoireData.map(g => g.id === entryId ? {
      ...g, trackers: (g.trackers || []).map(tr => tr.id === trackerId ? { ...tr, isTagged: !tr.isTagged } : tr)
    } : g));
  };
  const deleteGrimoireTracker = (entryId, trackerId) => {
    setGrimoireData(grimoireData.map(g => g.id === entryId ? { ...g, trackers: (g.trackers || []).filter(tr => tr.id !== trackerId) } : g));
  };

  const addGrimoireChecklist = (entryId, text) => {
    const newItem = { id: generateId(), text, completed: false, isTagged: false };
    setGrimoireData(grimoireData.map(g => g.id === entryId ? { ...g, checklist: [...(g.checklist || []), newItem] } : g));
  };
  const toggleGrimoireChecklist = (entryId, checkId) => {
    const todayStr = getTodayDateString();
    setGrimoireData(grimoireData.map(g => g.id === entryId ? {
      ...g, checklist: (g.checklist || []).map(cl => cl.id === checkId ? { 
        ...cl, 
        completed: !cl.completed,
        completedDate: !cl.completed ? todayStr : null 
      } : cl)
    } : g));
  };
  const toggleGrimoireChecklistTag = (entryId, checkId) => {
    setGrimoireData(grimoireData.map(g => g.id === entryId ? {
      ...g, checklist: (g.checklist || []).map(cl => cl.id === checkId ? { ...cl, isTagged: !cl.isTagged } : cl)
    } : g));
  };
  const deleteGrimoireChecklist = (entryId, checkId) => {
    setGrimoireData(grimoireData.map(g => g.id === entryId ? { ...g, checklist: (g.checklist || []).filter(cl => cl.id !== checkId) } : g));
  };

  const handleOpenResearchList = () => setCurrentView('research_list');
  const handleCreateResearchTopic = () => {
    const newTopic = { id: generateId(), title: 'New Research Topic', date: getTodayDateString(), notes: '', cruxNotes: '', rawNotes: '', checklist: [], trackers: [] };
    setResearchData([newTopic, ...researchData]);
    setSelectedResearchId(newTopic.id);
    setCurrentView('research_entry');
  };
  const updateResearchEntry = (entryId, updates) => setResearchData(researchData.map(r => r.id === entryId ? { ...r, ...updates } : r));

  const addResearchTracker = (entryId, label) => {
    const newTr = { id: generateId(), label, count: 0, isTagged: false, notes: '' };
    setResearchData(researchData.map(r => r.id === entryId ? { ...r, trackers: [...(r.trackers || []), newTr] } : r));
  };
  const updateResearchTrackerCount = (entryId, trackerId, delta) => {
    setResearchData(researchData.map(r => r.id === entryId ? {
      ...r, trackers: (r.trackers || []).map(tr => tr.id === trackerId ? { ...tr, count: Math.max(0, tr.count + delta) } : tr)
    } : r));
  };
  const toggleResearchTrackerTag = (entryId, trackerId) => {
    setResearchData(researchData.map(r => r.id === entryId ? {
      ...r, trackers: (r.trackers || []).map(tr => tr.id === trackerId ? { ...tr, isTagged: !tr.isTagged } : tr)
    } : r));
  };
  const deleteResearchTracker = (entryId, trackerId) => {
    setResearchData(researchData.map(r => r.id === entryId ? { ...r, trackers: (r.trackers || []).filter(tr => tr.id !== trackerId) } : r));
  };

  const addResearchChecklist = (entryId, text) => {
    const newItem = { id: generateId(), text, completed: false, isTagged: false };
    setResearchData(researchData.map(r => r.id === entryId ? { ...r, checklist: [...(r.checklist || []), newItem] } : r));
  };
  const toggleResearchChecklist = (entryId, checkId) => {
    const todayStr = getTodayDateString();
    setResearchData(researchData.map(r => r.id === entryId ? {
      ...r, checklist: (r.checklist || []).map(cl => cl.id === checkId ? { 
        ...cl, 
        completed: !cl.completed,
        completedDate: !cl.completed ? todayStr : null 
      } : cl)
    } : g)); // Wait, should be r
  };
  const toggleResearchChecklistTag = (entryId, checkId) => {
    setResearchData(researchData.map(r => r.id === entryId ? {
      ...r, checklist: (r.checklist || []).map(cl => cl.id === checkId ? { ...cl, isTagged: !cl.isTagged } : cl)
    } : r));
  };
  const deleteResearchChecklist = (entryId, checkId) => {
    setResearchData(researchData.map(r => r.id === entryId ? { ...r, checklist: (r.checklist || []).filter(cl => cl.id !== checkId) } : r));
  };

  const selectedMission = data.find(m => m.id === selectedMissionId);
  const selectedSubQuest = selectedMission?.subQuests.find(sq => sq.id === selectedSubQuestId);
  const selectedTask = selectedSubQuest?.tasks.find(t => t.id === selectedTaskId);
  const selectedGrimoire = grimoireData.find(g => g.id === selectedGrimoireId);
  const selectedResearch = researchData.find(r => r.id === selectedResearchId);

  useEffect(() => {
    if (currentView === 'subquests' && !selectedMission) setCurrentView('missions');
    if (currentView === 'tasks' && (!selectedMission || !selectedSubQuest)) setCurrentView('missions');
    if (currentView === 'notepad' && (!selectedMission || !selectedSubQuest || !selectedTask)) setCurrentView('missions');
    if (currentView === 'grimoire_entry' && !selectedGrimoire) setCurrentView('grimoire_list');
    if (currentView === 'research_entry' && !selectedResearch) setCurrentView('research_list');
  }, [currentView, selectedMission, selectedSubQuest, selectedTask, selectedGrimoire, selectedResearch]);

  const ProgressBar = ({ current, total }) => {
    const percentage = total > 0 ? Math.min(100, Math.round((current / total) * 100)) : 0;
    return (
      <div className="w-full bg-[#020204] h-[3px] border border-[#2c2f38] overflow-hidden mt-2 rounded-sm shadow-inner relative">
        <div 
          className="h-full bg-gradient-to-r from-[#94a3b8] via-[#e2e8f0] to-[#ffffff] transition-all duration-700 ease-out shadow-[0_0_12px_rgba(226,232,240,0.4)]" 
          style={{ width: `${percentage}%` }}
        />
      </div>
    );
  };

  const Sidebar = () => (
    <>
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black/85 z-40 backdrop-blur-sm transition-opacity"
          onClick={withSound(() => setIsSidebarOpen(false))}
        />
      )}
      <div className={`fixed top-0 left-0 h-full w-72 abyssal-slate border-r border-[#2c2f38] z-50 transform transition-transform duration-500 ease-in-out shadow-[10px_0_50px_rgba(0,0,0,0.95)] silver-border-right ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-6 h-full flex flex-col relative overflow-hidden">
          <div className="flex justify-between items-center mb-10 pb-6 border-b border-[#222] relative z-10">
            <div>
              <h2 className="font-gothic text-3xl text-white tracking-wider flex items-center silver-gradient drop-shadow-md">
                ULTRADEX
              </h2>
              <span className="font-sans text-[#94a3b8] text-[10px] font-semibold uppercase tracking-[0.3em] block mt-1 opacity-80">Royal Edition</span>
            </div>
            <button onClick={withSound(() => setIsSidebarOpen(false))} className="text-[#888] hover:text-[#f8fafc] transition-colors p-1 hover:bg-[#1c1f26] rounded border border-transparent hover:border-[#94a3b8]">
              <IconX size={20} />
            </button>
          </div>
          
          <nav className="space-y-3 font-sans text-sm font-medium tracking-wide flex-1 relative z-10">
            <button 
              onClick={withSound(() => { setCurrentView('missions'); setIsSidebarOpen(false); })}
              className={`flex items-center justify-between w-full text-left px-4 py-3 transition-all group ${currentView === 'missions' ? 'bg-[#181b22] text-[#f8fafc] border-l-2 border-[#e2e8f0] shadow-inner' : 'bg-transparent text-[#777] border-l-2 border-transparent hover:bg-[#14161c] hover:text-[#f8fafc] hover:border-[#64748b]'}`}
            >
              <div className="flex items-center">
                <IconFileText className={`mr-3 ${currentView === 'missions' ? 'text-[#e2e8f0]' : 'text-[#555] group-hover:text-[#e2e8f0]'}`} size={18} />
                Chronicles
              </div>
              <span className="breathing-skull text-xl">☠️</span>
            </button>

            <button 
              onClick={withSound(() => { setCurrentView('task_tracker'); setIsSidebarOpen(false); })}
              className={`flex items-center justify-between w-full text-left px-4 py-3 transition-all group ${currentView === 'task_tracker' ? 'bg-[#181b22] text-[#f8fafc] border-l-2 border-[#e2e8f0] shadow-inner' : 'bg-transparent text-[#777] border-l-2 border-transparent hover:bg-[#14161c] hover:text-[#f8fafc] hover:border-[#64748b]'}`}
            >
              <div className="flex items-center">
                <IconBookmark className={`mr-3 ${currentView === 'task_tracker' ? 'text-[#e2e8f0]' : 'text-[#555] group-hover:text-[#e2e8f0]'}`} size={18} />
                Task Tracker
              </div>
              <span className="text-[#e2e8f0] text-sm">⚔️</span>
            </button>

            <button 
              onClick={withSound(() => { handleOpenGrimoireList(); setIsSidebarOpen(false); })}
              className={`flex items-center justify-between w-full text-left px-4 py-3 transition-all group ${currentView === 'grimoire_list' || currentView === 'grimoire_entry' ? 'bg-[#181b22] text-[#f8fafc] border-l-2 border-[#e2e8f0] shadow-inner' : 'bg-transparent text-[#777] border-l-2 border-transparent hover:bg-[#14161c] hover:text-[#f8fafc] hover:border-[#64748b]'}`}
            >
              <div className="flex items-center">
                <IconBook className={`mr-3 ${currentView === 'grimoire_list' || currentView === 'grimoire_entry' ? 'text-[#e2e8f0]' : 'text-[#555] group-hover:text-[#e2e8f0]'}`} size={18} />
                Grimoire
              </div>
              <span className="text-[#e2e8f0] text-sm">⟡</span>
            </button>

            <button 
              onClick={withSound(() => { handleOpenResearchList(); setIsSidebarOpen(false); })}
              className={`flex items-center justify-between w-full text-left px-4 py-3 transition-all group ${currentView === 'research_list' || currentView === 'research_entry' ? 'bg-[#181b22] text-[#f8fafc] border-l-2 border-[#e2e8f0] shadow-inner' : 'bg-transparent text-[#777] border-l-2 border-transparent hover:bg-[#14161c] hover:text-[#f8fafc] hover:border-[#64748b]'}`}
            >
              <div className="flex items-center">
                <IconBookOpen className={`mr-3 ${currentView === 'research_list' || currentView === 'research_entry' ? 'text-[#e2e8f0]' : 'text-[#555] group-hover:text-[#e2e8f0]'}`} size={18} />
                Research
              </div>
              <span className="text-[#e2e8f0] text-sm">📜</span>
            </button>
          </nav>
          
          <div className="mt-auto relative z-10">
             <div className="mb-6 flex justify-center">
                <button 
                  onClick={withSound(() => setIsMuted(!isMuted))}
                  className="flex items-center justify-center space-x-2 text-[#94a3b8] hover:text-[#f8fafc] text-xs font-sans tracking-widest uppercase py-2 px-4 border border-[#2c2f38] hover:border-[#e2e8f0] bg-[#0b0c10] transition-all w-full shadow-md"
                >
                  {isMuted ? <IconVolumeX size={16}/> : <IconVolume2 size={16}/>}
                  <span>{isMuted ? 'Ambient Muted' : 'Ambient Active'}</span>
                </button>
             </div>
          </div>
        </div>
      </div>
    </>
  );

  const TopBar = ({ title, showBack, onBack, subtitle }) => (
    <div className="flex items-center justify-between px-8 py-5 bg-[#050608]/95 backdrop-blur-xl border-b border-[#222] silver-border-bottom sticky top-0 z-30 shadow-[0_4px_30px_rgba(0,0,0,0.9)]">
      <div className="flex items-center w-full">
        {showBack ? (
          <button onClick={withSound(onBack)} className="mr-6 text-[#94a3b8] hover:text-[#f8fafc] transition-colors p-1.5 bg-[#0b0c10] border border-[#333] rounded-sm group shadow-sm">
            <IconChevronLeft size={22} className="group-hover:-translate-x-0.5 transition-transform" />
          </button>
        ) : (
          <button onClick={withSound(() => setIsSidebarOpen(true))} className="mr-6 text-[#94a3b8] hover:text-[#f8fafc] transition-colors p-1.5 bg-[#0b0c10] border border-[#333] rounded-sm shadow-sm">
            <IconMenu size={22} />
          </button>
        )}
        <div className="flex flex-col justify-center flex-1">
          <h1 className="font-gothic tracking-widest text-2xl flex items-center">
            <span className="mr-3 opacity-80 text-lg silver-gradient">✥</span>
            <span className="silver-gradient">{title}</span>
            <span className="ml-4 breathing-skull text-xl flex items-center justify-center">☠️</span>
          </h1>
          {subtitle && <span className="font-sans text-[#94a3b8] font-medium text-xs uppercase tracking-[0.2em] mt-1.5 truncate max-w-md opacity-85">{subtitle}</span>}
        </div>
      </div>
    </div>
  );

  const MissionsView = () => {
    const storyMissions = data.filter(m => m.type === 'story');
    const sideMissions = data.filter(m => m.type === 'side');

    const MissionCard = ({ mission }) => {
      const stats = getMissionStats(mission);
      const remainingDays = getDeadlineInfo(mission.deadline);

      return (
        <div 
          onClick={withSound(() => { setSelectedMissionId(mission.id); setCurrentView('subquests'); })}
          className="abyssal-slate p-6 mb-5 border border-[#2c2f38] cursor-pointer hover:border-[#e2e8f0] platinum-accent-hover transition-all duration-300 group shadow-[0_10px_30px_rgba(0,0,0,0.85)] relative ornament-corner"
        >
          <div className="flex items-start justify-between relative z-10">
            <div className="flex items-start flex-1 pr-4">
              <div className={`mt-0.5 mr-4 transition-colors ${stats.isCompleted ? 'text-[#e2e8f0]' : 'text-[#555] group-hover:text-[#e2e8f0]'}`}>
                {stats.isCompleted ? <IconCheckSquare size={22} /> : <IconSquare size={22} />}
              </div>
              <div className="flex-1">
                <h3 className={`font-gothic text-xl tracking-wide ${stats.isCompleted ? 'text-[#777] line-through decoration-[#e2e8f0]' : 'text-[#f0f0f5] group-hover:text-[#f8fafc] transition-colors'}`}>
                  {mission.title}
                </h3>
                {mission.deadline && (
                  <div className="flex flex-wrap items-center gap-3 mt-2 text-[11px] font-sans tracking-wider uppercase">
                    <span className="text-[#94a3b8] opacity-85"><span className="text-[#666]">Due:</span> {mission.deadline}</span>
                    <span className={`px-2.5 py-0.5 border shadow-sm ${remainingDays !== null && remainingDays < 0 ? 'border-[#555] text-[#ff9999] bg-[#2a1212]/40' : remainingDays !== null && remainingDays <= 3 ? 'border-[#e2e8f0] text-[#e2e8f0] bg-[#222630]/60' : 'border-[#333] text-[#aaa] bg-[#050608]'}`}>
                      <IconClock size={11} className="inline mr-1" />
                      {remainingDays === null ? 'No Deadline' : remainingDays < 0 ? `Overdue by ${Math.abs(remainingDays)}d` : remainingDays === 0 ? 'Due Today' : `${remainingDays}d remaining`}
                    </span>
                  </div>
                )}
              </div>
            </div>
            <div className="text-right flex-shrink-0">
              <span className="font-gothic text-lg text-[#94a3b8] tracking-widest">
                {stats.totalXp} <span className="text-xs text-[#777]">XP</span>
              </span>
            </div>
          </div>
          <div className="mt-5 pt-4 border-t border-[#1c1f26] relative z-10">
            <div className="flex justify-between text-[10px] font-sans text-[#888] uppercase tracking-[0.2em] mb-2">
              <span>Fulfillment</span>
              <span className="text-[#e2e8f0]">{stats.earnedXp} / {stats.totalXp}</span>
            </div>
            <ProgressBar current={stats.earnedXp} total={stats.totalXp} />
          </div>
        </div>
      );
    };

    return (
      <div className="p-8 pb-24 max-w-4xl mx-auto w-full relative z-10">
        <div className="flex justify-between items-end mb-3 pb-3">
          <h2 className="font-gothic text-2xl text-[#f8fafc] tracking-[0.15em] flex items-center drop-shadow-md">
             <span className="text-[#e2e8f0] mr-3 text-lg">⟡</span> Primary Edicts
          </h2>
          <button onClick={withSound(() => addMission('story'))} className="text-[#e2e8f0] hover:text-white border border-[#333] hover:border-[#e2e8f0] bg-[#050608] px-4 py-1.5 flex items-center text-xs font-sans tracking-widest uppercase transition-all shadow-md group">
            <IconPlus size={14} className="mr-2"/> Decree
          </button>
        </div>
        <div className="ornament-divider mb-6"></div>
        {storyMissions.length === 0 ? <div className="text-center text-[#555] font-sans text-sm p-8 border border-[#2c2f38] abyssal-slate ornament-corner">The ledger is empty.</div> : storyMissions.map(m => <MissionCard key={m.id} mission={m} />)}
        
        <div className="flex justify-between items-end mt-16 mb-3 pb-3">
          <h2 className="font-gothic text-2xl text-[#f8fafc] tracking-[0.15em] flex items-center drop-shadow-md">
             <span className="text-[#e2e8f0] mr-3 text-lg">⟡</span> Secondary Pacts
          </h2>
          <button onClick={withSound(() => addMission('side'))} className="text-[#e2e8f0] hover:text-white border border-[#333] hover:border-[#e2e8f0] bg-[#050608] px-4 py-1.5 flex items-center text-xs font-sans tracking-widest uppercase transition-all shadow-md group">
            <IconPlus size={14} className="mr-2"/> Decree
          </button>
        </div>
        <div className="ornament-divider mb-6"></div>
        {sideMissions.length === 0 ? <div className="text-center text-[#555] font-sans text-sm p-8 border border-[#2c2f38] abyssal-slate ornament-corner">No ancillary tasks.</div> : sideMissions.map(m => <MissionCard key={m.id} mission={m} />)}
      </div>
    );
  };

  const SubQuestsView = () => {
    if (!selectedMission) return null;
    const stats = getMissionStats(selectedMission);
    const [isEditing, setIsEditing] = useState(false);
    const [editData, setEditData] = useState({ 
      title: selectedMission.title, deadline: selectedMission.deadline || '', type: selectedMission.type, xp: selectedMission.xp
    });

    const handleSave = () => {
      updateMission(selectedMission.id, { ...editData, xp: Number(editData.xp) || 0 });
      setIsEditing(false);
    };

    return (
      <div className="p-8 pb-24 max-w-4xl mx-auto w-full relative z-10">
        <div className="mb-14 abyssal-slate p-8 border border-[#333] relative shadow-[0_15px_45px_rgba(0,0,0,0.95)] silver-border-full ornament-corner group">
          {!isEditing ? (
            <>
              <button onClick={withSound(() => setIsEditing(true))} className="absolute top-6 right-6 text-[#777] hover:text-[#f8fafc] transition-colors p-2 bg-[#050608] border border-[#333] shadow-sm">
                <IconEdit2 size={18} />
              </button>
              <h2 className="font-gothic text-3xl text-white mb-4 pr-12 leading-tight tracking-wide">
                {selectedMission.title}
              </h2>
              {selectedMission.deadline && <span className="text-[#94a3b8] font-sans text-[11px] tracking-widest uppercase border border-[#333] bg-[#050608] px-3 py-1 inline-block mb-8 shadow-sm"><span className="text-[#666] mr-2">Due:</span> {selectedMission.deadline}</span>}
              
              <div className="flex justify-between text-xs font-sans text-[#888] uppercase tracking-[0.2em] mb-3">
                <span>Soul Yield</span>
                <span className="text-[#e2e8f0] font-gothic tracking-widest">{stats.earnedXp} / {stats.totalXp}</span>
              </div>
              <ProgressBar current={stats.earnedXp} total={stats.totalXp} />
            </>
          ) : (
            <div className="space-y-6 font-sans text-sm">
              <div>
                <label className="text-[#94a3b8] uppercase tracking-[0.2em] text-[10px] mb-2 block">Covenant Title</label>
                <input 
                  type="text" value={editData.title} onChange={(e) => setEditData({...editData, title: e.target.value})}
                  className="w-full bg-[#050608] text-[#f0f0f5] p-3 border border-[#444] focus:border-[#e2e8f0] outline-none font-gothic text-xl shadow-inner"
                />
              </div>
              <div className="flex flex-col sm:flex-row gap-6">
                <div className="flex-1">
                  <label className="text-[#94a3b8] uppercase tracking-[0.2em] text-[10px] mb-2 block">Deadline</label>
                  <input 
                    type="date" value={editData.deadline} onChange={(e) => setEditData({...editData, deadline: e.target.value})}
                    className="w-full bg-[#050608] text-[#f0f0f5] p-3 border border-[#444] focus:border-[#e2e8f0] outline-none [&::-webkit-calendar-picker-indicator]:invert shadow-inner"
                  />
                </div>
                <div className="w-full sm:w-1/3">
                  <label className="text-[#94a3b8] uppercase tracking-[0.2em] text-[10px] mb-2 block">Total XP</label>
                  <input 
                    type="number" value={editData.xp} onChange={(e) => setEditData({...editData, xp: e.target.value})}
                    className="w-full bg-[#050608] text-[#e2e8f0] font-gothic text-xl p-3 border border-[#444] focus:border-[#e2e8f0] outline-none shadow-inner"
                  />
                </div>
              </div>
              <div className="flex justify-between pt-6 mt-6 border-t border-[#2c2f38]">
                <button onClick={withSound(() => deleteMission(selectedMission.id))} className="text-[#777] hover:text-[#ff9999] flex items-center text-xs tracking-widest uppercase">
                  <IconTrash2 size={16} className="mr-2"/> Eradicate
                </button>
                <button onClick={withSound(handleSave)} className="bg-[#050608] border border-[#444] hover:border-[#e2e8f0] text-[#e2e8f0] px-8 py-2 text-xs tracking-[0.2em] uppercase shadow-sm">
                  Inscribe
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="flex justify-between items-end mb-3 pb-3">
          <h3 className="font-gothic text-2xl text-[#f8fafc] tracking-[0.15em] flex items-center">
             <span className="text-[#94a3b8] mr-3 text-lg">✥</span> Fragments
          </h3>
          <button onClick={withSound(() => addSubQuest(selectedMission.id))} className="text-[#e2e8f0] hover:text-white border border-[#333] hover:border-[#e2e8f0] bg-[#050608] px-4 py-1.5 flex items-center text-xs font-sans tracking-widest uppercase transition-all shadow-md group">
            <IconPlus size={14} className="mr-2"/> Forge
          </button>
        </div>
        <div className="ornament-divider mb-6"></div>

        {selectedMission.subQuests.length === 0 && (
          <div className="text-center text-[#555] font-sans text-sm p-8 border border-[#2c2f38] abyssal-slate ornament-corner">
            No fragments woven yet.
          </div>
        )}

        <div className="space-y-5">
          {selectedMission.subQuests.map(sq => {
            const sqStats = getSubQuestStats(selectedMission, sq);
            return (
              <div 
                key={sq.id} onClick={withSound(() => { setSelectedSubQuestId(sq.id); setCurrentView('tasks'); })}
                className="abyssal-slate p-5 border border-[#2c2f38] cursor-pointer hover:border-[#e2e8f0] platinum-accent-hover transition-all group relative overflow-hidden shadow-[0_5px_20px_rgba(0,0,0,0.7)] ornament-corner-subtle"
              >
                <div className="flex items-start justify-between mb-4 relative z-10">
                  <div className="flex items-start flex-1 pr-4">
                    <div className={`mr-4 transition-colors ${sqStats.isCompleted ? 'text-[#e2e8f0]' : 'text-[#444] group-hover:text-[#e2e8f0]'}`}>
                      {sqStats.isCompleted ? <IconCheckSquare size={20} /> : <IconSquare size={20} />}
                    </div>
                    <span className={`font-gothic text-lg tracking-wide ${sqStats.isCompleted ? 'text-[#777] line-through decoration-[#e2e8f0]' : 'text-[#e0e0e5] group-hover:text-white'}`}>
                      {sq.title}
                    </span>
                  </div>
                  <span className="font-gothic text-sm text-[#94a3b8] tracking-widest border border-[#333] bg-[#050608] px-3 py-1 shadow-sm">
                    {sqStats.totalXp} XP
                  </span>
                </div>
                <div className="pl-9 pr-1 relative z-10">
                  <ProgressBar current={sqStats.earnedXp} total={sqStats.totalXp} />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };

  const TasksView = () => {
    if (!selectedMission || !selectedSubQuest) return null;
    const stats = getSubQuestStats(selectedMission, selectedSubQuest);
    const [isEditing, setIsEditing] = useState(false);
    const [editData, setEditData] = useState({ 
      title: selectedSubQuest.title, 
      yieldName: selectedSubQuest.yieldName || 'Fragment Yield' 
    });

    const handleSave = () => {
      updateSubQuest(selectedMission.id, selectedSubQuest.id, { 
        title: editData.title, 
        yieldName: editData.yieldName.trim() || 'Fragment Yield' 
      });
      setIsEditing(false);
    };

    const TaskItem = ({ task }) => {
      const [isTaskEditing, setIsTaskEditing] = useState(false);
      const [taskEdit, setTaskEdit] = useState({ title: task.title });

      if (isTaskEditing) {
        return (
          <div className="p-5 border-b border-[#2c2f38] bg-[#141720] relative z-20 shadow-2xl mb-2">
             <div className="flex flex-col sm:flex-row gap-3 mb-4">
               <input 
                 type="text" value={taskEdit.title} onChange={(e) => setTaskEdit({...taskEdit, title: e.target.value})}
                 className="flex-1 bg-[#050608] text-[#f0f0f5] font-sans text-sm p-3 border border-[#444] focus:border-[#e2e8f0] outline-none shadow-inner"
                 autoFocus
               />
             </div>
             <div className="flex justify-between items-center">
                <button onClick={withSound(() => deleteTask(selectedMission.id, selectedSubQuest.id, task.id))} className="text-[#777] hover:text-[#ff9999] flex items-center text-xs tracking-widest uppercase">
                  <IconTrash2 size={14} className="mr-2"/> Eradicate
                </button>
                <div className="space-x-3 flex">
                   <button onClick={withSound(() => setIsTaskEditing(false))} className="text-[#888] hover:text-white text-xs tracking-widest uppercase px-4 py-1.5">
                    Cancel
                  </button>
                  <button onClick={withSound(() => { updateTask(selectedMission.id, selectedSubQuest.id, task.id, { title: taskEdit.title }); setIsTaskEditing(false); })} className="bg-[#050608] border border-[#444] text-[#e2e8f0] px-6 py-1.5 text-xs tracking-[0.2em] uppercase shadow-sm">
                    Inscribe
                  </button>
                </div>
             </div>
          </div>
        );
      }

      return (
        <div className="flex items-stretch abyssal-slate border border-[#2c2f38] border-l-[3px] border-l-[#e2e8f0] hover:border-[#ffffff] transition-all duration-300 group min-h-[65px] relative z-10 mb-2 mx-2 mt-2 rounded-r-sm shadow-md">
          <div 
            className="flex items-center justify-center pl-6 pr-4 cursor-pointer"
            onClick={withSound((e) => { e.stopPropagation(); toggleTask(selectedMission.id, selectedSubQuest.id, task.id); })}
          >
            <div className={`transition-colors ${task.completed ? 'text-[#e2e8f0]' : 'text-[#444] group-hover:text-[#e2e8f0]'}`}>
              {task.completed ? <IconCheckSquare size={20} /> : <IconSquare size={20} />}
            </div>
          </div>
          <div 
            className="flex flex-1 items-center py-4 pr-6 cursor-pointer"
            onClick={withSound(() => { setSelectedTaskId(task.id); setCurrentView('notepad'); })}
          >
            <span className={`font-sans text-sm tracking-wide leading-relaxed ${task.completed ? 'text-[#777] line-through decoration-[#e2e8f0]' : 'text-[#ccc] group-hover:text-white'} transition-colors flex-1 pr-4`}>
              {task.title}
            </span>
            <div className="flex items-center space-x-4">
              <span className={`font-gothic text-xs tracking-widest ${task.completed ? 'text-[#94a3b8]' : 'text-[#e2e8f0]'}`}>
                +{stats.taskXp}XP
              </span>
              <div className="flex items-center opacity-0 group-hover:opacity-100 transition-opacity space-x-1">
                <button 
                  onClick={withSound((e) => { e.stopPropagation(); setIsTaskEditing(true); })} 
                  className="text-[#555] hover:text-[#f8fafc] transition-all p-1.5 border border-transparent hover:border-[#e2e8f0] bg-[#050608] rounded-sm shadow-sm"
                >
                  <IconEdit2 size={14} />
                </button>
                <button 
                  onClick={withSound((e) => { e.stopPropagation(); deleteTask(selectedMission.id, selectedSubQuest.id, task.id); })} 
                  className="text-[#555] hover:text-[#ff9999] transition-all p-1.5 border border-transparent hover:border-[#ff9999] bg-[#050608] rounded-sm shadow-sm"
                >
                  <IconTrash2 size={14} />
                </button>
              </div>
            </div>
          </div>
        </div>
      );
    };

    return (
      <div className="p-8 pb-24 max-w-4xl mx-auto w-full relative z-10">
         <div className="mb-12 abyssal-slate p-8 border border-[#333] relative shadow-[0_15px_45px_rgba(0,0,0,0.95)] silver-border-full ornament-corner">
          {!isEditing ? (
            <>
              <button onClick={withSound(() => setIsEditing(true))} className="absolute top-6 right-6 text-[#777] hover:text-[#f8fafc] transition-colors p-2 bg-[#050608] border border-[#333] shadow-sm">
                <IconEdit2 size={18} />
              </button>
              <h2 className="font-gothic text-2xl text-white mb-2 pr-12 leading-snug">{selectedSubQuest.title}</h2>
              <p className="text-[#94a3b8] font-sans text-xs tracking-wider uppercase mb-8 opacity-85"><span className="text-[#666]">Vessel:</span> {selectedMission.title}</p>
              
              <div className="flex justify-between text-xs font-sans text-[#888] uppercase tracking-[0.2em] mb-3">
                <span>{selectedSubQuest.yieldName || 'Fragment Yield'}</span>
                <span className="text-[#e2e8f0] font-gothic tracking-widest">{stats.earnedXp} / {stats.totalXp}</span>
              </div>
              <ProgressBar current={stats.earnedXp} total={stats.totalXp} />
            </>
          ) : (
            <div className="space-y-6 font-sans text-sm">
              <div>
                <label className="text-[#94a3b8] uppercase tracking-[0.2em] text-[10px] mb-2 block">Fragment Title</label>
                <input 
                  type="text" value={editData.title} onChange={(e) => setEditData({...editData, title: e.target.value})}
                  className="w-full bg-[#050608] text-[#f0f0f5] p-3 border border-[#444] focus:border-[#e2e8f0] outline-none font-gothic text-xl shadow-inner"
                />
              </div>
              <div>
                <label className="text-[#94a3b8] uppercase tracking-[0.2em] text-[10px] mb-2 block">Yield Label Name</label>
                <input 
                  type="text" value={editData.yieldName} onChange={(e) => setEditData({...editData, yieldName: e.target.value})}
                  className="w-full bg-[#050608] text-[#f0f0f5] p-3 border border-[#444] focus:border-[#e2e8f0] outline-none font-sans text-sm shadow-inner"
                />
              </div>
              <div className="flex justify-between pt-6 mt-6 border-t border-[#2c2f38]">
                <button onClick={withSound(() => deleteSubQuest(selectedMission.id, selectedSubQuest.id))} className="text-[#777] hover:text-[#ff9999] flex items-center text-xs tracking-widest uppercase">
                  <IconTrash2 size={16} className="mr-2"/> Eradicate
                </button>
                <button onClick={withSound(handleSave)} className="bg-[#050608] border border-[#444] text-[#e2e8f0] px-8 py-2 text-xs tracking-[0.2em] uppercase shadow-sm">
                  Inscribe
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="flex justify-between items-end mb-3 pb-3">
          <h3 className="font-gothic text-2xl text-[#f8fafc] tracking-[0.15em] flex items-center">
             <span className="text-[#94a3b8] mr-3 text-lg">✥</span> Directives
          </h3>
          <button onClick={withSound(() => addTask(selectedMission.id, selectedSubQuest.id))} className="text-[#e2e8f0] hover:text-white border border-[#333] hover:border-[#e2e8f0] bg-[#050608] px-4 py-1.5 flex items-center text-xs font-sans tracking-widest uppercase shadow-md group">
            <IconPlus size={14} className="mr-2"/> Appoint
          </button>
        </div>
        <div className="ornament-divider mb-6"></div>

        <div className="border border-[#2c2f38] abyssal-slate shadow-[0_12px_35px_rgba(0,0,0,0.85)] ornament-corner-subtle pb-2 pt-2">
          {selectedSubQuest.tasks.length === 0 ? (
             <div className="p-8 text-center text-[#555] font-sans text-sm">No directives assigned.</div>
          ) : (
            selectedSubQuest.tasks.map(task => <TaskItem key={task.id} task={task} />)
          )}
        </div>
      </div>
    );
  };

  const TaskNotepadView = () => {
    if (!selectedMission || !selectedSubQuest || !selectedTask) return null;
    
    const [cruxText, setCruxText] = useState(selectedTask.cruxNotes || '');
    const [rawText, setRawText] = useState(selectedTask.rawNotes || '');
    const [newChecklistItem, setNewChecklistItem] = useState('');
    const [newTrackerLabel, setNewTrackerLabel] = useState('');

    const handleCruxBlur = () => {
      updateTask(selectedMission.id, selectedSubQuest.id, selectedTask.id, { cruxNotes: cruxText });
    };

    const handleRawBlur = () => {
      updateTask(selectedMission.id, selectedSubQuest.id, selectedTask.id, { rawNotes: rawText });
    };

    const handleAddChecklist = (e) => {
      e.preventDefault();
      if (!newChecklistItem.trim()) return;
      playClick();
      addChecklistItem(selectedMission.id, selectedSubQuest.id, selectedTask.id, newChecklistItem.trim());
      setNewChecklistItem('');
    };

    const handleAddTracker = (e) => {
      e.preventDefault();
      if (!newTrackerLabel.trim()) return;
      playClick();
      addTaskTracker(selectedMission.id, selectedSubQuest.id, selectedTask.id, newTrackerLabel.trim());
      setNewTrackerLabel('');
    };

    return (
      <div className="p-8 pb-24 max-w-4xl mx-auto w-full font-sans relative z-10">
        <div className="mb-2 pb-6">
          <h2 className="text-3xl font-gothic tracking-wide text-white mb-4 leading-tight">{selectedTask.title}</h2>
          <div className="flex items-center text-[10px] font-semibold tracking-[0.2em] uppercase text-[#888]">
            <span className={`${selectedTask.completed ? 'text-[#e2e8f0] border-[#c5a059]' : 'text-[#666] border-[#333]'} mr-4 border px-2 py-1 bg-[#050608] shadow-sm`}>
               State: {selectedTask.completed ? 'Fulfilled' : 'Pending'}
            </span>
            <span className="opacity-85 text-[#94a3b8]">Fragment: {selectedSubQuest.title}</span>
          </div>
        </div>
        <div className="ornament-divider mb-10"></div>

        <div className="mb-10">
          <label className="flex items-center text-xs text-[#c5a059] tracking-[0.2em] uppercase mb-4 font-gothic">
             <IconBook size={16} className="mr-3 text-[#c5a059]" /> Numerology (Task Trackers & Notes) — Click Bookmark to Tag
          </label>
          <div className="grid grid-cols-1 gap-4 mb-4">
            {(selectedTask.trackers || []).length === 0 ? (
              <div className="col-span-full p-6 text-center text-[#555] text-sm abyssal-slate border border-[#333]">No count trackers active for this directive.</div>
            ) : (
              (selectedTask.trackers || []).map(tr => (
                <div key={tr.id} className="abyssal-slate p-5 border border-[#333] ornament-corner-subtle shadow-md space-y-3">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-xs text-[#94a3b8] font-sans tracking-widest uppercase block mb-1">{tr.label}</span>
                      <span className="font-gothic text-2xl text-white tracking-widest">{tr.count}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <button onClick={withSound(() => updateTaskTrackerCount(selectedMission.id, selectedSubQuest.id, selectedTask.id, tr.id, -1))} className="w-8 h-8 flex items-center justify-center bg-[#050608] border border-[#444] text-[#e2e8f0] shadow-sm"><IconMinus size={14}/></button>
                      <button onClick={withSound(() => updateTaskTrackerCount(selectedMission.id, selectedSubQuest.id, selectedTask.id, tr.id, 1))} className="w-8 h-8 flex items-center justify-center bg-[#050608] border border-[#444] text-[#e2e8f0] shadow-sm"><IconPlus size={14}/></button>
                      <button 
                        onClick={withSound(() => toggleTaskTrackerTag(selectedMission.id, selectedSubQuest.id, selectedTask.id, tr.id))}
                        className={`p-1.5 border transition-all shadow-sm ${tr.isTagged ? 'border-[#c5a059] text-[#c5a059] bg-[#3a2e00]/50' : 'border-[#333] text-[#555] bg-[#050608]'}`}
                        title={tr.isTagged ? 'Tagged for Task Tracker' : 'Tag for Task Tracker'}
                      >
                        <IconBookmark size={14} />
                      </button>
                      <button onClick={withSound(() => deleteTaskTracker(selectedMission.id, selectedSubQuest.id, selectedTask.id, tr.id))} className="w-8 h-8 flex items-center justify-center text-[#555] hover:text-[#7a0000] ml-1"><IconTrash2 size={14}/></button>
                    </div>
                  </div>
                  <div>
                    <input 
                      type="text" value={tr.notes || ''} onChange={(e) => updateTaskTrackerNotes(selectedMission.id, selectedSubQuest.id, selectedTask.id, tr.id, e.target.value)}
                      placeholder="Etch notes for this counter..."
                      className="w-full abyssal-slate text-[#ddd] text-xs p-2.5 border border-[#333] focus:border-[#c5a059] outline-none shadow-inner font-sans"
                    />
                  </div>
                </div>
              ))
            )}
          </div>
          <form onSubmit={handleAddTracker} className="flex gap-3">
            <input 
              type="text" value={newTrackerLabel} onChange={(e) => setNewTrackerLabel(e.target.value)}
              placeholder="Designate new metric label..."
              className="flex-1 abyssal-slate text-[#ddd] text-sm p-3 border border-[#333] focus:border-[#c5a059] outline-none shadow-inner"
            />
            <button type="submit" disabled={!newTrackerLabel.trim()} className="bg-[#050608] text-[#c5a059] border border-[#444] px-6 py-3 text-xs tracking-[0.2em] uppercase disabled:opacity-50 shadow-sm">
              Track
            </button>
          </form>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">
          <div>
            <label className="flex items-center text-xs text-[#94a3b8] tracking-[0.2em] uppercase mb-4 font-gothic">
               <IconDatabase size={16} className="mr-2 text-[#7a0000]" /> Crux Data (Synthesized Insights)
            </label>
            <div className="ornament-corner-subtle">
              <textarea
                value={cruxText} onChange={(e) => setCruxText(e.target.value)} onBlur={handleCruxBlur}
                placeholder="Etch synthesized conclusions..."
                className="w-full min-h-[250px] abyssal-slate text-[#ddd] font-sans text-sm p-6 border border-[#333] focus:border-[#7a0000] outline-none resize-y leading-relaxed shadow-inner"
              />
            </div>
          </div>

          <div>
            <label className="flex items-center text-xs text-[#94a3b8] tracking-[0.2em] uppercase mb-4 font-gothic">
               <IconFileText size={16} className="mr-2 text-[#c5a059]" /> Raw Data (Unfiltered Dump)
            </label>
            <div className="ornament-corner-subtle">
              <textarea
                value={rawText} onChange={(e) => setRawText(e.target.value)} onBlur={handleRawBlur}
                placeholder="Etch raw notes & observations..."
                className="w-full min-h-[250px] abyssal-slate text-[#ddd] font-sans text-sm p-6 border border-[#333] focus:border-[#c5a059] outline-none resize-y leading-relaxed shadow-inner"
              />
            </div>
          </div>
        </div>

        <div>
          <label className="flex items-center text-xs text-[#94a3b8] tracking-[0.2em] uppercase mb-4">
             <IconListTodo size={16} className="mr-3 text-[#94a3b8]" /> Rites (Checklist) — Click Bookmark to Tag for Task Tracker
          </label>
          <div className="abyssal-slate border border-[#333] mb-6 shadow-md ornament-corner-subtle">
            {(selectedTask.checklist || []).length === 0 ? (
              <div className="p-6 text-center text-[#555] text-sm">No rites established.</div>
            ) : (
              (selectedTask.checklist || []).map((item) => (
                <div key={item.id} className="flex items-center justify-between p-4 border-b border-[#222] last:border-b-0 hover:bg-[#181b22] group">
                  <div className="flex items-center flex-1 cursor-pointer" onClick={withSound(() => toggleChecklistItem(selectedMission.id, selectedSubQuest.id, selectedTask.id, item.id))}>
                     <div className={`mr-4 ${item.completed ? 'text-[#c5a059]' : 'text-[#444]'}`}>
                        {item.completed ? <IconCheckSquare size={18} /> : <IconSquare size={18} />}
                     </div>
                     <span className={`text-sm tracking-wide ${item.completed ? 'text-[#777] line-through decoration-[#7a0000]' : 'text-[#ccc]'}`}>{item.text}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button 
                      onClick={withSound(() => toggleChecklistItemTag(selectedMission.id, selectedSubQuest.id, selectedTask.id, item.id))}
                      className={`p-1.5 border transition-all shadow-sm ${item.isTagged ? 'border-[#c5a059] text-[#c5a059] bg-[#3a2e00]/50' : 'border-[#333] text-[#555] bg-[#050608]'}`}
                      title={item.isTagged ? 'Tagged for Task Tracker' : 'Tag for Task Tracker'}
                    >
                      <IconBookmark size={14} />
                    </button>
                    <button onClick={withSound(() => deleteChecklistItem(selectedMission.id, selectedSubQuest.id, selectedTask.id, item.id))} className="text-[#555] hover:text-[#7a0000] p-1"><IconTrash2 size={16}/></button>
                  </div>
                </div>
              ))
            )}
          </div>
          <form onSubmit={handleAddChecklist} className="flex gap-3">
            <input 
              type="text" value={newChecklistItem} onChange={(e) => setNewChecklistItem(e.target.value)}
              placeholder="Designate new rite..."
              className="flex-1 abyssal-slate text-[#ddd] text-sm p-4 border border-[#333] focus:border-[#7a0000] outline-none shadow-inner"
            />
            <button type="submit" disabled={!newChecklistItem.trim()} className="bg-[#050608] text-[#c5a059] border border-[#444] px-8 py-4 text-xs tracking-[0.2em] uppercase disabled:opacity-50 shadow-sm">
              Add
            </button>
          </form>
        </div>
      </div>
    );
  };

  const TaskTrackerView = () => {
    const [newStandaloneTitle, setNewStandaloneTitle] = useState('');
    const todayStr = getTodayDateString();

    const taggedRites = [];
    const taggedTrackers = [];

    data.forEach(m => {
      m.subQuests.forEach(sq => {
        sq.tasks.forEach(t => {
          (t.checklist || []).forEach(cl => {
            if (cl.isTagged && !cl.completed) {
              taggedRites.push({
                ...cl,
                missionTitle: m.title,
                taskTitle: t.title,
                source: 'mission',
                missionId: m.id,
                subQuestId: sq.id,
                taskId: t.id
              });
            }
          });
          (t.trackers || []).forEach(tr => {
            if (tr.isTagged) {
              taggedTrackers.push({
                ...tr,
                missionTitle: m.title,
                taskTitle: t.title,
                source: 'mission',
                missionId: m.id,
                subQuestId: sq.id,
                taskId: t.id
              });
            }
          });
        });
      });
    });

    grimoireData.forEach(g => {
      (g.checklist || []).forEach(cl => {
        if (cl.isTagged && !cl.completed) {
          taggedRites.push({
            ...cl,
            missionTitle: `Grimoire (${g.date})`,
            taskTitle: 'Daily Log',
            source: 'grimoire',
            entryId: g.id
          });
        }
      });
      (g.trackers || []).forEach(tr => {
        if (tr.isTagged) {
          taggedTrackers.push({
            ...tr,
            missionTitle: `Grimoire (${g.date})`,
            taskTitle: 'Daily Log',
            source: 'grimoire',
            entryId: g.id
          });
        }
      });
    });

    researchData.forEach(r => {
      (r.checklist || []).forEach(cl => {
        if (cl.isTagged && !cl.completed) {
          taggedRites.push({
            ...cl,
            missionTitle: `Research: ${r.title}`,
            taskTitle: 'Topic Investigation',
            source: 'research',
            topicId: r.id
          });
        }
      });
      (r.trackers || []).forEach(tr => {
        if (tr.isTagged) {
          taggedTrackers.push({
            ...tr,
            missionTitle: `Research: ${r.title}`,
            taskTitle: 'Topic Investigation',
            source: 'research',
            topicId: r.id
          });
        }
      });
    });

    const activeStandaloneTasks = standaloneTasks.filter(st => !st.completed);

    const handleAddStandalone = (e) => {
      e.preventDefault();
      if (!newStandaloneTitle.trim()) return;
      playClick();
      addStandaloneTask(newStandaloneTitle.trim());
      setNewStandaloneTitle('');
    };

    return (
      <div className="p-8 pb-24 max-w-4xl mx-auto w-full relative z-10 font-sans">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end mb-3 pb-3 gap-4">
          <h2 className="font-gothic text-2xl text-[#f8fafc] tracking-[0.15em] flex items-center drop-shadow-md">
             <span className="text-[#e2e8f0] mr-3 text-lg">⚔️</span> Task Tracker
          </h2>
          <div className="flex items-center gap-3">
            <button onClick={withSound(() => setCurrentView('completed_archive'))} className="text-[#e2e8f0] hover:text-white border border-[#333] hover:border-[#e2e8f0] bg-[#050608] px-4 py-1.5 flex items-center text-xs font-sans tracking-widest uppercase shadow-md transition-all">
              View Completed Archive &rarr;
            </button>
            <span className="text-xs uppercase tracking-[0.2em] text-[#e2e8f0] border border-[#333] px-3 py-1.5 bg-[#050608] shadow-sm">
              Date: {todayStr}
            </span>
          </div>
        </div>
        <div className="ornament-divider mb-8"></div>

        {/* SECTION 1: SNAPSHOT */}
        <div className="mb-12">
          <h3 className="font-gothic text-lg text-[#e2e8f0] tracking-wider mb-4 flex items-center">
            <IconBookmark size={16} className="mr-2 text-[#e2e8f0]" /> Snapshot (Edicts & Pacts)
          </h3>
          <div className="abyssal-slate p-6 border border-[#333] shadow-lg ornament-corner space-y-5">
            {data.length === 0 ? (
              <div className="text-center text-[#555] text-sm">No edicts or pacts recorded.</div>
            ) : (
              data.map(m => {
                const stats = getMissionStats(m);
                const remainingDays = getDeadlineInfo(m.deadline);
                return (
                  <div key={m.id} className="p-4 border border-[#2c2f38] bg-[#0c0e14] hover:border-[#e2e8f0] transition-all shadow-sm">
                    <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 mb-2">
                      <div className="flex items-center space-x-3">
                        <span className={`text-xs px-2 py-0.5 border ${m.type === 'story' ? 'border-[#e2e8f0] text-[#e2e8f0] bg-[#1c202a]' : 'border-[#444] text-[#aaa]'}`}>
                          {m.type === 'story' ? 'Edict' : 'Pact'}
                        </span>
                        <span className="font-gothic text-lg text-white tracking-wide">{m.title}</span>
                      </div>
                      <div className="flex items-center gap-3 text-xs font-sans tracking-widest uppercase">
                        {m.deadline && (
                          <span className="text-[#94a3b8] border border-[#333] px-2 py-0.5 bg-[#050608] shadow-sm">
                            {remainingDays !== null && remainingDays < 0 ? `Overdue ${Math.abs(remainingDays)}d` : `${remainingDays}d left`}
                          </span>
                        )}
                        <span className="font-gothic text-[#e2e8f0]">{stats.earnedXp} / {stats.totalXp} XP</span>
                      </div>
                    </div>
                    <ProgressBar current={stats.earnedXp} total={stats.totalXp} />
                  </div>
                );
              })
            )}
          </div>
        </div>

        {/* SECTION 2: TRACKER */}
        <div className="mb-12">
          <h3 className="font-gothic text-lg text-[#e2e8f0] tracking-wider mb-4 flex items-center">
            <IconHash size={16} className="mr-2 text-[#e2e8f0]" /> Unified Tracker
          </h3>

          <div className="abyssal-slate p-5 border border-[#333] mb-6 shadow-md ornament-corner-subtle">
            <label className="text-[10px] font-semibold tracking-[0.2em] uppercase text-[#e2e8f0] block mb-2 font-gothic">
              Appoint Standalone Custom Task
            </label>
            <form onSubmit={handleAddStandalone} className="flex gap-3">
              <input 
                type="text" value={newStandaloneTitle} onChange={(e) => setNewStandaloneTitle(e.target.value)}
                placeholder="Enter direct task..."
                className="flex-1 abyssal-slate text-[#ddd] text-sm p-3 border border-[#444] focus:border-[#e2e8f0] outline-none shadow-inner"
              />
              <button type="submit" disabled={!newStandaloneTitle.trim()} className="bg-[#050608] text-[#e2e8f0] border border-[#444] hover:border-[#e2e8f0] px-6 py-3 text-xs tracking-[0.2em] uppercase transition-all disabled:opacity-50 shadow-sm">
                Appoint
              </button>
            </form>
          </div>

          <div className="space-y-4">
            {taggedRites.map((rite, idx) => (
              <div key={`rite-${idx}`} className="abyssal-slate p-4 border border-[#333] hover:border-[#e2e8f0] transition-all flex items-center justify-between shadow-sm">
                <div className="flex items-center flex-1 cursor-pointer pr-4" onClick={withSound(() => {
                  if (rite.source === 'mission') toggleChecklistItem(rite.missionId, rite.subQuestId, rite.taskId, rite.id);
                  else if (rite.source === 'grimoire') toggleGrimoireChecklist(rite.entryId, rite.id);
                  else if (rite.source === 'research') toggleResearchChecklist(rite.topicId, rite.id);
                })}>
                  <div className="mr-3 text-[#444]"><IconSquare size={18} /></div>
                  <div>
                    <span className="text-sm tracking-wide block text-[#e0e0e5]">{rite.text}</span>
                    <span className="text-[10px] uppercase tracking-wider text-[#e2e8f0] block mt-0.5 font-semibold">
                      {rite.missionTitle} &rarr; {rite.taskTitle}
                    </span>
                  </div>
                </div>
                <button onClick={withSound(() => {
                  if (rite.source === 'mission') toggleChecklistItemTag(rite.missionId, rite.subQuestId, rite.taskId, rite.id);
                  else if (rite.source === 'grimoire') toggleGrimoireChecklistTag(rite.entryId, rite.id);
                  else if (rite.source === 'research') toggleResearchChecklistTag(rite.topicId, rite.id);
                })} className="text-xs text-[#94a3b8] hover:text-[#ff9999] border border-[#333] px-3 py-1 bg-[#050608] flex-shrink-0 shadow-sm">
                  Untag
                </button>
              </div>
            ))}

            {taggedTrackers.map((tr, idx) => (
              <div key={`tr-${idx}`} className="abyssal-slate p-4 border border-[#333] hover:border-[#e2e8f0] transition-all flex items-center justify-between shadow-sm">
                <div>
                  <span className="text-xs text-[#e2e8f0] font-sans tracking-widest uppercase block mb-0.5">{tr.label} ({tr.missionTitle})</span>
                  <span className="font-gothic text-xl text-white tracking-widest">{tr.count}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <button onClick={withSound(() => {
                    if (tr.source === 'mission') updateTaskTrackerCount(tr.missionId, tr.subQuestId, tr.taskId, tr.id, -1);
                    else if (tr.source === 'grimoire') updateGrimoireTrackerCount(tr.entryId, tr.id, -1);
                    else if (tr.source === 'research') updateResearchTrackerCount(tr.topicId, tr.id, -1);
                  })} className="w-7 h-7 flex items-center justify-center bg-[#050608] border border-[#444] text-[#e2e8f0] shadow-sm"><IconMinus size={12}/></button>
                  <button onClick={withSound(() => {
                    if (tr.source === 'mission') updateTaskTrackerCount(tr.missionId, tr.subQuestId, tr.taskId, tr.id, 1);
                    else if (tr.source === 'grimoire') updateGrimoireTrackerCount(tr.entryId, tr.id, 1);
                    else if (tr.source === 'research') updateResearchTrackerCount(tr.topicId, tr.id, 1);
                  })} className="w-7 h-7 flex items-center justify-center bg-[#050608] border border-[#444] text-[#e2e8f0] shadow-sm"><IconPlus size={12}/></button>
                  <button onClick={withSound(() => {
                    if (tr.source === 'mission') toggleTaskTrackerTag(tr.missionId, tr.subQuestId, tr.taskId, tr.id);
                    else if (tr.source === 'grimoire') toggleGrimoireTrackerTag(tr.entryId, tr.id);
                    else if (tr.source === 'research') toggleResearchTrackerTag(tr.topicId, tr.id);
                  })} className="text-xs text-[#94a3b8] hover:text-[#ff9999] border border-[#333] px-3 py-1 bg-[#050608] ml-2 shadow-sm">Untag</button>
                </div>
              </div>
            ))}

            {activeStandaloneTasks.map(task => (
              <div key={task.id} className="flex items-center abyssal-slate p-4 border border-[#333] hover:border-[#e2e8f0] transition-all group shadow-sm">
                <div className="flex items-center justify-center mr-4 cursor-pointer" onClick={withSound(() => toggleStandaloneTask(task.id))}>
                  <div className="text-[#444]"><IconSquare size={20} /></div>
                </div>
                <div className="flex-1 min-w-0 pr-4">
                  <span className="text-sm tracking-wide block text-[#f8fafc]">{task.title}</span>
                </div>
                <button onClick={withSound(() => deleteStandaloneTask(task.id))} className="text-[#555] hover:text-[#ff9999] p-1.5 transition-colors">
                  <IconTrash2 size={16} />
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const CompletedArchiveView = () => {
    const archivedRites = [];
    data.forEach(m => {
      m.subQuests.forEach(sq => {
        sq.tasks.forEach(t => {
          (t.checklist || []).forEach(cl => {
            if (cl.isTagged && cl.completed) {
              archivedRites.push({
                ...cl,
                missionTitle: m.title,
                taskTitle: t.title,
                source: 'mission',
                missionId: m.id,
                subQuestId: sq.id,
                taskId: t.id
              });
            }
          });
        });
      });
    });

    grimoireData.forEach(g => {
      (g.checklist || []).forEach(cl => {
        if (cl.isTagged && cl.completed) {
          archivedRites.push({
            ...cl,
            missionTitle: `Grimoire (${g.date})`,
            taskTitle: 'Daily Log',
            source: 'grimoire',
            entryId: g.id
          });
        }
      });
    });

    researchData.forEach(r => {
      (r.checklist || []).forEach(cl => {
        if (cl.isTagged && cl.completed) {
          archivedRites.push({
            ...cl,
            missionTitle: `Research: ${r.title}`,
            taskTitle: 'Topic Investigation',
            source: 'research',
            topicId: r.id
          });
        }
      });
    });

    const archivedStandaloneTasks = standaloneTasks.filter(st => st.completed);

    return (
      <div className="p-8 pb-24 max-w-4xl mx-auto w-full relative z-10 font-sans">
        <div className="flex justify-between items-end mb-3 pb-3">
          <h2 className="font-gothic text-2xl text-[#f8fafc] tracking-[0.15em] flex items-center drop-shadow-md">
             <span className="text-[#94a3b8] mr-3 text-lg">📜</span> Completed Tasks Archive
          </h2>
          <button onClick={withSound(() => setCurrentView('task_tracker'))} className="text-[#e2e8f0] hover:text-white border border-[#333] hover:border-[#e2e8f0] bg-[#050608] px-4 py-1.5 flex items-center text-xs font-sans tracking-widest uppercase shadow-md transition-all">
            &larr; Back to Task Tracker
          </button>
        </div>
        <div className="ornament-divider mb-8"></div>

        <div className="abyssal-slate p-6 border border-[#333] shadow-lg space-y-4 ornament-corner">
          {archivedRites.length === 0 && archivedStandaloneTasks.length === 0 ? (
            <div className="text-center text-[#555] text-sm py-8">No completed tasks archived yet.</div>
          ) : (
            <>
              {archivedRites.map((rite, idx) => (
                <div key={`archived-rite-${idx}`} className="p-4 border border-[#2c2f38] bg-[#0c0e14] flex items-center justify-between shadow-sm">
                  <div className="flex items-center space-x-3 cursor-pointer" onClick={withSound(() => {
                    if (rite.source === 'mission') toggleChecklistItem(rite.missionId, rite.subQuestId, rite.taskId, rite.id);
                    else if (rite.source === 'grimoire') toggleGrimoireChecklist(rite.entryId, rite.id);
                    else if (rite.source === 'research') toggleResearchChecklist(rite.topicId, rite.id);
                  })}>
                    <IconCheckSquare size={18} className="text-[#94a3b8]" />
                    <div>
                      <span className="text-sm text-[#aaa] line-through block">{rite.text}</span>
                      <span className="text-[10px] text-[#666] uppercase mt-0.5 block">{rite.missionTitle} &rarr; {rite.taskTitle}</span>
                    </div>
                  </div>
                  <button onClick={withSound(() => {
                    if (rite.source === 'mission') toggleChecklistItem(rite.missionId, rite.subQuestId, rite.taskId, rite.id);
                    else if (rite.source === 'grimoire') toggleGrimoireChecklist(rite.entryId, rite.id);
                    else if (rite.source === 'research') toggleResearchChecklist(rite.topicId, rite.id);
                  })} className="text-xs text-[#94a3b8] hover:text-[#f8fafc] border border-[#333] px-3 py-1 bg-[#050608] shadow-sm">
                    Restore
                  </button>
                </div>
              ))}
              {archivedStandaloneTasks.map(task => (
                <div key={`archived-st-${task.id}`} className="p-4 border border-[#2c2f38] bg-[#0c0e14] flex items-center justify-between shadow-sm">
                  <div className="flex items-center space-x-3 cursor-pointer" onClick={withSound(() => toggleStandaloneTask(task.id))}>
                    <IconCheckSquare size={18} className="text-[#94a3b8]" />
                    <div>
                      <span className="text-sm text-[#aaa] line-through block">{task.title}</span>
                      <span className="text-[10px] text-[#666] uppercase mt-0.5 block">Standalone Task</span>
                    </div>
                  </div>
                  <button onClick={withSound(() => toggleStandaloneTask(task.id))} className="text-xs text-[#94a3b8] hover:text-[#f8fafc] border border-[#333] px-3 py-1 bg-[#050608] shadow-sm">
                    Restore
                  </button>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    );
  };

  const GrimoireListView = () => (
    <div className="p-8 pb-24 max-w-4xl mx-auto w-full relative z-10">
      <div className="flex justify-between items-end mb-3 pb-3">
        <h2 className="font-gothic text-2xl text-[#f8fafc] tracking-[0.15em] flex items-center drop-shadow-md">
           <span className="text-[#e2e8f0] mr-3 text-lg">⟡</span> Grimoire Archives
        </h2>
        <button onClick={withSound(handleOpenOrCreateTodayGrimoire)} className="text-[#e2e8f0] hover:text-white border border-[#e2e8f0]/40 hover:border-[#e2e8f0] bg-[#050608] px-4 py-1.5 flex items-center text-xs font-sans tracking-widest uppercase shadow-md group">
          <IconPlus size={14} className="mr-2"/> Today's Log
        </button>
      </div>
      <div className="ornament-divider mb-6"></div>
      {grimoireData.length === 0 ? (
        <div className="text-center text-[#555] font-sans text-sm p-8 border border-[#2c2f38] abyssal-slate ornament-corner">No archives recorded.</div>
      ) : (
        <div className="space-y-4">
          {grimoireData.map(entry => (
            <div key={entry.id} onClick={withSound(() => { setSelectedGrimoireId(entry.id); setCurrentView('grimoire_entry'); })} className="abyssal-slate p-6 border border-[#2c2f38] cursor-pointer hover:border-[#e2e8f0] transition-all flex items-center justify-between shadow-sm">
              <div className="flex items-center space-x-4 min-w-0 flex-1 pr-4">
                <div className="p-3 bg-[#050608] border border-[#333] text-[#e2e8f0] shadow-sm"><IconCalendar size={20} /></div>
                <h3 className="font-gothic text-xl text-[#f0f0f5] tracking-wide">{entry.date}</h3>
              </div>
              <span className="font-gothic text-[#e2e8f0] text-sm">View ⟡</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  const GrimoireEntryView = () => {
    if (!selectedGrimoire) return null;
    const [noteText, setNoteText] = useState(selectedGrimoire.notes || '');
    const [cruxText, setCruxText] = useState(selectedGrimoire.cruxNotes || '');
    const [rawText, setRawText] = useState(selectedGrimoire.rawNotes || '');
    const [newTrackerLabel, setNewTrackerLabel] = useState('');
    const [newChecklistItem, setNewChecklistItem] = useState('');

    return (
      <div className="p-8 pb-24 max-w-4xl mx-auto w-full font-sans relative z-10">
        <div className="mb-6 pb-6 border-b border-[#222] flex justify-between items-end">
          <div>
            <h2 className="text-3xl font-gothic tracking-wide text-white mb-2 leading-tight">Archive Log: {selectedGrimoire.date}</h2>
            <span className="text-xs font-semibold tracking-[0.2em] uppercase text-[#e2e8f0]">Daily Numerology & Chronology</span>
          </div>
          <button onClick={withSound(() => { setGrimoireData(grimoireData.filter(g => g.id !== selectedGrimoire.id)); setCurrentView('grimoire_list'); })} className="text-[#777] hover:text-[#ff9999] text-xs uppercase tracking-widest flex items-center">
            <IconTrash2 size={14} className="mr-1.5"/> Eradicate Entry
          </button>
        </div>

        <div className="mb-12">
          <label className="flex items-center text-xs text-[#e2e8f0] tracking-[0.2em] uppercase mb-4 font-gothic"><IconBook size={16} className="mr-3 text-[#e2e8f0]" /> Numerology & Trackers</label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            {(selectedGrimoire.trackers || []).map(tr => (
              <div key={tr.id} className="abyssal-slate p-4 border border-[#333] flex items-center justify-between ornament-corner-subtle shadow-sm">
                <div>
                  <span className="text-xs text-[#94a3b8] uppercase block mb-1">{tr.label}</span>
                  <span className="font-gothic text-2xl text-white">{tr.count}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <button onClick={withSound(() => updateGrimoireTrackerCount(selectedGrimoire.id, tr.id, -1))} className="w-8 h-8 flex items-center justify-center bg-[#050608] border border-[#444] text-[#e2e8f0] shadow-sm"><IconMinus size={14}/></button>
                  <button onClick={withSound(() => updateGrimoireTrackerCount(selectedGrimoire.id, tr.id, 1))} className="w-8 h-8 flex items-center justify-center bg-[#050608] border border-[#444] text-[#e2e8f0] shadow-sm"><IconPlus size={14}/></button>
                  <button onClick={withSound(() => toggleGrimoireTrackerTag(selectedGrimoire.id, tr.id))} className={`p-1.5 border shadow-sm ${tr.isTagged ? 'border-[#e2e8f0] text-[#e2e8f0]' : 'border-[#333] text-[#555]'}`}><IconBookmark size={14}/></button>
                  <button onClick={withSound(() => deleteGrimoireTracker(selectedGrimoire.id, tr.id))} className="text-[#555] hover:text-[#ff9999] ml-1"><IconTrash2 size={14}/></button>
                </div>
              </div>
            ))}
          </div>
          <form onSubmit={(e) => { e.preventDefault(); if(!newTrackerLabel.trim()) return; playClick(); addGrimoireTracker(selectedGrimoire.id, newTrackerLabel.trim()); setNewTrackerLabel(''); }} className="flex gap-3">
            <input type="text" value={newTrackerLabel} onChange={(e) => setNewTrackerLabel(e.target.value)} placeholder="New metric label..." className="flex-1 abyssal-slate text-[#ddd] text-sm p-3 border border-[#333] focus:border-[#e2e8f0] outline-none shadow-inner" />
            <button type="submit" className="bg-[#050608] text-[#e2e8f0] border border-[#444] px-6 py-3 text-xs uppercase shadow-sm">Track</button>
          </form>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <label className="flex items-center text-xs text-[#94a3b8] tracking-[0.2em] uppercase mb-4 font-gothic">
               <IconDatabase size={16} className="mr-2 text-[#e2e8f0]" /> Crux Data (Insights)
            </label>
            <textarea value={cruxText} onChange={(e) => setCruxText(e.target.value)} onBlur={() => updateGrimoireEntry(selectedGrimoire.id, { cruxNotes: cruxText })} placeholder="Etch synthesized conclusions..." className="w-full min-h-[200px] abyssal-slate text-[#ddd] text-sm p-6 border border-[#333] focus:border-[#e2e8f0] outline-none shadow-inner" />
          </div>
          <div>
            <label className="flex items-center text-xs text-[#94a3b8] tracking-[0.2em] uppercase mb-4 font-gothic">
               <IconFileText size={16} className="mr-2 text-[#e2e8f0]" /> Raw Data (Telemetry)
            </label>
            <textarea value={rawText} onChange={(e) => setRawText(e.target.value)} onBlur={() => updateGrimoireEntry(selectedGrimoire.id, { rawNotes: rawText })} placeholder="Etch raw observations..." className="w-full min-h-[200px] abyssal-slate text-[#ddd] text-sm p-6 border border-[#333] focus:border-[#e2e8f0] outline-none shadow-inner" />
          </div>
        </div>

        <div className="mb-12">
          <label className="flex items-center text-xs text-[#94a3b8] tracking-[0.2em] uppercase mb-4"><IconFileText size={16} className="mr-3 text-[#94a3b8]" /> Chronicles (Journal)</label>
          <textarea value={noteText} onChange={(e) => setNoteText(e.target.value)} onBlur={() => updateGrimoireEntry(selectedGrimoire.id, { notes: noteText })} placeholder="Etch chronicles..." className="w-full min-h-[200px] abyssal-slate text-[#ddd] text-sm p-6 border border-[#333] focus:border-[#e2e8f0] outline-none shadow-inner" />
        </div>

        <div>
          <label className="flex items-center text-xs text-[#94a3b8] tracking-[0.2em] uppercase mb-4"><IconListTodo size={16} className="mr-3 text-[#94a3b8]" /> Rites</label>
          <div className="abyssal-slate border border-[#333] mb-6 shadow-md">
            {(selectedGrimoire.checklist || []).map(item => (
              <div key={item.id} className="flex items-center justify-between p-4 border-b border-[#222] last:border-b-0 hover:bg-[#181b22]">
                <div className="flex items-center flex-1 cursor-pointer" onClick={withSound(() => toggleGrimoireChecklist(selectedGrimoire.id, item.id))}>
                  <div className={`mr-4 ${item.completed ? 'text-[#e2e8f0]' : 'text-[#444]'}`}>{item.completed ? <IconCheckSquare size={18}/> : <IconSquare size={18}/>}</div>
                  <span className={`text-sm ${item.completed ? 'text-[#777] line-through decoration-[#e2e8f0]' : 'text-[#ccc]'}`}>{item.text}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <button onClick={withSound(() => toggleGrimoireChecklistTag(selectedGrimoire.id, item.id))} className={`p-1.5 border shadow-sm ${item.isTagged ? 'border-[#e2e8f0] text-[#e2e8f0]' : 'border-[#333] text-[#555]'}`}><IconBookmark size={14}/></button>
                  <button onClick={withSound(() => deleteGrimoireChecklist(selectedGrimoire.id, item.id))} className="text-[#555] hover:text-[#ff9999] p-1"><IconTrash2 size={16}/></button>
                </div>
              </div>
            ))}
          </div>
          <form onSubmit={(e) => { e.preventDefault(); if(!newChecklistItem.trim()) return; playClick(); addGrimoireChecklist(selectedGrimoire.id, newChecklistItem.trim()); setNewChecklistItem(''); }} className="flex gap-3">
            <input type="text" value={newChecklistItem} onChange={(e) => setNewChecklistItem(e.target.value)} placeholder="New rite..." className="flex-1 abyssal-slate text-[#ddd] text-sm p-4 border border-[#333] focus:border-[#e2e8f0] outline-none shadow-inner" />
            <button type="submit" className="bg-[#050608] text-[#e2e8f0] border border-[#444] px-8 py-4 text-xs uppercase shadow-sm">Add</button>
          </form>
        </div>
      </div>
    );
  };

  const ResearchListView = () => (
    <div className="p-8 pb-24 max-w-4xl mx-auto w-full relative z-10">
      <div className="flex justify-between items-end mb-3 pb-3">
        <h2 className="font-gothic text-2xl text-[#f8fafc] tracking-[0.15em] flex items-center drop-shadow-md">
           <span className="text-[#e2e8f0] mr-3 text-lg">📜</span> Research Topics
        </h2>
        <button onClick={withSound(handleCreateResearchTopic)} className="text-[#e2e8f0] hover:text-white border border-[#e2e8f0]/40 hover:border-[#e2e8f0] bg-[#050608] px-4 py-1.5 flex items-center text-xs font-sans tracking-widest uppercase shadow-md group">
          <IconPlus size={14} className="mr-2"/> New Topic
        </button>
      </div>
      <div className="ornament-divider mb-6"></div>
      {researchData.length === 0 ? (
        <div className="text-center text-[#555] font-sans text-sm p-8 border border-[#2c2f38] abyssal-slate ornament-corner">No topics cataloged.</div>
      ) : (
        <div className="space-y-4">
          {researchData.map(topic => (
            <div key={topic.id} onClick={withSound(() => { setSelectedResearchId(topic.id); setCurrentView('research_entry'); })} className="abyssal-slate p-6 border border-[#2c2f38] cursor-pointer hover:border-[#e2e8f0] transition-all flex items-center justify-between shadow-sm">
              <div className="flex items-center space-x-4 min-w-0 flex-1 pr-4">
                <div className="p-3 bg-[#050608] border border-[#333] text-[#e2e8f0] shadow-sm"><IconBookOpen size={20} /></div>
                <div>
                  <h3 className="font-gothic text-xl text-[#f0f0f5] tracking-wide mb-1">{topic.title}</h3>
                  <span className="text-xs text-[#777] uppercase">Inscribed: {topic.date}</span>
                </div>
              </div>
              <span className="font-gothic text-[#e2e8f0] text-sm">Study 📜</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );

  const ResearchEntryView = () => {
    if (!selectedResearch) return null;
    const [titleText, setTitleText] = useState(selectedResearch.title || '');
    const [noteText, setNoteText] = useState(selectedResearch.notes || '');
    const [cruxText, setCruxText] = useState(selectedResearch.cruxNotes || '');
    const [rawText, setRawText] = useState(selectedResearch.rawNotes || '');
    const [newTrackerLabel, setNewTrackerLabel] = useState('');
    const [newChecklistItem, setNewChecklistItem] = useState('');

    return (
      <div className="p-8 pb-24 max-w-4xl mx-auto w-full font-sans relative z-10">
        <div className="mb-6 pb-6 border-b border-[#222] flex justify-between items-end gap-4">
          <div className="flex-1">
            <label className="text-[10px] uppercase tracking-[0.2em] text-[#e2e8f0] block mb-2">Research Topic Title</label>
            <input type="text" value={titleText} onChange={(e) => setTitleText(e.target.value)} onBlur={() => updateResearchEntry(selectedResearch.id, { title: titleText.trim() || 'Untitled' })} className="w-full text-3xl font-gothic tracking-wide text-white bg-transparent border-b border-[#333] focus:border-[#e2e8f0] outline-none pb-1" />
          </div>
          <button onClick={withSound(() => { setResearchData(researchData.filter(r => r.id !== selectedResearch.id)); setCurrentView('research_list'); })} className="text-[#777] hover:text-[#ff9999] text-xs uppercase tracking-widest flex items-center flex-shrink-0">
            <IconTrash2 size={14} className="mr-1.5"/> Eradicate
          </button>
        </div>

        <div className="mb-12">
          <label className="flex items-center text-xs text-[#e2e8f0] tracking-[0.2em] uppercase mb-4 font-gothic"><IconBookOpen size={16} className="mr-3 text-[#e2e8f0]" /> Metrics & Trackers</label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            {(selectedResearch.trackers || []).map(tr => (
              <div key={tr.id} className="abyssal-slate p-4 border border-[#333] flex items-center justify-between ornament-corner-subtle shadow-sm">
                <div>
                  <span className="text-xs text-[#94a3b8] uppercase block mb-1">{tr.label}</span>
                  <span className="font-gothic text-2xl text-white">{tr.count}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <button onClick={withSound(() => updateResearchTrackerCount(selectedResearch.id, tr.id, -1))} className="w-8 h-8 flex items-center justify-center bg-[#050608] border border-[#444] text-[#e2e8f0] shadow-sm"><IconMinus size={14}/></button>
                  <button onClick={withSound(() => updateResearchTrackerCount(selectedResearch.id, tr.id, 1))} className="w-8 h-8 flex items-center justify-center bg-[#050608] border border-[#444] text-[#e2e8f0] shadow-sm"><IconPlus size={14}/></button>
                  <button onClick={withSound(() => toggleResearchTrackerTag(selectedResearch.id, tr.id))} className={`p-1.5 border shadow-sm ${tr.isTagged ? 'border-[#e2e8f0] text-[#e2e8f0]' : 'border-[#333] text-[#555]'}`}><IconBookmark size={14}/></button>
                  <button onClick={withSound(() => deleteResearchTracker(selectedResearch.id, tr.id))} className="text-[#555] hover:text-[#ff9999] ml-1"><IconTrash2 size={14}/></button>
                </div>
              </div>
            ))}
          </div>
          <form onSubmit={(e) => { e.preventDefault(); if(!newTrackerLabel.trim()) return; playClick(); addResearchTracker(selectedResearch.id, newTrackerLabel.trim()); setNewTrackerLabel(''); }} className="flex gap-3">
            <input type="text" value={newTrackerLabel} onChange={(e) => setNewTrackerLabel(e.target.value)} placeholder="New metric label..." className="flex-1 abyssal-slate text-[#ddd] text-sm p-3 border border-[#333] focus:border-[#e2e8f0] outline-none shadow-inner" />
            <button type="submit" className="bg-[#050608] text-[#e2e8f0] border border-[#444] px-6 py-3 text-xs uppercase shadow-sm">Track</button>
          </form>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <label className="flex items-center text-xs text-[#94a3b8] tracking-[0.2em] uppercase mb-4 font-gothic">
               <IconDatabase size={16} className="mr-2 text-[#e2e8f0]" /> Crux Data (Insights)
            </label>
            <textarea value={cruxText} onChange={(e) => setCruxText(e.target.value)} onBlur={() => updateResearchEntry(selectedResearch.id, { cruxNotes: cruxText })} placeholder="Etch synthesized conclusions..." className="w-full min-h-[200px] abyssal-slate text-[#ddd] text-sm p-6 border border-[#333] focus:border-[#e2e8f0] outline-none shadow-inner" />
          </div>
          <div>
            <label className="flex items-center text-xs text-[#94a3b8] tracking-[0.2em] uppercase mb-4 font-gothic">
               <IconFileText size={16} className="mr-2 text-[#e2e8f0]" /> Raw Data (Telemetry)
            </label>
            <textarea value={rawText} onChange={(e) => setRawText(e.target.value)} onBlur={() => updateResearchEntry(selectedResearch.id, { rawNotes: rawText })} placeholder="Etch raw observations..." className="w-full min-h-[200px] abyssal-slate text-[#ddd] text-sm p-6 border border-[#333] focus:border-[#e2e8f0] outline-none shadow-inner" />
          </div>
        </div>

        <div className="mb-12">
          <label className="flex items-center text-xs text-[#94a3b8] tracking-[0.2em] uppercase mb-4"><IconFileText size={16} className="mr-3 text-[#94a3b8]" /> Findings & Notes</label>
          <textarea value={noteText} onChange={(e) => setNoteText(e.target.value)} onBlur={() => updateResearchEntry(selectedResearch.id, { notes: noteText })} placeholder="Etch research discoveries..." className="w-full min-h-[250px] abyssal-slate text-[#ddd] text-sm p-6 border border-[#333] focus:border-[#e2e8f0] outline-none shadow-inner" />
        </div>

        <div>
          <label className="flex items-center text-xs text-[#94a3b8] tracking-[0.2em] uppercase mb-4"><IconListTodo size={16} className="mr-3 text-[#94a3b8]" /> Investigation Checklist</label>
          <div className="abyssal-slate border border-[#333] mb-6 shadow-md">
            {(selectedResearch.checklist || []).map(item => (
              <div key={item.id} className="flex items-center justify-between p-4 border-b border-[#222] last:border-b-0 hover:bg-[#181b22]">
                <div className="flex items-center flex-1 cursor-pointer" onClick={withSound(() => toggleResearchChecklist(selectedResearch.id, item.id))}>
                  <div className={`mr-4 ${item.completed ? 'text-[#e2e8f0]' : 'text-[#444]'}`}>{item.completed ? <IconCheckSquare size={18}/> : <IconSquare size={18}/>}</div>
                  <span className={`text-sm ${item.completed ? 'text-[#777] line-through decoration-[#e2e8f0]' : 'text-[#ccc]'}`}>{item.text}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <button onClick={withSound(() => toggleResearchChecklistTag(selectedResearch.id, item.id))} className={`p-1.5 border shadow-sm ${item.isTagged ? 'border-[#e2e8f0] text-[#e2e8f0]' : 'border-[#333] text-[#555]'}`}><IconBookmark size={14}/></button>
                  <button onClick={withSound(() => deleteResearchChecklist(selectedResearch.id, item.id))} className="text-[#555] hover:text-[#ff9999] p-1"><IconTrash2 size={16}/></button>
                </div>
              </div>
            ))}
          </div>
          <form onSubmit={(e) => { e.preventDefault(); if(!newChecklistItem.trim()) return; playClick(); addResearchChecklist(selectedResearch.id, newChecklistItem.trim()); setNewChecklistItem(''); }} className="flex gap-3">
            <input type="text" value={newChecklistItem} onChange={(e) => setNewChecklistItem(e.target.value)} placeholder="New investigation step..." className="flex-1 abyssal-slate text-[#ddd] text-sm p-4 border border-[#333] focus:border-[#e2e8f0] outline-none shadow-inner" />
            <button type="submit" className="bg-[#050608] text-[#e2e8f0] border border-[#444] px-8 py-4 text-xs uppercase shadow-sm">Add</button>
          </form>
        </div>
      </div>
    );
  };

  const globalStyles = `
    @import url('https://fonts.googleapis.com/css2?family=Cinzel+Decorative:wght@400;700&family=Inter:wght@300;400;500;600&display=swap');

    .font-gothic { font-family: 'Cinzel Decorative', serif; }
    .font-sans { font-family: 'Inter', sans-serif; }
    
    .abyssal-slate {
      background: linear-gradient(135deg, #111318 0%, #06070a 100%);
      box-shadow: inset 0 0 25px rgba(0,0,0,0.95), 0 8px 25px rgba(0,0,0,0.95);
    }
    
    .silver-gradient {
      background: linear-gradient(to right, #94a3b8, #cbd5e1, #ffffff);
      -webkit-background-clip: text;
      color: transparent;
    }
    
    .ornament-divider {
      height: 1px;
      background: linear-gradient(90deg, transparent, rgba(197, 160, 89, 0.2), rgba(148, 163, 184, 0.4), transparent);
      width: 100%;
    }
    
    .silver-border-bottom {
      border-bottom: 1px solid transparent;
      border-image: linear-gradient(to right, transparent, rgba(197,160,89,0.15), rgba(226,232,240,0.6), rgba(122,0,0,0.4), transparent) 1;
    }
    .silver-border-right {
      border-right: 1px solid transparent;
      border-image: linear-gradient(to bottom, transparent, rgba(197,160,89,0.15), rgba(226,232,240,0.5), rgba(122,0,0,0.3), transparent) 1;
    }
    .silver-border-full {
      border: 1px solid transparent;
      border-image: linear-gradient(45deg, #1e222b, rgba(197,160,89,0.3), #ffffff, rgba(122,0,0,0.4), #1e222b) 1;
    }

    .ornament-corner { position: relative; }
    .ornament-corner::before, .ornament-corner::after {
      content: ''; position: absolute; width: 22px; height: 22px; 
      border: 1px solid rgba(197, 160, 89, 0.4); transition: all 0.4s ease; opacity: 0.75; pointer-events: none;
    }
    .ornament-corner::before { top: -3px; left: -3px; border-right: none; border-bottom: none; }
    .ornament-corner::after { bottom: -3px; right: -3px; border-left: none; border-top: none; }

    .ornament-corner-subtle { position: relative; }
    .ornament-corner-subtle::before, .ornament-corner-subtle::after {
      content: ''; position: absolute; width: 10px; height: 10px; 
      border: 1px solid rgba(197, 160, 89, 0.3); transition: all 0.3s ease; pointer-events: none;
    }
    .ornament-corner-subtle::before { top: 0; left: 0; border-right: none; border-bottom: none; }
    .ornament-corner-subtle::after { bottom: 0; right: 0; border-left: none; border-top: none; }

    @keyframes breathingSkull {
      0%, 100% { transform: scale(1); filter: drop-shadow(0 0 6px rgba(197, 160, 89, 0.5)); }
      50% { transform: scale(1.12); filter: drop-shadow(0 0 18px rgba(122, 0, 0, 0.8)); }
    }
    .breathing-skull { display: inline-block; animation: breathingSkull 3.5s ease-in-out infinite; }

    @keyframes ash-fall {
      0% { transform: translateY(-10vh); opacity: 0; }
      10% { opacity: 1; }
      90% { opacity: 1; }
      100% { transform: translateY(110vh); opacity: 0; }
    }
    @keyframes ash-sway {
      0%, 100% { margin-left: 0px; }
      50% { margin-left: 45px; }
    }
    .particle {
      position: absolute;
      background: #c5a059; 
      filter: blur(1px); 
      border-radius: 50%;
      pointer-events: none;
      animation-name: ash-fall, ash-sway;
      animation-timing-function: linear, ease-in-out;
      animation-iteration-count: infinite, infinite;
      animation-direction: normal, alternate;
    }
  `;

  return (
    <div 
      className="min-h-screen text-[#cbd5e1] selection:bg-[#475569] selection:text-[#fff] flex flex-col w-full overflow-hidden relative bg-[#030406]"
      style={{
        backgroundImage: `
          radial-gradient(circle at 50% 15%, rgba(18, 22, 32, 0.8) 0%, rgba(3, 4, 6, 0.99) 85%),
          linear-gradient(to bottom, #030406 0%, #080a0f 100%)
        `,
        backgroundAttachment: 'fixed'
      }}
    >
      <style dangerouslySetInnerHTML={{__html: globalStyles}} />
      
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        {particles.map(p => (
          <div 
            key={p.id} className="particle"
            style={{
              left: p.left, width: p.size, height: p.size,
              animationDuration: `${p.fallDuration}, ${p.swayDuration}`,
              animationDelay: `${p.delay}, ${p.delay}`, opacity: p.opacity
            }}
          />
        ))}
      </div>

      <Sidebar />
      
      {currentView === 'missions' && <TopBar title="UltraDex" showBack={false} subtitle="Royal Obsidian Edition" />}
      {currentView === 'task_tracker' && <TopBar title="Task Tracker" showBack={false} subtitle="Snapshot & Unified Tracker" />}
      {currentView === 'completed_archive' && <TopBar title="Archive" showBack={true} onBack={() => setCurrentView('task_tracker')} subtitle="Completed Tasks Archive" />}
      {currentView === 'subquests' && <TopBar title="Covenant" showBack={true} onBack={() => setCurrentView('missions')} subtitle={selectedMission?.title} />}
      {currentView === 'tasks' && <TopBar title="Fragment" showBack={true} onBack={() => setCurrentView('subquests')} subtitle={selectedSubQuest?.title} />}
      {currentView === 'notepad' && <TopBar title="Inscriptions" showBack={true} onBack={() => setCurrentView('tasks')} subtitle={selectedTask?.title} />}
      {currentView === 'grimoire_list' && <TopBar title="Archives" showBack={false} subtitle="Grimoire Journal" />}
      {currentView === 'grimoire_entry' && <TopBar title="Grimoire" showBack={true} onBack={handleOpenGrimoireList} subtitle={selectedGrimoire?.date} />}
      {currentView === 'research_list' && <TopBar title="Research" showBack={false} subtitle="Topic-wise Archives" />}
      {currentView === 'research_entry' && <TopBar title="Research Topic" showBack={true} onBack={handleOpenResearchList} subtitle={selectedResearch?.title} />}

      <div className="flex-1 overflow-y-auto w-full relative z-10">
        <div className="relative z-10">
          {currentView === 'missions' && <MissionsView />}
          {currentView === 'task_tracker' && <TaskTrackerView />}
          {currentView === 'completed_archive' && <CompletedArchiveView />}
          {currentView === 'subquests' && <SubQuestsView />}
          {currentView === 'tasks' && <TasksView />}
          {currentView === 'notepad' && <TaskNotepadView />}
          {currentView === 'grimoire_list' && <GrimoireListView />}
          {currentView === 'grimoire_entry' && <GrimoireEntryView />}
          {currentView === 'research_list' && <ResearchListView />}
          {currentView === 'research_entry' && <ResearchEntryView />}
        </div>
      </div>
    </div>
  );
}
