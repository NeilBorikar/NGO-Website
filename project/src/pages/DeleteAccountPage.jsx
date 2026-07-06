import { motion } from 'framer-motion';
import { Mail, AlertTriangle, CheckCircle, Info, FileText, User, Hash, MessageSquare, Trash2, ShieldAlert } from 'lucide-react';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.12, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  }),
};

const steps = [
  {
    icon: User,
    title: 'Your Full Name',
    description: 'Write your full name as registered in the NGO Attendance app.',
    example: 'e.g., "John Doe"',
  },
  {
    icon: Hash,
    title: 'Registration Number',
    description: 'Include your unique registration/employee number used to log in.',
    example: 'e.g., "REG-20241023"',
  },
  {
    icon: Mail,
    title: 'Registered Email Address',
    description: 'Mention the email address linked to your account.',
    example: 'e.g., "john.doe@example.com"',
  },
  {
    icon: MessageSquare,
    title: 'Reason for Deletion',
    description: 'Briefly explain why you want to delete your account and all associated data.',
    example: 'e.g., "I am no longer associated with the organization."',
  },
];

const warnings = [
  'All your attendance records will be permanently erased.',
  'Your profile and personal information will be removed.',
  'This action is irreversible — data cannot be recovered.',
  'Your account access will be revoked immediately upon deletion.',
];

export const DeleteAccountPage = () => {
  const email = 'coderzhiveai@gmail.com';
  const subject = encodeURIComponent('Account Deletion Request — NGO Attendance App');
  const body = encodeURIComponent(
    `Hello NGO Attendance Support Team,\n\nI would like to request the permanent deletion of my account and all associated data.\n\nHere are my details:\n\n- Full Name: [Your Full Name]\n- Registration Number: [Your Registration Number]\n- Registered Email: [Your Registered Email]\n- Username: [Your Username]\n- Reason for Deletion: [Your Reason]\n\nI understand that this action is permanent and all my data will be erased.\n\nThank you,\n[Your Full Name]`
  );
  const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;

  return (
    <div className="min-h-screen pt-28 pb-20 px-4 sm:px-6 lg:px-8">
      {/* ── Page Header ── */}
      <motion.div
        variants={fadeInUp}
        initial="hidden"
        animate="visible"
        custom={0}
        className="text-center max-w-2xl mx-auto mb-14"
      >
        <motion.div
          className="inline-flex items-center justify-center w-20 h-20 rounded-3xl mb-6 mx-auto"
          style={{
            background: 'linear-gradient(135deg, #ef4444, #b91c1c)',
            boxShadow: '0 16px 40px rgba(239, 68, 68, 0.35)',
          }}
          whileHover={{ scale: 1.08, rotate: -4 }}
          transition={{ type: 'spring', stiffness: 300 }}
        >
          <Trash2 className="w-10 h-10 text-white" />
        </motion.div>

        <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 bg-gradient-to-r from-red-500 to-rose-400 bg-clip-text text-transparent">
          Delete Account
        </h1>
        <p className="text-lg text-[rgb(var(--text-secondary))] leading-relaxed">
          We're sorry to see you go. To comply with Google Play Store data policies, you can
          request the complete removal of your account and all associated data by sending us an
          email.
        </p>
      </motion.div>

      <div className="max-w-3xl mx-auto space-y-8">

        {/* ── Warning Banner ── */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={1}
          className="glass rounded-2xl p-6 border border-red-500/30"
          style={{ background: 'rgba(239,68,68,0.06)' }}
        >
          <div className="flex items-start gap-4">
            <div className="flex-shrink-0 mt-0.5">
              <ShieldAlert className="w-7 h-7 text-red-500" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-red-500 mb-3 flex items-center gap-2">
                <AlertTriangle className="w-5 h-5" />
                Before You Proceed — What Gets Deleted
              </h2>
              <ul className="space-y-2">
                {warnings.map((w, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-[rgb(var(--text-secondary))]">
                    <span className="w-1.5 h-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                    {w}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.div>

        {/* ── Step-by-step Instructions ── */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={2}
          className="glass rounded-2xl p-6 sm:p-8"
        >
          <div className="flex items-center gap-3 mb-6">
            <div
              className="p-2.5 rounded-xl"
              style={{ background: 'rgba(var(--accent-color), 0.15)' }}
            >
              <Info className="w-5 h-5 text-[rgb(var(--accent-color))]" />
            </div>
            <h2 className="text-xl font-bold text-[rgb(var(--text-primary))]">
              What to Write in Your Email
            </h2>
          </div>

          <p className="text-sm text-[rgb(var(--text-secondary))] mb-6 leading-relaxed">
            Click the button below to open a pre-filled email in your mail app. Make sure to fill
            in each of the following details clearly so we can process your request promptly:
          </p>

          <div className="space-y-4">
            {steps.map((step, i) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={i}
                  variants={fadeInUp}
                  initial="hidden"
                  animate="visible"
                  custom={2.5 + i * 0.15}
                  className="flex items-start gap-4 p-4 rounded-xl"
                  style={{ background: 'rgba(var(--bg-tertiary), 0.5)' }}
                >
                  <div
                    className="flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center font-bold text-sm text-white"
                    style={{ background: 'linear-gradient(135deg,#3b82f6,#8b5cf6)' }}
                  >
                    {i + 1}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <Icon className="w-4 h-4 text-[rgb(var(--accent-color))]" />
                      <span className="font-semibold text-sm text-[rgb(var(--text-primary))]">
                        {step.title}
                      </span>
                    </div>
                    <p className="text-xs text-[rgb(var(--text-secondary))] leading-relaxed">
                      {step.description}
                    </p>
                    <p className="text-xs mt-1 font-mono text-[rgb(var(--accent-color))] opacity-80">
                      {step.example}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>

        {/* ── Email Sample Preview ── */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={5}
          className="glass rounded-2xl p-6 sm:p-8"
        >
          <div className="flex items-center gap-3 mb-5">
            <div
              className="p-2.5 rounded-xl"
              style={{ background: 'rgba(var(--accent-color), 0.15)' }}
            >
              <FileText className="w-5 h-5 text-[rgb(var(--accent-color))]" />
            </div>
            <h2 className="text-xl font-bold text-[rgb(var(--text-primary))]">
              Sample Email Template
            </h2>
          </div>

          <div
            className="rounded-xl p-5 text-sm font-mono leading-relaxed text-[rgb(var(--text-secondary))] border"
            style={{
              background: 'rgba(var(--bg-tertiary), 0.6)',
              borderColor: 'rgba(var(--border-color), 0.4)',
            }}
          >
            <p className="mb-1">
              <span className="text-[rgb(var(--accent-color))]">To:</span> {email}
            </p>
            <p className="mb-1">
              <span className="text-[rgb(var(--accent-color))]">Subject:</span> Account Deletion
              Request — NGO Attendance App
            </p>
            <div
              className="mt-3 pt-3 border-t"
              style={{ borderColor: 'rgba(var(--border-color), 0.4)' }}
            >
              <p>Hello NGO Attendance Support Team,</p>
              <br />
              <p>I would like to request the permanent deletion of my account and all associated data.</p>
              <br />
              <p>Here are my details:</p>
              <ul className="list-none mt-2 space-y-1 pl-2">
                <li>
                  <span className="text-blue-400">Full Name:</span>{' '}
                  <span className="text-rose-400">[Your Full Name]</span>
                </li>
                <li>
                  <span className="text-blue-400">Registration Number:</span>{' '}
                  <span className="text-rose-400">[Your Reg. Number]</span>
                </li>
                <li>
                  <span className="text-blue-400">Registered Email:</span>{' '}
                  <span className="text-rose-400">[Your Email]</span>
                </li>
                <li>
                  <span className="text-blue-400">Username:</span>{' '}
                  <span className="text-rose-400">[Your Username]</span>
                </li>
                <li>
                  <span className="text-blue-400">Reason:</span>{' '}
                  <span className="text-rose-400">[Your Reason]</span>
                </li>
              </ul>
              <br />
              <p>I understand this action is permanent.</p>
              <br />
              <p>Thank you,</p>
              <p className="text-rose-400">[Your Full Name]</p>
            </div>
          </div>
        </motion.div>

        {/* ── CTA Button ── */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={6}
          className="glass rounded-2xl p-6 sm:p-8 text-center"
        >
          <div className="flex items-center justify-center gap-2 mb-3">
            <CheckCircle className="w-5 h-5 text-green-500" />
            <p className="text-sm font-medium text-[rgb(var(--text-secondary))]">
              Your email client will open with all fields pre-filled. Just fill in your details and hit Send.
            </p>
          </div>

          <motion.a
            href={mailtoLink}
            id="delete-account-btn"
            className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl text-white font-bold text-base sm:text-lg shadow-2xl focus-glow"
            style={{
              background: 'linear-gradient(135deg, #ef4444, #b91c1c)',
              boxShadow: '0 16px 40px rgba(239,68,68,0.4)',
            }}
            whileHover={{
              scale: 1.05,
              boxShadow: '0 24px 55px rgba(239,68,68,0.6)',
              y: -3,
            }}
            whileTap={{ scale: 0.97 }}
            transition={{ type: 'spring', stiffness: 300, damping: 20 }}
          >
            <Mail className="w-6 h-6" />
            Send Account Deletion Request
          </motion.a>

          <p className="mt-4 text-xs text-[rgb(var(--text-tertiary))]">
            This will open your default email app addressed to{' '}
            <span className="font-mono text-[rgb(var(--accent-color))]">{email}</span>
          </p>
        </motion.div>

        {/* ── Processing Time Note ── */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          animate="visible"
          custom={7}
          className="glass rounded-2xl p-5 flex items-start gap-4"
          style={{ background: 'rgba(59,130,246,0.05)', borderColor: 'rgba(59,130,246,0.25)' }}
        >
          <Info className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-semibold text-blue-400 mb-1">Processing Time</p>
            <p className="text-xs text-[rgb(var(--text-secondary))] leading-relaxed">
              Once we receive your request, our team will verify your identity and process the
              account deletion within <strong>7–10 business days</strong>. You will receive a
              confirmation email once your data has been permanently removed.
            </p>
          </div>
        </motion.div>

      </div>
    </div>
  );
};
