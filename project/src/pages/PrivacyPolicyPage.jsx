import { motion } from 'framer-motion';
import {
  ShieldCheck,
  Lock,
  Eye,
  Camera,
  FolderOpen,
  Bell,
  UserCheck,
  FileCheck2,
  Share2,
  ShieldAlert,
  UserCheck2,
  Edit3,
  Trash2,
  RefreshCw,
  Mail,
  CheckCircle2,
  ChevronRight,
  Info,
  Clock,
  Sparkles,
  ArrowRight,
  Copy,
  Check,
  Printer
} from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.08, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
};

export const PrivacyPolicyPage = () => {
  const [copied, setCopied] = useState(false);
  const contactEmail = 'coderzhiveai@gmail.com';

  const copyEmail = () => {
    navigator.clipboard.writeText(contactEmail);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const navSections = [
    { id: 'introduction', label: '1. Introduction' },
    { id: 'info-collected', label: '2. Information We Collect' },
    { id: 'how-we-use', label: '3. How We Use Information' },
    { id: 'data-sharing', label: '4. Data Sharing' },
    { id: 'data-security', label: '5. Data Security' },
    { id: 'your-rights', label: '6. Your Rights' },
    { id: 'policy-changes', label: '7. Policy Updates' },
    { id: 'contact-us', label: '8. Contact Us' },
  ];

  const highlights = [
    {
      icon: <Lock className="w-5 h-5 text-emerald-400" />,
      title: 'End-to-End Security',
      description: 'Encrypted communication between device and server.',
    },
    {
      icon: <Share2 className="w-5 h-5 text-blue-400" />,
      title: 'Zero Third-Party Sales',
      description: 'We never sell or commercialize your personal data.',
    },
    {
      icon: <Eye className="w-5 h-5 text-purple-400" />,
      title: 'Purpose-Driven Use',
      description: 'Data is strictly utilized for NGO attendance & identity verification.',
    },
    {
      icon: <Trash2 className="w-5 h-5 text-rose-400" />,
      title: 'User Control & Deletion',
      description: 'Full right to access, rectify, or request complete account erasure.',
    },
  ];

  return (
    <div className="min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      {/* ── Hero / Page Header ── */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        custom={0}
        className="text-center max-w-3xl mx-auto mb-12"
      >
        <motion.div
          className="inline-flex items-center justify-center w-20 h-20 rounded-3xl mb-6 mx-auto relative shadow-xl"
          style={{
            background: 'linear-gradient(135deg, #3b82f6, #10b981)',
            boxShadow: '0 16px 40px rgba(16, 185, 129, 0.25)',
          }}
          whileHover={{ scale: 1.06, rotate: 2 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <ShieldCheck className="w-10 h-10 text-white" />
          <motion.div
            className="absolute -top-1 -right-1 p-1 bg-amber-400 rounded-full text-slate-900 shadow"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3 }}
          >
            <Sparkles className="w-3.5 h-3.5" />
          </motion.div>
        </motion.div>

        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider mb-4 glass border border-[rgba(var(--border-color),0.3)] text-[rgb(var(--accent-color))]">
          <span>Official Legal Document</span>
          <span className="w-1 h-1 rounded-full bg-[rgb(var(--accent-color))]" />
          <span>MarkIn Attendance App</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold mb-4 bg-gradient-to-r from-blue-500 via-teal-500 to-green-500 bg-clip-text text-transparent">
          Privacy Policy
        </h1>

        <p className="text-base sm:text-lg text-[rgb(var(--text-secondary))] leading-relaxed max-w-2xl mx-auto mb-6">
          Your privacy and trust are paramount. This policy outlines how <strong>MarkIn</strong> collects, manages, safeguards, and protects your information across the NGO ecosystem.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-[rgb(var(--text-tertiary))]">
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg glass">
            <Clock className="w-4 h-4 text-blue-400" />
            <span>Effective Date: <strong>July 1, 2026</strong></span>
          </div>
          <div className="flex items-center gap-1.5 px-3 py-1 rounded-lg glass">
            <CheckCircle2 className="w-4 h-4 text-green-400" />
            <span>Status: <strong>Active & Compliant</strong></span>
          </div>
          <button
            onClick={() => window.print()}
            className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-lg glass hover:bg-[rgba(var(--bg-tertiary),0.6)] text-[rgb(var(--text-secondary))] transition-colors"
            title="Print or save as PDF"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Print Policy</span>
          </button>
        </div>
      </motion.div>

      {/* ── Key Highlights Strip ── */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        custom={1}
        className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12"
      >
        {highlights.map((item, idx) => (
          <motion.div
            key={idx}
            whileHover={{ y: -3, transition: { duration: 0.2 } }}
            className="glass rounded-2xl p-5 border border-[rgba(var(--border-color),0.25)] flex flex-col justify-between"
          >
            <div className="flex items-center gap-3 mb-2.5">
              <div className="p-2 rounded-xl bg-[rgba(var(--bg-tertiary),0.7)]">
                {item.icon}
              </div>
              <h4 className="font-bold text-sm text-[rgb(var(--text-primary))]">
                {item.title}
              </h4>
            </div>
            <p className="text-xs text-[rgb(var(--text-secondary))] leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        ))}
      </motion.div>

      {/* ── Main Layout with Quick Jump Navigation ── */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Sticky Table of Contents */}
        <motion.aside
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={2}
          className="lg:col-span-4 hidden lg:block"
        >
          <div className="sticky top-24 glass rounded-2xl p-6 border border-[rgba(var(--border-color),0.25)]">
            <h3 className="text-sm font-bold uppercase tracking-wider text-[rgb(var(--text-tertiary))] mb-4 flex items-center gap-2">
              <Info className="w-4 h-4 text-blue-500" />
              Table of Contents
            </h3>
            <nav className="space-y-1.5">
              {navSections.map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className="flex items-center justify-between px-3 py-2 rounded-xl text-xs font-medium text-[rgb(var(--text-secondary))] hover:text-[rgb(var(--text-primary))] hover:bg-[rgba(var(--bg-tertiary),0.5)] transition-all group"
                >
                  <span className="truncate">{item.label}</span>
                  <ChevronRight className="w-3.5 h-3.5 opacity-0 group-hover:opacity-100 group-hover:translate-x-0.5 transition-all text-blue-400" />
                </a>
              ))}
            </nav>

            <hr className="my-5 border-[rgba(var(--border-color),0.2)]" />

            <div className="bg-[rgba(var(--bg-tertiary),0.4)] rounded-xl p-3.5 text-xs text-[rgb(var(--text-secondary))]">
              <p className="font-semibold text-[rgb(var(--text-primary))] mb-1 flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-green-500" />
                Need Data Deletion?
              </p>
              <p className="mb-2 text-[11px] leading-relaxed">
                Looking to permanently remove your account and attendance records?
              </p>
              <Link
                to="/delete-account"
                className="inline-flex items-center gap-1 font-semibold text-rose-500 hover:text-rose-600 transition-colors"
              >
                Go to Deletion Request <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </motion.aside>

        {/* Right Policy Content */}
        <div className="lg:col-span-8 space-y-8">
          {/* Section 1: Introduction */}
          <motion.section
            id="introduction"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            className="glass rounded-2xl p-6 sm:p-8 border border-[rgba(var(--border-color),0.25)] relative overflow-hidden"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 font-bold">
                1
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[rgb(var(--text-primary))]">
                Introduction
              </h2>
            </div>
            <div className="space-y-3 text-sm sm:text-base text-[rgb(var(--text-secondary))] leading-relaxed">
              <p>
                Welcome to <strong>MarkIn</strong> (the &ldquo;App&rdquo;), a mobile and web attendance management solution specifically engineered for non-governmental organizations (NGOs), non-profits, volunteers, students, and educational initiatives.
              </p>
              <p>
                This Privacy Policy explains how we collect, use, process, and protect your personal and organizational information when you access or interact with our mobile application and related web dashboard services. By using MarkIn, you consent to the practices described in this policy.
              </p>
            </div>
          </motion.section>

          {/* Section 2: Information We Collect */}
          <motion.section
            id="info-collected"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            className="glass rounded-2xl p-6 sm:p-8 border border-[rgba(var(--border-color),0.25)]"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 font-bold">
                2
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[rgb(var(--text-primary))]">
                Information We Collect
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[rgb(var(--text-secondary))] mb-6 leading-relaxed">
              To provide reliable attendance logging and NGO administration services, we collect only necessary data categories:
            </p>

            <div className="space-y-4">
              {/* Item A: Personal Information */}
              <div className="p-4 rounded-xl bg-[rgba(var(--bg-tertiary),0.6)] border border-[rgba(var(--border-color),0.2)]">
                <div className="flex items-center gap-2.5 mb-2">
                  <UserCheck className="w-5 h-5 text-blue-500" />
                  <h3 className="font-bold text-sm sm:text-base text-[rgb(var(--text-primary))]">
                    Personal Information
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[rgb(var(--text-secondary))] leading-relaxed mb-3">
                  Collected for user identification, secure authentication, role-based authorization, and account management:
                </p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs sm:text-sm text-[rgb(var(--text-secondary))]">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    <span>Full Name & Username</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    <span>Registered Email Address</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    <span>Contact / Phone Number</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-500" />
                    <span>User Role (Student, Volunteer, Admin, NGO)</span>
                  </li>
                </ul>
              </div>

              {/* Item B: Device & Media Information */}
              <div className="p-4 rounded-xl bg-[rgba(var(--bg-tertiary),0.6)] border border-[rgba(var(--border-color),0.2)]">
                <div className="flex items-center gap-2.5 mb-2">
                  <Camera className="w-5 h-5 text-amber-500" />
                  <h3 className="font-bold text-sm sm:text-base text-[rgb(var(--text-primary))]">
                    Device & Media Information
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[rgb(var(--text-secondary))] leading-relaxed mb-3">
                  The App requests explicit device runtime permissions for multimedia and document features:
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-[rgb(var(--text-secondary))]">
                  <div className="flex items-start gap-2 bg-[rgba(var(--glass-bg),0.6)] p-3 rounded-lg">
                    <Camera className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-[rgb(var(--text-primary))]">Camera & Photo Gallery:</strong>
                      <p className="mt-0.5">Accessed via Expo Image Picker to enable profile photo uploads and verification snapshots.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 bg-[rgba(var(--glass-bg),0.6)] p-3 rounded-lg">
                    <FolderOpen className="w-4 h-4 text-amber-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <strong className="text-[rgb(var(--text-primary))]">File System & Documents:</strong>
                      <p className="mt-0.5">Accessed via Document Picker for uploading NGO certifications or related event documentation.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Item C: Notifications */}
              <div className="p-4 rounded-xl bg-[rgba(var(--bg-tertiary),0.6)] border border-[rgba(var(--border-color),0.2)]">
                <div className="flex items-center gap-2.5 mb-2">
                  <Bell className="w-5 h-5 text-purple-500" />
                  <h3 className="font-bold text-sm sm:text-base text-[rgb(var(--text-primary))]">
                    Push Notifications & Announcements
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[rgb(var(--text-secondary))] leading-relaxed">
                  With your permission, we may dispatch push notifications to inform you about real-time attendance confirmations, upcoming NGO event reminders, and crucial administrative announcements. You may toggle notifications off at any time in device settings.
                </p>
              </div>
            </div>
          </motion.section>

          {/* Section 3: How We Use Your Information */}
          <motion.section
            id="how-we-use"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            className="glass rounded-2xl p-6 sm:p-8 border border-[rgba(var(--border-color),0.25)]"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-purple-500/10 flex items-center justify-center text-purple-500 font-bold">
                3
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[rgb(var(--text-primary))]">
                How We Use Your Information
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[rgb(var(--text-secondary))] mb-6 leading-relaxed">
              Every data point collected serves an explicit operational purpose for the community:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                {
                  icon: <FileCheck2 className="w-5 h-5 text-blue-400" />,
                  title: 'Accurate Attendance Records',
                  desc: 'To log, timestamp, and maintain tamper-proof records of student and volunteer event attendance.',
                },
                {
                  icon: <UserCheck2 className="w-5 h-5 text-emerald-400" />,
                  title: 'Identity Verification',
                  desc: 'To authenticate identities and grant appropriate role-based privileges within the NGO ecosystem.',
                },
                {
                  icon: <Bell className="w-5 h-5 text-purple-400" />,
                  title: 'Critical Communications',
                  desc: 'To deliver operational updates, schedule changes, and essential administrative notices.',
                },
                {
                  icon: <Sparkles className="w-5 h-5 text-amber-400" />,
                  title: 'Performance & App Enhancement',
                  desc: 'To analyze app reliability, squash bugs, and refine user experience across mobile and web platforms.',
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="p-4 rounded-xl bg-[rgba(var(--bg-tertiary),0.5)] border border-[rgba(var(--border-color),0.15)] flex items-start gap-3"
                >
                  <div className="p-2 rounded-lg bg-[rgba(var(--glass-bg),0.8)] flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="font-semibold text-sm text-[rgb(var(--text-primary))] mb-1">
                      {item.title}
                    </h4>
                    <p className="text-xs text-[rgb(var(--text-secondary))] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </motion.section>

          {/* Section 4: Data Sharing and Disclosure */}
          <motion.section
            id="data-sharing"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            className="glass rounded-2xl p-6 sm:p-8 border border-[rgba(var(--border-color),0.25)]"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-cyan-500/10 flex items-center justify-center text-cyan-500 font-bold">
                4
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[rgb(var(--text-primary))]">
                Data Sharing and Disclosure
              </h2>
            </div>

            <div className="p-5 rounded-2xl bg-gradient-to-r from-blue-500/10 to-teal-500/10 border border-blue-500/20 mb-5">
              <div className="flex items-center gap-2.5 text-blue-500 font-bold text-base mb-2">
                <CheckCircle2 className="w-5 h-5 text-green-500" />
                Zero Commercial Monetization
              </div>
              <p className="text-sm text-[rgb(var(--text-secondary))] leading-relaxed">
                <strong>We do not sell, rent, trade, or share your personal data with any third-party advertisers or marketing agencies.</strong>
              </p>
            </div>

            <p className="text-sm sm:text-base text-[rgb(var(--text-secondary))] leading-relaxed">
              Your data is strictly restricted to internal NGO management workflows and is accessible exclusively by designated, authorized administrators and coordinators responsible for attendance oversight.
            </p>
          </motion.section>

          {/* Section 5: Data Security */}
          <motion.section
            id="data-security"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            className="glass rounded-2xl p-6 sm:p-8 border border-[rgba(var(--border-color),0.25)]"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center text-emerald-500 font-bold">
                5
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[rgb(var(--text-primary))]">
                Data Security
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[rgb(var(--text-secondary))] mb-6 leading-relaxed">
              We implement comprehensive organizational and technical security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="p-4 rounded-xl bg-[rgba(var(--bg-tertiary),0.6)] flex items-start gap-3">
                <Lock className="w-5 h-5 text-emerald-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-sm font-semibold text-[rgb(var(--text-primary))] mb-1">
                    Encrypted Transmission
                  </h4>
                  <p className="text-xs text-[rgb(var(--text-secondary))] leading-relaxed">
                    All network traffic between the MarkIn mobile app and backend servers is encrypted using industry-standard TLS/HTTPS protocols.
                  </p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-[rgba(var(--bg-tertiary),0.6)] flex items-start gap-3">
                <ShieldAlert className="w-5 h-5 text-blue-400 mt-1 flex-shrink-0" />
                <div>
                  <h4 className="text-sm font-semibold text-[rgb(var(--text-primary))] mb-1">
                    Role-Based Access Control
                  </h4>
                  <p className="text-xs text-[rgb(var(--text-secondary))] leading-relaxed">
                    Access to stored user records is strictly restricted to verified administrators via multi-level credential validation.
                  </p>
                </div>
              </div>
            </div>
          </motion.section>

          {/* Section 6: Your Rights */}
          <motion.section
            id="your-rights"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            className="glass rounded-2xl p-6 sm:p-8 border border-[rgba(var(--border-color),0.25)]"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-rose-500/10 flex items-center justify-center text-rose-500 font-bold">
                6
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[rgb(var(--text-primary))]">
                Your Rights
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[rgb(var(--text-secondary))] mb-6 leading-relaxed">
              We respect your autonomy over your personal data. Under our privacy framework and applicable data protection regulations, you hold the following rights:
            </p>

            <div className="space-y-3 mb-6">
              <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[rgba(var(--bg-tertiary),0.5)]">
                <Eye className="w-5 h-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-sm text-[rgb(var(--text-primary))] block">Right of Access</strong>
                  <span className="text-xs text-[rgb(var(--text-secondary))]">
                    Request a copy of the personal information and attendance history we hold about you.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[rgba(var(--bg-tertiary),0.5)]">
                <Edit3 className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-sm text-[rgb(var(--text-primary))] block">Right to Rectification</strong>
                  <span className="text-xs text-[rgb(var(--text-secondary))]">
                    Request prompt corrections or updates to any inaccurate, outdated, or incomplete data.
                  </span>
                </div>
              </div>

              <div className="flex items-start gap-3.5 p-3.5 rounded-xl bg-[rgba(var(--bg-tertiary),0.5)]">
                <Trash2 className="w-5 h-5 text-rose-400 mt-0.5 flex-shrink-0" />
                <div>
                  <strong className="text-sm text-[rgb(var(--text-primary))] block">Right to Erasure (Account Deletion)</strong>
                  <span className="text-xs text-[rgb(var(--text-secondary))]">
                    Request the permanent deletion of your profile, account, and all associated personal data (subject to legal/administrative retention guidelines).
                  </span>
                </div>
              </div>
            </div>

            {/* Direct Link to Delete Account page */}
            <div className="p-4 rounded-xl border border-rose-500/20 bg-rose-500/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div>
                <h4 className="text-sm font-bold text-rose-500">Need to delete your account?</h4>
                <p className="text-xs text-[rgb(var(--text-secondary))]">
                  Visit our dedicated account deletion portal for instructions and one-click submission.
                </p>
              </div>
              <Link
                to="/delete-account"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-red-500 to-rose-600 shadow-md hover:shadow-lg transition-all focus-glow flex-shrink-0"
              >
                <Trash2 className="w-3.5 h-3.5" />
                Delete Account Page
              </Link>
            </div>
          </motion.section>

          {/* Section 7: Changes to This Privacy Policy */}
          <motion.section
            id="policy-changes"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            className="glass rounded-2xl p-6 sm:p-8 border border-[rgba(var(--border-color),0.25)]"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-amber-500/10 flex items-center justify-center text-amber-500 font-bold">
                7
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[rgb(var(--text-primary))]">
                Changes to This Privacy Policy
              </h2>
            </div>

            <div className="flex items-start gap-4 text-sm sm:text-base text-[rgb(var(--text-secondary))] leading-relaxed">
              <RefreshCw className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
              <p>
                We may update our Privacy Policy periodically to reflect enhancements in our application features, legal requirements, or organizational protocols. We will notify you of any changes by posting the updated Privacy Policy on this page and updating the &ldquo;Effective Date&rdquo; at the top. We encourage you to review this policy periodically.
              </p>
            </div>
          </motion.section>

          {/* Section 8: Contact Us */}
          <motion.section
            id="contact-us"
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            className="glass rounded-2xl p-6 sm:p-8 border border-[rgba(var(--border-color),0.25)]"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-blue-500/10 flex items-center justify-center text-blue-500 font-bold">
                8
              </div>
              <h2 className="text-xl sm:text-2xl font-bold text-[rgb(var(--text-primary))]">
                Contact Us
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[rgb(var(--text-secondary))] mb-6 leading-relaxed">
              If you have any questions, concerns, or requests regarding this Privacy Policy or our data handling practices, please reach out to our dedicated NGO support and development team:
            </p>

            <div className="p-5 rounded-2xl bg-[rgba(var(--bg-tertiary),0.6)] border border-[rgba(var(--border-color),0.2)] flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-blue-500/10 text-blue-500">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <p className="text-xs font-semibold text-[rgb(var(--text-tertiary))] uppercase">Official Support Email</p>
                  <p className="text-base font-mono font-bold text-[rgb(var(--text-primary))]">{contactEmail}</p>
                </div>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  onClick={copyEmail}
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl glass text-xs font-semibold hover:bg-[rgba(var(--bg-tertiary),0.8)] transition-all focus-glow"
                  title="Copy email to clipboard"
                >
                  {copied ? <Check className="w-4 h-4 text-green-500" /> : <Copy className="w-4 h-4" />}
                  <span>{copied ? 'Copied!' : 'Copy'}</span>
                </button>

                <a
                  href={`mailto:${contactEmail}?subject=${encodeURIComponent('Privacy Policy Inquiry — MarkIn NGO App')}`}
                  className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl text-xs font-bold text-white bg-gradient-to-r from-blue-500 to-indigo-600 shadow-md hover:shadow-lg transition-all focus-glow"
                >
                  <Mail className="w-4 h-4" />
                  <span>Send Email</span>
                </a>
              </div>
            </div>
          </motion.section>
        </div>
      </div>
    </div>
  );
};
