import { useState, useMemo, MouseEvent } from 'react';
import { Search, ExternalLink, Briefcase, Building2, Sparkles, Cpu, Code, Wallet, Copy, Check } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { COMPANIES, Company } from './constants';

export default function App() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Big Tech', 'AI', 'Fintech', 'Software', 'Hardware'];

  const filteredCompanies = useMemo(() => {
    return COMPANIES.filter((company) => {
      const matchesSearch = company.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        company.description.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === 'All' || company.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case 'Big Tech': return <Building2 className="w-4 h-4" />;
      case 'AI': return <Sparkles className="w-4 h-4" />;
      case 'Hardware': return <Cpu className="w-4 h-4" />;
      case 'Software': return <Code className="w-4 h-4" />;
      case 'Fintech': return <Wallet className="w-4 h-4" />;
      default: return null;
    }
  };

  return (
    <div className="min-h-screen bg-[#f8fafc] text-slate-900 font-sans selection:bg-blue-100">
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="bg-blue-600 p-2 rounded-xl">
              <Briefcase className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-xl font-bold tracking-tight text-slate-900">TechCareers</h1>
          </div>

          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search companies or roles..."
              className="w-full pl-10 pr-4 py-2 bg-slate-100 border-none rounded-full text-sm focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all outline-none"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Hero Section */}
        <div className="mb-12 text-center sm:text-left">
          <h2 className="text-4xl sm:text-5xl font-extrabold text-slate-900 mb-4 tracking-tight">
            Find your next <span className="text-blue-600">big move</span>.
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl">
            Explore the career pages of the world's most innovative technology and AI companies. 
            Your dream role is just one click away.
          </p>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all flex items-center gap-2 ${
                activeCategory === category
                  ? 'bg-slate-900 text-white shadow-lg shadow-slate-200'
                  : 'bg-white text-slate-600 hover:bg-slate-50 border border-slate-200'
              }`}
            >
              {getCategoryIcon(category)}
              {category}
            </button>
          ))}
        </div>

        {/* Company Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredCompanies.map((company) => (
              <CompanyCard key={company.id} company={company} />
            ))}
          </AnimatePresence>
        </div>

        {/* Empty State */}
        {filteredCompanies.length === 0 && (
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20"
          >
            <div className="bg-slate-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="w-8 h-8 text-slate-400" />
            </div>
            <h3 className="text-lg font-semibold text-slate-900">No companies found</h3>
            <p className="text-slate-500">Try adjusting your search or category filters.</p>
            <button 
              onClick={() => { setSearchQuery(''); setActiveCategory('All'); }}
              className="mt-4 text-blue-600 font-medium hover:underline"
            >
              Clear all filters
            </button>
          </motion.div>
        )}
      </main>

      <footer className="border-t border-slate-200 mt-20 py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} TechCareers Directory. All rights reserved.
          </p>
          <p className="text-slate-400 text-xs mt-2">
            Connecting talent with innovation.
          </p>
        </div>
      </footer>
    </div>
  );
}

interface CompanyCardProps {
  company: Company;
  key?: string | number;
}

function CompanyCard({ company }: CompanyCardProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e: MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      await navigator.clipboard.writeText(company.careersUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.2 }}
      className="group bg-white rounded-2xl border border-slate-200 p-6 hover:border-blue-200 hover:shadow-xl hover:shadow-blue-500/5 transition-all flex flex-col h-full"
    >
      <div className="flex items-start justify-between mb-6">
        <div className="w-12 h-12 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-center p-2 overflow-hidden">
          <img 
            src={company.logo} 
            alt={`${company.name} logo`} 
            className="max-w-full max-h-full object-contain grayscale group-hover:grayscale-0 transition-all"
            referrerPolicy="no-referrer"
          />
        </div>
        <span className="text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-slate-100 text-slate-500 rounded-md">
          {company.category}
        </span>
      </div>

      <h3 className="text-xl font-bold text-slate-900 mb-2 group-hover:text-blue-600 transition-colors">
        {company.name}
      </h3>
      
      <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
        {company.description}
      </p>

      <div className="flex gap-2">
        <a
          href={company.careersUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 flex-1 py-3 px-4 bg-slate-900 text-white rounded-xl font-semibold text-sm hover:bg-blue-600 transition-all active:scale-[0.98]"
        >
          View Careers
          <ExternalLink className="w-4 h-4" />
        </a>
        <button
          onClick={handleCopy}
          title="Copy career link"
          className={`inline-flex items-center justify-center w-12 h-12 rounded-xl border transition-all active:scale-[0.95] ${
            copied 
              ? 'bg-green-50 border-green-200 text-green-600' 
              : 'bg-white border-slate-200 text-slate-400 hover:text-slate-600 hover:border-slate-300'
          }`}
        >
          {copied ? <Check className="w-5 h-5" /> : <Copy className="w-5 h-5" />}
        </button>
      </div>
    </motion.div>
  );
}
